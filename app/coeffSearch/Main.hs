{-# LANGUAGE NamedFieldPuns #-}

module Main where

import Prelude

import CoeffSearch

main :: IO ()
main = do
    (pop, evalTable) <- optimise defaultConfig
    mapM_ print pop
    
