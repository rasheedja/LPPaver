{-# LANGUAGE LambdaCase #-}

module LPPaver.Type where

import MixedTypesNumPrelude
import qualified Numeric.CollectErrors as CN
import AERN2.MP.Ball
import AERN2.BoxFun.Type
import AERN2.BoxFun.Optimisation
import PropaFP.VarMap
import PropaFP.Translators.BoxFun
import qualified PropaFP.Expression as E
import AERN2.BoxFun.Box (createEnclosingBox, Box, intersectionCertainlyEmpty, nonEmptyIntersection, lowerBounds, upperBounds)
import qualified AERN2.Linear.Vector.Type as V
import AERN2.Kleenean
import Control.Parallel.Strategies
import Data.Bifunctor
import Linear.Simplex.Simplex
import Linear.Simplex.Util
import qualified Linear.Simplex.Types as LT

import Data.List (find, intercalate, nub, sortBy, partition)
import qualified Data.Sequence as Seq

import AERN2.MP.Dyadic (Dyadic, dyadic)

import qualified Debug.Trace as T

import qualified Data.PQueue.Prio.Max as Q

import Data.Maybe
import Control.CollectErrors
import GHC.Arr (Ix(range))
-- import System.Log.FastLogger
-- import System.Log.FastLogger.Date (simpleTimeFormat)
import qualified Data.Map as M
import qualified Prelude as P
import PropaFP.DeriveBounds (evalE_Rational)
import PropaFP.Parsers.Smt (eContainsVars, filterOutCircularVarEqualities, findVariablesInExpressions)
trace a x = x


-- log :: TimedFastLogger -> LogStr -> IO ()
-- log logger msg = logger (\time -> toLogStr (show time) <> toLogStr " " <> msg <> toLogStr "\n")

-- log1 msg =
--   do
--     clock <- newTimeCache simpleTimeFormat -- Do YYYY-MM-DD HH:MM:SS: time
--     (logger, cleanup) <- newTimedFastLogger clock (LogStdout defaultBufSize)
--     logger (\time -> toLogStr time <> toLogStr " " <> msg <> toLogStr "\n")
--     cleanup

applyExpression :: E.E -> VarMap -> Precision -> CN MPBall
applyExpression expression varMap p =
  apply f (varMapToBox varMap p)
  where
    f = expressionToBoxFun expression varMap p

gradientExpression :: E.E -> VarMap -> Precision -> V.Vector (CN MPBall)
gradientExpression expression varMap p =
  gradient f (varMapToBox varMap p)
  where
    f = expressionToBoxFun expression varMap p

applyExpressionLipschitz :: E.E -> VarMap -> Precision -> CN MPBall
applyExpressionLipschitz expression varMap p =
  applyLipschitz f (varMapToBox varMap p)
  where
    f = expressionToBoxFun expression varMap p

applyDisjunction :: [E.E] -> VarMap -> Precision -> [CN MPBall]
applyDisjunction expressions varMap p =
  map
  (\e -> apply (expressionToBoxFun e varMap p) box)
  expressions
  where
    box = varMapToBox varMap p

gradientDisjunction :: [E.E] -> VarMap -> Precision -> [V.Vector (CN MPBall)]
gradientDisjunction expressions varMap p =
  map
  (\e -> gradientExpression e varMap p)
  expressions

applyECNF :: [[E.E]] -> VarMap -> Precision -> [[CN MPBall]]
applyECNF cnf varMap p = map (\d -> applyDisjunction d varMap p) cnf

gradientEDoubleList :: [[E.E]] -> VarMap -> Precision -> [[V.Vector (CN MPBall)]]
gradientEDoubleList cnf varMap p = map (\d -> gradientDisjunction d varMap p) cnf

applyESafeCNF :: [[E.ESafe]] -> VarMap -> Precision -> [[CN MPBall]]
applyESafeCNF cnf  = applyECNF (map (map E.extractSafeE) cnf)

gradientESafeDoubleList :: [[E.ESafe]] -> VarMap -> Precision -> [[V.Vector (CN MPBall)]]
gradientESafeDoubleList cnf = gradientEDoubleList (map (map E.extractSafeE) cnf)

rangeAboveZero :: CN MPBall -> Bool
rangeAboveZero r = r !>! 0

disjunctionRangesAboveZero :: [CN MPBall] -> Bool
disjunctionRangesAboveZero = any rangeAboveZero

conjunctionRangesAboveZero :: [[CN MPBall]] -> Bool
conjunctionRangesAboveZero = all disjunctionRangesAboveZero

rangeBelowZero :: CN MPBall -> Bool
rangeBelowZero r = r !<! 0

disjunctionRangesBelowZero :: [CN MPBall] -> Bool
disjunctionRangesBelowZero = all rangeBelowZero

conjunctionRangesBelowZero :: [[CN MPBall]] -> Bool
conjunctionRangesBelowZero = all disjunctionRangesBelowZero

checkFWithApply :: E.F -> VarMap -> Precision -> CN Kleenean
checkFWithApply (E.FComp op e1 e2) varMap p =
  case op of
    E.Ge -> e1Val >= e2Val
    E.Gt -> e1Val >  e2Val
    E.Le -> e1Val <= e2Val
    E.Lt -> e1Val <  e2Val
    E.Eq -> e1Val == e2Val
  where
    e1Val = applyExpression e1 varMap p
    e2Val = applyExpression e2 varMap p
checkFWithApply (E.FConn op f1 f2) varMap p =
  case op of
    E.And   -> f1Val && f2Val
    E.Or    -> f1Val || f2Val
    E.Impl  -> not f1Val || f2Val
  where
    f1Val = checkFWithApply f1 varMap p
    f2Val = checkFWithApply f2 varMap p
checkFWithApply (E.FNot f) varMap p = not $ checkFWithApply f varMap p
checkFWithApply E.FTrue _ _         = cn CertainTrue
checkFWithApply E.FFalse _ _        = cn CertainFalse

filterOutFalseExpressions :: [((E.ESafe, BoxFun), CN MPBall)] -> [((E.ESafe, BoxFun), CN MPBall)]
filterOutFalseExpressions =
  filter
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _ ->    hasError range || not (range !<=! 0) -- We cannot decide on ranges with errors, so do not filter them out
      E.ENonStrict _ -> hasError range || not (range !<! 0)
  )

