module LPPaver.Constraint.Type where

import MixedTypesNumPrelude

data Constraint = GEQ [(String, Rational)] Rational | LEQ [(String, Rational)] Rational
