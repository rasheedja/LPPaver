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


import LPPaver.Decide.Type
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
  -> DNFConjunctionResult TypedVarMap -- ^ The return result for each conjunction is:
                                     -- (IndeterminateDNF indeterminateArea pavings) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (UnsatDNF listOfPavings) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (SatDNF satArea pavings) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
                                     -- For indeterminate and sat DNFs, we return pavings from the conjunction that leads to the result.
                                     -- For an unsat dnf, we return a list of pavings for each conjunction in the DNF.
setupBestFirstCheckDNF expressionsWithFunctions typedVarMap bfsBoxesCutoff relativeImprovementCutoff p =
  decideConjunctionBestFirst
    -- (Q.singleton (maximum (map (\(_, f) -> (snd . endpointsAsIntervals) (apply f (typedVarMapToBox typedVarMap p))) expressionsWithFunctions)) typedVarMap)
    (Q.singleton
      -- Maximum minimum 
      (fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum (map snd expressionsWithFunctions) (typedVarMapToBox typedVarMap p) Nothing))
      (expressionsWithFunctions, typedVarMap, True, initialPaving))
    -- (Q.singleton (maximum (map (\(_, f) -> AERN2.MP.Ball.centre (apply f (typedVarMapToBox typedVarMap p))) expressionsWithFunctions)) typedVarMap)
    0
    bfsBoxesCutoff
    relativeImprovementCutoff
    p
    initialPaving
  where
    initialPaving = [BoxPaving typedVarMap NoEval Start]

-- |Check a DNF of 'E.ESafe' terms using a depth-first branch-and-prune algorithm which tends to perform well when the problem is unsatisfiable.
checkEDNFDepthFirstWithSimplex 
  :: [[E.ESafe]]  -- ^ Each item is a term in the conjunction.
                  -- The first item of each pair is the 'E.ESafe' representation of the term and the second item is a 'BoxFun' equivalent of the same term.
  -> TypedVarMap  -- ^ The area over which we are checking the conjunction.
  -> Integer      -- ^ The maximum depth that we can reach before giving up. 
  -> Rational     -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
                  -- 1.2 (the recommended default) means the simplex method will recurse if the box being examined has shrunk by 20%
  -> Precision    -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> DNFResult TypedVarMap -- ^ The return result for each conjunction is:
                                     -- (IndeterminateDNF indeterminateArea pavings) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (UnsatDNF listOfPavings) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (SatDNF satArea pavings) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
                                     -- For indeterminate and sat DNFs, we return pavings from the conjunction that leads to the result.
                                     -- For an unsat dnf, we return a list of pavings for each conjunction in the DNF.
checkEDNFDepthFirstWithSimplex conjunctions typedVarMap depthCutoff relativeImprovementCutoff p =
  checkDisjunctionResults conjunctionResults Nothing []
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
          decideConjunctionDepthFirstWithSimplex (map (\e -> (e, expressionToBoxFun (E.extractSafeE e) filteredVarMap p)) substitutedConjunction) filteredTypedVarMap filteredTypedVarMap 0 depthCutoff relativeImprovementCutoff p [BoxPaving typedVarMap NoEval Start])
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
  -> DNFResult TypedVarMap -- ^ The return result.
                                     -- (Nothing, Just indeterminateArea) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (Just False, Nothing) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (Just True, Just satArea) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
checkEDNFBestFirstWithSimplexCE conjunctions typedVarMap bfsBoxesCutoff relativeImprovementCutoff p =
  checkDisjunctionResults conjunctionResults Nothing []
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
  :: Q.MaxPQueue (CN MPBall) ([(E.ESafe, BoxFun)], TypedVarMap, Bool, BoxPavings TypedVarMap) -- ^The priority queue. Maximal minimals are represented using CN MPBall.
                                                                      -- Each element in the queue is a tuple with four items.
                                                                      -- The first item is a pair where 'fst' is an 'E.ESafe' representation of the term and the 'snd' is a 'BoxFun' equivalent of the same term.
                                                                      -- The second item is the area over which the previous conjunction should be examined.
                                                                      -- The third item is a boolean used to determine from which 'extreme' corner to linearise the conjunction.
                                                                      -- The fourth item is a list of paved boxes for the conjunction.
  -> Integer      -- ^ The number of boxes that have been examined.
  -> Integer      -- ^ The maximum number of boxes that should be examined before giving up. 
  -> Rational     -- ^ A rational number used as a heuristic to determine when to recurse when pruning with the simplex method.
  -> Precision    -- ^'Precision' used for 'MPBall's. 'prec' 100 is the recommended default.
  -> BoxPavings TypedVarMap        -- The boxes that we have paved so far.
  -> DNFConjunctionResult TypedVarMap -- ^ The return result.
                                     -- (IndeterminateBox, indeterminateArea, pavedBoxes) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (UnsatBox, pavedBoxes) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (SatBox, satArea, pavedBoxes) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
                                     -- pavedBoxes is a list storing the boxes that LPPaver has paved through to get to this result.
