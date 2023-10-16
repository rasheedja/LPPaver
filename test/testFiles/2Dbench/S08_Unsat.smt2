(set-logic QF_NRA)
(declare-fun x () Real)
(assert (<= (/ 0 1) x))
(assert (<= x (/ 50 1)))
(declare-fun y () Real)
(assert (<= (/ 0 1) y))
(assert (<= y (/ 50 1)))
(assert 
	(and
		(<= 
			45.125
			(sqrt (+ (^ x 2) (^ y 2))))
		(<= 
			(sqrt (+ (^ x 2) (^ y 2)))
			45)))
(check-sat)
(get-model)
(exit)
