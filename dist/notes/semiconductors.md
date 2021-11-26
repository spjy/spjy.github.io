---
header: Semiconductors
description: A little bit of conductors.
---

# Semiconductors

A semiconductor is one of the categories of materials that describe its electrical properties. It is in between a **conductor** and **insulator**.

### Elemental Semiconductor Materials

Elemental semiconductors are composed of an element, found in group $\text{IV}$ of the periodic table.

#### Examples

Silicon ($\text{Si}$), Germanium ($\text{Ge}$)

### Compound Semiconductor Materials (3-5 compound semiconductor material)

Compound semiconductors are composed of compounds (multiple elements) and are composed of combinations of group $\text{III}$ and group $\text{V} \text{}$.

#### Binary Compounds

Two elements. For example, $\text{AlP}$, $\text{AlAs}$, $\text{GaP}$, $\text{GaAs}$, $\text{InP}$.

#### Ternary Compounds

Three elements. For example $\text{Al} \text{G}_{a_{1-x}} \text{As}$.

# Types of Solids

### Amorphous

- No order
- No patterns

### Polycrystalline

- Order in some regions
- Patterns in some regions

### Crystalline (Single)

Well formed.

- Order
- Patterns

# Space Lattices

A lattice is the periodic arrangement of atoms.

### Unit Cell

- The smallest volume of crystal used to reproduce crystal.
- Repetitive arrangement can build up the crystal without overlap.
- Orthogonal
- For example, zinc blende, diamond lattice

### Primitive Cell

- Contains one **lattice point**.
- Smallest unit cell that can be repeated to form a lattice. Most basic cell of a lattice.
- Can be non-orthogonal or orthogonal.

# Crystal Structures

3D structure of crystals.

### Simple Cubic

- Atoms are in each corner.

### Body-Centered Cubic

- One atom is added in the center.

### Face-Centered Cubic

- Atoms are added on the faces.
- Each atom on the face contributes half of itself.

### Atomic Density

$$\text{Density} = \frac{\text{atoms}}{\text{volume of unit cell}}$$

# Vector Characterization of Planes, Direction

### Vector Characterization of Planes

$$\bar{r} = p \bar{r} + q \bar{b} + s \bar{c}$$

Representation of crystal planes.

1. Find the intercepts of $\bar{r} = p \bar{r} + q \bar{b} + s \bar{c}$ on the $\bar{a}$, $\bar{b}$ and $\bar{c}$ axes
2. Put it in the form $\displaystyle (\frac{1}{p}, \frac{1}{q}, \frac{1}{s})$
3. Find $\displaystyle \text{LCD}(\frac{1}{p}, \frac{1}{q}, \frac{1}{s})$
4. Multiply $\displaystyle (\frac{1}{p}, \frac{1}{q}, \frac{1}{s}) \cdot \text{LCD}(\frac{1}{p}, \frac{1}{q}, \frac{1}{s})$

### Vector Characterization of Direction

$$|\bar{r}| = [xyz]$$

where $\text{xyz}$ is the vector perpendicular to the surface of the crystal plane.

### Characterization of Families

$$\{ r \} = \{ xyz \}$$

# Diamond Structure

# Quantum Theory of Solids

### K-Space Diagram

$$k= \frac{p}{\hbar} = \alpha$$

#### Free Particle

$$E=\frac{p^2}{2m}=\frac{k^2 \hbar^2}{2m}$$

#### Single Crystal Lattice

$$f(\alpha a) = P' \frac{\sin{\alpha a}}{\alpha a} + \cos{\alpha a}$$

### Pauli Exclusion Principle

No two electrons in an atom or molecule can have the same set of quantum numbers.

### Energy Band Model

An energy band is a collection of discrete energy levels.

As two atoms approach each other (interatomic distance $r_0$ decreases), the interaction increases due to the overlapping of wavefunctions.

#### Discrete Energy Levels

