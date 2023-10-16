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
			(/ 
				(exp (+ x 1))
				(exp (sqrt (+ y 1)))
			(- 
			 (* 100 
			 	(sqrt (+ (* x y) 7))
			 )
			 1000))
		(<= 
			(- 
				(* x (log (+ (* 10 y) 3)))
				1000)
			(* 
				(+ (^ x 2) (+ 1 (* -3 x)))
				(sqrt (+ y 2)))
			))))
(check-sat)
(get-model)
(exit)