filterOutTrueExpressions :: [((E.ESafe, BoxFun), CN MPBall)] -> [((E.ESafe, BoxFun), CN MPBall)]
filterOutTrueExpressions =
  filter
  (\((safeE, _), range) ->
    hasError range || -- Do not filter if there is an error
    (
      case safeE of
        E.EStrict _ ->
          case unCN range > 0 of
            CertainTrue -> False
            _ -> True
          -- We cannot decide on ranges with errors, so do not filter them out
        E.ENonStrict _ ->
          case unCN range >= 0 of
            CertainTrue -> False
            _ -> True
    )
  )

decideRangesGEZero :: [((E.E, BoxFun), CN MPBall)] -> Bool
decideRangesGEZero = any (\(_, range) -> not (hasError range) && range !>=! 0)

decideConjunctionRangesFalse :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideConjunctionRangesFalse =
  any
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && range !<=! 0
      E.ENonStrict _  -> not (hasError range) && range !<! 0
  )


decideDisjunctionRangesTrue :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideDisjunctionRangesTrue =
  any
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && range !>! 0
      E.ENonStrict _  -> not (hasError range) && range !>=! 0
  )

decideDisjunctionRangesFalse :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideDisjunctionRangesFalse =
  all
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && not (hasError range) && range !<=! 0
      E.ENonStrict _  -> not (hasError range) && range !<! 0
  )

decideDisjunctionFalse :: [(E.ESafe, BoxFun)] -> TypedVarMap -> Precision -> Bool
decideDisjunctionFalse expressionsWithFunctions varMap p =
  all
  (\(safeE, f) ->
    let
      range = apply f (typedVarMapToBox varMap p)
    in
      case safeE of
        E.EStrict _    -> not (hasError range) && range !<=! 0
        E.ENonStrict _ -> not (hasError range) && range !<! 0
  )
  expressionsWithFunctions

decideConjunctionFalse :: [[(E.ESafe, BoxFun)]] -> TypedVarMap -> Precision -> Bool
decideConjunctionFalse c v p = any (\d -> decideDisjunctionFalse d v p) c

decideConjunctionTrue :: [(E.ESafe, BoxFun)] -> TypedVarMap -> Precision -> Bool
decideConjunctionTrue c v p =
  all (\(safeE, f) ->
    let
      range = apply f (typedVarMapToBox v p)
    in
      case safeE of
        E.EStrict _    -> not (hasError range) && range !>! 0
        E.ENonStrict _ -> not (hasError range) && range !>=! 0
  )
  c

-- TODO: Move to PropaFP
bisectWidestInterval :: VarMap -> (VarMap, VarMap)
bisectWidestInterval [] = error "Given empty box to bisect"
bisectWidestInterval vm = bisectVar vm widestVar
  where
    (widestVar, _) = widestInterval (tail vm) (head vm)

