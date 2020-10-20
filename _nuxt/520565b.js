(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{497:function(e,n,t){"use strict";t.r(n),n.default="---\nheader: Control Systems \ndescription: Analysis of preventing explosions.\n---\n\n# Block Diagrams\n\nA block diagram can assist with visualizing relationships between multiple systems.\n\n### Signals\n\nA signal is represented by an arrow.\n\n$\\xrightarrow{R(s)} \\; \\xrightarrow{C(s)} \\text{}$\n\n### System\n\nA system is represented by a box.\n\n$$\\xrightarrow{R(s)} \n\\fbox{\n    {\n      G(s)\n    }\n} \\xrightarrow{C(s)} \\text{}$$\n\n### Series\n\nSystems in series multiply together.\n\n$$C(s) = R_1(s) R_2(s) \\cdots R_n(s)$$\n\n### Parallel\n\nSystems in parallel sum together.\n\n$$C(s) = R_1(s) + R_2(s) + \\dots + R_n(s)$$\n\n### Feedback Loop\n\nSystems in a feedback loop is represented by:\n\n$$C(s) = \\frac{G_{\\text{open loop}}(s)}{1 \\pm G_{\\text{open loop}}(s)G_{\\text{closed loop}}(s)}$$\n\n# Frequency Modeling\n\n## Transfer Function\n\nAn $n$th order LTI differential equation with output $c(t)$ and input $r(t)$ is defined as:\n\n$$a_n \\frac{d^n c(t)}{dt^n} + a_{n-1} \\frac{d^{n-1} c(t)}{dt^{n-1}} + \\dots + a_0 c(t) = b_m \\frac{d^m c(t)}{dt^m} + b_{m-1} \\frac{d^{m-1} r(t)}{dt^{m-1}} + \\dots + b_0 r(t)$$\n\nIf we take the Laplace transform, the transfer function is defined as:\n\n$$\\frac{C(s)}{R(s)} = G(s) = \\frac{b_m s^m + b_{m-1} s^{m-1} + \\dots + b_0}{a_n s^n + a_{n-1} s^{n-1} + \\dots a_0}$$\n\nwhere the initial conditions are zero, or $a_0 = b_0 = 0$\n\n## Linearization\n\nIf a nonlinear system is encountered, linearization of a system may be desired to simplify analysis. \n\nGiven a point $(x_0, f_0)$, we can approximate a function $f(x)$ for a small range around that point:\n\n$$f(x) - f(x_0) \\approx \\frac{df}{dx} \\Big|_{x=x_0} (x-x_0)$$\n\n$$\\delta f(x) \\approx m \\Big|_{x=x_0} \\delta x$$\n\n# Time Response\n\nQualitative analysis of the transient response.\n\n## Poles, Zeroes, System Response\n\nA system's response consists of the sum of:\n\n$$c(t) = c_{\\text{forced}}(t) + c_{\\text{natural}}(t)$$\n\nThe forced response consists of your input signal, whereas the natural response is what occurs in the system after the input.\n\n## Poles\n\nPoles of a transfer function cause it to become $\\infty$ and also are any roots that the numerator and denominator share.\n\nThey affect the type of response (e.g. sinusoidal or exponential).\n\n## Zeros\n\nZeros of a transfer function cause it to become $0$ and also are any roots that the numerator and denominator share.\n\nThey affect the amplitude of the response.\n\n## First Order System\n\nThe step response of a first order system is characterized by:\n\n$$C(s) = R(s) G(s) = \\frac{a}{s(s+a)}$$\n$$c(t) = 1 - e^{-at}$$\n$$c_{\\text{forced}}(t) = 1$$\n$$c_{\\text{natural}}(t) = -e^{-at}$$\n\n### Time Constant\n\nThe time constant is the time for the natural response e^{-at} to reach 63% of its final value.\n\n$$\\tau = \\frac{1}{a}$$\n\n### Rise Time\n\nThe rise time is the time to go from 0.1 $\\rightarrow$ 0.9 of its final value.\n\n$$T_r = \\frac{2.2}{a}$$\n\n### Settling Time\n\nThe settling time is the time at which the signal remains within $\\pm$ 2% of the final value.\n\n$$T_s = \\frac{4}{a}$$\n\n## Second Order System\n\nThe step response of a second order system is:\n\n$$C(s) = G(s)R(s) = \\frac{\\omega_n^2}{s(s^2+2\\zeta s+\\omega_n^2)}$$\n\n### Natural Frequency $\\omega_n$\n\nThe natural frequency is the oscillation frequency of the system without damping.\n\n### Damping Ratio $\\zeta$\n\nThe damping ratio quantifies how much of the natural response's frequency is reduced.\n\nGenerally, a lower $\\zeta$ corresponds to more oscillations (less dampening).\n\n### Pole Locations\n\nThe pole locations of a second order system can be easily calculated from the natural frequency and damping ratio:\n\n$$s_{1,2} = -\\zeta w_n \\pm w_n \\sqrt{\\zeta^2 - 1}$$\n\n### Rise Time\n\nSee [rise time](#rise-time).\n\n$$T_r = \\frac{\\pi - \\tan^{-1}\\frac{\\sqrt{1-\\zeta^2}}{\\zeta}}{\\omega_n (1-\\zeta)}$$\n\n### Peak Time\n\nThe peak time is the time to reach the maximum.\n\n$$T_p = \\frac{\\pi}{\\omega_n \\sqrt{1-\\zeta^2}}$$\n\n### Percent Overshoot\n\nThe percent overshoot is how much the waveform overshoots the steady state value. It is the difference between the peak and the steady state value, expressed in terms of a percentage.\n\n$$OS = e^{-(\\zeta \\pi / \\sqrt{1-\\zeta^2})}$$\n\n### Settling Time \n\nSee [settling time](#settling-time).\n\n$$T_s = \\frac{4}{\\zeta \\omega_n}$$\n\n### Response Types\n\nThere are four types of responses to a second order transfer function.\n\n#### Undamped ($\\zeta = 0$)\n\nThe undamped case is where the transfer function freely oscillates with no damping at all.\n\n#### Underdamped (0 < $\\zeta$ < 1)\n\nThe underdamped case is the case where the transfer function has remnants of the undamped signal. It oscillates, but at a relatively lower frequency.\n\nThe poles are complex.\n\n$$s_{1,2} = -\\zeta \\omega_n \\pm \\omega_n j \\sqrt{1 - \\zeta^2}$$\n\n#### Critically Damped ($\\zeta = 1$)\n\nThe critically damped case is the border between underdamped and overdamped case.\n\nThe poles are real and repeating.\n\n$$s_{1,2} = -\\omega_n$$\n\n#### Overdamped ($\\zeta > 1$)\n\nThe overdamped case is where the damping ratio has a large impact on the signal and oscillations are less apparent.\n\nThe poles are real and distinct.\n\n$$s_{1,2} = -\\zeta w_n \\pm w_n \\sqrt{\\zeta^2 - 1}$$\n\n## Higher Order Transfer Functions\n\nFirst or second order transfer functions with no zeros cannot be applied to higher order ones. We can apply dominant pole analysis if certain conditions are met.\n\n### Dominant Pole Analysis\n\nThe idea behind dominant pole analysis is that the further a pole is from the imaginary axis, the faster the pole decays; therefore, it has less of an effect it has on the overall response.\n\nAs a result, we can use the appropriate formulae depending on the number of poles and the precision desired.\n\n#### Zeros Analysis\n\nThe closer the zero is to the dominant poles, the more effect it has on the response.\n\nAs the zero becomes further from the dominant poles, it approaches that of a two pole system.\n\nIf the zero is on the right half plane, the \n\n# Stability\n\nA system is said to be stable if all bounded inputs yield a bounded output.\n\nFor an LTI system, it is stable if the natural response $\\rightarrow$ 0 as $t \\rightarrow \\infty$.\n\nPoles that appear in the left hand, real plane are considered stable because they converge to zero, whereas those that lie on the left hand, complex plane often explode and diverge.\n\n## Relative Stability\n\nA transfer function is relatively stable with stability margin if the distance of the poles are at least $\\sigma$ from the imaginary plane.\n\n# Steady State Error\n\nSteady state error is the error left when the steady state dies out. In other words, it is the difference between the input and output for a certain input as $t \\rightarrow \\infty$.\n\nFor a closed loop feedback system:\n\n$$\\frac{E(s)}{R(s)} = \\frac{1}{1+G(s)} \\implies E(s) = \\frac{R(s)}{1+G(s)}$$\n\n## Final Value Theorem\n\nThe steady state error for the above system is:\n\n$$e(\\infty) = \\lim_{t \\rightarrow 0} e(t) = \\lim_{s \\rightarrow 0} E(s)$$\n\nAssuming $\\frac{1}{1+G(s)}$ is stable:\n\n$$e(\\infty) = \\lim_{s \\rightarrow 0} s \\frac{R(s)}{1+G(s)}$$\n\n## System Type\n\nA system $G(s)$ is said to be type $n$ if there are $n$ poles at the origin.\n\n$$G(s) = \\frac{N(s)}{s^n Q(s)}$$\n"}}]);