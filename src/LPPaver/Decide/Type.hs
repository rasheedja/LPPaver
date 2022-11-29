{-|
Module      : LPPaver.Decide.Type
Description : Defines types useful for our decision algorithms.
Copyright   : (c) Junaid Rasheed, 2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining the useful types for our decision algorithms.
-}
module LPPaver.Decide.Type where

import MixedTypesNumPrelude
import qualified Prelude as P
import LPPaver.Constraint.Type
import PropaFP.Expression (ESafe)
import AERN2.BoxFun.Type (BoxFun)

-- |Possible results of evaluating a box using either interval methods or by linearisations
data BoxEvalResult = UnsatEval | UnsatLin | IndetEval | IndetLin | SatEval | SatLin | NoEval | Unknown
  deriving (P.Eq, Show)

-- |Whether a box was split, pruned, the initial (starting) box, or was unchanged
data BoxPavingType = Prune | Split | Start | None
  deriving (P.Eq, Show)

-- |Stores information on how our paving algorithm leads to boxes of this type.
-- Usage: BoxPaving {yourBox} {resultOfEvaluatingTheBox} {howWeGotToThisBoxFromThePreviousBox}
data BoxPaving boxType = BoxPaving boxType BoxEvalResult BoxPavingType deriving (P.Eq, Show)

-- |A list of 'BoxPaving'
type BoxPavings boxType = [BoxPaving boxType]

-- |The result of evaluating a box as well as a list of pavings that leads to said box
data BoxResult boxType = SatBox boxType (BoxPavings boxType) | UnsatBox (BoxPavings boxType) | IndeterminateBox boxType (BoxPavings boxType)
  deriving (P.Eq, Show)

-- |The 'BoxResult' of a conjunction within a DNF.
type DNFConjunctionResult boxType = BoxResult boxType

-- |The result of evaluating a DNF over a certain box as well as a list of pavings that leads to said result.
data DNFResult boxType = SatDNF boxType (BoxPavings boxType) | UnsatDNF [BoxPavings boxType] | IndeterminateDNF boxType (BoxPavings boxType)
  deriving (P.Eq, Show)

-- |A type used to hold an 'ESafe' expression with it's equivalent 'BoxFun'.
type ESafeWithBoxFun = (ESafe, BoxFun)

-- |Information required for an efficient best-first queue algorithm
data DNFConjunctionQueueInfo = QueueInfo {expressionsWithFunctions :: [ESafeWithBoxFun], wasLeftCornerLinearisedLast :: Bool, wasBoxPruned :: Bool}