decideConjunctionBestFirst queue numberOfBoxesExamined numberOfBoxesCutoff relativeImprovementCutoff p currentPavings =
  case Q.maxView queue of
    Just ((expressionsWithFunctions, typedVarMap, isLeftCorner, expressionBoxPavings), queueWithoutVarMap) ->
      if numberOfBoxesExamined !<! numberOfBoxesCutoff then
        trace (show numberOfBoxesExamined) $
        case decideConjunctionWithSimplexCE expressionsWithFunctions typedVarMap typedVarMap relativeImprovementCutoff p isLeftCorner expressionBoxPavings of
          (UnsatBox pavedBoxes, QueueInfo {}) -> decideConjunctionBestFirst queueWithoutVarMap (numberOfBoxesExamined + 1) numberOfBoxesCutoff relativeImprovementCutoff p (currentPavings ++ pavedBoxes)
          (SatBox satArea pavedBoxes, QueueInfo {}) -> SatBox satArea pavedBoxes
          (IndeterminateBox indeterminateVarMap pavedBoxes, QueueInfo filteredExpressionsWithFunctions newIsLeftCorner wasPruned) ->
            let
              functions = map snd filteredExpressionsWithFunctions
              newPavings = currentPavings ++ pavedBoxes
              (leftVarMap, rightVarMap) = trace "bisecting" bisectWidestTypedInterval indeterminateVarMap

              createBoxPaving tvm = BoxPaving tvm (if wasPruned then IndetLin else IndetEval) Split


              leftVarMapWithExpressionsAndCornerAndMinimum  = trace (show (map fst filteredExpressionsWithFunctions)) $ trace "left"
                (
                  fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum functions (typedVarMapToBox leftVarMap p) Nothing),
                  (filteredExpressionsWithFunctions, leftVarMap, not newIsLeftCorner, newPavings ++ [createBoxPaving leftVarMap])
                )
              rightVarMapWithExpressionsAndCornerAndMinimum = trace "right"
                (
                  fromMaybe (cn (mpBallP p 1000000000000)) (safeMaximumMinimum functions (typedVarMapToBox rightVarMap p) Nothing),
                  -- fromMaybe (cn (mpBallP p 100000000000)) (safeMaximumMaximum functions (typedVarMapToBox rightVarMap p) Nothing),
                  -- fromMaybe (cn (dyadic 1048576)) (safeMaximumCentre functions (typedVarMapToBox rightVarMap p) Nothing),
                  (filteredExpressionsWithFunctions, rightVarMap, not newIsLeftCorner, newPavings ++ [createBoxPaving rightVarMap])
                )
            in
              decideConjunctionBestFirst
                (uncurry Q.insert rightVarMapWithExpressionsAndCornerAndMinimum (uncurry Q.insert leftVarMapWithExpressionsAndCornerAndMinimum queueWithoutVarMap))
                (numberOfBoxesExamined + 1) numberOfBoxesCutoff relativeImprovementCutoff p newPavings
          -- (_, _, _) -> error "Got unmatched case in decideConjunctionBestFirst"
      else IndeterminateBox typedVarMap currentPavings   -- Reached number of boxes cutoff
    Nothing -> UnsatBox currentPavings -- All areas in queue disproved

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
  -> BoxPavings TypedVarMap        -- The boxes that we have paved so far.
  -> DNFConjunctionResult TypedVarMap -- ^ The return result.
                                     -- (IndeterminateBox, indeterminateArea, pavedBoxes) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                     -- (UnsatBox, pavedBoxes) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                     -- (SatBox, satArea, pavedBoxes) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
                                     -- pavedBoxes is a list storing the boxes that LPPaver has paved through to get to this result.
