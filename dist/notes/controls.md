---
header: Control Systems 
description: Analysis of preventing explosions.
---

# Block Diagrams

A block diagram can assist with visualizing relationships between multiple systems.

### Signals

A signal is represented by an arrow.

$\xrightarrow{R(s)} \; \xrightarrow{C(s)} \text{}$

### System

A system is represented by a box.

$$\xrightarrow{R(s)} 
\fbox{
    {
      G(s)
    }
} \xrightarrow{C(s)} \text{}$$

### Series

Systems in series multiply together.

$$C(s) = R_1(s) R_2(s) \cdots R_n(s)$$

### Parallel

Systems in parallel sum together.

$$C(s) = R_1(s) + R_2(s) + \dots + R_n(s)$$

### Feedback Loop

Systems in a feedback loop is represented by:

$$C(s) = \frac{G_{\text{open loop}}(s)}{1 \pm G_{\text{open loop}}(s)G_{\text{closed loop}}(s)}$$

# Frequency Modeling

## Transfer Function

An $n$th order LTI differential equation with output $c(t)$ and input $r(t)$ is defined as:

$$a_n \frac{d^n c(t)}{dt^n} + a_{n-1} \frac{d^{n-1} c(t)}{dt^{n-1}} + \dots + a_0 c(t) = b_m \frac{d^m c(t)}{dt^m} + b_{m-1} \frac{d^{m-1} r(t)}{dt^{m-1}} + \dots + b_0 r(t)$$

If we take the Laplace transform, the transfer function is defined as:

$$\frac{C(s)}{R(s)} = G(s) = \frac{b_m s^m + b_{m-1} s^{m-1} + \dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \dots a_0}$$

where the initial conditions are zero, or $a_0 = b_0 = 0$

## Linearization

If a nonlinear system is encountered, linearization of a system may be desired to simplify analysis. 

Given a point $(x_0, f_0)$, we can approximate a function $f(x)$ for a small range around that point:

$$f(x) - f(x_0) \approx \frac{df}{dx} \Big|_{x=x_0} (x-x_0)$$

$$\delta f(x) \approx m \Big|_{x=x_0} \delta x$$

# Time Response

Qualitative analysis of the transient response.

## Poles, Zeroes, System Response

A system's response consists of the sum of:

$$c(t) = c_{\text{forced}}(t) + c_{\text{natural}}(t)$$

The forced response consists of your input signal, whereas the natural response is what occurs in the system after the input.

## Poles

Poles of a transfer function cause it to become $\infty$ and also are any roots that the numerator and denominator share.

They affect the type of response (e.g. sinusoidal or exponential).

## Zeros

Zeros of a transfer function cause it to become $0$ and also are any roots that the numerator and denominator share.

They affect the amplitude of the response.

## First Order System

The step response of a first order system is characterized by:

$$C(s) = R(s) G(s) = \frac{a}{s(s+a)}$$
$$c(t) = 1 - e^{-at}$$
$$c_{\text{forced}}(t) = 1$$
$$c_{\text{natural}}(t) = -e^{-at}$$

### Time Constant

The time constant is the time for the natural response e^{-at} to reach 63% of its final value.

$$\tau = \frac{1}{a}$$

### Rise Time

The rise time is the time to go from 0.1 $\rightarrow$ 0.9 of its final value.

$$T_r = \frac{2.2}{a}$$

### Settling Time

The settling time is the time at which the signal remains within $\pm$ 2% of the final value.

$$T_s = \frac{4}{a}$$

## Second Order System

The step response of a second order system is:

$$C(s) = G(s)R(s) = \frac{\omega_n^2}{s(s^2+2\zeta \omega_n s+\omega_n^2)}$$

### Natural Frequency $\omega_n$

The natural frequency is the oscillation frequency of the system without damping.

### Damping Ratio $\zeta$

The damping ratio quantifies how much of the natural response's frequency is reduced.

Generally, a lower $\zeta$ corresponds to more oscillations (less dampening).

### Pole Locations

The pole locations of a second order system can be easily calculated from the natural frequency and damping ratio:

$$s_{1,2} = -\zeta w_n \pm w_n \sqrt{\zeta^2 - 1}$$

### Rise Time

The rise time is the time to go from 0.1 $\rightarrow$ 0.9 of its final value.

$$T_r = \frac{\pi - \tan^{-1}\frac{\sqrt{1-\zeta^2}}{\zeta}}{\omega_n \sqrt{1-\zeta}}$$

### Peak Time

The peak time is the time to reach the maximum.

$$T_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$$

#### Damped Frequency of Oscillation

$$w_d \triangleq \omega_n \sqrt{1-\zeta^2}$$

### Percent Overshoot

The percent overshoot is how much the waveform overshoots the steady state value. It is the difference between the peak and the steady state value, expressed in terms of a percentage.

$$\%OS = e^{-(\zeta \pi / \sqrt{1-\zeta^2})} \cdot 100$$

We can derive the damping frequency from the $\%OS$.