-- TODO: Move to PropaFP
bisectWidestTypedInterval :: TypedVarMap -> (TypedVarMap, TypedVarMap)
bisectWidestTypedInterval [] = error "Given empty box to bisect"
bisectWidestTypedInterval vm = bisectTypedVar vm widestVar
  where
    (widestVar, _) = widestTypedInterval (tail vm) $ typedVarIntervalToVarInterval (head vm)

-- |Ensures that the first varMap is within the second varMap
-- If it is, returns the first varMap.
-- If it isn't modifies the varMap so that the returned varMap is within the second varMap
-- Both varmaps must have the same number of vars in the same order (order of vars not checked)
ensureVarMapWithinVarMap :: VarMap -> VarMap -> VarMap
ensureVarMapWithinVarMap [] [] = []
ensureVarMapWithinVarMap ((v, (roundedL, roundedR)) : rvm) ((_, (originalL, originalR)) : ovm) =
  (v, (if roundedL < originalL then originalL else roundedL, if roundedR > originalR then originalR else roundedR))
  : ensureVarMapWithinVarMap rvm ovm
ensureVarMapWithinVarMap _ _ = error "Different sized varMaps"

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

-- |Version of computeCornerValuesAndDerivatives that returns Nothing if a calculation contains an error
safelyComputeCornerValuesAndDerivatives :: [((E.ESafe, BoxFun), CN MPBall)] -> Box -> Maybe [(CN MPBall, CN MPBall, V.Vector (CN MPBall))]
safelyComputeCornerValuesAndDerivatives esWithRanges box =
  if cornerRangesWithDerivativesHasError
    then Nothing
    else Just cornerRangesWithDerivatives
  where
    boxL = lowerBounds box
    boxU = upperBounds box

    -- filteredCornerRangesWithDerivatives = 
    --   [
    --     value |
    --     value <- parMap rseq (\((_, f), _) -> (apply f boxL, apply f boxU, gradient f box)) esWithRanges,
    --     not (hasError value)
    --   ]

    cornerRangesWithDerivatives =
      parMap rseq
      (\ ((_, f), _) -> (apply f boxL, apply f boxU, gradient f box))
      esWithRanges

    -- Check if any function contains errors
    cornerRangesWithDerivativesHasError =
      any
      (\(l, r, c) -> hasError l || hasError r || V.any hasError c)
      cornerRangesWithDerivatives

computeCornerValuesAndDerivatives :: [((E.ESafe, BoxFun), CN MPBall)] -> Box -> [(CN MPBall, CN MPBall, V.Vector (CN MPBall))]
computeCornerValuesAndDerivatives esWithRanges box = filteredCornerRangesWithDerivatives
  where
    boxL = lowerBounds box
    boxU = upperBounds box

    -- filteredCornerRangesWithDerivatives = 
    --   [
    --     value |
    --     value <- parMap rseq (\((_, f), _) -> (apply f boxL, apply f boxU, gradient f box)) esWithRanges,
    --     not (hasError value)
    --   ]

    cornerRangesWithDerivatives =
      parMap rseq
      (\ ((_, f), _) -> (apply f boxL, apply f boxU, gradient f box))
      esWithRanges

    -- Keep the functions where we can calculate all derivatives
    filteredCornerRangesWithDerivatives =
      filter
      (\(l, r, c) -> not (hasError l || hasError r || V.any hasError c)) -- Filter out functions where any partial derivative or corners contain an error
      cornerRangesWithDerivatives

checkDisjunctionResults :: [(Maybe Bool, Maybe a)] -> Maybe a -> (Maybe Bool, Maybe a)
checkDisjunctionResults [] Nothing = (Just False, Nothing)
checkDisjunctionResults [] indeterminateArea@(Just _) = (Nothing, indeterminateArea)
checkDisjunctionResults (result : results) mIndeterminateArea =
  case result of
    r@(Just True, _) -> r
    (Just False, _) ->
      checkDisjunctionResults results mIndeterminateArea
    (Nothing, indeterminateArea@(Just _)) -> checkDisjunctionResults results indeterminateArea
    (Nothing, Nothing) -> undefined

checkConjunctionResults :: [(Maybe Bool, Maybe a)] -> Maybe a -> (Maybe Bool, Maybe a)
checkConjunctionResults [] Nothing = (Just True, Nothing)
checkConjunctionResults [] indeterminateArea@(Just _) = (Nothing, indeterminateArea)
checkConjunctionResults (result : results) mIndeterminateArea =
  case result of
    (Just True, _) -> checkConjunctionResults results mIndeterminateArea
    r@(Just False, _) -> r
    (Nothing, indeterminateArea@(Just _)) -> checkConjunctionResults results indeterminateArea
    (Nothing, Nothing) -> undefined

