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
import AERN2.MP (MPBall, IsBall (centre))
import AERN2.BoxFun.Box (getEndpoints, width)

-- import Debug.Trace (trace)
trace a b = b

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

shouldBisectWithCoeffs :: [Double] -> (TypedVarMap -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))] -> Bool)
shouldBisectWithCoeffs coeffs typedVarMap filteredCornerRangesWithDerivatives = True -- TODO

{-|
  Splitting strategy for 2D problems given by a bunch of numeric coefficients.

  The coefficients are for a linear form aligned to the following variables:
  - the sum of widths
  - width of variable 1
  - width of variable 2
  - fn 1 value in corner 1
  - fn 1 centrepoint of difference in variable 1
  - fn 1 centrepoint of difference in variable 2
  - fn 2 value in corner 1
  - fn 2 centrepoint of difference in variable 1
  - fn 2 centrepoint of difference in variable 2
-}
bisectTypedVarMapWithCoeffs :: [Double] -> (TypedVarMap -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))] -> (TypedVarMap,TypedVarMap))
bisectTypedVarMapWithCoeffs linCoeffs typedVarMap filteredCornerRangesWithDerivatives = bisectTypedVar typedVarMap selectedVar
  where
  selectedVar 
    | fnValue < 0 = var1
    | otherwise = var2
  fnValue = sum $ zipWith (*) linCoeffs $ [sum vmWidths] ++ vmWidths ++ fnCharacteristics2

  ([var1, var2], vmWidths) = unzip $ map getVarWidth typedVarMap
  getVarWidth (TypedVar (var, (l,r)) _) = (var, (double r)-l)

  fnCharacteristics2 = flip trace fnCharacteristics $
      "vmWidths = " ++ show vmWidths 
      ++ "; fnCharacteristics = " ++ show fnCharacteristics
      ++ "; filteredCornerRangesWithDerivatives = " ++ show filteredCornerRangesWithDerivatives
  fnCharacteristics = concat $ map getFnValues filteredCornerRangesWithDerivatives
  getFnValues (valCNMP, _, derivMPvector) = [valD] ++ (zipWith (*) derivs vmWidths)
    where
    valD = toDouble valCNMP
    derivs = map toDouble $ V.toList derivMPvector

toDouble :: CN MPBall -> Double
toDouble cnmp = case CN.toEither cnmp of
    Right mp -> double $ AERN2.MP.centre mp
    _ -> double 0


