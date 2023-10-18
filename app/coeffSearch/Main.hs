{-# LANGUAGE NamedFieldPuns #-}

module Main where

import Prelude

import CoeffSearch
import qualified Data.Map as Map

main :: IO ()
main = do
    table <- optimise defaultConfig
    mapM_ print $ Map.toList table
    
