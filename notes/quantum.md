---
header: Quantum Mechanics
description: Physics for small things.
---

# Energy Quantization

In quantum mechanics, a photon's energy is released in discrete packets of energy called quanta.

The energy of a photon is characterized by the equation:

$$E = hv = \frac{hc}{v}$$

| Symbol | Meaning |
| ------ | ------- |
| $E$    | Energy of quanta |
| $h$    | Planck's constant $6.626 \cdot 10^{-34} J \cdot s$ |
| v      | Frequency of radiation |

### Maximum Kinetic Energy of Photoelectron (Photoelectric Effect)

The **photoelectric effect** describes the event when photoelectrons are emitted and the photons fall incident to a material. It states that it takes a minimum amount of energy, $\Phi$, the work function, to remove the electron from the material's surface.

$$K = \frac{1}{2}mv^2 = hv - \Phi = hv - hv_0$$
$$v \geq v_0$$

| Symbol | Meaning |
| ------ | ------- |
| $K$    | Max kinetic energy of photoelectron |
| $\Phi$ | Work Function |
| $v$    | Frequency of radiation |

# Wave-Particle Duality

Waves have particle-like behaviors and vice versa.

The momentum of a photon is:

$$p = \frac{h}{\lambda}$$

| Symbol | Meaning |
| ------ | ------- |
| $p$    | Momentum of a photon |
| $\lambda$ | de Broglie Wavelength of the light wave |
| $h$    | Planck's constant $6.626 \cdot 10^{-34} J \cdot s$ |

# Heisenberg Uncertainty Principle

The Heisenberg uncertainty principle is especially useful for very small particles. It says that simultaneous measurements of two values has some error attached to it because of the scale.

$$\hbar = \frac{h}{2 \pi}$$

$$\Delta p \Delta x \geq \hbar$$

$$\Delta E \Delta t \geq \hbar$$

# The Wave Function

The wave function, $\Psi(x,t)$ describes the behavior of an electron in crystal.

It is written as:

$$\Psi(x, t) = \psi(x)\phi(t)$$

$$\phi(t) = e^{-j(E/\hbar)t} = e^{j\omega t}$$

where $\phi(t)$ is the time portion of the wave function.

It has the general solution:

$$\Psi(x,t) = A e^{j(kx-\omega t)} + B e^{-j(kx-\omega t)}$$

### Wave Number

The wave number describes the number of wavelengths per unit distance.

$$k = \sqrt{\frac{2mE}{\hbar^2}} = \sqrt{\frac{p^2}{\hbar^2}} = \frac{p}{\hbar} = \frac{2\pi}{\lambda}$$

$$p=\hbar k$$

### Probability Density Function

Alone, the wave function $\Psi(x, t)$ does not represent anything physcially. The probability density function,

$$|\Psi(x,t)|^2 = \Psi(x, t) \cdot \Psi^*(x,t)$$

represents the probability of finding the particle between $x$ and $x+dx$ at a certain time.

### Boundary Conditions

Given the [probability density function](#probability-density-function), $|\Psi(x)|^2$, we can say that, for a single particle:

$$\int_{- \infty}^\infty |\Psi(x)|^2 dx = 1$$

which states that over all of space, the probability of finding the particle is 100%.

# Schrodinger's Wave Equation

Schrodinger's wave equation describes the motion of electrons in a crystal and meshes the ideas of quantization and the wave-particle duality.

$$- \frac{\hbar^2}{2m} \cdot \frac{\partial^2 \psi(x,t)}{\partial x^2} + V(x) \psi(x, t) = j \hbar \frac{\partial \psi (x,t)}{\partial t} $$

Time Independent Schrodinger's Wave Equations

$$\frac{\partial^2 \psi(x)}{\partial x^2} + \frac{2m}{\hbar^2} (E-V(x)) \psi(x) = 0$$

### Particle in a Free Space

If a particle is in free space, it has no external forces acting on itself. It is represented as a traveling wave.

Therefore, we assume:

- $V(x) = 0$, the potential energy is zero.
- $E > V(x)$

The time-independent wave equation is now:

$$\frac{\partial^2 \psi(x)}{\partial x^2} + \frac{2mE}{\hbar^2} \psi(x) = 0$$

with the solution

$$\psi(x) = A e^{\frac{jx\sqrt{2mE}}{\hbar}} + B e^{\frac{jx\sqrt{2mE}}{\hbar}} = A e^{jkx} + B e^{-jkx}$$

$$k = \sqrt{\frac{2mE}{\hbar^2}}$$

### Infinite Potential Well

We define a particle to be confined within a width from $x=0$ to $=a$, surrounded by two infinitely high potential walls. Like with the particle in a free space, the time-independent Schrodinger's wave equation is defined as:

$$\frac{\partial^2 \psi(x)}{\partial x^2} + \frac{2mE}{\hbar^2} \psi(x) = 0$$

with a solution

$$\psi(x) = A_1 \cos kx + A_2 \sin kx$$
$$k = \frac{n \pi}{a}, n = 1, 2, 3, ...$$

The boundary condition of the wave function is:

$$\psi(x = 0) = \psi(x = a) = 0$$

Therefore, 

$$A_1 = 0 \text{ at } x = 0$$

$$\psi(x = a) = 0 = A_2 \sin ka \text{ at } x = a$$

Now the probability is:

$$\int_0^a A_2^2 \sin^2 kx dx = 1 \implies A_2 = \sqrt{\frac{2}{a}}$$

Now the wave function is:

$$\psi(x) = \sqrt{\frac{2}{a}} \sin(\frac{n \pi x}{a}), n=1,2,3$$

#### Energy Levels

The total energy of the particle in the infinite potential well must have discrete values. The energy of the particle is quantized.

$$E = E_n = \frac{\hbar^2 n^2 \pi^2}{2ma^2}, n=1,2,3,...$$

$$\psi(x) = \sqrt{\frac{2}{a}} \sin k_n x$$

### Step Potential Function

We assume that $E < V_0$.

In this case, the flux of particles is incident on a potential barrier with $E < V_0$, traveling from $-\infty$ in the $+x$ direction. The step potential function follows Schrodinger's time independent equation:

$$\frac{\partial^2 \psi(x)}{\partial x^2} + \frac{2mE}{\hbar^2} \psi(x) = 0$$

The general solution is:

$$\psi(x) = A_1 e^{jkx} + B e^{-jkx}$$

When the particle hits the potential barrier, it will be reflected completely and will travel in the $-z$ direction.

### Potential Barrier

In this case, a potential barrier with is defined with a finite width from $x=0$ to $x=a$. The energy of an incident particle on the potential barrier is $E<V_0$. Now, the particle has the chance to tunnel through the potential barrier.

### Tunneling

The probability that a particle penetrates through the barrier is:

$$T \approx 16 (\frac{E}{V_0})(1-\frac{E}{V_0}) e^{-2ka})$$
