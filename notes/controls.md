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

$$C(s) = G(s)R(s) = \frac{\omega_n^2}{s(s^2+2\zeta s+\omega_n^2)}$$

### Natural Frequency $\omega_n$

The natural frequency is the oscillation frequency of the system without damping.

### Damping Ratio $\zeta$

The damping ratio quantifies how much of the natural response's frequency is reduced.

Generally, a lower $\zeta$ corresponds to more oscillations (less dampening).

### Pole Locations

The pole locations of a second order system can be easily calculated from the natural frequency and damping ratio:

$$s_{1,2} = -\zeta w_n \pm w_n \sqrt{\zeta^2 - 1}$$

### Rise Time

See [rise time](#rise-time).

$$T_r = \frac{\pi - \tan^{-1}\frac{\sqrt{1-\zeta^2}}{\zeta}}{\omega_n (1-\zeta)}$$

### Peak Time

The peak time is the time to reach the maximum.

$$T_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}$$

### Percent Overshoot

The percent overshoot is how much the waveform overshoots the steady state value. It is the difference between the peak and the steady state value, expressed in terms of a percentage.

$$OS = e^{-(\zeta \pi / \sqrt{1-\zeta^2})}$$

### Settling Time 

See [settling time](#settling-time).

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

Poles that appear in the left hand, real plane are considered stable because they converge to zero, whereas those that lie on the left hand, complex plane often explode and diverge.

## Relative Stability

A transfer function is relatively stable with stability margin if the distance of the poles are at least $\sigma$ from the imaginary plane.

# Steady State Error

Steady state error is the error left when the steady state dies out. In other words, it is the difference between the input and output for a certain input as $t \rightarrow \infty$.

For a closed loop feedback system:

$$\frac{E(s)}{R(s)} = \frac{1}{1+G(s)} \implies E(s) = \frac{R(s)}{1+G(s)}$$

## Final Value Theorem

The steady state error for the above system is:

$$e(\infty) = \lim_{t \rightarrow 0} e(t) = \lim_{s \rightarrow 0} E(s)$$

Assuming $\frac{1}{1+G(s)}$ is stable:

$$e(\infty) = \lim_{s \rightarrow 0} s \frac{R(s)}{1+G(s)}$$

## System Type

A system $G(s)$ is said to be type $n$ if there are $n$ poles at the origin.

$$G(s) = \frac{N(s)}{s^n Q(s)}$$
