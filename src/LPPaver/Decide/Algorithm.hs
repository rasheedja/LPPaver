module LPPaver.Decide.Algorithm where

import MixedTypesNumPrelude
import qualified PropaFP.Expression as E
import PropaFP.VarMap
import AERN2.MP
import AERN2.MP.Precision
import AERN2.BoxFun.Type
import qualified Data.PQueue.Prio.Max as Q
import Data.Maybe
import PropaFP.Translators.BoxFun
import Control.Parallel.Strategies
import Data.List (nub)
import AERN2.BoxFun.Box


import LPPaver.Decide.Util
import LPPaver.Decide.Linearisation

setupBestFirstCheckDNF :: [(E.ESafe, BoxFun)] -> TypedVarMap -> Integer -> Rational -> Precision -> (Maybe Bool, Maybe TypedVarMap)
setupBestFirstCheckDNF expressionsWithFunctions typedVarMap bfsBoxesCutoff relativeImprovementCutoff p =
  decideConjunctionBestFirst
    -- (Q.singleton (maximum (map (\(_, f) -> (snd . endpointsAsIntervals) (apply f (typedVarMapToBox typedVarMap p))) expressionsWithFunctions)) typedVarMap)
    (Q.singleton
      -- Maximum minimum 
      (fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum (map snd expressionsWithFunctions) (typedVarMapToBox typedVarMap p) Nothing))
      (expressionsWithFunctions, typedVarMap, True))
    -- (Q.singleton (maximum (map (\(_, f) -> AERN2.MP.Ball.centre (apply f (typedVarMapToBox typedVarMap p))) expressionsWithFunctions)) typedVarMap)
    0
    bfsBoxesCutoff
    relativeImprovementCutoff
    p

checkEDNFDepthFirstWithSimplex :: [[E.ESafe]] -> TypedVarMap -> Integer -> Integer -> Rational -> Precision -> (Maybe Bool, Maybe TypedVarMap)
checkEDNFDepthFirstWithSimplex conjunctions typedVarMap depthCutoff bfsBoxesCutoff relativeImprovementCutoff p =
  checkDisjunctionResults conjunctionResults Nothing
  where
    conjunctionResults =
      parMap rseq
      (\conjunction ->
        let
          substitutedConjunction = substituteConjunctionEqualities conjunction
          substitutedConjunctionVars = nub $ concatMap (E.extractVariablesE . E.extractSafeE) substitutedConjunction
          filteredTypedVarMap =
            filter
            (\(TypedVar (v, (_, _)) _) -> v `elem` substitutedConjunctionVars)
            typedVarMap
          filteredVarMap = typedVarMapToVarMap filteredTypedVarMap
        in
          decideConjunctionDepthFirstWithSimplex (map (\e -> (e, expressionToBoxFun (E.extractSafeE e) filteredVarMap p)) substitutedConjunction) filteredTypedVarMap filteredTypedVarMap 0 depthCutoff bfsBoxesCutoff relativeImprovementCutoff p)
      conjunctions

checkEDNFBestFirstWithSimplexCE :: [[E.ESafe]] -> TypedVarMap -> Integer -> Rational -> Precision -> (Maybe Bool, Maybe TypedVarMap)
checkEDNFBestFirstWithSimplexCE conjunctions typedVarMap bfsBoxesCutoff relativeImprovementCutoff p =
  checkDisjunctionResults conjunctionResults Nothing
  where
    conjunctionResults =
      parMap rseq
      (\conjunction ->
        let
          substitutedConjunction = substituteConjunctionEqualities conjunction
          substitutedConjunctionVars = nub $ concatMap (E.extractVariablesE . E.extractSafeE) substitutedConjunction
          filteredTypedVarMap =
            filter
            (\(TypedVar (v, (_, _)) _) -> v `elem` substitutedConjunctionVars)
            typedVarMap
          filteredVarMap = typedVarMapToVarMap filteredTypedVarMap
        in
          setupBestFirstCheckDNF (map (\e -> (e, expressionToBoxFun (E.extractSafeE e) filteredVarMap p)) substitutedConjunction) filteredTypedVarMap bfsBoxesCutoff relativeImprovementCutoff p
      )
      conjunctions