$$\zeta = \frac{-\ln(\%OS / 100)}{\sqrt{\pi^2 + \ln^2(\%OS/100)}}$$

### Settling Time 

The settling time is the time at which the signal remains within $\pm$ 2% of the final value.

$$T_s = \frac{4}{\zeta \omega_n}$$

### Response Types

There are four types of responses to a second order transfer function.

#### Undamped ($\zeta = 0$)

The undamped case is where the transfer function freely oscillates with no damping at all.

#### Underdamped (0 < $\zeta$ < 1)

The underdamped case is the case where the transfer function has remnants of the undamped signal. It oscillates, but at a relatively lower frequency.

The poles are complex.

$$s_{1,2} = -\zeta \omega_n \pm \omega_n j \sqrt{1 - \zeta^2}$$

#### Critically Damped ($\zeta = 1$)

The critically damped case is the border between underdamped and overdamped case.

The poles are real and repeating.

$$s_{1,2} = -\omega_n$$

#### Overdamped ($\zeta > 1$)

The overdamped case is where the damping ratio has a large impact on the signal and oscillations are less apparent.

The poles are real and distinct.

$$s_{1,2} = -\zeta w_n \pm w_n \sqrt{\zeta^2 - 1}$$

## Higher Order Transfer Functions

First or second order transfer functions with no zeros cannot be applied to higher order ones. We can apply dominant pole analysis if certain conditions are met.

### Dominant Pole Analysis

The idea behind dominant pole analysis is that the further a pole is from the imaginary axis, the faster the pole decays; therefore, it has less of an effect it has on the overall response.

As a result, we can use the appropriate formulae depending on the number of poles and the precision desired.

#### Zeros Analysis

The closer the zero is to the dominant poles, the more effect it has on the response.

As the zero becomes further from the dominant poles, it approaches that of a two pole system.

If the zero is on the right half plane, the 

# Stability

A system is said to be stable if all bounded inputs yield a bounded output.

For an LTI system, it is stable if the natural response $\rightarrow$ 0 as $t \rightarrow \infty$.

Poles that appear in the left hand (of the $j\omega$ axis), real plane are considered stable because they converge and decay, whereas those that lie on the right hand, complex plane explode and diverge.

At least one pole on the right hand plane is enough to throw the system into instability since it diverges.

## Routh-Hurwitz Criterion

Given a closed loop transfer function:

$$\frac{N(s)}{a_n s^n + a_{n-1} s^{n-1} + a_{n-2} s^{n-2} + a_{n-3} s^{n-3} + \dots + a_1 s + a_0}$$

The corresponding Routh table is:

||||||
|-|-|-|-|-|
| $s^{n} \text{}$ | $a_n$ | $a_{n-2} \text{}$ | $\dots$ | $a_1$ | $0$ |
| $s^{n-1} \text{}$ | $a_{n-1} \text{}$ | $a_{n-3} \text{}$ | $\dots$ | $a_0$ | $0$ |
| $s^{n-2} \text{}$ | $-\frac{1}{a_{n-1}} \begin{vmatrix} a_n & a_{n-2} \\ a_{n-1} & a_{n-3} \end{vmatrix} \text{}$ | $-\frac{1}{a_{n-1}} \begin{vmatrix} a_{n-2} & a_{n-4} \\ a_{n-3} & a_{n-5} \end{vmatrix} \text{}$
| $\vdots$ | $\vdots$ | $\vdots$ | 
| $s^1$ |
| $s^0$ |

From this table, we can deduce that the number of roots of the polynomial that are in the right half plane is equal to the number of sign changes in the first column.

In other words, the first column must contain all positive values in order for the system to be stable.

## Relative Stability

A transfer function is relatively stable with stability margin if the distance of the poles are at least $\sigma$ from the imaginary plane.

# Steady State Error

Steady state error is the error left when the steady state dies out. In other words, it is the difference between the input and output for a certain input as $t \rightarrow \infty$.

For a closed loop feedback system:

$$\frac{E(s)}{R(s)} = \frac{1}{1+G(s)} \implies E(s) = \frac{R(s)}{1+G(s)}$$

## Final Value Theorem

The steady state error for the above system is:

$$e(\infty) = \lim_{t \rightarrow \infty} e(t) = \lim_{s \rightarrow 0} s E(s)$$

Assuming $\frac{1}{1+G(s)}$ is stable:

$$e(\infty) = \lim_{s \rightarrow 0} s \frac{R(s)}{1+G(s)}$$

## System Type

A system $G(s)$ is said to be type $n$ if there are $n$ poles at the origin.

$$G(s) = \frac{N(s)}{s^n Q(s)}, n \in \mathbb Z$$

## Error Constants

### Position Error Constant 

$$K_p = \lim_{s \to 0} G(s) = \begin{cases}
G(0) & n = 0 \\
\infty & n \geq 1
\end{cases}$$

For a step input $\frac{1}{s}$:

$$e(\infty) = \frac{1}{1+K_p}$$

### Velocity Error Constant

$$K_v = \lim_{s \to 0} s G(s) = \begin{cases}
0 & n = 0 \\
\frac{N(0)}{Q(0)} & n = 1 \\
\infty & n \geq 2
\end{cases}$$

