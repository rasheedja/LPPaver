{-# LANGUAGE NamedFieldPuns #-}

module Main where

import Prelude

import CoeffSearch
import qualified Data.Map as Map

main :: IO ()
main = do
    pop <- optimise defaultConfig
    mapM print pop
    pure ()
    
