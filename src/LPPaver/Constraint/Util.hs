{-# LANGUAGE LambdaCase #-}

module LPPaver.Constraint.Util where

import MixedTypesNumPrelude
import LPPaver.Constraint.Type
import Data.List (nub)
import qualified Linear.Simplex.Types as LT
import qualified Data.Map as M
import Data.Maybe

constraintLeftSide :: Constraint -> [(String, Rational)]
constraintLeftSide (GEQ lhs _) = lhs
constraintLeftSide (LEQ lhs _) = lhs

constraintVars :: [Constraint] -> [String]
constraintVars cs = nub $ aux cs
  where
    aux :: [Constraint] -> [String]
    aux [] = []
    aux (x : xs) = map fst (constraintLeftSide x) ++ aux xs

constraintsToSimplexConstraints :: [Constraint] -> ([LT.PolyConstraint], M.Map String Integer)
constraintsToSimplexConstraints constraints =
  (
    map
    (\case
      GEQ varsWithCoeffs rhs -> LT.GEQ (map (\(stringVar, coeff) -> (fromJust (M.lookup stringVar stringIntVarMap), coeff)) varsWithCoeffs) rhs
      LEQ varsWithCoeffs rhs -> LT.LEQ (map (\(stringVar, coeff) -> (fromJust (M.lookup stringVar stringIntVarMap), coeff)) varsWithCoeffs) rhs
    )
    constraints,
    stringIntVarMap
  )
  where
    stringVars = constraintVars constraints
    stringIntVarMap = M.fromList $ zip stringVars [1..]
