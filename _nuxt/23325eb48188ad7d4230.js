(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{495:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Fourier Analysis\ndescription: Manipulation of sinusoids for expansion of periodic functions.\n---\n\n# Brief\nWe can express periodic functions in terms of sinusoids. More specifically, it is an infinite series of sinusoids to expand functions.\n\n# Mathematical References\n\n#### Euler's Relation\n\n$$e^{jx}=cosx+jsinx$$\n\n$$cos(wt) = \\frac{e^{jw}+e^{-jw}}{2}$$\n\n$$sin(wt) = \\frac{e^{jw}-e^{-jw}}{2j}$$\n\n#### Complex Numbers\n\n$$\\mathcal{Re} \\left\\{ a_k \\right\\} = \\frac{1}{2} (a_k + a_k^*)$$\n\n$$\\mathcal{Im} \\left\\{ a_k \\right\\} = \\frac{1}{2j} (a_k - a_k^*)$$\n\n#### Sum Solutions\n\n$$\\sum_{n=0}^\\infty a^n = \\frac{1}{1-a}, |a| < 1$$\n$$\\sum_{k=0}^n a^k = \\frac{1-a^{n+1}}{1-a}, a \\neq 1$$\n\n# Fourier Series\n\n## Continuous Time Fourier Series Representation\n\n$$\\mathcal{F}(t) = x(t) = \\sum_{k = -\\infty}^\\infty a_ke^{jk \\omega_0 t}$$\n\n### Fourier Series Values\n\n#### Fundamental Period\n\n$$T= \\frac{2\\pi}{\\omega_0}$$\n\n#### Fundamental Frequency\n\n$$\\omega_0 = \\frac{2\\pi}{T}$$\n\n#### Fourier Series Coefficients\n\n$$a_k = \\frac{1}{T} \\int_{<T>} x(t)e^{-jk \\omega_0 t} dt$$\n\n$$a_0 = \\frac{1}{T} \\int_{<T>} x(t) dt$$\n\n### Linear Time Invariant Systems (LTI) & Fourier Series\n\nSay we wanted to analyze the response of an LTI system with a periodic signal. We can modify the Fourier series representation to take into the account the response of a system:\n\n$$y(t) = \\sum_{k=-\\infty}^\\infty b_k e^{jk\\omega_0 t}$$\n\nwhere $b_k=a_k H(k \\omega_0)$.\n\n### LTI & Fourier Series Values\n\n#### Frequency Response\n\n$$H(\\omega) = \\int_{-\\infty}^\\infty h(t) e^{-j\\omega t} dt$$\n\n#### Fourier Coefficient Scaling Factor\n\n$$b_k = a_k H(k \\omega_0)$$\n\n### Representing power of a signal\n\nTo get the power of a signal, we can simply use Parseval's relation for periodic signals:\n\n$$\\mathcal{P} = \\frac{1}{T} \\int_{<T>} |x(t)|^2 dt = \\sum_{k= -\\infty}^\\infty |a_k|^2$$\n"}}]);