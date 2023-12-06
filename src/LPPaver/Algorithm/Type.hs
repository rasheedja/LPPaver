{-|
Module      : LPPaver.Algorithm.Type
Description : Defines types useful for our decision algorithms.
Copyright   : (c) Junaid Rasheed, 2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining the useful types for our decision algorithms.
-}
module LPPaver.Algorithm.Type where

import MixedTypesNumPrelude
import qualified Prelude as P
import GHC.Generics (Generic)
import Control.DeepSeq (NFData)
import LPPaver.Constraint.Type
import PropaFP.Expression (ESafe)
import AERN2.BoxFun.Type (BoxFun)

-- |The result of evaluating a box as well as a list of pavings that leads to said box
data BoxStep box = Initial box | EvalTrue box | EvalFalse box | GaveUp box | Split box box box | Contract box box | ContractEmpty box | FoundModel box box 
  deriving (P.Eq, Show, Generic)

-- |The result of a box against some conjunction as well as a list of steps that leads to said result.
data DNFConjunctionResult box = SatBox box [BoxStep box] | UnsatBox [BoxStep box] | IndetBox box [BoxStep box]
  deriving (P.Eq, Show, Generic)

-- |The result of a box against some DNF.
-- If sat, give a list of pavings that leads to the satisfiable box.
-- If indeterminate, give a list of pavings that leads to the indeterminate box for an arbitrary conjunction in the DNF.
-- If unsat, give a list of list of pavings. Each inner list show the steps for each conjunction that lead to the unsat result.
data DNFResult box = SatDNF box [BoxStep box] | UnsatDNF [[BoxStep box]] | IndeterminateDNF box [BoxStep box]
  deriving (P.Eq, Show, Generic)

-- |Information required for an efficient best-first queue algorithm
data DNFConjunctionQueueInfo = QueueInfo {expressionsWithFunctions :: [(ESafe, BoxFun)], wasLeftCornerLinearisedLast :: Bool}
  deriving (Show, Generic)
