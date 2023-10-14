{-|
Module      : LPPaver.Constraint.Util
Description : Utility functions for the 'Constraint' type
Copyright   : (c) Junaid Rasheed, 2021-2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining useful utility functions for the 'Constraint' data type.
-}
{-# LANGUAGE LambdaCase #-}

module LPPaver.Constraint.Util where

import MixedTypesNumPrelude
import LPPaver.Constraint.Type
import Data.List (nub)
import qualified Linear.Simplex.Types as LT
import qualified Data.Map as M
import Data.Maybe
import Linear.Simplex.Types (PolyConstraint)

-- | Get the LHS of a 'Constraint'
constraintLeftSide :: Constraint -> [(String, Rational)]
constraintLeftSide (GEQ lhs _) = lhs
constraintLeftSide (LEQ lhs _) = lhs

-- | Get the LHS of a 'Constraint'
constraintRightSide :: Constraint -> Rational
constraintRightSide (GEQ _ rhs) = rhs
constraintRightSide (LEQ _ rhs) = rhs

-- | Get a list of all variables in a list of 'Constraint's
constraintVars :: [Constraint] -> [String]
constraintVars cs = nub $ aux cs
  where
    aux :: [Constraint] -> [String]
    aux [] = []
    aux (x : xs) = map fst (constraintLeftSide x) ++ aux xs

-- | Convert a list of 'Constraint's into a list of 'LT.PolyConstraint's.
-- The function returns a pair with the first item being a list of 'LT.PolyConstraint's and the second item being a mapping of 'String' variables (from 'Constraint's) to 'Integer' variables (for 'LT.PolyConstraint's).
constraintsToSimplexConstraints :: [Constraint] -> ([LT.PolyConstraint], M.Map String Int)
constraintsToSimplexConstraints constraints =
  (
    map
    (\case
      GEQ varsWithCoeffs rhs -> LT.GEQ (M.fromList (map (\(stringVar, coeff) -> (int (fromJust (M.lookup stringVar stringIntVarMap)), coeff)) varsWithCoeffs)) rhs
      LEQ varsWithCoeffs rhs -> LT.LEQ (M.fromList (map (\(stringVar, coeff) -> (int (fromJust (M.lookup stringVar stringIntVarMap)), coeff)) varsWithCoeffs)) rhs
    )
    constraints,
    stringIntVarMap
  )
  where
    stringVars = constraintVars constraints
    stringIntVarMap = M.fromList $ zip stringVars (map fromIntegral [1..])
