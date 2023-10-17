(set-logic QF_NRA)
(declare-fun x () Real)
(assert (<= (/ -5 1) x))
(assert (<= x (/ 5 1)))
(declare-fun y () Real)
(assert (<= (/ -5 1) y))
(assert (<= y (/ 5 1)))
(assert 
	(and
		(<=
			(^
				(+ (^ x 2) (+ (^ y 2) (+ (* 24 x) 36)))
				2)
			(+ 
				(* 64 (^ (+ x 3) 3))
				-400))
		(<=
			16
			(+ (^ x 2) (^ y 2)))))
(check-sat)
(get-model)
(exit)
