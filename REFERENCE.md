# Reference

Everything officially understood by LPPaver is shown below.
Anything enclosed with {} are things that you should replace as appropriate.
LPPaver uses [PropaFP](https://github.com/rasheedja/PropaFP/) to parse and simplify files.

```lisp

(declare-fun varName () varType) ; Used to declare variables
                                 ; varType must be Real or Integer
                                 ; custom function declarations (i.e., declare-fun with some input types) is not currently supported
(assert {booleanValue})

(>= {n1} {n2}) ; n1 and n2 are things that evaluate to a Real/Integer number
               ; Comparisons return a boolean value
(<= {n1} {n2})
(> {n1} {n2})
(< {n1} {n2})
(= {n1} {n2})

(and {b1} {b2}) ; b1 and b2 are things that evaluate to a boolean value
(or {b1} {b2})
(=> {b1} {b2}) ; this is an implication, i.e. b1 implies b2

(not {b}) ; b is something that evaluates to a boolean value

true  ; boolean value true
false ; boolean value false

(+ {n1} {n2}) ; n1 and n2 are things that evaluate to a Real/Integer number
(- {n1} {n2})
(* {n1} {n2})
(/ {n1} {n2})
(^ {n1} {n2})
(min {n1} {n2})
(max {n1} {n2})
(mod {n1} {n2})

(sqrt {n}) ; n is something that evaluates to a Real/Integer number
(abs {n}) 
(sin {n}) 
(cos {n}) 

s ; Strings are interpreted as variables. All variables must be bounded: unbounded variables are quietly ignored.
n ; Any number is treated as a Real number.

(to_int_rne {n}) ; round n to the nearest integer, with ties rounding to the nearest even number
(to_int_rtp {n}) ; round n to the nearest integer, with ties rounding towards positive infinity
(to_int_rtn {n}) ; round n to the nearest integer, with ties rounding towards negative infinity
(to_int_rtz {n}) ; round n to the nearest integer, with ties rounding towards zero
(to_int_rna {n}) ; round n to the nearest integer, with ties rounding away from zero

```
