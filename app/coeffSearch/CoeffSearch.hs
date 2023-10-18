{-# LANGUAGE NamedFieldPuns #-}
module CoeffSearch (optimise, defaultConfig, Coeffs, Score, Individual) where

import Prelude
import MixedTypesNumPrelude (ifThenElse)

import System.Process
import System.Clock
import Control.Concurrent (threadDelay)
import System.Timeout (timeout)
import Data.List (isPrefixOf, sortOn, foldl1', find)
import System.Random (Random(random), randomRIO, randomIO)
import GHC.IO.Handle (hGetContents)
import Text.Printf (printf)
import qualified Data.Map as Map
import qualified Data.Set as Set
import qualified Data.IntSet as IntSet

type Coeffs = [Int]

type Score = Double
type EvalTable = Map.Map Coeffs Score

type Individual = (Coeffs, Score)

type Population = [Individual]

sortPop :: Population -> Population
sortPop = sortOn snd

data Config = Config {
  populationSize :: Int,
  generations :: Int,
  mutateIndividualProb :: Float,
  mutateNumberProb :: Float,
  mutateNumberMax :: Int,
  parentsRatio :: Float
}

defaultConfig = Config {
  populationSize = 10,
  generations = 10,
  mutateIndividualProb = 0.1,
  mutateNumberProb = 0.2,
  mutateNumberMax = 5,
  parentsRatio = 0.5
}

random01 :: IO Float
random01 = randomRIO (0,1 :: Float)

optimise :: Config -> IO (Population, EvalTable)
optimise config@(Config { generations }) = do
  let initEvalTable = Map.empty
  (pop, evalTable) <- initPopulation initEvalTable config
  (pop2, evalTable2) <- runGenerations config generations evalTable pop
  pure (pop2, evalTable2)

initPopulation :: EvalTable -> Config -> IO (Population, EvalTable)
initPopulation evalTable config@(Config { populationSize }) =
  recursive populationSize [] evalTable
  where
  recursive n accPop evalTable
    | n == 0 = pure (sortPop accPop, evalTable)
    | otherwise = do
      coeffs <- getRandomCoeffs
      (score, evalTable2) <- evaluateCoeffsMem evalTable coeffs
      recursive (n - 1) ((coeffs, score) : accPop) evalTable2

getRandomCoeffs :: IO Coeffs
getRandomCoeffs = do
  mapM (\_ -> randomRIO (-100, 100)) [1..5]

runGenerations :: Config -> Int -> EvalTable -> Population -> IO (Population, EvalTable)
runGenerations config n evalTable pop 
  | n == 0 = pure (pop, evalTable)
  | otherwise = do
    (pop2, evalTable2) <- runGeneration config evalTable pop
    runGenerations config (n-1) evalTable2 pop2

runGeneration :: Config -> EvalTable -> Population -> IO (Population, EvalTable)
runGeneration config@(Config { populationSize }) evalTable pop = do
  (mutated, evalTable2) <- mutatePop config evalTable pop
  parents <- selectParents config pop
  putStrLn $ printf "parents =\n%s" (unlines $ map show parents)
  (children, evalTable3) <- runCrossOvers config evalTable2 parents
  putStrLn $ printf "children =\n%s" (unlines $ map show children)
  pure (replaceWithinPop pop (children ++ mutated), evalTable3)

mutatePop :: Config -> EvalTable -> Population -> IO (Population, EvalTable)
mutatePop config@(Config { mutateIndividualProb, mutateNumberProb, mutateNumberMax }) evalTable pop = recurse evalTable pop []
  where
  recurse evalTable [] acc = pure (acc, evalTable)
  recurse evalTable (indiv : rest) acc = do
    r <- random01
    if r >= mutateIndividualProb
      then do -- not mutate
        recurse evalTable rest acc
      else do -- mutate
        (mutated, evalTable2) <- mutateIndividual indiv evalTable
        recurse evalTable2 rest (mutated : acc)
  mutateIndividual indiv@(coeffs, _) evalTable = do
    coeffs2 <- mapM mutateCoeff coeffs
    (score, evalTable2) <- evaluateCoeffsMem evalTable coeffs2
    putStrLn $ printf "mutated: coeffs = %s\n      to coeffs = %s" (show coeffs) (show coeffs2)
    pure ((coeffs2, score), evalTable2)
  mutateCoeff coeff = do
    r <- random01
    if r >= mutateNumberProb
      then pure coeff -- not mutate
      else do
        delta <- randomRIO (- mutateNumberMax, mutateNumberMax)
        pure (coeff + delta)

selectParents :: Config -> Population -> IO Population
selectParents config@(Config {parentsRatio}) pop = do
  indices <- sequence $ replicate (2*popSize) (randomRIO (0, popSize-1))
  pure $ map (pop !!) $ take numberOfParents $ removeRepetitions indices
  where
  numberOfParents = 2 * (floor ((parentsRatio/2) * (fromIntegral popSize)))
  popSize = length pop

removeRepetitions :: [Int] -> [Int]
removeRepetitions = recurse IntSet.empty
  where
  recurse seenBefore [] = []
  recurse seenBefore (i : rest) 
    | i `IntSet.member` seenBefore = recurse seenBefore rest
    | otherwise = i : (recurse (IntSet.insert i seenBefore) rest)

runCrossOvers :: Config -> EvalTable -> Population -> IO (Population, EvalTable)
runCrossOvers config@(Config {}) evalTable0 pop = recurse pop [] evalTable0
  where
  recurse [] acc evalTable = pure (acc, evalTable)
  recurse [_] acc evalTable = pure (acc, evalTable)
  recurse ((coeffs1, _) : (coeffs2, _) : rest) acc evalTable = do
    decisions <- sequence (replicate (length coeffs) randomIO)
    let coeffs = zipWith3 ifThenElse (decisions :: [Bool]) coeffs1 coeffs2
    (score, evalTable2) <- evaluateCoeffsMem evalTable coeffs
    recurse rest ((coeffs, score) : acc) evalTable2
    where
    coeffs = coeffs1

replaceWithinPop :: Population -> Population -> Population
replaceWithinPop pop0 popToAdd = foldl addOne pop0 popToAdd
  where
  addOne pop indiv =
    case find (\(cf, _) -> cf == fst indiv) pop of
      Nothing -> sortPop $ [indiv] ++ (take (length pop - 1) pop)
      _ -> pop -- this one is already in the population

evaluateCoeffsMem :: EvalTable -> Coeffs -> IO (Score, EvalTable)
evaluateCoeffsMem table coeffs =
  case Map.lookup coeffs table of
    Just score -> do
      putStrLn $ printf "score cache hit for coeffs = %s" (show coeffs)
      pure (score, table)
    _ -> do
      score <- evaluateCoeffs coeffs
      putStrLn $ printf "score = %f for coeffs = %s" score (show coeffs)
      pure (score, Map.insert coeffs score table)

evaluateCoeffs :: Coeffs -> IO Score
evaluateCoeffs coeffs = 
  do
    timeStart <- getTime Monotonic
    r@(_, Just hout, _, ph) <- createProcess (shell command) { std_out = CreatePipe }
    maybeResult <- timeout timeoutDuration $ do
      waitForProcess ph
      text <- hGetContents hout
      pure text
    timeEnd <- getTime Monotonic
    case maybeResult of
      Nothing -> do
        cleanupProcess r
        pure $ totalFailPenalty
      Just text -> 
        pure $ (failPenalty text) + (nanosecsToSecs $ toNanoSecs $ timeEnd - timeStart)
    where
    timeoutDuration = 6 * second
    second = 1000000
    nanosecsToSecs :: Integer -> Double
    nanosecsToSecs nanosecs = fromInteger (nanosecs `div` 1000) / 1000000

    formattedCoeffs = reverse $ drop 1 $ reverse $ drop 1 $ show coeffs
    command = "lppaver -s " ++ formattedCoeffs ++ " -f 2D -a"

    numberOfFails t = numberOfProblems - (numberOfUnsats t)
    numberOfUnsats t = length $ filter (== "unsat") (lines t)
    numberOfProblems = 4 :: Int
    failPenalty t = (fromIntegral $ numberOfFails t) * 20 :: Double
    totalFailPenalty = 100 :: Double

  