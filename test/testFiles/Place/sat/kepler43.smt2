; kepler.py
; d=4 , n=3

(set-logic QF_NRA)
; declare variables holding coordinates for the centre of a sphere
(declare-fun c1_1 () Real)
(declare-fun c1_2 () Real)
(declare-fun c1_3 () Real)
(declare-fun c1_4 () Real)
(declare-fun c2_1 () Real)
(declare-fun c2_2 () Real)
(declare-fun c2_3 () Real)
(declare-fun c2_4 () Real)
(declare-fun c3_1 () Real)
(declare-fun c3_2 () Real)
(declare-fun c3_3 () Real)
(declare-fun c3_4 () Real)

; declare variables storing distances between centres
(declare-fun dist1_2_1 () Real)
(declare-fun dist1_2_2 () Real)
(declare-fun dist1_2_3 () Real)
(declare-fun dist1_2_4 () Real)
(declare-fun dist1_3_1 () Real)
(declare-fun dist1_3_2 () Real)
(declare-fun dist1_3_3 () Real)
(declare-fun dist1_3_4 () Real)
(declare-fun dist2_3_1 () Real)
(declare-fun dist2_3_2 () Real)
(declare-fun dist2_3_3 () Real)
(declare-fun dist2_3_4 () Real)

; constrain centre points to be in [-1,1]
(assert (and (<= (- 1) c1_1) (<= c1_1 1)))
(assert (and (<= (- 1) c1_2) (<= c1_2 1)))
(assert (and (<= (- 1) c1_3) (<= c1_3 1)))
(assert (and (<= (- 1) c1_4) (<= c1_4 1)))
(assert (and (<= (- 1) c2_1) (<= c2_1 1)))
(assert (and (<= (- 1) c2_2) (<= c2_2 1)))
(assert (and (<= (- 1) c2_3) (<= c2_3 1)))
(assert (and (<= (- 1) c2_4) (<= c2_4 1)))
(assert (and (<= (- 1) c3_1) (<= c3_1 1)))
(assert (and (<= (- 1) c3_2) (<= c3_2 1)))
(assert (and (<= (- 1) c3_3) (<= c3_3 1)))
(assert (and (<= (- 1) c3_4) (<= c3_4 1)))

; give bounds on possible values for dist constants
(assert (and (<= (- 2) dist1_2_1) (<= dist1_2_1 2)))
(assert (and (<= (- 2) dist1_2_2) (<= dist1_2_2 2)))
(assert (and (<= (- 2) dist1_2_3) (<= dist1_2_3 2)))
(assert (and (<= (- 2) dist1_2_4) (<= dist1_2_4 2)))
(assert (and (<= (- 2) dist1_3_1) (<= dist1_3_1 2)))
(assert (and (<= (- 2) dist1_3_2) (<= dist1_3_2 2)))
(assert (and (<= (- 2) dist1_3_3) (<= dist1_3_3 2)))
(assert (and (<= (- 2) dist1_3_4) (<= dist1_3_4 2)))
(assert (and (<= (- 2) dist2_3_1) (<= dist2_3_1 2)))
(assert (and (<= (- 2) dist2_3_2) (<= dist2_3_2 2)))
(assert (and (<= (- 2) dist2_3_3) (<= dist2_3_3 2)))
(assert (and (<= (- 2) dist2_3_4) (<= dist2_3_4 2)))

; define dist constants
(assert (= dist1_2_1 (- c1_1 c2_1)))
(assert (= dist1_2_2 (- c1_2 c2_2)))
(assert (= dist1_2_3 (- c1_3 c2_3)))
(assert (= dist1_2_4 (- c1_4 c2_4)))
(assert (= dist1_3_1 (- c1_1 c3_1)))
(assert (= dist1_3_2 (- c1_2 c3_2)))
(assert (= dist1_3_3 (- c1_3 c3_3)))
(assert (= dist1_3_4 (- c1_4 c3_4)))
(assert (= dist2_3_1 (- c2_1 c3_1)))
(assert (= dist2_3_2 (- c2_2 c3_2)))
(assert (= dist2_3_3 (- c2_3 c3_3)))
(assert (= dist2_3_4 (- c2_4 c3_4)))

; the goals
(assert (> (+ (* dist1_2_1 dist1_2_1) (+ (* dist1_2_2 dist1_2_2) (+ (* dist1_2_3 dist1_2_3) (* dist1_2_4 dist1_2_4)))) 4))
(assert (> (+ (* dist1_3_1 dist1_3_1) (+ (* dist1_3_2 dist1_3_2) (+ (* dist1_3_3 dist1_3_3) (* dist1_3_4 dist1_3_4)))) 4))
(assert (> (+ (* dist2_3_1 dist2_3_1) (+ (* dist2_3_2 dist2_3_2) (+ (* dist2_3_3 dist2_3_3) (* dist2_3_4 dist2_3_4)))) 4))

(check-sat)
(get-model)
(exit)
