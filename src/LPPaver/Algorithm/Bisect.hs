{-|
Module      : LPPaver.Algorithm.Util
Description : Utility functions for LPPaver.Algorithm modules
Copyright   : (c) Junaid Rasheed, 2021-2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining useful utility functions for the LPPaver.Algorithm modules
-}
module LPPaver.Algorithm.Bisect where

import MixedTypesNumPrelude
import qualified Prelude as P
import Data.List (nub, sortBy, partition)
import PropaFP.Parsers.Smt (findVariablesInExpressions)
import qualified Numeric.CollectErrors as CN
import qualified PropaFP.Expression as E
import PropaFP.VarMap
import qualified AERN2.Linear.Vector.Type as V
import AERN2.MP (MPBall)

-- TODO: Move to PropaFP
-- |Bisect the widest interval in a 'VarMap'
bisectWidestInterval :: VarMap -> (VarMap, VarMap)
bisectWidestInterval [] = error "Given empty box to bisect"
bisectWidestInterval vm = bisectVar vm widestVar
  where
    (widestVar, _) = widestInterval (tail vm) (head vm)

-- TODO: Move to PropaFP
-- |Bisect the widest interval in a 'TypedVarMap'
bisectWidestTypedInterval :: TypedVarMap -> (TypedVarMap, TypedVarMap)
bisectWidestTypedInterval [] = error "Given empty box to bisect"
bisectWidestTypedInterval vm = bisectTypedVar vm widestVar
  where
    (widestVar, _) = widestTypedInterval (tail vm) $ typedVarIntervalToVarInterval (head vm)

shouldBisectWithCoeffs :: [Rational] -> (TypedVarMap -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))] -> Bool)
shouldBisectWithCoeffs coeffs typedVarMap filteredCornerRangesWithDerivatives = True -- TODO

{-|
  Splitting strategy for 2D problems given by a bunch of numeric coefficients.

  The coefficients are for a linear form aligned to the following variables:
  - width of variable 1
  - width of variable 2
-}
bisectTypedVarMapWithCoeffs :: [Rational] -> (TypedVarMap -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))] -> (TypedVarMap,TypedVarMap))
bisectTypedVarMapWithCoeffs linCoeffs typedVarMap filteredCornerRangesWithDerivatives = bisectTypedVar typedVarMap selectedVar
  where
  selectedVar 
    | fnValue < 0 = var1
    | otherwise = var2
  fnValue = sum $ zipWith (*) linCoeffs $ vmWidths
  ([var1, var2], vmWidths) = unzip $ map getVarWidth typedVarMap
  getVarWidth (TypedVar (var, (l,r)) _) = (var, r-l)


