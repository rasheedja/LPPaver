{-# LANGUAGE NamedFieldPuns #-}
module CoeffSearch (optimise, defaultConfig) where

import Prelude

import System.Process
import System.Clock
import Control.Concurrent (threadDelay)
import System.Timeout (timeout)
import qualified Data.Map as Map
import Data.List (isPrefixOf)
import System.Random (Random(random), randomRIO)
import GHC.IO.Handle (hGetContents)
import Text.Printf (printf)

type Coeffs = [Int]

type Score = Double
type EvalTable = Map.Map Coeffs Score

type Individual = (Coeffs, Score)

type Population = [Individual]

data Config = Config {
  populationSize :: Integer,
  generations :: Integer
}

defaultConfig = Config {
  populationSize = 4,
  generations = 10
}

optimise :: Config -> IO Population
optimise config@(Config { generations }) = do
  let initEvalTable = Map.empty
  (pop, evalTable) <- initPopulation initEvalTable config
  (pop2, evalTable2) <- runGenerations config generations evalTable pop
  pure pop2

initPopulation :: EvalTable -> Config -> IO (Population, EvalTable)
initPopulation evalTable config@(Config { populationSize }) =
  recursive populationSize [] evalTable
  where
  recursive n accPop evalTable
    | n == 0 = pure (accPop, evalTable)
    | otherwise = do
      coeffs <- getRandomCoeffs
      (score, evalTable2) <- evaluateCoeffsMem evalTable coeffs
      recursive (n - 1) ((coeffs, score) : accPop) evalTable2

getRandomCoeffs :: IO Coeffs
getRandomCoeffs = do
  mapM (\_ -> randomRIO (-100, 100)) [1..5]

runGenerations :: Config -> Integer -> EvalTable -> Population -> IO (Population, EvalTable)
runGenerations config n evalTable pop 
  | n == 0 = pure (pop, evalTable)
  | otherwise = do
    (pop2, evalTable2) <- runGeneration config evalTable pop
    runGenerations config (n-1) evalTable2 pop2

runGeneration :: Config -> EvalTable -> Population -> IO (Population, EvalTable)
runGeneration config evalTable pop = do
  pure (pop, evalTable)

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

  