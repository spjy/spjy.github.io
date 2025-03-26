(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{506:function(n,e,r){"use strict";r.r(e),e.default="---\r\nheader: Control Systems \r\ndescription: Analysis of preventing explosions.\r\n---\r\n\r\n# Block Diagrams\r\n\r\nA block diagram can assist with visualizing relationships between multiple systems.\r\n\r\n### Signals\r\n\r\nA signal is represented by an arrow.\r\n\r\n$\\xrightarrow{R(s)} \\; \\xrightarrow{C(s)} \\text{}$\r\n\r\n### System\r\n\r\nA system is represented by a box.\r\n\r\n$$\\xrightarrow{R(s)} \r\n\\fbox{\r\n    {\r\n      G(s)\r\n    }\r\n} \\xrightarrow{C(s)} \\text{}$$\r\n\r\n### Series\r\n\r\nSystems in series multiply together.\r\n\r\n$$C(s) = R_1(s) R_2(s) \\cdots R_n(s)$$\r\n\r\n### Parallel\r\n\r\nSystems in parallel sum together.\r\n\r\n$$C(s) = R_1(s) + R_2(s) + \\dots + R_n(s)$$\r\n\r\n### Feedback Loop\r\n\r\nSystems in a feedback loop is represented by:\r\n\r\n$$C(s) = \\frac{G_{\\text{open loop}}(s)}{1 \\pm G_{\\text{open loop}}(s)G_{\\text{closed loop}}(s)}$$\r\n\r\n# Frequency Modeling\r\n\r\n## Transfer Function\r\n\r\nAn $n$th order LTI differential equation with output $c(t)$ and input $r(t)$ is defined as:\r\n\r\n$$a_n \\frac{d^n c(t)}{dt^n} + a_{n-1} \\frac{d^{n-1} c(t)}{dt^{n-1}} + \\dots + a_0 c(t) = b_m \\frac{d^m c(t)}{dt^m} + b_{m-1} \\frac{d^{m-1} r(t)}{dt^{m-1}} + \\dots + b_0 r(t)$$\r\n\r\nIf we take the Laplace transform, the transfer function is defined as:\r\n\r\n$$\\frac{C(s)}{R(s)} = G(s) = \\frac{b_m s^m + b_{m-1} s^{m-1} + \\dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \\dots a_0}$$\r\n\r\nwhere the initial conditions are zero, or $a_0 = b_0 = 0$\r\n\r\n## Linearization\r\n\r\nIf a nonlinear system is encountered, linearization of a system may be desired to simplify analysis. \r\n\r\nGiven a point $(x_0, f_0)$, we can approximate a function $f(x)$ for a small range around that point:\r\n\r\n$$f(x) - f(x_0) \\approx \\frac{df}{dx} \\Big|_{x=x_0} (x-x_0)$$\r\n\r\n$$\\delta f(x) \\approx m \\Big|_{x=x_0} \\delta x$$\r\n\r\n# Time Response\r\n\r\nQualitative analysis of the transient response.\r\n\r\n## Poles, Zeroes, System Response\r\n\r\nA system's response consists of the sum of:\r\n\r\n$$c(t) = c_{\\text{forced}}(t) + c_{\\text{natural}}(t)$$\r\n\r\nThe forced response consists of your input signal, whereas the natural response is what occurs in the system after the input.\r\n\r\n## Poles\r\n\r\nPoles of a transfer function cause it to become $\\infty$ and also are any roots that the numerator and denominator share.\r\n\r\nThey affect the type of response (e.g. sinusoidal or exponential).\r\n\r\n## Zeros\r\n\r\nZeros of a transfer function cause it to become $0$ and also are any roots that the numerator and denominator share.\r\n\r\nThey affect the amplitude of the response.\r\n\r\n## First Order System\r\n\r\nThe step response of a first order system is characterized by:\r\n\r\n$$C(s) = R(s) G(s) = \\frac{a}{s(s+a)}$$\r\n$$c(t) = 1 - e^{-at}$$\r\n$$c_{\\text{forced}}(t) = 1$$\r\n$$c_{\\text{natural}}(t) = -e^{-at}$$\r\n\r\n### Time Constant\r\n\r\nThe time constant is the time for the natural response e^{-at} to reach 63% of its final value.\r\n\r\n$$\\tau = \\frac{1}{a}$$\r\n\r\n### Rise Time\r\n\r\nThe rise time is the time to go from 0.1 $\\rightarrow$ 0.9 of its final value.\r\n\r\n$$T_r = \\frac{2.2}{a}$$\r\n\r\n### Settling Time\r\n\r\nThe settling time is the time at which the signal remains within $\\pm$ 2% of the final value.\r\n\r\n$$T_s = \\frac{4}{a}$$\r\n\r\n## Second Order System\r\n\r\nThe step response of a second order system is:\r\n\r\n$$C(s) = G(s)R(s) = \\frac{\\omega_n^2}{s(s^2+2\\zeta \\omega_n s+\\omega_n^2)}$$\r\n\r\n### Natural Frequency $\\omega_n$\r\n\r\nThe natural frequency is the oscillation frequency of the system without damping.\r\n\r\n### Damping Ratio $\\zeta$\r\n\r\nThe damping ratio quantifies how much of the natural response's frequency is reduced.\r\n\r\nGenerally, a lower $\\zeta$ corresponds to more oscillations (less dampening).\r\n\r\n### Pole Locations\r\n\r\nThe pole locations of a second order system can be easily calculated from the natural frequency and damping ratio:\r\n\r\n$$s_{1,2} = -\\zeta w_n \\pm w_n \\sqrt{\\zeta^2 - 1}$$\r\n\r\n### Rise Time\r\n\r\nThe rise time is the time to go from 0.1 $\\rightarrow$ 0.9 of its final value.\r\n\r\n$$T_r = \\frac{\\pi - \\tan^{-1}\\frac{\\sqrt{1-\\zeta^2}}{\\zeta}}{\\omega_n \\sqrt{1-\\zeta}}$$\r\n\r\n### Peak Time\r\n\r\nThe peak time is the time to reach the maximum.\r\n\r\n$$T_p = \\frac{\\pi}{\\omega_n \\sqrt{1-\\zeta^2}}$$\r\n\r\n#### Damped Frequency of Oscillation\r\n\r\n$$w_d \\triangleq \\omega_n \\sqrt{1-\\zeta^2}$$\r\n\r\n### Percent Overshoot\r\n\r\nThe percent overshoot is how much the waveform overshoots the steady state value. It is the difference between the peak and the steady state value, expressed in terms of a percentage.\r\n\r\n$$\\%OS = e^{-(\\zeta \\pi / \\sqrt{1-\\zeta^2})} \\cdot 100$$\r\n\r\nWe can derive the damping frequency from the $\\%OS$.\r\n\r\n$$\\zeta = \\frac{-\\ln(\\%OS / 100)}{\\sqrt{\\pi^2 + \\ln^2(\\%OS/100)}}$$\r\n\r\n### Settling Time \r\n\r\nThe settling time is the time at which the signal remains within $\\pm$ 2% of the final value.\r\n\r\n$$T_s = \\frac{4}{\\zeta \\omega_n}$$\r\n\r\n### Response Types\r\n\r\nThere are four types of responses to a second order transfer function.\r\n\r\n#### Undamped ($\\zeta = 0$)\r\n\r\nThe undamped case is where the transfer function freely oscillates with no damping at all.\r\n\r\n#### Underdamped (0 < $\\zeta$ < 1)\r\n\r\nThe underdamped case is the case where the transfer function has remnants of the undamped signal. It oscillates, but at a relatively lower frequency.\r\n\r\nThe poles are complex.\r\n\r\n$$s_{1,2} = -\\zeta \\omega_n \\pm \\omega_n j \\sqrt{1 - \\zeta^2}$$\r\n\r\n#### Critically Damped ($\\zeta = 1$)\r\n\r\nThe critically damped case is the border between underdamped and overdamped case.\r\n\r\nThe poles are real and repeating.\r\n\r\n$$s_{1,2} = -\\omega_n$$\r\n\r\n#### Overdamped ($\\zeta > 1$)\r\n\r\nThe overdamped case is where the damping ratio has a large impact on the signal and oscillations are less apparent.\r\n\r\nThe poles are real and distinct.\r\n\r\n$$s_{1,2} = -\\zeta w_n \\pm w_n \\sqrt{\\zeta^2 - 1}$$\r\n\r\n## Higher Order Transfer Functions\r\n\r\nFirst or second order transfer functions with no zeros cannot be applied to higher order ones. We can apply dominant pole analysis if certain conditions are met.\r\n\r\n### Dominant Pole Analysis\r\n\r\nThe idea behind dominant pole analysis is that the further a pole is from the imaginary axis, the faster the pole decays; therefore, it has less of an effect it has on the overall response.\r\n\r\nAs a result, we can use the appropriate formulae depending on the number of poles and the precision desired.\r\n\r\n#### Zeros Analysis\r\n\r\nThe closer the zero is to the dominant poles, the more effect it has on the response.\r\n\r\nAs the zero becomes further from the dominant poles, it approaches that of a two pole system.\r\n\r\nIf the zero is on the right half plane, the \r\n\r\n# Stability\r\n\r\nA system is said to be stable if all bounded inputs yield a bounded output.\r\n\r\nFor an LTI system, it is stable if the natural response $\\rightarrow$ 0 as $t \\rightarrow \\infty$.\r\n\r\nPoles that appear in the left hand (of the $j\\omega$ axis), real plane are considered stable because they converge and decay, whereas those that lie on the right hand, complex plane explode and diverge.\r\n\r\nAt least one pole on the right hand plane is enough to throw the system into instability since it diverges.\r\n\r\n## Routh-Hurwitz Criterion\r\n\r\nGiven a closed loop transfer function:\r\n\r\n$$\\frac{N(s)}{a_n s^n + a_{n-1} s^{n-1} + a_{n-2} s^{n-2} + a_{n-3} s^{n-3} + \\dots + a_1 s + a_0}$$\r\n\r\nThe corresponding Routh table is:\r\n\r\n||||||\r\n|-|-|-|-|-|\r\n| $s^{n} \\text{}$ | $a_n$ | $a_{n-2} \\text{}$ | $\\dots$ | $a_1$ | $0$ |\r\n| $s^{n-1} \\text{}$ | $a_{n-1} \\text{}$ | $a_{n-3} \\text{}$ | $\\dots$ | $a_0$ | $0$ |\r\n| $s^{n-2} \\text{}$ | $-\\frac{1}{a_{n-1}} \\begin{vmatrix} a_n & a_{n-2} \\\\ a_{n-1} & a_{n-3} \\end{vmatrix} \\text{}$ | $-\\frac{1}{a_{n-1}} \\begin{vmatrix} a_{n-2} & a_{n-4} \\\\ a_{n-3} & a_{n-5} \\end{vmatrix} \\text{}$\r\n| $\\vdots$ | $\\vdots$ | $\\vdots$ | \r\n| $s^1$ |\r\n| $s^0$ |\r\n\r\nFrom this table, we can deduce that the number of roots of the polynomial that are in the right half plane is equal to the number of sign changes in the first column.\r\n\r\nIn other words, the first column must contain all positive values in order for the system to be stable.\r\n\r\n## Relative Stability\r\n\r\nA transfer function is relatively stable with stability margin if the distance of the poles are at least $\\sigma$ from the imaginary plane.\r\n\r\n# Steady State Error\r\n\r\nSteady state error is the error left when the steady state dies out. In other words, it is the difference between the input and output for a certain input as $t \\rightarrow \\infty$.\r\n\r\nFor a closed loop feedback system:\r\n\r\n$$\\frac{E(s)}{R(s)} = \\frac{1}{1+G(s)} \\implies E(s) = \\frac{R(s)}{1+G(s)}$$\r\n\r\n## Final Value Theorem\r\n\r\nThe steady state error for the above system is:\r\n\r\n$$e(\\infty) = \\lim_{t \\rightarrow \\infty} e(t) = \\lim_{s \\rightarrow 0} s E(s)$$\r\n\r\nAssuming $\\frac{1}{1+G(s)}$ is stable:\r\n\r\n$$e(\\infty) = \\lim_{s \\rightarrow 0} s \\frac{R(s)}{1+G(s)}$$\r\n\r\n## System Type\r\n\r\nA system $G(s)$ is said to be type $n$ if there are $n$ poles at the origin.\r\n\r\n$$G(s) = \\frac{N(s)}{s^n Q(s)}, n \\in \\mathbb Z$$\r\n\r\n## Error Constants\r\n\r\n### Position Error Constant \r\n\r\n$$K_p = \\lim_{s \\to 0} G(s) = \\begin{cases}\r\nG(0) & n = 0 \\\\\r\n\\infty & n \\geq 1\r\n\\end{cases}$$\r\n\r\nFor a step input $\\frac{1}{s}$:\r\n\r\n$$e(\\infty) = \\frac{1}{1+K_p}$$\r\n\r\n### Velocity Error Constant\r\n\r\n$$K_v = \\lim_{s \\to 0} s G(s) = \\begin{cases}\r\n0 & n = 0 \\\\\r\n\\frac{N(0)}{Q(0)} & n = 1 \\\\\r\n\\infty & n \\geq 2\r\n\\end{cases}$$\r\n\r\nFor a ramp input $\\frac{1}{s^2}$:\r\n\r\n$$e(\\infty) = \\frac{1}{K_v}$$\r\n\r\n### Acceleration Error Constant\r\n\r\n$$K_a = \\lim_{s \\to 0} s^2 G(s) = \\begin{cases}\r\n0 & n = 0, 1 \\\\\r\n\\frac{N(0)}{Q(0)} & n = 2 \\\\\r\n\\infty & n \\geq 3\r\n\\end{cases}$$\r\n\r\nFor a parabolic input $\\frac{1}{s^3}$:\r\n\r\n$$e(\\infty) = \\frac{1}{K_a}$$\r\n\r\n## Root Locus\r\n\r\nRoot Locus is a tool used to analyze a the effect of a varied gain factor $\\forall K \\in [0, \\infty)$ on the transient response of a closed loop feedback control system. In other words, it shows the paths of the closed loop poles as the gain varies.\r\n\r\nWe can see the various pole locations in the complex plane. Poles on the LHP correspond to exponential decay, while those on the RHP correspond the exponential growth. Additionally, those that have a complex component to it come in pairs. On the imaginary axis, the poles correspond to a higher frequency of the wave. A combination of both the real and imaginary components corresponds to exponential and sinusoidal motion.\r\n\r\nTherefore, we can determine values of K such that our system is stable using this analysis tool.\r\n\r\nOnly the poles dictate the natural response of the system.\r\n\r\n### Properties of Negaitve Feedback System\r\n\r\nFor a closed loop transfer function of the form\r\n\r\n$$T(s) = \\frac{Y(s)}{R(s)} = \\frac{KG(s)}{1+KG(s)H(s)}$$\r\n\r\n#### Pole Locations\r\n\r\nThe pole locations are given by setting the characteristic polynomial of the denominator to zero\r\n\r\n$$KG(s)H(s) = 0 \\implies KG(s)H(s)=-1=1 \\angle 180 ^{\\circ} (2k+1), k\\in\\mathbb{Z}$$\r\n\r\n#### Magnitude Criterion\r\n\r\nThe magnitude criterion is given by:\r\n\r\n$$|KG(s)H(s)| = 1$$\r\n\r\nFor any point $s$ on the root locus, this equality must be satisfied. Thus, the root locus exists to the left of an odd number of real-axis, finite open-loop poles/zeros.\r\n\r\n#### Angle Criterion\r\n\r\nThe angle criterion is given by:\r\n\r\n$$\\angle KG(s)H(s) = (2k+1) 180 ^{\\circ}$$\r\n\r\n$$\\sum_{i=1}^n \\angle (s+p_i) + \\sum_{i=1}^m \\angle (s+z_i) = \\pm 180 ^\\circ (2k+1)$$\r\n\r\nFor any point $s$ on the root locus, this equality must be satisfied.\r\n\r\n#### Gain Factor\r\n\r\nThe gain factor is given by:\r\n\r\n$$K=\\frac{1}{|G(s)H(s)|}$$\r\n\r\n## Poles and Zeros\r\n\r\nWe take the open loop transfer function, $\\displaystyle G(s)H(s) = \\frac{K (s+z_1) \\cdots (s+z_m)}{(s+p_1) \\cdots (s+p_n)}$, and take the open loop poles and zeros and plot them on the complex plane.\r\n\r\n## Asymptotes\r\n\r\nThese equations define the behavior of the root locus at infinity.\r\n\r\n### Real Axis Intercept / Point of Intersection\r\n\r\n$\\sigma_a$ is the point on the real axis at which the asymptotes depart.\r\n\r\n$$\\sigma_a = \\frac{\\sum_i p_i - \\sum_i -z_i}{n-m}$$\r\n\r\n### Real Axis Angle\r\n\r\nThe real axis angle is the angle from the real axis intercept that the intercepts converge at.\r\n\r\n$$\\angle s+\\alpha = \\frac{\\pm 180 ^\\circ (2k+1)}{n - m}$$\r\n\r\n## Real Axis Breakway and Break-in Points\r\n\r\nBreakaway and break-in points are where the root locus departs from the real axis. \r\n\r\nThe locus leaves the axis at $-\\sigma_1$ and enters back at $\\sigma_2$.\r\n\r\nThe branches of the root locus form an angle of $180 ^\\circ / n$, $n$ is the number of closed loop poles departing from or arriving at a breakaway/in point.\r\n\r\nThe breakway/in points can be solved via the following methods:\r\n\r\n### Without Differentiation\r\n\r\n$$\\sum_{i=1}^m \\frac{1}{\\sigma+z_i} = \\sum_{i=1}^n \\frac{1}{\\sigma+p_i}$$\r\n\r\nand solve for the roots.\r\n\r\n### With Differentiation\r\n\r\n$$\\frac{dN}{d\\sigma}D-N\\frac{dD}{d\\sigma} = 0$$\r\n\r\nand solve for the roots.\r\n\r\n## $j\\omega$ Axis Crossing\r\n\r\nSolve for the roots of the following:\r\n\r\n$$\\sum_{i=1}^n (s+p_i) + K \\sum_{i=1}^m (s+z_i) \\big |_{s=j\\omega} = 0$$\r\n\r\n## Angle of Departure\r\n\r\nThe angle of departure is the angle at which the root locus departs from a point. Use the angle criterion and solve for the angle that you are looking for.\r\n\r\n$$\\sum_{i=1}^n \\angle (s+p_i) + \\sum_{i=1}^m \\angle (s+z_i) = \\pm 180 ^\\circ (2k+1)$$\r\n\r\n\r\n## Properties of Positive Feedback System\r\n\r\nGiven a positive feedback system\r\n\r\n$$T(s) = \\frac{K G(s)}{1-KG(s)H(s)}$$\r\n\r\n### Magnitude and Angle Criteron\r\n\r\n$$KG(s)H(s) = 1 = 1 \\angle k360 ^\\circ$$\r\n\r\nthe root locus exists to the left of an even number of real-axis, finite open-loop poles/zeros.\r\n\r\n### Asymptotes\r\n\r\n$$\\sigma_a = \\frac{\\sum_i p_i - \\sum_i -z_i}{n-m}$$\r\n\r\n$$\\angle s+\\alpha = \\frac{\\pm 360 ^\\circ (2k+1)}{n - m}$$\r\n"}}]);