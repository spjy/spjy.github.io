(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{519:function(n,t,e){"use strict";e.r(t),t.default="---\nheader: Systems\ndescription: Big picture engineering.\n---\n\n# 1D Systems\n\n## Continuous Time Fourier Transform\n\nThe Fourier Transform assists with analyzing signals in the frequency domain. It is a transform from the time domain to the frequency domain and decomposes a function into its frequencies, hence why it is multiplied by sinusoids.\n\n$$F(f) = \\int_{-\\infty}^\\infty f(t) e^{-i2\\pi ft} dt$$\n\n$$f(t) = \\int_{-\\infty}^\\infty F(f) e^{i2\\pi ft} df$$\n\n## Continuous Time Signals\n\n### Rectangle Function\n\n$$\\text{rect}(t) \\triangleq \n\\begin{cases}\n  1 & |t| \\leq 1/2 \\\\\n  0 & \\text{otherwise}\n\\end{cases}\n$$\n\n### Step Function\n\n$$\\text{step}(t) \\triangleq \n\\begin{cases}\n  1 & t \\geq 0 \\\\\n  0 & t < 0\n\\end{cases}\n$$\n\n### Sign Function\n\n$$\\text{sign}(t) \\triangleq \n\\begin{cases}\n  1 & t > 0 \\\\\n  0 & t = 0 \\\\\n  -1 & t < 0\n\\end{cases}\n$$\n\n### sinc Function\n\n$$\\text{sinc}(t) \\triangleq \\frac{sin(\\pi t)}{\\pi t}$$\n$$\\text{sinc}(0) \\equiv \\lim_{t \\to 0} \\frac{sin(\\pi t)}{\\pi t} = 1 \\forall a \\neq 0$$\n\n### Lambda Function\n\n$$\\text{rect}(t) \\triangleq \n\\begin{cases}\n  1 - |t| & |t| \\leq 1 \\\\\n  0 & |t| > 1\n\\end{cases}\n$$\n\n### Dirac Impulse\n\n$$g(0) = \\int_{-\\infty}^\\infty \\delta(t) g(t) dt$$\n$$g(t_0) = \\int_{-\\infty}^\\infty \\delta(t-t_0) g(t) dt$$\n$$g(0) = \\lim_{\\epsilon \\to 0} \\int_{-\\infty}^\\infty \\frac{1}{\\epsilon} \\text{rect}\\Big(\\frac{t}{\\epsilon}\\Big) g(t) dt$$\n$$\\delta (t) = \\lim_{\\epsilon \\to 0} \\frac{1}{\\epsilon} \\text{rect}\\Big(\\frac{t}{\\epsilon}\\Big)$$\n\n## Continuous Time System Properties\n\n### Linear System\n\n$$x_i(t) \\to \n\\fbox{\n    {\n      L\n    }\n} \\to y_i(t) \\ \\to \\ \\displaystyle \\sum_{i = 1}^N c_i x_i(t) \\to\n\\fbox{\n    {\n      L\n    }\n} \\to \\displaystyle \\sum_{i = 1}^N c_i y_i(t)$$\n\n### Time Invariant\n\n$$x(t) \\to \n\\fbox{\n    {\n      TI\n    }\n} \\to y(t) \\ \\to \\ \\displaystyle x(t-\\tau) \\to\n\\fbox{\n    {\n      TI\n    }\n} \\to y(t-\\tau)$$\n\n### Linear & Time Invariant (LTI) Response\n\n$$x_i(t) \\to \n\\fbox{\n    {\n      LTI\n    }\n} \\to y_i(t) \\ \\to \\ \\displaystyle \\sum_{i = 1}^N c_i x_i(t-\\tau) \\to\n\\fbox{\n    {\n      LTI\n    }\n} \\to \\displaystyle \\sum_{i = 1}^N c_i y_i(t-\\tau)$$\n\nIn other words, $y(t) \\Big \\{ x(t-\\tau) \\Big \\} = y(t-\\tau) \\Big \\{ x(t-\\tau) \\Big \\} \\text{}$\n\n### Impulse Response\n\n$$\\delta(t-\\tau) \\to \n\\fbox{\n    {\n      LTI\n    }\n} \\to y(t) = h(t-\\tau)$$\n\n### Convolution\n\n$$y(t) = \\int_{-\\infty}^\\infty x(\\tau) h(t-\\tau) d\\tau = x(t) * h(t)$$\n\n# 2D Systems\n\n## Continuous Space Fourier Transform \n\n$$F(u,v) = \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty f(x,y) e^{-i2\\pi(ux+vy)} \\text{d}x\\text{d}y$$\n\n$$f(x,y) = \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty F(u,v) e^{i2\\pi(ux+vy)} \\text{d}u\\text{d}v$$\n\n## Continuous Space Signals\n\n\n"}}]);