decideConjunctionWithApply :: [(E.ESafe, BoxFun)] -> Box -> Maybe Bool
decideConjunctionWithApply expressionsWithFunctions box
  | null filterOutTrueTerms  = Just True
  | checkIfEsFalseUsingApply = Just False
  | otherwise                = Nothing
  where
    esWithRanges             = parMap rseq (\ (e, f) -> ((e, f), apply f box)) expressionsWithFunctions
    -- filterOutTrueTerms       = esWithRanges
    filterOutTrueTerms       = filterOutTrueExpressions esWithRanges
    checkIfEsFalseUsingApply = decideConjunctionRangesFalse filterOutTrueTerms

decideConjunctionBestFirst :: Q.MaxPQueue (CN MPBall) ([(E.ESafe, BoxFun)], TypedVarMap, Bool)-> Integer -> Integer -> Rational -> Precision -> (Maybe Bool, Maybe TypedVarMap)
decideConjunctionBestFirst queue numberOfBoxesExamined numberOfBoxesCutoff relativeImprovementCutoff p =
  case Q.maxView queue of
    Just ((expressionsWithFunctions, typedVarMap, isLeftCorner), queueWithoutVarMap) ->
      if numberOfBoxesExamined !<! numberOfBoxesCutoff then
        trace (show numberOfBoxesExamined) $
        case decideConjunctionWithSimplexCE expressionsWithFunctions typedVarMap typedVarMap relativeImprovementCutoff p isLeftCorner of
          (Just False, _, _, _) -> decideConjunctionBestFirst queueWithoutVarMap (numberOfBoxesExamined + 1) numberOfBoxesCutoff relativeImprovementCutoff p
          (Just True, Just satArea, _, _) -> (Just True, Just satArea)
          (Nothing, Just indeterminateVarMap, Just filteredExpressionsWithFunctions, Just newIsLeftCorner) -> trace "h" $
            let
              functions = map snd filteredExpressionsWithFunctions

              (leftVarMap, rightVarMap) = trace "bisecting" bisectWidestTypedInterval indeterminateVarMap

              leftVarMapWithExpressionsAndCornerAndMinimum  = trace (show (map fst filteredExpressionsWithFunctions)) $ trace "left"
                (
                  fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum functions (typedVarMapToBox leftVarMap p) Nothing),
                  (filteredExpressionsWithFunctions, leftVarMap, not newIsLeftCorner)
                )
              rightVarMapWithExpressionsAndCornerAndMinimum = trace "right"
                (
                  fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum functions (typedVarMapToBox rightVarMap p) Nothing),
                  -- fromMaybe (cn (mpBallP p 100000000000)) (safeMaximumMaximum functions (typedVarMapToBox rightVarMap p) Nothing),
                  -- fromMaybe (cn (dyadic 1048576)) (safeMaximumCentre functions (typedVarMapToBox rightVarMap p) Nothing),
                  (filteredExpressionsWithFunctions, rightVarMap, not newIsLeftCorner)
                )
            in
              decideConjunctionBestFirst
              (uncurry Q.insert rightVarMapWithExpressionsAndCornerAndMinimum (uncurry Q.insert leftVarMapWithExpressionsAndCornerAndMinimum queueWithoutVarMap))
              (numberOfBoxesExamined + 1) numberOfBoxesCutoff relativeImprovementCutoff p
          (_, _, _, _) -> error "Got unmatched case in decideConjunctionBestFirst"
      else (Nothing, Just typedVarMap)   -- Reached number of boxes cutoff
    Nothing -> (Just False, Nothing) -- All areas in queue disproved