For a ramp input $\frac{1}{s^2}$:

$$e(\infty) = \frac{1}{K_v}$$

### Acceleration Error Constant

$$K_a = \lim_{s \to 0} s^2 G(s) = \begin{cases}
0 & n = 0, 1 \\
\frac{N(0)}{Q(0)} & n = 2 \\
\infty & n \geq 3
\end{cases}$$

For a parabolic input $\frac{1}{s^3}$:

$$e(\infty) = \frac{1}{K_a}$$

## Root Locus

Root Locus is a tool used to analyze a the effect of a varied gain factor $\forall K \in [0, \infty)$ on the transient response of a closed loop feedback control system. In other words, it shows the paths of the closed loop poles as the gain varies.

We can see the various pole locations in the complex plane. Poles on the LHP correspond to exponential decay, while those on the RHP correspond the exponential growth. Additionally, those that have a complex component to it come in pairs. On the imaginary axis, the poles correspond to a higher frequency of the wave. A combination of both the real and imaginary components corresponds to exponential and sinusoidal motion.

Therefore, we can determine values of K such that our system is stable using this analysis tool.

Only the poles dictate the natural response of the system.

### Properties of Negaitve Feedback System

For a closed loop transfer function of the form

$$T(s) = \frac{Y(s)}{R(s)} = \frac{KG(s)}{1+KG(s)H(s)}$$

#### Pole Locations

The pole locations are given by setting the characteristic polynomial of the denominator to zero

$$KG(s)H(s) = 0 \implies KG(s)H(s)=-1=1 \angle 180 ^{\circ} (2k+1), k\in\mathbb{Z}$$

#### Magnitude Criterion

The magnitude criterion is given by:

$$|KG(s)H(s)| = 1$$

For any point $s$ on the root locus, this equality must be satisfied. Thus, the root locus exists to the left of an odd number of real-axis, finite open-loop poles/zeros.

#### Angle Criterion

The angle criterion is given by:

$$\angle KG(s)H(s) = (2k+1) 180 ^{\circ}$$

$$\sum_{i=1}^n \angle (s+p_i) + \sum_{i=1}^m \angle (s+z_i) = \pm 180 ^\circ (2k+1)$$

For any point $s$ on the root locus, this equality must be satisfied.

#### Gain Factor

The gain factor is given by:

$$K=\frac{1}{|G(s)H(s)|}$$

## Poles and Zeros

We take the open loop transfer function, $\displaystyle G(s)H(s) = \frac{K (s+z_1) \cdots (s+z_m)}{(s+p_1) \cdots (s+p_n)}$, and take the open loop poles and zeros and plot them on the complex plane.

## Asymptotes

These equations define the behavior of the root locus at infinity.

### Real Axis Intercept / Point of Intersection

$\sigma_a$ is the point on the real axis at which the asymptotes depart.

$$\sigma_a = \frac{\sum_i p_i - \sum_i -z_i}{n-m}$$

### Real Axis Angle

The real axis angle is the angle from the real axis intercept that the intercepts converge at.

$$\angle s+\alpha = \frac{\pm 180 ^\circ (2k+1)}{n - m}$$

## Real Axis Breakway and Break-in Points

Breakaway and break-in points are where the root locus departs from the real axis. 

The locus leaves the axis at $-\sigma_1$ and enters back at $\sigma_2$.

The branches of the root locus form an angle of $180 ^\circ / n$, $n$ is the number of closed loop poles departing from or arriving at a breakaway/in point.

The breakway/in points can be solved via the following methods:

### Without Differentiation

$$\sum_{i=1}^m \frac{1}{\sigma+z_i} = \sum_{i=1}^n \frac{1}{\sigma+p_i}$$

and solve for the roots.

### With Differentiation

$$\frac{dN}{d\sigma}D-N\frac{dD}{d\sigma} = 0$$

and solve for the roots.

## $j\omega$ Axis Crossing

Solve for the roots of the following:

$$\sum_{i=1}^n (s+p_i) + K \sum_{i=1}^m (s+z_i) \big |_{s=j\omega} = 0$$

## Angle of Departure

The angle of departure is the angle at which the root locus departs from a point. Use the angle criterion and solve for the angle that you are looking for.

$$\sum_{i=1}^n \angle (s+p_i) + \sum_{i=1}^m \angle (s+z_i) = \pm 180 ^\circ (2k+1)$$


## Properties of Positive Feedback System

Given a positive feedback system

$$T(s) = \frac{K G(s)}{1-KG(s)H(s)}$$

### Magnitude and Angle Criteron

$$KG(s)H(s) = 1 = 1 \angle k360 ^\circ$$

the root locus exists to the left of an even number of real-axis, finite open-loop poles/zeros.

### Asymptotes

$$\sigma_a = \frac{\sum_i p_i - \sum_i -z_i}{n-m}$$

$$\angle s+\alpha = \frac{\pm 360 ^\circ (2k+1)}{n - m}$$
