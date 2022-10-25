{-|
Module      : LPPaver.Decide.Algorithm
Description : Algorithms for deciding DNFs
Copyright   : (c) Junaid Rasheed, 2021-2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining algorithms that can decide DNFs of 'E.ESafe' terms.
-}
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

-- |Start initial call to 'decideConjunctionBestFirst' for some conjunction in a DNF.
setupBestFirstCheckDNF 
  :: [(E.ESafe, BoxFun)]  -- ^ Each item is a term in the conjunction.
                          -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap          -- ^ The area over which we are checking the conjunction.
  -> Integer              -- ^ The maximum number of boxes that should be examined before giving up. 
  -> Rational             -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                          -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision            -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> (Maybe Bool, Maybe TypedVarMap) -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
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

-- |Check a DNF of 'E.ESafe' terms using a depth-first branch-and-prune algorithm which tends to perform well when the problem is unsatisfiable.
checkEDNFDepthFirstWithSimplex 
  :: [[E.ESafe]]  -- ^ Each item is a term in the conjunction.
                  -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap  -- ^ The area over which we are checking the conjunction.
  -> Integer      -- ^ The maximum depth that we can reach before giving up. 
  -> Rational     -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                  -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision    -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> (Maybe Bool, Maybe TypedVarMap) -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
checkEDNFDepthFirstWithSimplex conjunctions typedVarMap depthCutoff relativeImprovementCutoff p =
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
          decideConjunctionDepthFirstWithSimplex (map (\e -> (e, expressionToBoxFun (E.extractSafeE e) filteredVarMap p)) substitutedConjunction) filteredTypedVarMap filteredTypedVarMap 0 depthCutoff relativeImprovementCutoff p)
      conjunctions

-- |Check a DNF of 'E.ESafe' terms using a best-first branch-and-prune algorithm which tends to perform well when the problem is satisfiable.
checkEDNFBestFirstWithSimplexCE 
  :: [[E.ESafe]]  -- ^ Each item is a term in the conjunction.
                  -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap  -- ^ The area over which we are checking the conjunction.
  -> Integer      -- ^ The maximum number of boxes that should be examined before giving up. 
  -> Rational     -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                  -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision    -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> (Maybe Bool, Maybe TypedVarMap) -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
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

-- |Attempt to decide a conjunction over some given box using basic interval evaluation via 'apply' 
decideConjunctionWithApply 
  :: [(E.ESafe, BoxFun)]  -- ^ Each item is a term in the conjunction.
                          -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> Box                  -- The box over which the conjunction is being examined.
  -> Maybe Bool           -- The result. 'Nothing' is given if a decision could not be made. 
decideConjunctionWithApply expressionsWithFunctions box
  | null filterOutTrueTerms  = Just True
  | checkIfEsFalseUsingApply = Just False
  | otherwise                = Nothing
  where
    esWithRanges             = parMap rseq (\ (e, f) -> ((e, f), apply f box)) expressionsWithFunctions
    -- filterOutTrueTerms       = esWithRanges
    filterOutTrueTerms       = filterOutTrueExpressions esWithRanges
    checkIfEsFalseUsingApply = decideConjunctionRangesFalse filterOutTrueTerms

-- |Decide a conjunction in a best-first manner using a priority queue. Maximal minimums over conjunctions are used to order them, with larger maximal minimums taking priority.
decideConjunctionBestFirst 
  :: Q.MaxPQueue (CN MPBall) ([(E.ESafe, BoxFun)], TypedVarMap, Bool) -- ^The priority queue. Maximal minimals are represented using CN MPBall.
                                                                      -- Each element in the queue is a triple.
                                                                      -- The first item is a pair where 'fst' is an 'E.ESafe' representation of the term and the 'snd' is a 'BoxFun' equivalent of the same term.
                                                                      -- The second item is the area over which the previous conjunction should be examined.
                                                                      -- The third item is a boolean used to determine from which 'extreme' corner to linearise the conjunction.
  -> Integer      -- ^ The number of boxes that have been examined.
  -> Integer      -- ^ The maximum number of boxes that should be examined before giving up. 
  -> Rational     -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
  -> Precision    -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> (Maybe Bool, Maybe TypedVarMap) -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
decideConjunctionBestFirst queue numberOfBoxesExamined numberOfBoxesCutoff relativeImprovementCutoff p =
  case Q.maxView queue of
    Just ((expressionsWithFunctions, typedVarMap, isLeftCorner), queueWithoutVarMap) ->
      if numberOfBoxesExamined !<! numberOfBoxesCutoff then
        trace (show numberOfBoxesExamined) $
        case decideConjunctionWithSimplexCE expressionsWithFunctions typedVarMap typedVarMap relativeImprovementCutoff p isLeftCorner of
          (Just False, _, _, _) -> decideConjunctionBestFirst queueWithoutVarMap (numberOfBoxesExamined + 1) numberOfBoxesCutoff relativeImprovementCutoff p
          (Just True, Just satArea, _, _) -> (Just True, Just satArea)
          (Nothing, Just indeterminateVarMap, filteredExpressionsWithFunctions, newIsLeftCorner) -> trace "h" $
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