decideConjunctionDepthFirstWithSimplex :: [(E.ESafe, BoxFun)] -> TypedVarMap -> TypedVarMap -> Integer -> Integer -> Integer -> Rational -> Precision -> (Maybe Bool, Maybe TypedVarMap)
decideConjunctionDepthFirstWithSimplex expressionsWithFunctions initialVarMap typedVarMap currentDepth depthCutoff bfsBoxesCutoff relativeImprovementCutoff p
  | null filterOutTrueTerms =
    trace ("proved sat with apply " ++ show roundedVarMap)
    (Just True, Just roundedVarMap)
  | checkIfEsFalseUsingApply =
    trace "proved false with apply"
    (Just False, Nothing)
  | otherwise = checkSimplex
  where
      box  = typedVarMapToBox typedVarMap p
      varNamesWithTypes = getVarNamesWithTypes typedVarMap
      roundedVarMap =
        case safeBoxToTypedVarMap box varNamesWithTypes of
          Just rvm -> unsafeIntersectVarMap initialVarMap rvm
          Nothing -> error $ "Rounded the following varMap makes it inverted: " ++ show typedVarMap
      untypedRoundedVarMap = typedVarMapToVarMap roundedVarMap

      esWithRanges             = parMap rseq (\ (e, f) -> ((e, f), apply f box)) expressionsWithFunctions
      -- filterOutTrueTerms       = esWithRanges
      filterOutTrueTerms       = filterOutTrueExpressions esWithRanges
      checkIfEsFalseUsingApply = decideConjunctionRangesFalse filterOutTrueTerms

      filteredExpressionsWithFunctions = map fst filterOutTrueTerms

      -- Filter out ranges/derivatives with errors.
      -- This is safe because we do not need every function to enclose the unsat area. 
      filteredCornerRangesWithDerivatives = computeCornerValuesAndDerivatives filterOutTrueTerms box

      bisectWidestDimensionAndRecurse varMapToBisect =
        let
          (leftVarMap, rightVarMap) = bisectWidestTypedInterval varMapToBisect
          -- (leftVarMap, rightVarMap) = bimap (`unsafeIntersectVarMap` varMapToBisect) (`unsafeIntersectVarMap` varMapToBisect) $ bisectWidestTypedInterval varMapToBisect

          (leftR, rightR) =
            withStrategy
            (parTuple2 rseq rseq)
            (
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap leftVarMap (currentDepth + 1) depthCutoff bfsBoxesCutoff relativeImprovementCutoff p,
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap rightVarMap (currentDepth + 1) depthCutoff bfsBoxesCutoff relativeImprovementCutoff p
            )
        in
          case leftR of
            (Just False, _)
              -> case rightR of
                (Just False, _) -> (Just False, Nothing)
                r -> r
            r -> r

      bisectUntilCutoff varMapToCheck =
        if currentDepth !<! depthCutoff -- Best first
          then
              bisectWidestDimensionAndRecurse varMapToCheck
          else
            (Nothing, Just varMapToCheck)

      checkSimplex
        -- If we can calculate any derivatives
        | (not . null) filteredCornerRangesWithDerivatives = trace "decideWithSimplex start" $
          case removeConjunctionUnsatAreaWithSimplex filteredCornerRangesWithDerivatives untypedRoundedVarMap of
            (Just False, _) -> trace ("decideWithSimplex true: " ++ show roundedVarMap) (Just False, Nothing)
            (Nothing, Just newVarMap) -> trace "decideWithSimplex indet" $
              case safeVarMapToTypedVarMap newVarMap varNamesWithTypes of
                Just nvm -> recurseOnVarMap $ unsafeIntersectVarMap nvm roundedVarMap
                Nothing -> (Just False, Nothing) -- This will only happen when all integers in an integer-only varMap have been decided
            _ -> undefined
        | otherwise = bisectUntilCutoff roundedVarMap

      recurseOnVarMap recurseVarMap
        | typedMaxWidth recurseVarMap == 0 =
          case decideConjunctionWithApply filteredExpressionsWithFunctions (typedVarMapToBox recurseVarMap p) of
            Just True  -> (Just True, Just recurseVarMap)
            Just False -> (Just False, Nothing)
            Nothing    -> (Nothing, Just recurseVarMap)
        | typedMaxWidth roundedVarMap / typedMaxWidth recurseVarMap >= relativeImprovementCutoff =
          trace ("recursing with simplex with roundedVarMap: " ++ show recurseVarMap) $
          decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap recurseVarMap currentDepth depthCutoff bfsBoxesCutoff relativeImprovementCutoff p
        | otherwise = bisectUntilCutoff recurseVarMap

