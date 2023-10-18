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

type Coeffs = [Int]

type Population = [Coeffs]

data Config = Config {
  populationSize :: Int
}

defaultConfig = Config {
  populationSize = 200
}

type EvalTable = Map.Map Coeffs (Maybe Double) 

optimise :: Config -> IO EvalTable
optimise config = do
  let initEvalTable = Map.empty
  (pop, evalTable) <- initPopulation initEvalTable config
  pure evalTable

initPopulation :: EvalTable -> Config -> IO (Population, EvalTable)
initPopulation evalTable config@(Config { populationSize }) =
  recursive populationSize [] evalTable
  where
  recursive n acc evalTable
    | n == 0 = pure (acc, evalTable)
    | otherwise = do
      coeffs <- getRandomCoeffs
      score <- evaluateCoeffs coeffs
      recursive (n - 1) (coeffs : acc) (Map.insert coeffs score evalTable)

getRandomCoeffs :: IO Coeffs
getRandomCoeffs = do
  mapM (\_ -> randomRIO (-100, 100)) [1..9]

evaluateCoeffs :: Coeffs -> IO (Maybe Double)
evaluateCoeffs coeffs = 
  do
    timeStart <- getTime Monotonic
    r@(_, Just hout, _, ph) <- createProcess (shell command) { std_out = CreatePipe }
    maybeResult <- timeout (6 * second) $ do
      waitForProcess ph
      text <- hGetContents hout
      pure text
    timeEnd <- getTime Monotonic
    case maybeResult of
      Nothing -> do
        cleanupProcess r
        pure Nothing
      Just text | isSuccessText text -> 
        pure $ Just $ fromInteger ((toNanoSecs $ timeEnd - timeStart) `div` 1000) / 1000000
      _ -> do
        pure Nothing
    where
    second = 1000000
    formattedCoeffs = reverse $ drop 1 $ reverse $ drop 1 $ show coeffs
    command = "lppaver -s " ++ formattedCoeffs ++ " -f 2D -a"
    isSuccessText t = "unsat\nunsat\nunsat\nunsat\n" `isPrefixOf` t
  