-- FIXME: subst one var at a time
-- could probably subst -> simplify -> subst
substituteConjunctionEqualities :: [E.ESafe] -> [E.ESafe]
substituteConjunctionEqualities [] = []
substituteConjunctionEqualities conjunction@(conjunctionHead : conjunctionTail) =
  case equations of
    [] -> nub $ conjunction
    _  -> substituteConjunctionEqualities substConj
  where
    -- these equalities will not have any contradictions, they should already have been dealt with by deriveBounds and simplifyFDNF.
    equations = findVarDefiningEquations conjunctionHead conjunctionTail conjunctionTail
    (eq : eqs) = equations

    substConj = substituteAndSimplifyChosenEquation selectedDupe conjunction
    -- simplifiedSubstitutedConjunction = map (E.fmapESafe E.simplifyE) conjunction

    -- find duplicates for the first equation
    (dupes, nonDupes) = findDuplicateEquations eq eqs

    -- sort duplicates based on length
    sortedDupes = sortBy (\(_, y1) (_, y2) -> P.compare y1 y2) (eq : dupes)

    -- partition duplicates based on whether or not they contain variables
    (varFreeDupes, varContainingDupes) = partition (\(_, e) -> E.hasVarsE e) sortedDupes

    -- Select an equality to substitute
    -- Selects the shortest var-free equality or, if a var-free equality does not exist, the shortest equality
    selectedDupe = head $ varFreeDupes ++ varContainingDupes

    -- Find other var-defining equations for the var in the given equation
    findDuplicateEquations :: (String, E.E) -> [(String, E.E)] -> ([(String, E.E)], [(String, E.E)])
    findDuplicateEquations _ [] = ([],[])
    findDuplicateEquations (x1, y1) ((x2, y2) : es)
      | x1 P.== x2 =
        first ((x2, y2) :) $ findDuplicateEquations (x1, y1) es
      | otherwise =
        second ((x2, y2) :) $ findDuplicateEquations (x1, y1) es

    -- substitute the given equation in the given conjunction
    substituteAndSimplifyChosenEquation :: (String, E.E) -> [E.ESafe] -> [E.ESafe]
    substituteAndSimplifyChosenEquation _ [] = []
    substituteAndSimplifyChosenEquation (x, y) (e : c) = E.fmapESafe (\nonSafeE -> E.simplifyE (E.replaceEInE nonSafeE (E.Var x) y)) e : substituteAndSimplifyChosenEquation (x, y) c

    -- Find var equations
    -- Essentially, find Es in the conjunction of the form Var v >= e, Var v <= e
    -- The e is ignored if it contains Var v
    -- Else, store this equality as v, e in the resulting list 
    findVarDefiningEquations :: E.ESafe -> [E.ESafe] -> [E.ESafe] -> [(String, E.E)]
    findVarDefiningEquations _ [] [] = []
    findVarDefiningEquations _ [] (e : conj) = findVarDefiningEquations e conj conj
    findVarDefiningEquations e1 (e2 : es) conj =
      case e1 of
        -- x1 - y1 >= 0
        E.ENonStrict (E.EBinOp E.Sub v@(E.Var x1) y1) ->
          -- ignore circular equalities
          if x1 `elem` findVariablesInExpressions y1 then findVarDefiningEquations e1 es conj else
          case e2 of
            -- x2 - y2 >= 0
            E.ENonStrict (E.EBinOp E.Sub x2 (E.Var y2)) ->
              -- if we have x - y >= 0 && y - x >= 0, then y - x = 0, so y = x
              if x1 P.== y2 && y1 P.== x2
                then
                  (x1, y1) : findVarDefiningEquations e1 es conj
                else findVarDefiningEquations e1 es conj
            _ -> findVarDefiningEquations e1 es conj
        -- y1 - x1 >= 0
        E.ENonStrict (E.EBinOp E.Sub y1 v@(E.Var x1)) ->
          -- ignore circular equalities
          if x1 `elem` findVariablesInExpressions y1 then findVarDefiningEquations e1 es conj else
          case e2 of
            -- y2 - x2 >= 0
            E.ENonStrict (E.EBinOp E.Sub (E.Var y2) x2) ->
              -- if we have y - x >= 0 && x - y >= 0, then y - x = 0, so y = x
              if x1 P.== y2 && y1 P.== x2
                then
                  (x1, y1) : findVarDefiningEquations e1 es conj
                else findVarDefiningEquations e1 es conj
            _ -> findVarDefiningEquations e1 es conj
        -- x >= 0
        E.ENonStrict v1@(E.Var x1) ->
          case e2 of
            -- -x >= 0
            E.ENonStrict (E.EUnOp E.Negate (E.Var x2)) -> if x1 P.== x2 then (x1, E.Lit 0.0) : findVarDefiningEquations e1 es conj else findVarDefiningEquations e1 es conj
            -- 0 - x
            E.ENonStrict (E.EBinOp E.Sub (E.Lit 0.0) (E.Var x2)) -> if x1 P.== x2 then (x1, E.Lit 0.0) : findVarDefiningEquations e1 es conj else findVarDefiningEquations e1 es conj
            -- -1 * x
            E.ENonStrict (E.EBinOp E.Mul (E.Lit (-1.0)) (E.Var x2)) -> if x1 P.== x2 then (x1, E.Lit 0.0) : findVarDefiningEquations e1 es conj else findVarDefiningEquations e1 es conj
            -- (-(1)) * x
            E.ENonStrict (E.EBinOp E.Mul (E.EUnOp E.Negate (E.Lit (1.0))) (E.Var x2)) -> if x1 P.== x2 then (x1, E.Lit 0.0) : findVarDefiningEquations e1 es conj else findVarDefiningEquations e1 es conj
            _ -> findVarDefiningEquations e1 es conj
        _ -> findVarDefiningEquations e1 es conj


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

