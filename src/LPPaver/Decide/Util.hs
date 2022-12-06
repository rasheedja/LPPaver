{-|
Module      : LPPaver.Decide.Util
Description : Utility functions for LPPaver.Decide modules
Copyright   : (c) Junaid Rasheed, 2021-2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining useful utility functions for the LPPaver.Decide modules
-}
module LPPaver.Decide.Util where

import MixedTypesNumPrelude
import qualified Prelude as P
import Data.List (nub, sortBy, partition)
import Data.Bifunctor
import PropaFP.Parsers.Smt (findVariablesInExpressions)
import AERN2.MP.Dyadic
import Control.CollectErrors
import AERN2.MP.Ball
import qualified Numeric.CollectErrors as CN
import AERN2.BoxFun.Type
import AERN2.BoxFun.Box
import qualified PropaFP.Expression as E
import PropaFP.VarMap
import qualified AERN2.Linear.Vector.Type as V
import AERN2.Kleenean
import PropaFP.Translators.BoxFun
import AERN2.BoxFun.Optimisation
import Control.Parallel.Strategies
import LPPaver.Decide.Type

-- TODO: Remove traces
-- |Dummy trace function
trace a x = x

-- |Calculate the range of some 'E.E' expression over the given 'VarMap' with the given 'Precision' using 'apply'.
applyExpression :: E.E -> VarMap -> Precision -> CN MPBall
applyExpression expression varMap p =
  apply f (varMapToBox varMap p)
  where
    f = expressionToBoxFun expression varMap p

-- |Calculate the gradient of some 'E.E' expression over the given 'VarMap' with the given 'Precision' using 'gradient'.
gradientExpression :: E.E -> VarMap -> Precision -> V.Vector (CN MPBall)
gradientExpression expression varMap p =
  gradient f (varMapToBox varMap p)
  where
    f = expressionToBoxFun expression varMap p

-- |Run 'applyExpression' on each 'E.E' in a given list
applyExpressionList :: [E.E] -> VarMap -> Precision -> [CN MPBall]
applyExpressionList expressions varMap p =
  map
  (\e -> apply (expressionToBoxFun e varMap p) box)
  expressions
  where
    box = varMapToBox varMap p

-- |Run 'gradientExpression' on each 'E.E' in a given list
gradientExpressionList :: [E.E] -> VarMap -> Precision -> [V.Vector (CN MPBall)]
gradientExpressionList expressions varMap p =
  map
  (\e -> gradientExpression e varMap p)
  expressions

-- |Run 'applyExpressionList' on each '[E.E]' in a given list
applyExpressionDoubleList :: [[E.E]] -> VarMap -> Precision -> [[CN MPBall]]
applyExpressionDoubleList cnf varMap p = map (\d -> applyExpressionList d varMap p) cnf

-- |Run 'gradientExpressionList' on each '[E.E]' in a given list
gradientExpressionDoubleList :: [[E.E]] -> VarMap -> Precision -> [[V.Vector (CN MPBall)]]
gradientExpressionDoubleList cnf varMap p = map (\d -> gradientExpressionList d varMap p) cnf

-- |Run 'applyExpressionDoubleList' on an [['E.ESafe']]
applyESafeDoubleList :: [[E.ESafe]] -> VarMap -> Precision -> [[CN MPBall]]
applyESafeDoubleList cnf  = applyExpressionDoubleList (map (map E.extractSafeE) cnf)

-- |Run 'gradientExpressionDoubleList' on an [['E.ESafe']]
gradientESafeDoubleList :: [[E.ESafe]] -> VarMap -> Precision -> [[V.Vector (CN MPBall)]]
gradientESafeDoubleList cnf = gradientExpressionDoubleList (map (map E.extractSafeE) cnf)

-- |Evaluate an 'E.F' over some 'VarMap' with a given 'Precision' using 'applyExpression'
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

-- |Filter out expressions in a list which are certainly false.
-- If an expression cannot be evaluated, do not filter it out.
filterOutFalseExpressions :: [((E.ESafe, BoxFun), CN MPBall)] -> [((E.ESafe, BoxFun), CN MPBall)]
filterOutFalseExpressions =
  filter
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _ ->    hasError range || not (range !<=! 0) -- We cannot decide on ranges with errors, so do not filter them out
      E.ENonStrict _ -> hasError range || not (range !<! 0)
  )

-- |Filter out expressions in a list which are certainly true.
-- If an expression cannot be evaluated, do not filter it out.
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

-- |Returns true if any of the ranges of the given Expression have been evaluated to be greater than or equal to zero.
decideRangesGEZero :: [((E.E, BoxFun), CN MPBall)] -> Bool
decideRangesGEZero = any (\(_, range) -> not (hasError range) && range !>=! 0)

-- |The mean of a list of 'CN Dyadic' numbers.
mean :: [CN Dyadic] -> CN Rational
mean xs = sum xs / length xs

-- |Safely find the maximum of a list of ordered elements, avoiding exceptions by ignoring anything with errors
safeMaximum :: (HasOrderAsymmetric a a, CanTestCertainly (OrderCompareType a a), CanTestErrorsPresent a) =>
  a -> [a] -> a