decideConjunctionDepthFirstWithSimplex expressionsWithFunctions initialVarMap typedVarMap currentDepth depthCutoff relativeImprovementCutoff p pavedBoxes
  | null filterOutTrueTerms =
    trace ("proved sat with apply " ++ show roundedVarMap)
    SatBox roundedVarMap (pavedBoxes ++ [BoxPaving roundedVarMap SatEval None])
  | checkIfEsFalseUsingApply =
    trace "proved false with apply"
    UnsatBox (pavedBoxes ++ [BoxPaving roundedVarMap UnsatEval None])
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

      bisectWidestDimensionAndRecurse varMapToBisect wasPruned currentPavings =
        let
          (leftVarMap, rightVarMap) = bisectWidestTypedInterval varMapToBisect
          -- (leftVarMap, rightVarMap) = bimap (`unsafeIntersectVarMap` varMapToBisect) (`unsafeIntersectVarMap` varMapToBisect) $ bisectWidestTypedInterval varMapToBisect

          createBoxPaving tvm = BoxPaving tvm (if wasPruned then IndetLin else IndetEval) Split

          (leftR, rightR) =
            withStrategy
            (parTuple2 rseq rseq)
            (
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap leftVarMap (currentDepth + 1) depthCutoff relativeImprovementCutoff p (currentPavings ++ [createBoxPaving leftVarMap]),
              decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap rightVarMap (currentDepth + 1) depthCutoff relativeImprovementCutoff p (currentPavings ++ [createBoxPaving rightVarMap]) 
            )
        in
          case leftR of
            UnsatBox pavedBoxesLeft
              -> case rightR of
                UnsatBox pavedBoxesRight -> UnsatBox $ pavedBoxesLeft ++ pavedBoxesRight
                r -> r
            r -> r

      bisectUntilCutoff varMapToCheck wasPruned newPavings =
        if currentDepth !<! depthCutoff -- Best first
          then
              bisectWidestDimensionAndRecurse varMapToCheck wasPruned newPavings
          else
            IndeterminateBox varMapToCheck newPavings

      checkSimplex
        -- If we can calculate any derivatives
        | (not . null) filteredCornerRangesWithDerivatives = trace "decideWithSimplex start" $
          case removeConjunctionUnsatAreaWithSimplex filteredCornerRangesWithDerivatives untypedRoundedVarMap of
            (Just False, _) -> trace ("decideWithSimplex true: " ++ show roundedVarMap) UnsatBox (pavedBoxes ++ [BoxPaving [] UnsatLin Prune])
            (Nothing, Just newVarMap) -> trace "decideWithSimplex indet" $
              case safeVarMapToTypedVarMap newVarMap varNamesWithTypes of
                Just nvm -> recurseOnVarMap (unsafeIntersectVarMap nvm roundedVarMap) True (pavedBoxes ++ [BoxPaving nvm IndetLin Prune])
                Nothing -> UnsatBox (pavedBoxes ++ [BoxPaving [] UnsatLin Prune]) -- This will only happen when all integers in an integer-only varMap have been decided
            _ -> undefined
        | otherwise = bisectUntilCutoff roundedVarMap False pavedBoxes

      recurseOnVarMap recurseVarMap wasPruned newPavings
        | typedMaxWidth recurseVarMap == 0 =
          case decideConjunctionWithApply filteredExpressionsWithFunctions (typedVarMapToBox recurseVarMap p) of
            Just True  -> SatBox recurseVarMap (newPavings ++ [BoxPaving recurseVarMap SatEval None])
            Just False -> UnsatBox (newPavings ++ [BoxPaving recurseVarMap UnsatEval None]) 
            Nothing    -> IndeterminateBox recurseVarMap (newPavings ++ [BoxPaving recurseVarMap IndetEval None])
        | typedMaxWidth roundedVarMap / typedMaxWidth recurseVarMap >= relativeImprovementCutoff =
          trace ("recursing with simplex with roundedVarMap: " ++ show recurseVarMap) $
          decideConjunctionDepthFirstWithSimplex filteredExpressionsWithFunctions initialVarMap recurseVarMap currentDepth depthCutoff relativeImprovementCutoff p newPavings
        | otherwise = bisectUntilCutoff recurseVarMap wasPruned newPavings

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
  -> BoxPavings TypedVarMap        -- The boxes that we have paved so far.
  -> (DNFConjunctionResult TypedVarMap, DNFConjunctionQueueInfo)  -- ^The return result is a pair.
                                                                    -- For the first element:
                                                                    -- (IndeterminateBox, indeterminateArea, pavedBoxes) means that the algorithm could not make a decision and returns an example of an indeterminate area.
                                                                    -- (UnsatBox, pavedBoxes) means that the algorithm has decided the DNF is unsatisfiable over the given area.
                                                                    -- (SatBox, satArea, pavedBoxes) means that the algorithm has decided the DNF is satisfiable (with satArea being a model) over the given area.
                                                                    -- pavedBoxes is a list storing the boxes that LPPaver has paved through to get to this result.
                                                                    -- The second element is information useful for an efficient best-first algorithm