mean :: [CN Dyadic] -> CN Rational
mean xs = sum xs / length xs

-- |Avoids exceptions which occur when using the MixedTypesNumPrelude.maximum by ignoring
-- any numbers with errors
safeMaximum :: (HasOrderAsymmetric a a, CanTestCertainly (OrderCompareType a a), CanTestErrorsPresent a) =>
  a -> [a] -> a
safeMaximum currentMax [] = currentMax
safeMaximum currentMax (x : xs) =
  if hasError x
    then safeMaximum currentMax xs
    else safeMaximum (if x !>! currentMax then x else currentMax) xs

safeCentre :: (CanTestErrorsPresent t, IsBall t, CentreType t ~ CollectErrors CN.NumErrors Dyadic)
  => t -> CollectErrors CN.NumErrors Dyadic
safeCentre r = if hasError r then cn (dyadic (-1048576)) else AERN2.MP.Ball.centre r

safeMaximumCentre :: [BoxFun] -> Box -> Maybe (CN Dyadic) -> Maybe (CN Dyadic)
safeMaximumCentre []       _   mCurrentCentre = mCurrentCentre
safeMaximumCentre (f : fs) box mCurrentCentre =
  if hasError range
    then safeMaximumCentre fs box mCurrentCentre
    else
      case mCurrentCentre of
        Just currentMax ->
          if currentMax !>=! rangeCentre
            then safeMaximumCentre fs box mCurrentCentre
            else safeMaximumCentre fs box (Just rangeCentre)
        Nothing -> safeMaximumCentre fs box (Just rangeCentre)
  where
    range = apply f box
    rangeCentre = AERN2.MP.Ball.centre range

safeMaximumMinimum :: [BoxFun] -> Box -> Maybe (CN MPBall) -> Maybe (CN MPBall)
safeMaximumMinimum []       _   mCurrentMin = mCurrentMin
safeMaximumMinimum (f : fs) box mCurrentMin =
  if hasError range
    then safeMaximumMinimum fs box mCurrentMin
    else
      case mCurrentMin of
        Just currentMin ->
          if currentMin !>=! rangeMin
            then safeMaximumMinimum fs box mCurrentMin
            else safeMaximumMinimum fs box (Just rangeMin)
        Nothing -> safeMaximumMinimum fs box (Just rangeMin)
  where
    range = apply f box
    rangeMin = fst $ endpointsAsIntervals range

safeMaximumMaximum :: [BoxFun] -> Box -> Maybe (CN MPBall) -> Maybe (CN MPBall)
safeMaximumMaximum []       _   mCurrentMax = mCurrentMax
safeMaximumMaximum (f : fs) box mCurrentMax =
  if hasError range
    then safeMaximumMaximum fs box mCurrentMax
    else
      case mCurrentMax of
        Just currentMax ->
          if currentMax !>=! rangeMax
            then safeMaximumMinimum fs box mCurrentMax
            else safeMaximumMinimum fs box (Just rangeMax)
        Nothing -> safeMaximumMinimum fs box (Just rangeMax)
  where
    range = apply f box
    rangeMax = snd $ endpointsAsIntervals range

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

data Constraint = GEQ [(String, Rational)] Rational | LEQ [(String, Rational)] Rational

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
