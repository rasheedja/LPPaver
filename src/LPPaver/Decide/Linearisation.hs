module LPPaver.Decide.Linearisation where

import MixedTypesNumPrelude
import qualified PropaFP.Expression as E
import PropaFP.VarMap
import AERN2.MP
import AERN2.MP.Precision
import AERN2.BoxFun.Type
import AERN2.BoxFun.Box
import qualified Data.PQueue.Prio.Max as Q
import Data.Maybe
import PropaFP.Translators.BoxFun
import Control.Parallel.Strategies
import Data.List
import qualified Data.Map as M
import Linear.Simplex.Simplex
import Linear.Simplex.Util
import qualified Linear.Simplex.Types as LT

import LPPaver.Decide.Util
import LPPaver.Constraint.Type
import LPPaver.Constraint.Util
import qualified AERN2.Linear.Vector.Type as V
import Data.Bifunctor

removeConjunctionUnsatAreaWithSimplex :: [(CN MPBall, CN MPBall, Box)] -> VarMap -> (Maybe Bool, Maybe VarMap)
removeConjunctionUnsatAreaWithSimplex cornerValuesWithDerivatives varMap =
  case mOptimizedVars of
    Just optimizedVars -> (Nothing, Just optimizedVars)
    Nothing            -> (Just False, Nothing)
  where
    (simplexSystem, stringIntVarMap) = constraintsToSimplexConstraints $ createConstraintsToRemoveConjunctionUnsatArea cornerValuesWithDerivatives varMap

    vars = map fst varMap

    mFeasibleSolution = findFeasibleSolution simplexSystem


    -- Uses objective var to extract optimized values for each variable
    extractSimplexResult :: Maybe (Integer, [(Integer, Rational)]) -> Rational
    extractSimplexResult maybeResult =
      case maybeResult of
        Just (optimizedIntVar, result) -> -- optimizedIntVar refers to the objective variable. We extract the value of the objective
                                          -- variable from the result
          case lookup optimizedIntVar result of
            Just optimizedVarResult -> optimizedVarResult
            Nothing -> error "Extracting simplex result after finding feasible solution resulted in an infeasible result. This should not happen."
        Nothing -> error "Could not optimize feasible system. This should not happen."

    mOptimizedVars =
      case mFeasibleSolution of
        Just (feasibleSystem, slackVars, artificialVars, objectiveVar) ->
          Just $
          map -- Optimize (minimize and maximize) all variables in the varMap
          (\var ->
            case M.lookup var stringIntVarMap of
              Just intVar ->
                case lookup var varMap of
                  Just (originalL, _) -> -- In the simplex system, the original lower bound of each var was shifted to 0. We undo this shift after optimization.
                    (
                      var,
                      (
                        originalL + extractSimplexResult (optimizeFeasibleSystem (LT.Min [(intVar, 1.0)]) feasibleSystem slackVars artificialVars objectiveVar),
                        originalL + extractSimplexResult (optimizeFeasibleSystem (LT.Max [(intVar, 1.0)]) feasibleSystem slackVars artificialVars objectiveVar)
                      )
                    )
                  Nothing -> error "Optimized var not found in original varMap. This should not happen."
              Nothing -> error "Integer version of var not found. This should not happen."
          )
          vars
        Nothing -> Nothing

findConjunctionSatAreaWithSimplex :: [(CN MPBall, CN MPBall, Box)] -> VarMap -> Bool -> Maybe VarMap
findConjunctionSatAreaWithSimplex cornerValuesWithDerivatives varMap isLeftCorner =
  case mFeasibleVars of
    Just newPoints ->
      Just
      $
      map
      (\var ->
        case M.lookup var stringIntVarMap of
          Just intVar ->
            case lookup var varMap of
              Just (originalL, _) -> -- In the simplex system, the original lower bound of each var was shifted to 0. We undo this shift after finding a feasible solution
                (
                  var,
                  let feasiblePoint = originalL + fromMaybe 0.0 (lookup intVar newPoints)
                  in (feasiblePoint, feasiblePoint)
                )
              Nothing -> error "Optimized var not found in original varMap. This should not happen."
          Nothing -> error "Integer version of var not found. This should not happen."
      )
      vars
    Nothing -> trace "no sat solution" Nothing
  where
    (simplexSystem, stringIntVarMap) = constraintsToSimplexConstraints $ createConstraintsToFindSatSolution cornerValuesWithDerivatives varMap isLeftCorner

    vars = map fst varMap

    mFeasibleSolution = findFeasibleSolution simplexSystem

    mFeasibleVars =
      case mFeasibleSolution of
        Just (feasibleSystem, _slackVars, _artificialVars, _objectiveVar) -> Just $ displayDictionaryResults feasibleSystem
        Nothing -> Nothing