decideConjunctionWithSimplexCE expressionsWithFunctions initialVarMap typedVarMap relativeImprovementCutoff p isLeftCorner pavedBoxes
  | null filterOutTrueTerms =
    (SatBox roundedVarMap (pavedBoxes ++ [BoxPaving roundedVarMap SatEval None]), QueueInfo filteredExpressionsWithFunctions isLeftCorner False)
  | checkIfEsFalseUsingApply =
    (UnsatBox (pavedBoxes ++ [BoxPaving roundedVarMap SatEval None]), QueueInfo filteredExpressionsWithFunctions isLeftCorner False)
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

      checkSimplex :: (DNFConjunctionResult TypedVarMap, DNFConjunctionQueueInfo)
      checkSimplex
        -- If we can calculate any derivatives
        | (not . null) filteredCornerRangesWithDerivatives = trace "decideWithSimplex start" $
          trace "decideWithSimplex start" $
          case removeConjunctionUnsatAreaWithSimplex filteredCornerRangesWithDerivatives untypedRoundedVarMap of
            (Just False, _) -> trace ("decideWithSimplex true: " ++ show roundedVarMap) (UnsatBox (pavedBoxes ++ [BoxPaving [] UnsatLin Prune]), QueueInfo filteredExpressionsWithFunctions isLeftCorner True)
            (Nothing, Just newVarMap) -> trace "decideWithSimplex indet" $
              case safeVarMapToTypedVarMap newVarMap varNamesWithTypes of
                Nothing -> (UnsatBox pavedBoxes, QueueInfo filteredExpressionsWithFunctions isLeftCorner True) -- This will only happen when all integers in an integer-only varMap have been decided
                Just nvm ->
                  let
                    newTypedVarMap = unsafeIntersectVarMap nvm roundedVarMap
                    newBox  = typedVarMapToBox newTypedVarMap p
                    newPavings = pavedBoxes ++ [BoxPaving newTypedVarMap IndetLin Prune]

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
                                  then (SatBox typedSatSolution (newPavings ++ [BoxPaving typedSatSolution SatLin Prune]), QueueInfo filteredExpressionsWithFunctions isLeftCorner True)
                                  else recurseOnVarMap newTypedVarMap True newPavings
                              Nothing -> error $ "Found sat solution but encountered error when converting to typed sat solution" ++ show satSolution
                          Nothing -> recurseOnVarMap newTypedVarMap True newPavings
                      Nothing -> recurseOnVarMap newTypedVarMap True newPavings
            _ -> undefined
        | otherwise = recurseOnVarMap roundedVarMap False pavedBoxes

      recurseOnVarMap recurseVarMap wasPruned newPavings
        | typedMaxWidth recurseVarMap == 0 =
          case decideConjunctionWithApply filteredExpressionsWithFunctions (typedVarMapToBox recurseVarMap p) of
            Just True  -> (SatBox recurseVarMap (newPavings ++ [BoxPaving recurseVarMap SatEval None]), QueueInfo filteredExpressionsWithFunctions isLeftCorner wasPruned)
            Just False -> (UnsatBox (newPavings ++ [BoxPaving recurseVarMap UnsatEval None]), QueueInfo filteredExpressionsWithFunctions isLeftCorner wasPruned)
            Nothing    -> (IndeterminateBox recurseVarMap (newPavings ++ [BoxPaving recurseVarMap IndetEval None]), QueueInfo filteredExpressionsWithFunctions isLeftCorner wasPruned)
        | typedMaxWidth roundedVarMap / typedMaxWidth recurseVarMap >= relativeImprovementCutoff =
          trace ("recursing with simplex with roundedVarMap: " ++ show recurseVarMap) $
          decideConjunctionWithSimplexCE filteredExpressionsWithFunctions initialVarMap recurseVarMap relativeImprovementCutoff p (not isLeftCorner) newPavings
        | otherwise = (IndeterminateBox recurseVarMap newPavings, QueueInfo filteredExpressionsWithFunctions isLeftCorner wasPruned)