decideConjunctionWithSimplexCE :: [(E.ESafe, BoxFun)] -> TypedVarMap -> TypedVarMap -> Rational -> Precision -> Bool -> (Maybe Bool, Maybe TypedVarMap, Maybe [(E.ESafe, BoxFun)], Maybe Bool)
decideConjunctionWithSimplexCE expressionsWithFunctions initialVarMap typedVarMap relativeImprovementCutoff p isLeftCorner
  | null filterOutTrueTerms =
    trace ("proved sat with apply " ++ show roundedVarMap)
    (Just True, Just roundedVarMap, Just filteredExpressionsWithFunctions, Just isLeftCorner)
  | checkIfEsFalseUsingApply =
    trace "proved unsat with apply"
    (Just False, Nothing, Just filteredExpressionsWithFunctions, Just isLeftCorner)
  | otherwise = checkSimplex
  where
      box  = typedVarMapToBox typedVarMap p
      varNamesWithTypes = getVarNamesWithTypes typedVarMap
      roundedVarMap =
        case safeBoxToTypedVarMap box varNamesWithTypes of
          Just rvm -> unsafeIntersectVarMap initialVarMap rvm
          Nothing -> error $ "Rounded the following varMap makes it inverted: " ++ show typedVarMap
      untypedRoundedVarMap = typedVarMapToVarMap roundedVarMap

      esWithRanges             = parMap rseq (\(e, f) -> ((e, f), apply f box)) expressionsWithFunctions
      -- filterOutTrueTerms       = esWithRanges
      filterOutTrueTerms       = filterOutTrueExpressions esWithRanges
      checkIfEsFalseUsingApply = decideConjunctionRangesFalse filterOutTrueTerms

      filteredExpressionsWithFunctions = map fst filterOutTrueTerms

      -- Filter out ranges/derivatives with errors.
      -- This is safe because we do not need every function to enclose the unsat area. 
      filteredCornerRangesWithDerivatives = computeCornerValuesAndDerivatives filterOutTrueTerms box

      checkSimplex
        -- If we can calculate any derivatives
        | (not . null) filteredCornerRangesWithDerivatives = trace "decideWithSimplex start" $
          trace "decideWithSimplex start" $
          case removeConjunctionUnsatAreaWithSimplex filteredCornerRangesWithDerivatives untypedRoundedVarMap of
            (Just False, _) -> trace ("decideWithSimplex true: " ++ show roundedVarMap) (Just False, Nothing, Just filteredExpressionsWithFunctions, Just isLeftCorner)
            (Nothing, Just newVarMap) -> trace "decideWithSimplex indet" $
              case safeVarMapToTypedVarMap newVarMap varNamesWithTypes of
                Nothing -> (Just False, Nothing, Just filteredExpressionsWithFunctions, Just isLeftCorner) -- This will only happen when all integers in an integer-only varMap have been decided
                Just nvm ->
                  let
                    newTypedVarMap = unsafeIntersectVarMap nvm roundedVarMap
                    newBox  = typedVarMapToBox newTypedVarMap p

                    -- When looking for a sat solution, we need to account for all ranges/derivatives
                    -- If any range/derivative has an error, we do not make a simplex system
                    mNewCornerRangesWithDerivatives = safelyComputeCornerValuesAndDerivatives filterOutTrueTerms newBox
                  in
                    trace "findFalsePointWithSimplex start" $
                    case mNewCornerRangesWithDerivatives of
                      Just newCornerRangesWithDerivatives ->
                        case findConjunctionSatAreaWithSimplex newCornerRangesWithDerivatives (typedVarMapToVarMap newTypedVarMap) isLeftCorner of
                          Just satSolution ->
                            case safeVarMapToTypedVarMap satSolution varNamesWithTypes of
                              Just typedSatSolution ->
                                if decideConjunctionTrue (map fst filterOutTrueTerms) typedSatSolution p
                                  then (Just True, Just typedSatSolution, Just filteredExpressionsWithFunctions, Just isLeftCorner)
                                  else recurseOnVarMap newTypedVarMap
                              Nothing -> error $ "Found sat solution but encountered error when converting to typed sat solution" ++ show satSolution
                          Nothing -> recurseOnVarMap newTypedVarMap
                      Nothing -> recurseOnVarMap newTypedVarMap
            _ -> undefined
        | otherwise = recurseOnVarMap roundedVarMap

      recurseOnVarMap recurseVarMap
        | typedMaxWidth recurseVarMap == 0 =
          case decideConjunctionWithApply filteredExpressionsWithFunctions (typedVarMapToBox recurseVarMap p) of
            Just True  -> (Just True, Just recurseVarMap, Just filteredExpressionsWithFunctions, Just isLeftCorner)
            Just False -> (Just False, Nothing, Just filteredExpressionsWithFunctions, Just isLeftCorner)
            Nothing    -> (Nothing, Just recurseVarMap, Just filteredExpressionsWithFunctions, Just isLeftCorner)
        | typedMaxWidth roundedVarMap / typedMaxWidth recurseVarMap >= relativeImprovementCutoff =
          trace ("recursing with simplex with roundedVarMap: " ++ show recurseVarMap) $
          decideConjunctionWithSimplexCE filteredExpressionsWithFunctions initialVarMap recurseVarMap relativeImprovementCutoff p (not isLeftCorner)
        | otherwise = (Nothing, Just recurseVarMap, Just filteredExpressionsWithFunctions, Just isLeftCorner)
