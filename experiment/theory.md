 ### What is an Immittance Function?
The immittance function is a general term that refers to:

Impedance Function (Z(s)): The Laplace transform of the ratio of voltage to current in a linear, time-invariant (LTI) network.

𝑍
(
𝑠
)
=
𝑉
(
𝑠
)
𝐼
(
𝑠
)
Z(s)= 
I(s)
V(s)
​
 
Admittance Function (Y(s)): The inverse of impedance.

𝑌
(
𝑠
)
=
𝐼
(
𝑠
)
𝑉
(
𝑠
)
=
1
𝑍
(
𝑠
)
Y(s)= 
V(s)
I(s)
​
 = 
Z(s)
1
​
 
Both are rational functions of the complex frequency variable 
𝑠
s (Laplace domain). That is:

𝑍
(
𝑠
)
=
𝑁
(
𝑠
)
𝐷
(
𝑠
)
,
𝑌
(
𝑠
)
=
𝑁
′
(
𝑠
)
𝐷
′
(
𝑠
)
Z(s)= 
D(s)
N(s)
​
 ,Y(s)= 
D 
′
 (s)
N 
′
 (s)
​
 
## 📗 2. Theory of Immittance Functions
For a function to be a valid immittance function of a passive, linear, and time-invariant network:

2.1 Positive Real Functions (PRF)
The immittance function 
𝑍
(
𝑠
)
Z(s) or 
𝑌
(
𝑠
)
Y(s) must be Positive Real:

Definition of a Positive Real (PR) function:
A function 
𝐹
(
𝑠
)
F(s) is positive real if:

𝐹
(
𝑠
)
F(s) is real for real 
𝑠
s,

Re
[
𝐹
(
𝑠
)
]
≥
0
Re[F(s)]≥0 for 
Re
(
𝑠
)
>
0
Re(s)>0,

Poles and zeros of 
𝐹
(
𝑠
)
F(s) lie in the left-half of the complex plane (or on the jω-axis but simple and with positive residues).

2.2 Rationality
The function must be rational, i.e., it can be expressed as the ratio of two polynomials with real coefficients.

## 📙 3. Finding Poles and Zeros
3.1 Definitions
Given:

𝑍
(
𝑠
)
=
𝑁
(
𝑠
)
𝐷
(
𝑠
)
=
𝑎
𝑛
𝑠
𝑛
+
𝑎
𝑛
−
1
𝑠
𝑛
−
1
+
…
+
𝑎
0
𝑏
𝑚
𝑠
𝑚
+
𝑏
𝑚
−
1
𝑠
𝑚
−
1
+
…
+
𝑏
0
Z(s)= 
D(s)
N(s)
​
 = 
b 
m
​
 s 
m
 +b 
m−1
​
 s 
m−1
 +…+b 
0
​
 
a 
n
​
 s 
n
 +a 
n−1
​
 s 
n−1
 +…+a 
0
​
 
​
 
Zeros: Roots of the numerator 
𝑁
(
𝑠
)
N(s): values of 
𝑠
s where 
𝑍
(
𝑠
)
=
0
Z(s)=0

Poles: Roots of the denominator 
𝐷
(
𝑠
)
D(s): values of 
𝑠
s where 
𝑍
(
𝑠
)
→
∞
Z(s)→∞

## 📘 4. Example
Example Immittance Function:
𝑍
(
𝑠
)
=
𝑠
2
+
3
𝑠
+
2
𝑠
2
+
2
𝑠
+
5
Z(s)= 
s 
2
 +2s+5
s 
2
 +3s+2
​
 
## Step-by-Step: Find Poles and Zeros
Step 1: Factor Numerator and Denominator
Numerator (zeros):

𝑠
2
+
3
𝑠
+
2
=
(
𝑠
+
1
)
(
𝑠
+
2
)
⇒
Zeros at 
𝑠
=
−
1
,
−
2
s 
2
 +3s+2=(s+1)(s+2)⇒Zeros at s=−1,−2
Denominator (poles):

𝑠
2
+
2
𝑠
+
5
=
𝑠
2
+
2
𝑠
+
4
+
1
=
(
𝑠
+
1
)
2
+
2
2
⇒
Poles at 
𝑠
=
−
1
±
𝑗
2
s 
2
 +2s+5=s 
2
 +2s+4+1=(s+1) 
2
 +2 
2

 ⇒Poles at s=−1±j2
 
## 📕 5. Properties of Poles and Zeros in Immittance Functions
Realizability: For a network to be passive, all poles must be in the left-half s-plane.

Complex poles/zeros must occur in conjugate pairs to preserve real-valued time-domain functions.

Stability: Requires all poles to lie in the left-half of the s-plane.

Causality: Ensures that the degree of the numerator ≤ degree of denominator.

## 🛠 6. General Procedure to Analyze an Immittance Function
Identify the type (Z or Y).

Write in rational form.

Factor numerator and denominator.

Find zeros and poles.

Verify Positive Real condition (if checking passivity).

Plot on s-plane (optional but helpful).

## ✍️ 7. Example of a Y(s) Admittance Function
𝑌
(
𝑠
)
=
𝑠
+
3
𝑠
2
+
4
𝑠
+
13
Y(s)= 
s 
2
 +4s+13
s+3
​
 
Zero: 
𝑠
=
−
3
s=−3

Poles: Solve 
𝑠
2
+
4
𝑠
+
13
=
0
⇒
𝑠
=
−
2
±
𝑗
3
s 
2
 +4s+13=0⇒s=−2±j3