safeMaximum currentMax [] = currentMax
safeMaximum currentMax (x : xs) =
  if hasError x
    then safeMaximum currentMax xs
    else safeMaximum (if x !>! currentMax then x else currentMax) xs

-- |Safely find the maximum centre of a list of 'BoxFun's over a given 'Box', avoiding exceptions by ignoring anything with errors
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

-- |Safely find the maximum minimum of a list of 'BoxFun's over a given 'Box', avoiding exceptions by ignoring anything with errors
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

-- |Safely find the maximum maximum of a list of 'BoxFun's over a given 'Box', avoiding exceptions by ignoring anything with errors
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

-- TODO: Move to PropaFP
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

-- |Version of 'computeCornerValuesAndDerivatives' that returns Nothing if a calculation contains an error
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

-- |Return the value of the given 'E.ESafe' expression/'BoxFun' at the extreme left corner and the extreme right corner as well as partial derivatives over the given 'Box'.
-- Extreme corners are defined as the minimum/maximum of every interval in a 'Box' for the left/right extreme corners respectively.
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

-- |Decide if the ranges of a conjunction of 'E.ESafe' expressions is false in a standard manner
-- A range with an error is treated as false.
decideConjunctionRangesFalse :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideConjunctionRangesFalse =
  any
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && range !<=! 0
      E.ENonStrict _  -> not (hasError range) && range !<! 0
  )

-- |Decide if the ranges of a conjunction of 'E.ESafe' expressions is true in a standard manner
-- A range with an error is treated as false.
decideConjunctionRangesTrue :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideConjunctionRangesTrue =
  all
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && range !>! 0
      E.ENonStrict _  -> not (hasError range) && range !>=! 0
  )


-- |Decide if the ranges of a disjunction of 'E.ESafe' expressions is true in a standard manner
-- A range with an error is treated as false.
decideDisjunctionRangesTrue :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideDisjunctionRangesTrue =
  any
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && range !>! 0
      E.ENonStrict _  -> not (hasError range) && range !>=! 0
  )

-- |Decide if the ranges of a disjunction of 'E.ESafe' expressions is false in a standard manner
-- A range with an error is treated as false.
decideDisjunctionRangesFalse :: [((E.ESafe, BoxFun), CN MPBall)] -> Bool
decideDisjunctionRangesFalse =
  all
  (\((safeE, _), range) ->
    case safeE of
      E.EStrict _     -> not (hasError range) && not (hasError range) && range !<=! 0
      E.ENonStrict _  -> not (hasError range) && range !<! 0
  )

-- |Evaluate the range of each 'E.ESafe' expression in a disjunction and check if the disjunction is false in a standard manner. 
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

-- |Evaluate the range of each 'E.ESafe' expression in a CNF and check if the CNF is false in a standard manner. 
decideCNFFalse :: [[(E.ESafe, BoxFun)]] -> TypedVarMap -> Precision -> Bool
decideCNFFalse c v p = any (\d -> decideDisjunctionFalse d v p) c

-- |Evaluate the range of each 'E.ESafe' expression in a conjunction and check if the conjunction is true in a standard manner. 
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

-- |Check the results of a disjunction of 'DNFConjunctionResult's in a standard manner
checkDisjunctionResults :: [DNFConjunctionResult box] -> Maybe (DNFConjunctionResult box) -> [[BoxStep box]] -> DNFResult box
checkDisjunctionResults [] (Just (IndeterminateBox indeterminateArea indeterminatePavings)) _ = IndeterminateDNF indeterminateArea indeterminatePavings
checkDisjunctionResults [] _ unsatPavings                                                     = UnsatDNF unsatPavings
checkDisjunctionResults (result : results) mIndeterminateArea unsatPavings =
  case result of
    r@(SatBox potentialModel pavings) -> SatDNF potentialModel pavings
    (UnsatBox pavings) -> checkDisjunctionResults results mIndeterminateArea (unsatPavings ++ [pavings])
    r@(IndeterminateBox _ _) -> checkDisjunctionResults results (Just r) unsatPavings

-- |Check the results of a conjunction in a standard manner
checkConjunctionResults :: [(Maybe Bool, Maybe potentialModel)] -> Maybe potentialModel -> (Maybe Bool, Maybe potentialModel)
checkConjunctionResults [] Nothing = (Just True, Nothing)
checkConjunctionResults [] indeterminateArea@(Just _) = (Nothing, indeterminateArea)
checkConjunctionResults (result : results) mIndeterminateArea =
  case result of
    (Just True, _) -> checkConjunctionResults results mIndeterminateArea
    r@(Just False, _) -> r
    (Nothing, indeterminateArea@(Just _)) -> checkConjunctionResults results indeterminateArea
    (Nothing, Nothing) -> undefined

-- |Substitute all variable-defining equalities in a given conjunction.
-- Simplify the conjunction after substituting all variable-defining equalities.
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