createConstraintsToRemoveConjunctionUnsatArea :: [(CN MPBall, CN MPBall, Box)] -> VarMap -> [Constraint]
createConstraintsToRemoveConjunctionUnsatArea cornerValuesWithDerivatives varMap =
  domainConstraints ++ functionConstraints
  where
    vars = map fst varMap
    varsNewUpperBounds = map (\(_, (l, r)) -> r - l) varMap

    -- var >= varLower - varLower && var <= varUpper - varLower
    -- Since var >= 0 is assumed by the simplex method, var >= varLower - varLower is not needed
    domainConstraints =
      map
      (\(var, (varLower, varUpper)) ->
        LEQ [(var, 1.0)] $ varUpper - varLower
      )
      varMap

    -- The following constraints in this variable are...
    --  fn - (fnx1GradientR * x1) - .. - (fnxnGradientR * xn) <= fnLeftCorner + (fnx1GradientR * -x1L) + .. + (fnxnGradientR * -xnL)
    --  fn - (fnx1GradientL * x1) - .. - (fnxnGradientL * xn) <= fnRightCorner + (-fnx1GradientL * x1R) + .. + (-fnxnGradientL * xnR)
    -- and these are equivalent to...
    --  fn <= fnLeftCorner  + (fnx1GradientR  * (x1 - x1L)) + .. + (fnxnGradientR * (xn - xnL))
    --  fn <= fnRightCorner + (-fnx1GradientL * (x1R - x1)) + .. + (-fnxnGradientL * (xnR - xn))
    -- 
    functionConstraints =
      concatMap
      (\(fnInt, (fLeftRange, fRightRange, fPartialDerivatives)) ->
        let
          fNegatedPartialDerivativesLowerBounds = map (negate . fst . mpBallToRational) $ V.toList fPartialDerivatives
          fNegatedPartialDerivativesUpperBounds = map (negate . snd . mpBallToRational) $ V.toList fPartialDerivatives
          fLeftUpperBound = snd $ mpBallToRational fLeftRange
          fRightUpperBound = snd $ mpBallToRational fRightRange

          --FIXME: make this safe. Check if vars contain ^fSimplex[0-9]+$. If so, try ^fSimplex1[0-9]+$ or something
          fSimplexN = "fSimplex" ++ show fnInt
        in
          [
            -- f is definitely below this line from the left corner
            -- Multiplication with left corner and partial derivatives omitted, since left corner is zero
            LEQ ((fSimplexN, 1.0) : zip vars fNegatedPartialDerivativesUpperBounds)
              fLeftUpperBound,
            -- f is definitely below this line from the right corner
            LEQ ((fSimplexN, 1.0) : zip vars fNegatedPartialDerivativesLowerBounds)
              $ foldl add fRightUpperBound $ zipWith mul varsNewUpperBounds fNegatedPartialDerivativesLowerBounds
          ]
      )
      $
      zip
      [1..]
      cornerValuesWithDerivatives

    mpBallToRational :: CN MPBall -> (Rational, Rational)
    mpBallToRational = bimap rational rational . endpoints . reducePrecionIfInaccurate . unCN

createConstraintsToFindSatSolution :: [(CN MPBall, CN MPBall, Box)] -> VarMap -> Bool -> [Constraint]
createConstraintsToFindSatSolution cornerValuesWithDerivatives varMap isLeftCorner =
  domainConstraints ++ functionConstraints
  where
    vars = map fst varMap
    varsNewUpperBounds = map (\(_, (l, r)) -> r - l) varMap

    -- var >= varLower - varLower && var <= varUpper - varLower
    -- Since var >= 0 is assumed by the simplex method, var >= varLower - varLower is not needed
    domainConstraints =
      map
      (\(var, (varLower, varUpper)) ->
        LEQ [(var, 1.0)] $ varUpper - varLower
      )
      varMap

    -- The following constraints in this variable are...
    --  Left  corner: fn - (fnx1GradientL * x1) - .. - (fnxnGradientL * xn) <= fnLeftCorner  - (fnx1GradientL * x1L) - .. - (fnx1GradientL * x1L)
    --  Right corner: fn - (fnx1GradientR * x1) - .. - (fnxnGradientR * xn) <= fnRightCorner - (fnx1GradientR * x1R) - .. - (fnx1GradientR * x1R)
    -- and these are equivalent to...
    --  Left  corner: fn <= fnLeftCorner + (fnx1GradientL * (x1 - x1L)) + .. + (fnxnGradientL * (xn - xnL))
    --  Right corner: fn <= ynRightCorner + (-fnx1GradientR * (xR - x)) + .. + (-fnxnGradientR * (xnR - xn))
    functionConstraints =
      zipWith
      (curry
        (\(fnInt, (fLeftRange, fRightRange, fPartialDerivatives)) ->
          let
            fNegatedPartialDerivativesLowerBounds = map (negate . fst . mpBallToRational) $ V.toList fPartialDerivatives
            fNegatedPartialDerivativesUpperBounds = map (negate . snd . mpBallToRational) $ V.toList fPartialDerivatives
            fLeftLowerBound = fst $ mpBallToRational fLeftRange
            fRightLowerBound = fst $ mpBallToRational fRightRange

            --FIXME: make this safe. Check if vars contain ^fSimplex[0-9]+$. If so, try ^fSimplex1[0-9]+$ or something
            fSimplexN = "fSimplex" ++ show fnInt
          in
            if isLeftCorner
              then
                -- f is definitely above this line from the left corner
                -- Multiplication with left corner and partial derivatives omitted, since left corner is zero
                LEQ ((fSimplexN, 1.0) : zip vars fNegatedPartialDerivativesLowerBounds)
                  fLeftLowerBound
              else
                -- f is definitely above this line from the right corner
                LEQ ((fSimplexN, 1.0) : zip vars fNegatedPartialDerivativesUpperBounds)
                  $ foldl add fRightLowerBound $ zipWith mul varsNewUpperBounds fNegatedPartialDerivativesUpperBounds

        )
      )
      [1..]
      cornerValuesWithDerivatives

    mpBallToRational :: CN MPBall -> (Rational, Rational)
    mpBallToRational = bimap rational rational . endpoints . reducePrecionIfInaccurate . unCN
