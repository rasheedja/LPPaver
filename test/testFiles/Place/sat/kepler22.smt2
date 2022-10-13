; kepler.py
; d=2 , n=2

(set-logic QF_NRA)
; declare variables holding coordinates for the centre of a sphere
(declare-fun c1_1 () Real)
(declare-fun c1_2 () Real)
(declare-fun c2_1 () Real)
(declare-fun c2_2 () Real)

; declare variables storing distances between centres
(declare-fun dist1_2_1 () Real)
(declare-fun dist1_2_2 () Real)

; constrain centre points to be in [-1,1]
(assert (and (<= (- 1) c1_1) (<= c1_1 1)))
(assert (and (<= (- 1) c1_2) (<= c1_2 1)))
(assert (and (<= (- 1) c2_1) (<= c2_1 1)))
(assert (and (<= (- 1) c2_2) (<= c2_2 1)))

; give bounds on possible values for dist constants
(assert (and (<= (- 2) dist1_2_1) (<= dist1_2_1 2)))
(assert (and (<= (- 2) dist1_2_2) (<= dist1_2_2 2)))

; define dist constants
(assert (= dist1_2_1 (- c1_1 c2_1)))
(assert (= dist1_2_2 (- c1_2 c2_2)))

; the goals
(assert (> (+ (* dist1_2_1 dist1_2_1) (* dist1_2_2 dist1_2_2)) 4))

(check-sat)
(get-model)
(exit)
