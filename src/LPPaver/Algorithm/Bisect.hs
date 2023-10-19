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
import Data.List (nub, sortBy, partition, sortOn)
import PropaFP.Parsers.Smt (findVariablesInExpressions)
import qualified Numeric.CollectErrors as CN
import qualified PropaFP.Expression as E
import PropaFP.VarMap
import qualified AERN2.Linear.Vector.Type as V
import AERN2.MP (MPBall, IsBall (centre, radius))
import AERN2.BoxFun.Box (getEndpoints, width)
import AERN2.Util.Util (upperBound)
import AERN2.MP.Float (infinity)
import AERN2.MP.Dyadic (dyadic)

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
shouldBisectWithCoeffs coeffs typedVarMap filteredCornerRangesWithDerivatives = False -- TODO

{-|
  Splitting strategy for 2D problems given by a bunch of numeric coefficients.

  The strategy sets a desired 2D box aspect ratio based on the inputs:
  - fn 1 slope in variable 1
  - fn 1 slope in variable 2
  - fn 1 direction uncertainty in variable 1
  - fn 1 direction uncertainty in variable 2

  Fn 1 is the function which seems to be nearest 0 with some certainty.

  The given coefficients are used within a linear form over the above inputs.  The first coeff is the constant.
-}
bisectTypedVarMapWithCoeffs :: [Double] -> (TypedVarMap -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))] -> (TypedVarMap,TypedVarMap))
bisectTypedVarMapWithCoeffs linCoeffs typedVarMap filteredCornerRangesWithDerivatives = bisectTypedVar typedVarMap selectedVar
  where
  selectedVar 
    | targetAspectRatio * w1 > w2 = var1 -- w1 is too large, split var1
    | otherwise = var2

  targetAspectRatio = getAspectRatio fnValue

  fnValue = sum $ zipWith (*) linCoeffs smallestFnCharacteristics

  ([var1, var2], vmWidths@[w1, w2]) = unzip $ map getVarWidth typedVarMap
  getVarWidth (TypedVar (var, (l,r)) _) = (var, (double r)-l)

  -- fnCharacteristics2 = flip trace fnCharacteristics $
  --     "vmWidths = " ++ show vmWidths 
  --     ++ "; fnCharacteristics = " ++ show fnCharacteristics
  --     ++ "; filteredCornerRangesWithDerivatives = " ++ show filteredCornerRangesWithDerivatives

  smallestFnCharacteristics
    | null fnCharacteristicsSorted = []
    | otherwise = head fnCharacteristicsSorted
  fnCharacteristicsSorted = map snd $ sortOn fst fnCharacteristics
  fnCharacteristics = map getFnValues filteredCornerRangesWithDerivatives
  getFnValues (val1CNMP, val2CNMP, derivMPvector) = (valU, [double 1] ++ derivsD ++ derivsUncertaintyD)
    where
    -- how close is the function is to 0? (assuming it is above 0)
    valU = min val1U val2U
    val1U = centreD (double infinity) (upperBound val1CNMP)
    val2U = centreD (double infinity) (upperBound val2CNMP)

    derivsCNMP = V.toList derivMPvector
    derivsD = map (centreD (double 0)) derivsCNMP
    derivsUncertaintyD = map radiusD derivsCNMP

maxAspectRatio = double 10

getAspectRatio :: Double -> Double
getAspectRatio t
  | t < 0 = 1/(positiveRatio (- t))
  | otherwise = positiveRatio t
  where
  positiveRatio :: Double -> Double
  positiveRatio t = (maxAspectRatio - 1)*((logistic (t/10))*2 - 1) + 1

logistic :: Double -> Double
logistic x = 1 / (1 + (exp (- x)))

centreD :: Double -> CN MPBall -> Double
centreD badD cnmp = case CN.toEither cnmp of
    Right mp -> double $ AERN2.MP.centre mp
    _ -> badD

radiusD :: CN MPBall -> Double
radiusD cnmp = case CN.toEither cnmp of
  Right mp -> double $ dyadic $ radius mp
  _ -> double infinity

