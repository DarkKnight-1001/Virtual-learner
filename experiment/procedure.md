### Procedure


## **1. Introduction to Immittance Functions**

In electrical network analysis, the term **"immittance"** is a general term that includes both:

* **Impedance** $Z(s) = \frac{V(s)}{I(s)}$
* **Admittance** $Y(s) = \frac{I(s)}{V(s)}$

These functions describe how a network responds to a sinusoidal or transient excitation and are typically expressed in the **Laplace domain** (frequency domain), where $s = \sigma + j\omega$ is a complex frequency variable.

Finding the **poles** and **zeroes** of immittance functions provides crucial insight into the system’s:

* Frequency response
* Stability
* Resonance
* System order and bandwidth

---

## **2. Mathematical Background**

Let the immittance function be represented as:

$$
H(s) = \frac{N(s)}{D(s)}
$$

Where:

* $H(s)$ is the immittance function (either $Z(s)$ or $Y(s)$)
* $N(s)$: Numerator polynomial of $s$
* $D(s)$: Denominator polynomial of $s$

### 📍 **Zeroes**:

* Are the roots of the **numerator polynomial** $N(s)$
* Values of $s$ for which $H(s) = 0$

### 📍 **Poles**:

* Are the roots of the **denominator polynomial** $D(s)$
* Values of $s$ for which $H(s) \to \infty$

---

## **3. General Procedure for Finding Poles and Zeroes**

### ### 🔹 Step 1: Determine the Type of Immittance Function

Identify whether the function is:

* **Impedance $Z(s) = \frac{V(s)}{I(s)}$** → ratio of voltage to current
* **Admittance $Y(s) = \frac{I(s)}{V(s)}$** → reciprocal of impedance

This identification is important because it influences how you model the elements in the Laplace domain.

---

### ### 🔹 Step 2: Convert Circuit Elements into Laplace Domain

In the Laplace domain, reactive elements are represented as functions of $s$:

| Circuit Element | Impedance $Z(s)$ | Admittance $Y(s)$ |
| --------------- | ---------------- | ----------------- |
| Resistor $R$    | $R$              | $\frac{1}{R}$     |
| Inductor $L$    | $sL$             | $\frac{1}{sL}$    |
| Capacitor $C$   | $\frac{1}{sC}$   | $sC$              |

Thus, convert the entire circuit using these transformations.

---

### ### 🔹 Step 3: Model the Circuit

Using standard analysis techniques:

* **Mesh analysis** (loop currents)
* **Nodal analysis** (node voltages)
* **Network theorems** (Thevenin/Norton equivalents)
* **Two-port network methods** (if applicable)

Reduce the circuit to a single immittance function (either $Z(s)$ or $Y(s)$).

#### ➤ Example Expression:

$$
Z(s) = \frac{V(s)}{I(s)} = \frac{N(s)}{D(s)} = \frac{a_n s^n + a_{n-1} s^{n-1} + \dots + a_0}{b_m s^m + b_{m-1} s^{m-1} + \dots + b_0}
$$

Make sure you simplify all combinations:

* Series: Add impedances directly
* Parallel: Use reciprocal relation for parallel components

---

### ### 🔹 Step 4: Express the Function as a Rational Function

Simplify the function into a ratio of two polynomials.

Ensure that:

* All terms are expressed in powers of $s$
* The numerator and denominator are polynomials with real coefficients

---

### ### 🔹 Step 5: Find the Zeroes (Roots of Numerator)

To find the zeroes:

1. Set the numerator equal to zero:

   $$
   N(s) = 0
   $$

2. Solve the polynomial equation for $s$. These roots are the **zeroes**.

3. Methods to solve:

   * For quadratic or cubic: Use quadratic formula or factorization
   * For higher-order polynomials: Use numerical techniques (e.g., Newton-Raphson) or software tools (MATLAB, Python, WolframAlpha)

---

### ### 🔹 Step 6: Find the Poles (Roots of Denominator)

To find the poles:

1. Set the denominator equal to zero:

   $$
   D(s) = 0
   $$

2. Solve the polynomial for $s$. These are the **poles**.

These indicate the natural frequencies (and potential instabilities) of the system.

---

### ### 🔹 Step 7: Plot Poles and Zeroes in the s-plane

Plot the locations of poles and zeroes on the complex $s$-plane:

* Poles: Marked with an **"X"**
* Zeroes: Marked with an **"O"**

The plot helps you visualize:

* System stability (poles in left-half plane → stable)
* Oscillatory nature (imaginary parts of roots)
* Bandwidth and damping characteristics

---

## **4. Worked-Out Example**

### 🎯 Given: Series RLC Circuit

* $R = 2 \, \Omega$, $L = 1 \, \text{H}$, $C = 0.5 \, \text{F}$

### Step 1: Impedance of Each Element

* $Z_R = 2$
* $Z_L = s$
* $Z_C = \frac{1}{0.5s} = \frac{2}{s}$

### Step 2: Total Impedance:

$$
Z(s) = Z_R + Z_L + Z_C = 2 + s + \frac{2}{s}
$$

Combine into a rational expression:

$$
Z(s) = \frac{2s + s^2 + 2}{s} = \frac{s^2 + 2s + 2}{s}
$$

### Step 3: Find Zeroes

$$
\text{Numerator: } s^2 + 2s + 2 = 0
$$

Use quadratic formula:

$$
s = \frac{-2 \pm \sqrt{(2)^2 - 4(1)(2)}}{2(1)} = \frac{-2 \pm \sqrt{-4}}{2} = -1 \pm j
$$

### Step 4: Find Poles

$$
\text{Denominator: } s = 0
$$

So there’s one pole at $s = 0$

---

## **5. Practical Considerations**

### 🔸 Realizability:

* Ensure that the immittance function represents a **passive**, **causal**, and **stable** system.
* The poles must be in the **left half of the s-plane** for stability in physical systems.

### 🔸 Use of Software:

For complex circuits or higher-order polynomials, use tools like:

* **MATLAB**: `roots()` function
* **Python** (NumPy, SciPy): `numpy.roots()`
* **WolframAlpha**: Online symbolic solver
* **LTspice** or **PSpice**: Simulation-based analysis

---

## ✅ Summary Table

| Step | Action                                 |
| ---- | -------------------------------------- |
| 1    | Identify the immittance type (Z or Y)  |
| 2    | Convert elements into Laplace domain   |
| 3    | Analyze circuit to derive Z(s) or Y(s) |
| 4    | Simplify into $H(s) = N(s)/D(s)$       |
| 5    | Solve $N(s) = 0$ → Find zeroes         |
| 6    | Solve $D(s) = 0$ → Find poles          |
| 7    | Plot poles/zeroes on the s-plane       |
| 8    | Analyze for stability and response     |

