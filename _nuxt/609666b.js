(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{516:function(n,r,e){"use strict";e.r(r),r.default="---\r\nheader: Quantum Mechanics\r\ndescription: Physics for small things.\r\n---\r\n\r\n# Energy Quantization\r\n\r\nIn quantum mechanics, a photon's energy is released in discrete packets of energy called quanta.\r\n\r\nThe energy of a photon is characterized by the equation:\r\n\r\n$$E = hv = \\frac{hc}{v}$$\r\n\r\n| Symbol | Meaning |\r\n| ------ | ------- |\r\n| $E$    | Energy of quanta |\r\n| $h$    | Planck's constant $6.626 \\cdot 10^{-34} J \\cdot s$ |\r\n| v      | Frequency of radiation |\r\n\r\n### Maximum Kinetic Energy of Photoelectron (Photoelectric Effect)\r\n\r\nThe **photoelectric effect** describes the event when photoelectrons are emitted and the photons fall incident to a material. It states that it takes a minimum amount of energy, $\\Phi$, the work function, to remove the electron from the material's surface.\r\n\r\n$$K = \\frac{1}{2}mv^2 = hv - \\Phi = hv - hv_0$$\r\n$$v \\geq v_0$$\r\n\r\n| Symbol | Meaning |\r\n| ------ | ------- |\r\n| $K$    | Max kinetic energy of photoelectron |\r\n| $\\Phi$ | Work Function |\r\n| $v$    | Frequency of radiation |\r\n\r\n# Wave-Particle Duality\r\n\r\nWaves have particle-like behaviors and vice versa.\r\n\r\nThe momentum of a photon is:\r\n\r\n$$p = \\frac{h}{\\lambda}$$\r\n\r\n| Symbol | Meaning |\r\n| ------ | ------- |\r\n| $p$    | Momentum of a photon |\r\n| $\\lambda$ | de Broglie Wavelength of the light wave |\r\n| $h$    | Planck's constant $6.626 \\cdot 10^{-34} J \\cdot s$ |\r\n\r\n# Heisenberg Uncertainty Principle\r\n\r\nThe Heisenberg uncertainty principle is especially useful for very small particles. It says that simultaneous measurements of two values has some error attached to it because of the scale.\r\n\r\n$$\\hbar = \\frac{h}{2 \\pi}$$\r\n\r\n$$\\Delta p \\Delta x \\geq \\hbar$$\r\n\r\n$$\\Delta E \\Delta t \\geq \\hbar$$\r\n\r\n# The Wave Function\r\n\r\nThe wave function, $\\Psi(x,t)$ describes the behavior of an electron in crystal.\r\n\r\nIt is written as:\r\n\r\n$$\\Psi(x, t) = \\psi(x)\\phi(t)$$\r\n\r\n$$\\phi(t) = e^{-j(E/\\hbar)t} = e^{j\\omega t}$$\r\n\r\nwhere $\\phi(t)$ is the time portion of the wave function.\r\n\r\nIt has the general solution:\r\n\r\n$$\\Psi(x,t) = A e^{j(kx-\\omega t)} + B e^{-j(kx-\\omega t)}$$\r\n\r\n### Wave Number\r\n\r\nThe wave number describes the number of wavelengths per unit distance.\r\n\r\n$$k = \\sqrt{\\frac{2mE}{\\hbar^2}} = \\sqrt{\\frac{p^2}{\\hbar^2}} = \\frac{p}{\\hbar} = \\frac{2\\pi}{\\lambda}$$\r\n\r\n$$p=\\hbar k$$\r\n\r\n### Probability Density Function\r\n\r\nAlone, the wave function $\\Psi(x, t)$ does not represent anything physcially. The probability density function,\r\n\r\n$$|\\Psi(x,t)|^2 = \\Psi(x, t) \\cdot \\Psi^*(x,t)$$\r\n\r\nrepresents the probability of finding the particle between $x$ and $x+dx$ at a certain time.\r\n\r\n### Boundary Conditions\r\n\r\nGiven the [probability density function](#probability-density-function), $|\\Psi(x)|^2$, we can say that, for a single particle:\r\n\r\n$$\\int_{- \\infty}^\\infty |\\Psi(x)|^2 dx = 1$$\r\n\r\nwhich states that over all of space, the probability of finding the particle is 100%.\r\n\r\n# Schrodinger's Wave Equation\r\n\r\nSchrodinger's wave equation describes the motion of electrons in a crystal and meshes the ideas of quantization and the wave-particle duality.\r\n\r\n$$- \\frac{\\hbar^2}{2m} \\cdot \\frac{\\partial^2 \\psi(x,t)}{\\partial x^2} + V(x) \\psi(x, t) = j \\hbar \\frac{\\partial \\psi (x,t)}{\\partial t} $$\r\n\r\nTime Independent Schrodinger's Wave Equations\r\n\r\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2m}{\\hbar^2} (E-V(x)) \\psi(x) = 0$$\r\n\r\n### Particle in a Free Space\r\n\r\nIf a particle is in free space, it has no external forces acting on itself. It is represented as a traveling wave.\r\n\r\nTherefore, we assume:\r\n\r\n- $V(x) = 0$, the potential energy is zero.\r\n- $E > V(x)$\r\n\r\nThe time-independent wave equation is now:\r\n\r\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\r\n\r\nwith the solution\r\n\r\n$$\\psi(x) = A e^{\\frac{jx\\sqrt{2mE}}{\\hbar}} + B e^{\\frac{jx\\sqrt{2mE}}{\\hbar}} = A e^{jkx} + B e^{-jkx}$$\r\n\r\n$$k = \\sqrt{\\frac{2mE}{\\hbar^2}}$$\r\n\r\n### Infinite Potential Well\r\n\r\nWe define a particle to be confined within a width from $x=0$ to $=a$, surrounded by two infinitely high potential walls. Like with the particle in a free space, the time-independent Schrodinger's wave equation is defined as:\r\n\r\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\r\n\r\nwith a solution\r\n\r\n$$\\psi(x) = A_1 \\cos kx + A_2 \\sin kx$$\r\n$$k = \\frac{n \\pi}{a}, n = 1, 2, 3, ...$$\r\n\r\nThe boundary condition of the wave function is:\r\n\r\n$$\\psi(x = 0) = \\psi(x = a) = 0$$\r\n\r\nTherefore, \r\n\r\n$$A_1 = 0 \\text{ at } x = 0$$\r\n\r\n$$\\psi(x = a) = 0 = A_2 \\sin ka \\text{ at } x = a$$\r\n\r\nNow the probability is:\r\n\r\n$$\\int_0^a A_2^2 \\sin^2 kx dx = 1 \\implies A_2 = \\sqrt{\\frac{2}{a}}$$\r\n\r\nNow the wave function is:\r\n\r\n$$\\psi(x) = \\sqrt{\\frac{2}{a}} \\sin(\\frac{n \\pi x}{a}), n=1,2,3$$\r\n\r\n#### Energy Levels\r\n\r\nThe total energy of the particle in the infinite potential well must have discrete values. The energy of the particle is quantized.\r\n\r\n$$E = E_n = \\frac{\\hbar^2 n^2 \\pi^2}{2ma^2}, n=1,2,3,...$$\r\n\r\n$$\\psi(x) = \\sqrt{\\frac{2}{a}} \\sin k_n x$$\r\n\r\n### Step Potential Function\r\n\r\nWe assume that $E < V_0$.\r\n\r\nIn this case, the flux of particles is incident on a potential barrier with $E < V_0$, traveling from $-\\infty$ in the $+x$ direction. The step potential function follows Schrodinger's time independent equation:\r\n\r\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\r\n\r\nThe general solution is:\r\n\r\n$$\\psi(x) = A_1 e^{jkx} + B e^{-jkx}$$\r\n\r\nWhen the particle hits the potential barrier, it will be reflected completely and will travel in the $-z$ direction.\r\n\r\n### Potential Barrier\r\n\r\nIn this case, a potential barrier with is defined with a finite width from $x=0$ to $x=a$. The energy of an incident particle on the potential barrier is $E<V_0$. Now, the particle has the chance to tunnel through the potential barrier.\r\n\r\n### Tunneling\r\n\r\nThe probability that a particle penetrates through the barrier is:\r\n\r\n$$T \\approx 16 (\\frac{E}{V_0})(1-\\frac{E}{V_0}) e^{-2ka})$$\r\n"}}]);