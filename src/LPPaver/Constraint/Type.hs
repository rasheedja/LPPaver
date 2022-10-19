{-|
Module      : LPPaver.Constraint.Type
Description : Defines the 'Constraint' type
Copyright   : (c) Junaid Rasheed, 2021-2022
License     : MPL
Maintainer  : jrasheed178@gmail.com
Stability   : experimental
Module defining the 'Constraint' data type.
-}
module LPPaver.Constraint.Type where

import MixedTypesNumPrelude

-- | The 'Constraint' data type is used to represent non-strict inequalities.
-- The LHS is a list of 'String' variables along with their 'Rational' coefficients.
-- The RHS is a 'Rational' number. 
data Constraint = GEQ [(String, Rational)] Rational | LEQ [(String, Rational)] Rational
