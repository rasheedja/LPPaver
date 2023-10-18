{-# LANGUAGE NamedFieldPuns #-}

module Main where

import Prelude

import CoeffSearch
import qualified Data.Map as Map
import Text.Printf (printf)

main :: IO ()
main = do
    (pop, evalTable) <- optimise defaultConfig
    mapM print pop
    appendFile "2D.csv" (formatAsCsv evalTable)
    where
    formatAsCsv evalTable =
        unlines $ map formatRow $ Map.toList evalTable
    formatRow :: Individual -> String
    formatRow (coeffs, score) =
        printf "%s,%f" (drop 1 $ reverse $ drop 1 $ reverse $ show coeffs) score
    