-- |Decide a conjunction arising from a DNF over a given box using a depth-first branch-and-prune algorithm which tends to work well when the problem is unsatisfiable.
decideConjunctionDepthFirstWithSimplex
  :: [(E.ESafe, BoxFun)]  -- ^ Each item is a term in the conjunction.
                          -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap          -- ^ The initial area over which the box is being examined. This remains unchanged during recursive calls to this function.
  -> TypedVarMap          -- ^ The current area over which the box is being examined.
  -> Integer              -- ^ The current depth.
  -> Integer              -- ^ The maximum allowed depth before giving up
  -> Rational             -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                          -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision            -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> (Maybe Bool, Maybe TypedVarMap) -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.

decideConjunctionDepthFirstWithSimplex expressionsWithFunctions initialVarMap typedVarMap currentDepth depthCutoff relativeImprovementCutoff p
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
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap leftVarMap (currentDepth + 1) depthCutoff relativeImprovementCutoff p,
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap rightVarMap (currentDepth + 1) depthCutoff relativeImprovementCutoff p
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
          decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap recurseVarMap currentDepth depthCutoff relativeImprovementCutoff p
        | otherwise = bisectUntilCutoff recurseVarMap

-- |Decide a conjunction arising from a DNF over a given box using a best-first branch-and-prune algorithm which tends to work well when the problem is satisfiable.
decideConjunctionWithSimplexCE
  :: [(E.ESafe, BoxFun)]  -- ^ Each item is a term in the conjunction.
                          -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap          -- ^ The initial area over which the box is being examined. This remains unchanged during recursive calls to this function.
  -> TypedVarMap          -- ^ The current area over which the box is being examined.
  -> Rational             -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                          -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision            -- ^ 'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> Bool                 -- ^ A boolean used to determine the 'extreme' corner to linearise the conjunction from.
  -> (Maybe Bool, Maybe TypedVarMap, [(E.ESafe, BoxFun)], Bool) -- ^The return result
                                                                -- For the first item, Nothing means the algorithm could not decide, Just False means unsatisfiable and Just True means satisfiable.
                                                                -- The second item gives a counter-example/indeterminate area if appropriate.
                                                                -- The third item is a filtered conjunction: terms which interval evaluate to true are filtered out.
                                                                -- A boolean specifying the last corner from which the conjunction was linearised.
decideConjunctionWithSimplexCE expressionsWithFunctions initialVarMap typedVarMap relativeImprovementCutoff p isLeftCorner
  | null filterOutTrueTerms =
    trace ("proved sat with apply " ++ show roundedVarMap)
    (Just True, Just roundedVarMap, filteredExpressionsWithFunctions, isLeftCorner)
  | checkIfEsFalseUsingApply =
    trace "proved unsat with apply"
    (Just False, Nothing, filteredExpressionsWithFunctions, isLeftCorner)
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
            (Just False, _) -> trace ("decideWithSimplex true: " ++ show roundedVarMap) (Just False, Nothing, filteredExpressionsWithFunctions, isLeftCorner)
            (Nothing, Just newVarMap) -> trace "decideWithSimplex indet" $
              case safeVarMapToTypedVarMap newVarMap varNamesWithTypes of
                Nothing -> (Just False, Nothing, filteredExpressionsWithFunctions, isLeftCorner) -- This will only happen when all integers in an integer-only varMap have been decided
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
                                  then (Just True, Just typedSatSolution, filteredExpressionsWithFunctions, isLeftCorner)
                                  else recurseOnVarMap newTypedVarMap
                              Nothing -> error $ "Found sat solution but encountered error when converting to typed sat solution" ++ show satSolution
                          Nothing -> recurseOnVarMap newTypedVarMap
                      Nothing -> recurseOnVarMap newTypedVarMap
            _ -> undefined
        | otherwise = recurseOnVarMap roundedVarMap

      recurseOnVarMap recurseVarMap
        | typedMaxWidth recurseVarMap == 0 =
          case decideConjunctionWithApply filteredExpressionsWithFunctions (typedVarMapToBox recurseVarMap p) of
            Just True  -> (Just True, Just recurseVarMap, filteredExpressionsWithFunctions, isLeftCorner)
            Just False -> (Just False, Nothing, filteredExpressionsWithFunctions, isLeftCorner)
            Nothing    -> (Nothing, Just recurseVarMap, filteredExpressionsWithFunctions, isLeftCorner)
        | typedMaxWidth roundedVarMap / typedMaxWidth recurseVarMap >= relativeImprovementCutoff =
          trace ("recursing with simplex with roundedVarMap: " ++ show recurseVarMap) $
          decideConjunctionWithSimplexCE filteredExpressionsWithFunctions initialVarMap recurseVarMap relativeImprovementCutoff p (not isLeftCorner)
        | otherwise = (Nothing, Just recurseVarMap, filteredExpressionsWithFunctions, isLeftCorner)
