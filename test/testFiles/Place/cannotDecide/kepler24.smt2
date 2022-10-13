; kepler.py
; d=2 , n=4

(set-logic QF_NRA)
; declare variables holding coordinates for the centre of a sphere
(declare-fun c1_1 () Real)
(declare-fun c1_2 () Real)
(declare-fun c2_1 () Real)
(declare-fun c2_2 () Real)
(declare-fun c3_1 () Real)
(declare-fun c3_2 () Real)
(declare-fun c4_1 () Real)
(declare-fun c4_2 () Real)

; declare variables storing distances between centres
(declare-fun dist1_2_1 () Real)
(declare-fun dist1_2_2 () Real)
(declare-fun dist1_3_1 () Real)
(declare-fun dist1_3_2 () Real)
(declare-fun dist1_4_1 () Real)
(declare-fun dist1_4_2 () Real)
(declare-fun dist2_3_1 () Real)
(declare-fun dist2_3_2 () Real)
(declare-fun dist2_4_1 () Real)
(declare-fun dist2_4_2 () Real)
(declare-fun dist3_4_1 () Real)
(declare-fun dist3_4_2 () Real)

; constrain centre points to be in [-1,1]
(assert (and (<= (- 1) c1_1) (<= c1_1 1)))
(assert (and (<= (- 1) c1_2) (<= c1_2 1)))
(assert (and (<= (- 1) c2_1) (<= c2_1 1)))
(assert (and (<= (- 1) c2_2) (<= c2_2 1)))
(assert (and (<= (- 1) c3_1) (<= c3_1 1)))
(assert (and (<= (- 1) c3_2) (<= c3_2 1)))
(assert (and (<= (- 1) c4_1) (<= c4_1 1)))
(assert (and (<= (- 1) c4_2) (<= c4_2 1)))

; give bounds on possible values for dist constants
(assert (and (<= (- 2) dist1_2_1) (<= dist1_2_1 2)))
(assert (and (<= (- 2) dist1_2_2) (<= dist1_2_2 2)))
(assert (and (<= (- 2) dist1_3_1) (<= dist1_3_1 2)))
(assert (and (<= (- 2) dist1_3_2) (<= dist1_3_2 2)))
(assert (and (<= (- 2) dist1_4_1) (<= dist1_4_1 2)))
(assert (and (<= (- 2) dist1_4_2) (<= dist1_4_2 2)))
(assert (and (<= (- 2) dist2_3_1) (<= dist2_3_1 2)))
(assert (and (<= (- 2) dist2_3_2) (<= dist2_3_2 2)))
(assert (and (<= (- 2) dist2_4_1) (<= dist2_4_1 2)))
(assert (and (<= (- 2) dist2_4_2) (<= dist2_4_2 2)))
(assert (and (<= (- 2) dist3_4_1) (<= dist3_4_1 2)))
(assert (and (<= (- 2) dist3_4_2) (<= dist3_4_2 2)))

; define dist constants
(assert (= dist1_2_1 (- c1_1 c2_1)))
(assert (= dist1_2_2 (- c1_2 c2_2)))
(assert (= dist1_3_1 (- c1_1 c3_1)))
(assert (= dist1_3_2 (- c1_2 c3_2)))
(assert (= dist1_4_1 (- c1_1 c4_1)))
(assert (= dist1_4_2 (- c1_2 c4_2)))
(assert (= dist2_3_1 (- c2_1 c3_1)))
(assert (= dist2_3_2 (- c2_2 c3_2)))
(assert (= dist2_4_1 (- c2_1 c4_1)))
(assert (= dist2_4_2 (- c2_2 c4_2)))
(assert (= dist3_4_1 (- c3_1 c4_1)))
(assert (= dist3_4_2 (- c3_2 c4_2)))

; the goals
(assert (> (+ (* dist1_2_1 dist1_2_1) (* dist1_2_2 dist1_2_2)) 4))
(assert (> (+ (* dist1_3_1 dist1_3_1) (* dist1_3_2 dist1_3_2)) 4))
(assert (> (+ (* dist1_4_1 dist1_4_1) (* dist1_4_2 dist1_4_2)) 4))
(assert (> (+ (* dist2_3_1 dist2_3_1) (* dist2_3_2 dist2_3_2)) 4))
(assert (> (+ (* dist2_4_1 dist2_4_1) (* dist2_4_2 dist2_4_2)) 4))
(assert (> (+ (* dist3_4_1 dist3_4_1) (* dist3_4_2 dist3_4_2)) 4))

(check-sat)
(get-model)
(exit)
