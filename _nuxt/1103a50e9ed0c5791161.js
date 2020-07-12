(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{510:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Quantum Mechanics\ndescription: Physics for small things.\n---\n\n# Energy Quantization\n\nIn quantum mechanics, a photon's energy is released in discrete packets of energy called quanta.\n\nThe energy of a photon is characterized by the equation:\n\n$$E = hv = \\frac{hc}{v}$$\n\n| Symbol | Meaning |\n| ------ | ------- |\n| $E$    | Energy of quanta |\n| $h$    | Planck's constant $6.626 \\cdot 10^{-34} J \\cdot s$ |\n| v      | Frequency of radiation |\n\n### Maximum Kinetic Energy of Photoelectron (Photoelectric Effect)\n\nThe **photoelectric effect** describes the event when photoelectrons are emitted and the photons fall incident to a material. It states that it takes a minimum amount of energy, $\\Phi$, the work function, to remove the electron from the material's surface.\n\n$$K = \\frac{1}{2}mv^2 = hv - \\Phi = hv - hv_0$$\n$$v \\geq v_0$$\n\n| Symbol | Meaning |\n| ------ | ------- |\n| $K$    | Max kinetic energy of photoelectron |\n| $\\Phi$ | Work Function |\n| $v$    | Frequency of radiation |\n\n# Wave-Particle Duality\n\nWaves have particle-like behaviors and vice versa.\n\nThe momentum of a photon is:\n\n$$p = \\frac{h}{\\lambda}$$\n\n| Symbol | Meaning |\n| ------ | ------- |\n| $p$    | Momentum of a photon |\n| $\\lambda$ | de Broglie Wavelength of the light wave |\n| $h$    | Planck's constant $6.626 \\cdot 10^{-34} J \\cdot s$ |\n\n# Heisenberg Uncertainty Principle\n\nThe Heisenberg uncertainty principle is especially useful for very small particles. It says that simultaneous measurements of two values has some error attached to it because of the scale.\n\n$$\\hbar = \\frac{h}{2 \\pi}$$\n\n$$\\Delta p \\Delta x \\geq \\hbar$$\n\n$$\\Delta E \\Delta t \\geq \\hbar$$\n\n# The Wave Function\n\nThe wave function, $\\Psi(x,t)$ describes the behavior of an electron in crystal.\n\nIt is written as:\n\n$$\\Psi(x, t) = \\psi(x)\\phi(t)$$\n\n$$\\phi(t) = e^{-j(E/\\hbar)t} = e^{j\\omega t}$$\n\nwhere $\\phi(t)$ is the time portion of the wave function.\n\nIt has the general solution:\n\n$$\\Psi(x,t) = A e^{j(kx-\\omega t)} + B e^{-j(kx-\\omega t)}$$\n\n### Wave Number\n\nThe wave number describes the number of wavelengths per unit distance.\n\n$$k = \\sqrt{\\frac{2mE}{\\hbar^2}} = \\sqrt{\\frac{p^2}{\\hbar^2}} = \\frac{p}{\\hbar} = \\frac{2\\pi}{\\lambda}$$\n\n$$p=\\hbar k$$\n\n### Probability Density Function\n\nAlone, the wave function $\\Psi(x, t)$ does not represent anything physcially. The probability density function,\n\n$$|\\Psi(x,t)|^2 = \\Psi(x, t) \\cdot \\Psi^*(x,t)$$\n\nrepresents the probability of finding the particle between $x$ and $x+dx$ at a certain time.\n\n### Boundary Conditions\n\nGiven the [probability density function](#probability-density-function), $|\\Psi(x)|^2$, we can say that, for a single particle:\n\n$$\\int_{- \\infty}^\\infty |\\Psi(x)|^2 dx = 1$$\n\nwhich states that over all of space, the probability of finding the particle is 100%.\n\n# Schrodinger's Wave Equation\n\nSchrodinger's wave equation describes the motion of electrons in a crystal and meshes the ideas of quantization and the wave-particle duality.\n\n$$- \\frac{\\hbar^2}{2m} \\cdot \\frac{\\partial^2 \\psi(x,t)}{\\partial x^2} + V(x) \\psi(x, t) = j \\hbar \\frac{\\partial \\psi (x,t)}{\\partial t} $$\n\nTime Independent Schrodinger's Wave Equations\n\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2m}{\\hbar^2} (E-V(x)) \\psi(x) = 0$$\n\n### Particle in a Free Space\n\nIf a particle is in free space, it has no external forces acting on itself. It is represented as a traveling wave.\n\nTherefore, we assume:\n\n- $V(x) = 0$, the potential energy is zero.\n- $E > V(x)$\n\nThe time-independent wave equation is now:\n\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\n\nwith the solution\n\n$$\\psi(x) = A e^{\\frac{jx\\sqrt{2mE}}{\\hbar}} + B e^{\\frac{jx\\sqrt{2mE}}{\\hbar}} = A e^{jkx} + B e^{-jkx}$$\n\n$$k = \\sqrt{\\frac{2mE}{\\hbar^2}}$$\n\n### Infinite Potential Well\n\nWe define a particle to be confined within a width from $x=0$ to $=a$, surrounded by two infinitely high potential walls. Like with the particle in a free space, the time-independent Schrodinger's wave equation is defined as:\n\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\n\nwith a solution\n\n$$\\psi(x) = A_1 \\cos kx + A_2 \\sin kx$$\n$$k = \\frac{n \\pi}{a}, n = 1, 2, 3, ...$$\n\nThe boundary condition of the wave function is:\n\n$$\\psi(x = 0) = \\psi(x = a) = 0$$\n\nTherefore, \n\n$$A_1 = 0 \\text{ at } x = 0$$\n\n$$\\psi(x = a) = 0 = A_2 \\sin ka \\text{ at } x = a$$\n\nNow the probability is:\n\n$$\\int_0^a A_2^2 \\sin^2 kx dx = 1 \\implies A_2 = \\sqrt{\\frac{2}{a}}$$\n\nNow the wave function is:\n\n$$\\psi(x) = \\sqrt{\\frac{2}{a}} \\sin(\\frac{n \\pi x}{a}), n=1,2,3$$\n\n#### Energy Levels\n\nThe total energy of the particle in the infinite potential well must have discrete values. The energy of the particle is quantized.\n\n$$E = E_n = \\frac{\\hbar^2 n^2 \\pi^2}{2ma^2}, n=1,2,3,...$$\n\n$$\\psi(x) = \\sqrt{\\frac{2}{a}} \\sin k_n x$$\n\n### Step Potential Function\n\nWe assume that $E < V_0$.\n\nIn this case, the flux of particles is incident on a potential barrier with $E < V_0$, traveling from $-\\infty$ in the $+x$ direction. The step potential function follows Schrodinger's time independent equation:\n\n$$\\frac{\\partial^2 \\psi(x)}{\\partial x^2} + \\frac{2mE}{\\hbar^2} \\psi(x) = 0$$\n\nThe general solution is:\n\n$$\\psi(x) = A_1 e^{jkx} + B e^{-jkx}$$\n\nWhen the particle hits the potential barrier, it will be reflected completely and will travel in the $-z$ direction.\n\n### Potential Barrier\n\nIn this case, a potential barrier with is defined with a finite width from $x=0$ to $x=a$. The energy of an incident particle on the potential barrier is $E<V_0$. Now, the particle has the chance to tunnel through the potential barrier.\n\n### Tunneling\n\nThe probability that a particle penetrates through the barrier is:\n\n$$T \\approx 16 (\\frac{E}{V_0})(1-\\frac{E}{V_0}) e^{-2ka})$$\n"}}]);