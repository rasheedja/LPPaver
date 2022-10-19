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

trace a x = x

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
