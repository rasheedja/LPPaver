(set-logic QF_NRA)
(declare-fun result__1 () Real)
(assert (<= (/ -3819831 4194304) result__1))
(assert (<= result__1 (/ 7639661 8388608)))
(declare-fun x () Real)
(assert (<= (/ -6851933 8388608) x))
(assert (<= x (/ 6851933 8388608)))
(assert 
	(or 
		(not 
			(<= 
				(abs x)
				(/ 1 67108864)))
		(= 
			result__1
			x)))
(assert 
	(or 
		(not 
			(not 
				(<= 
					(abs x)
					(/ 1 67108864))))
		(and 
			(<= 
				result__1
				(+ (+ (* x (* (+ (* (+ (* (* -1 (/ 3350387 17179869184)) (* x x)) (/ 4473217 536870912)) (* x x)) (* -1 (/ 349525 2097152))) (* x x))) x) (/ 2263189 50000000000000))) 
			(<= 
				(- (+ (* x (* (+ (* (+ (* (* -1 (/ 3350387 17179869184)) (* x x)) (/ 4473217 536870912)) (* x x)) (* -1 (/ 349525 2097152))) (* x x))) x) (/ 2263189 50000000000000))
				result__1))))
(assert 
	(not 
		(<= 
			(* (* -1 75) (/ 1 1000000000))
			(+ result__1 (* -1 (sin x))))))
(check-sat)
(get-model)
(exit)
