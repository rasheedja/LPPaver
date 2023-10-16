(set-logic QF_NRA)
(declare-fun x () Real)
(assert (<= (/ -50 1) x))
(assert (<= x (/ 50 1)))
(declare-fun y () Real)
(assert (<= (/ 1 1) y))
(assert (<= y (/ 50 1)))
(assert 
	(<=
		13
		(/
			(* 12 y)
			(sqrt (+ (^ (- x 12) 2) (^ y 2))))))
(check-sat)
(get-model)
(exit)