The interaction results in a discrete quantized energy level splitting into two discrete energy levels to form an **energy band**. This is to allow the electrons to occupy a distinct quantum state, following the [Pauli Exclusion Principle](#pauli-exclusion-principle).

#### Atomic Interaction

Naturally, as atoms approach each other, the outermost shell of each atom tends to interact first, say at the $n=2$ energy level. As the atoms further approach each other, they eventually interact in lower energy levels until it reaches $n=1$.

#### Forbidden Bands

In between the discrete energy bands, say between $n=1$ and $n=2$, are called the forbidden energy bands; no electrons are allowed in the area, only in the discrete energy bands.

#### Absense of Thermal Energy

When there is no thermal energy ($T=0$), electrons are in the lowest energy state. All states in the **valence band** are filled while all the states in the **conduction band** are empty.

### Energy Bond Model

#### Atomic Bonding

Electrons are what keep two atoms bounded together. When there is an [absense of thermal energy](#absense-of-thermal-energy) ($T=0$), no bonds are broken. However, as thermal energy increases, the electrons may gain thermal energy to break the covalent bond and jump to the conduction band from the valence band. As a result, a hole (proton) is left in the valence band, and an electron is left in the conduction band.

### Drift Current

Current is the net flow of charge. If there is a net drift of electrons in the conduction band, current will exist since electrons are charged.

#### Drift Current Density

$$J = qNv_d \qquad \text{A/cm}^2$$

where $q$ is the charge, $N$ is the volume density and $v_d$ is the drift current.

#### Average Drift Current

$$J = q \sum_{i=1}^N v_i$$

where $v_i$ is the velocity of the $i$th ion.

### Electron Effective Mass

The force acting upon an electron is:

$$F_{\text{total}} = F_{\text{external}} + F_{\text{internal}} = ma$$

In order to model the internal forces that an electron experiences in the lattice, we use effective mass. Applying the simplification of the model, we have:

$$F_{\text{external}} = m^{*}a$$.

$m^*$ is the effective mass.

Taking the energy of an electron in free space, we take the second derivative of energy with respect to $k$ to isolate $m$:

$$E=\frac{p^2}{2m} = \frac{\hbar^2 k^2}{2m} \implies \frac{1}{\hbar} \frac{dE}{dk} = \frac{p}{m} = v \implies \frac{1}{\hbar^2} \frac{d^2E}{dk^2} = \frac{1}{m^*}$$

#### Free Electron Mechanics

Applying an electric field to a free electron causes an electron to accelerate in the opposite direction of the field due to its charge.

$$F = ma = -eE \implies a=\frac{-eE}{m}$$

### Density of States

It is important to find the density of allowed energy states (based on the energy band theory) to calculate electron and hole concentrations.

We can find the number of states per unit volume.

#### Density of Allowed Electron Energy States in Conduction Band

$$g_c(E) = \frac{4 \pi (2m^*_n)^{3/2}}{h^3} \sqrt{E - E_c} \qquad E \geq E_c$$

As the nergy of the elctron in the conduction band decreases, the number of quantum states decreases.

#### Density of Allowed Electron Energy States in Valence Band

$$g_c(E) = \frac{4 \pi (2m^*_v)^{3/2}}{h^3} \sqrt{E_v - E} \qquad E \leq E_v$$

#### Finding Number of Quantum States Between Energy States

$$N = \int g(E) dE$$

## Statistical Mechanics

### Fermi-Dirac Probability Function

The Fermi-Dirac probability function considers particles to be indistinguishable. It includes all of the permutations of $N$ particles; also, it considers the $i$th energy level with $g_i$ quantum states.

$$\frac{N(E)}{g(E)} = f_F (E) = \frac{1}{1+ e^{\frac{E-E_F}{kT}}}$$

where $N(E)$ is the number of particles per unit volume, while $g(E)$ is the number of quantum states per unit volume.

#### Fermi-Dirac Function in Conduction Band

Therefore, the Fermi-Dirac function $f_F (E)$ gives the probability that a quantum state at energy $E$ will be occupied by an electron.

#### Fermi-Dirac Function in Valence Band

As a result, $f_F (E)$ will only be used in the conduction band since we are considering only electrons in the conduction band.

On the other hand, we will use $1 - f_F (E)$ in the valence band since we are considering holes in the valence band.

### Maxwell-Boltzmann Approximation Function

This function considers particles to be numbered from $1 \rightarrow N$ with no limit to the number of particles allowed in each energy state.

We extend the [Fermi-Dirac probability function](#fermi-dirac-probability-function) and approximate the case where $E - E_F >> kT$. In this case, 

$$f_F(E) \approx e^{\frac{-(E - E_F)}{kT}}$$

# Semiconductor in Equilibrium

## Charge Carriers in Semiconductors

In order to understand the current, we will examine the contribution of electrons and holes to current.

### Distribution of Electrons

With respect to energy, the **distribution of electrons per unit volume** in the conduction band is:

$$n(E) = g_c(E) f_F(E)$$

And in the valence band:

$$n(E) = g_c(E) (1 - f_F(E))$$

### Concentration of Electrons

Based on this equation, we can find the **concentration of electrons** in each band by integrating the [distribution of electrons](#distribution-of-electrons).

#### Conduction Band Hole Concentration

$$\int n(E) = n_o = \int_{E_c}^{E + E_c} g_c(E) f_F(E) dE = N_c e^{\frac{-(E_c - E_F)}{kT}} $$

#### Valence Band Electron Concentration

$$\int n(E) = p_o = \int_{E_v - E}^{E_v} g_c(E) (1 - f_F(E)) dE = N_v e^{\frac{-(E_F - E_v)}{kT}} $$

### Intrinsic Semiconductor

An intrinsic semiconductor is one in which no impurities or imperfections are present.

#### Electron Concentration in an Intrinsic Semiconductor

In other words, the concentration of electrons in the conduction band is equal to the holes in the valence band, $n_i = p_i$ ($i$ = intrinsic).

#### Fermi Energy Level in an Intrinsic Semiconductor

The Fermi Energy level in an intrinsic semiconductor $E_{Fi}$ lies near the mid-gap between the conduction band and valence band.

We can calculate the exact location by equating the [conduction band electron concentration](#conduction-band-electron-concentration) and [valence band electron concentration](#valence-band-electron-concentration).

$$E_{Fi} = E_{midgap} + \frac{3}{4} kT \ln{\bigg(\frac{m_p^*}{m_n^*}\bigg)} $$

- $m_p^* = m_n^* \implies E_{Fi}$ is at the center. 
- $m_p^* > m_n^* \implies E_{Fi}$ is above center. 
- $m_p^* < m_n^* \implies E_{Fi}$ is below center. 

## Dopant Atoms and Energy Levels

### Doping

Doping a semiconductor means that we alter the semiconductor by adding substitutional impurity atoms to increase or decrease its conductivity. 

### Extrinsic Semiconductor

If an [intrinsic semiconductor](#intrinsic-semiconductor) is doped with an impurity atom, it becomes an **extrinsic semiconductor**.

### Donor Impurity Atoms

If a semiconductor is doped with an atom that contains extra electrons and it donates those electrons to the conduction band (and does not create holes in the valence band), it is said to be a **donor impurity atom**.

An example of this would be if an Si semiconductor, a group IV element, was doped with a group V element (like Phosphorous).

#### Donor Ionization Energy

As a result of an atom donating its extra electrons, it therefore becomes ionized positively.

### Acceptor Impurity Atoms

If a semiconductor is doped with an atom that contains an empty spot in its electron shell and it is able to take electrons from the valence band (e.g. by creating holes in the valence band), it is said to be an **acceptor impurity atom**.

An example of this would be if an Si semiconductor, a group IV element, was doped with a group III element (like Boron).

#### Acceptor Ionization Energy

As a result of an atom accepting extra electrons from the semiconductor, it therefore becomes ionized negatively.

### Amphoteric Impurity Atoms

An **amphoteric impurity atom** is one that, depending on what atom it replaces, it can either be a donor or acceptor.

### n-type Semiconductors

If the electron concentration is greater than the hole concentration ($n_0 > p_0$), the semiconductor is an **n-type**.

### p-type Semiconductors

If the hole concentration is greater than the electron concentration ($n_0 < p_0$), the semiconductor is a **p-type**.

### $n_0 p_0$ product

$$n_0 p_0 = n_i^2

### Degenerate Semiconductors


