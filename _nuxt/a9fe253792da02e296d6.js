(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{512:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Semiconductors\ndescription: A little bit of conductors.\n---\n\n# Semiconductors\n\nA semiconductor is one of the categories of materials that describe its electrical properties. It is in between a **conductor** and **insulator**.\n\n### Elemental Semiconductor Materials\n\nElemental semiconductors are composed of an element, found in group $\\text{IV}$ of the periodic table.\n\n#### Examples\n\nSilicon ($\\text{Si}$), Germanium ($\\text{Ge}$)\n\n### Compound Semiconductor Materials (3-5 compound semiconductor material)\n\nCompound semiconductors are composed of compounds (multiple elements) and are composed of combinations of group $\\text{III}$ and group $\\text{V} \\text{}$.\n\n#### Binary Compounds\n\nTwo elements. For example, $\\text{AlP}$, $\\text{AlAs}$, $\\text{GaP}$, $\\text{GaAs}$, $\\text{InP}$.\n\n#### Ternary Compounds\n\nThree elements. For example $\\text{Al} \\text{G}_{a_{1-x}} \\text{As}$.\n\n# Types of Solids\n\n### Amorphous\n\n- No order\n- No patterns\n\n### Polycrystalline\n\n- Order in some regions\n- Patterns in some regions\n\n### Crystalline (Single)\n\nWell formed.\n\n- Order\n- Patterns\n\n# Space Lattices\n\nA lattice is the periodic arrangement of atoms.\n\n### Unit Cell\n\n- The smallest volume of crystal used to reproduce crystal.\n- Repetitive arrangement can build up the crystal without overlap.\n- Orthogonal\n- For example, zinc blende, diamond lattice\n\n### Primitive Cell\n\n- Contains one **lattice point**.\n- Smallest unit cell that can be repeated to form a lattice. Most basic cell of a lattice.\n- Can be non-orthogonal or orthogonal.\n\n# Crystal Structures\n\n3D structure of crystals.\n\n### Simple Cubic\n\n- Atoms are in each corner.\n\n### Body-Centered Cubic\n\n- One atom is added in the center.\n\n### Face-Centered Cubic\n\n- Atoms are added on the faces.\n- Each atom on the face contributes half of itself.\n\n### Atomic Density\n\n$$\\text{Density} = \\frac{\\text{atoms}}{\\text{volume of unit cell}}$$\n\n# Vector Characterization of Planes, Direction\n\n### Vector Characterization of Planes\n\n$$\\bar{r} = p \\bar{r} + q \\bar{b} + s \\bar{c}$$\n\nRepresentation of crystal planes.\n\n1. Find the intercepts of $\\bar{r} = p \\bar{r} + q \\bar{b} + s \\bar{c}$ on the $\\bar{a}$, $\\bar{b}$ and $\\bar{c}$ axes\n2. Put it in the form $\\displaystyle (\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{s})$\n3. Find $\\displaystyle \\text{LCD}(\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{s})$\n4. Multiply $\\displaystyle (\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{s}) \\cdot \\text{LCD}(\\frac{1}{p}, \\frac{1}{q}, \\frac{1}{s})$\n\n### Vector Characterization of Direction\n\n$$|\\bar{r}| = [xyz]$$\n\nwhere $\\text{xyz}$ is the vector perpendicular to the surface of the crystal plane.\n\n### Characterization of Families\n\n$$\\{ r \\} = \\{ xyz \\}$$\n\n# Diamond Structure\n\n# Quantum Theory of Solids\n\n### K-Space Diagram\n\n$$k= \\frac{p}{\\hbar} = \\alpha$$\n\n#### Free Particle\n\n$$E=\\frac{p^2}{2m}=\\frac{k^2 \\hbar^2}{2m}$$\n\n#### Single Crystal Lattice\n\n$$f(\\alpha a) = P' \\frac{\\sin{\\alpha a}}{\\alpha a} + \\cos{\\alpha a}$$\n\n### Pauli Exclusion Principle\n\nNo two electrons in an atom or molecule can have the same set of quantum numbers.\n\n### Energy Band Model\n\nAn energy band is a collection of discrete energy levels.\n\nAs two atoms approach each other (interatomic distance $r_0$ decreases), the interaction increases due to the overlapping of wavefunctions.\n\n#### Discrete Energy Levels\n\nThe interaction results in a discrete quantized energy level splitting into two discrete energy levels to form an **energy band**. This is to allow the electrons to occupy a distinct quantum state, following the [Pauli Exclusion Principle](#pauli-exclusion-principle).\n\n#### Atomic Interaction\n\nNaturally, as atoms approach each other, the outermost shell of each atom tends to interact first, say at the $n=2$ energy level. As the atoms further approach each other, they eventually interact in lower energy levels until it reaches $n=1$.\n\n#### Forbidden Bands\n\nIn between the discrete energy bands, say between $n=1$ and $n=2$, are called the forbidden energy bands; no electrons are allowed in the area, only in the discrete energy bands.\n\n#### Absense of Thermal Energy\n\nWhen there is no thermal energy ($T=0$), electrons are in the lowest energy state. All states in the **valence band** are filled while all the states in the **conduction band** are empty.\n\n### Energy Bond Model\n\n#### Atomic Bonding\n\nElectrons are what keep two atoms bounded together. When there is an [absense of thermal energy](#absense-of-thermal-energy) ($T=0$), no bonds are broken. However, as thermal energy increases, the electrons may gain thermal energy to break the covalent bond and jump to the conduction band from the valence band. As a result, a hole (proton) is left in the valence band, and an electron is left in the conduction band.\n\n### Drift Current\n\nCurrent is the net flow of charge. If there is a net drift of electrons in the conduction band, current will exist since electrons are charged.\n\n#### Drift Current Density\n\n$$J = qNv_d \\qquad \\text{A/cm}^2$$\n\nwhere $q$ is the charge, $N$ is the volume density and $v_d$ is the drift current.\n\n#### Average Drift Current\n\n$$J = q \\sum_{i=1}^N v_i$$\n\nwhere $v_i$ is the velocity of the $i$th ion.\n\n### Electron Effective Mass\n\nThe force acting upon an electron is:\n\n$$F_{\\text{total}} = F_{\\text{external}} + F_{\\text{internal}} = ma$$\n\nIn order to model the internal forces that an electron experiences in the lattice, we use effective mass. Applying the simplification of the model, we have:\n\n$$F_{\\text{external}} = m^{*}a$$.\n\n$m^*$ is the effective mass.\n\nTaking the energy of an electron in free space, we take the second derivative of energy with respect to $k$ to isolate $m$:\n\n$$E=\\frac{p^2}{2m} = \\frac{\\hbar^2 k^2}{2m} \\implies \\frac{1}{\\hbar} \\frac{dE}{dk} = \\frac{p}{m} = v \\implies \\frac{1}{\\hbar^2} \\frac{d^2E}{dk^2} = \\frac{1}{m^*}$$\n\n#### Free Electron Mechanics\n\nApplying an electric field to a free electron causes an electron to accelerate in the opposite direction of the field due to its charge.\n\n$$F = ma = -eE \\implies a=\\frac{-eE}{m}$$\n\n### Density of States\n\nIt is important to find the density of allowed energy states (based on the energy band theory) to calculate electron and hole concentrations.\n\nWe can find the number of states per unit volume.\n\n#### Density of Allowed Electron Energy States in Conduction Band\n\n$$g_c(E) = \\frac{4 \\pi (2m^*_n)^{3/2}}{h^3} \\sqrt{E - E_c} \\qquad E \\geq E_c$$\n\nAs the nergy of the elctron in the conduction band decreases, the number of quantum states decreases.\n\n#### Density of Allowed Electron Energy States in Valence Band\n\n$$g_c(E) = \\frac{4 \\pi (2m^*_v)^{3/2}}{h^3} \\sqrt{E_v - E} \\qquad E \\leq E_v$$\n\n#### Finding Number of Quantum States Between Energy States\n\n$$N = \\int g(E) dE$$\n\n## Statistical Mechanics\n\n### Fermi-Dirac Probability Function\n\nThe Fermi-Dirac probability function considers particles to be indistinguishable. It includes all of the permutations of $N$ particles; also, it considers the $i$th energy level with $g_i$ quantum states.\n\n$$\\frac{N(E)}{g(E)} = f_F (E) = \\frac{1}{1+ e^{\\frac{E-E_F}{kT}}}$$\n\nwhere $N(E)$ is the number of particles per unit volume, while $g(E)$ is the number of quantum states per unit volume.\n\n#### Fermi-Dirac Function in Conduction Band\n\nTherefore, the Fermi-Dirac function $f_F (E)$ gives the probability that a quantum state at energy $E$ will be occupied by an electron.\n\n#### Fermi-Dirac Function in Valence Band\n\nAs a result, $f_F (E)$ will only be used in the conduction band since we are considering only electrons in the conduction band.\n\nOn the other hand, we will use $1 - f_F (E)$ in the valence band since we are considering holes in the valence band.\n\n### Maxwell-Boltzmann Approximation Function\n\nThis function considers particles to be numbered from $1 \\rightarrow N$ with no limit to the number of particles allowed in each energy state.\n\nWe extend the [Fermi-Dirac probability function](#fermi-dirac-probability-function) and approximate the case where $E - E_F >> kT$. In this case, \n\n$$f_F(E) \\approx e^{\\frac{-(E - E_F)}{kT}}$$\n\n# Semiconductor in Equilibrium\n\n## Charge Carriers in Semiconductors\n\nIn order to understand the current, we will examine the contribution of electrons and holes to current.\n\n### Distribution of Electrons\n\nWith respect to energy, the **distribution of electrons per unit volume** in the conduction band is:\n\n$$n(E) = g_c(E) f_F(E)$$\n\nAnd in the valence band:\n\n$$n(E) = g_c(E) (1 - f_F(E))$$\n\n### Concentration of Electrons\n\nBased on this equation, we can find the **concentration of electrons** in each band by integrating the [distribution of electrons](#distribution-of-electrons).\n\n#### Conduction Band Hole Concentration\n\n$$\\int n(E) = n_o = \\int_{E_c}^{E + E_c} g_c(E) f_F(E) dE = N_c e^{\\frac{-(E_c - E_F)}{kT}} $$\n\n#### Valence Band Electron Concentration\n\n$$\\int n(E) = p_o = \\int_{E_v - E}^{E_v} g_c(E) (1 - f_F(E)) dE = N_v e^{\\frac{-(E_F - E_v)}{kT}} $$\n\n### Intrinsic Semiconductor\n\nAn intrinsic semiconductor is one in which no impurities or imperfections are present.\n\n#### Electron Concentration in an Intrinsic Semiconductor\n\nIn other words, the concentration of electrons in the conduction band is equal to the holes in the valence band, $n_i = p_i$ ($i$ = intrinsic).\n\n#### Fermi Energy Level in an Intrinsic Semiconductor\n\nThe Fermi Energy level in an intrinsic semiconductor $E_{Fi}$ lies near the mid-gap between the conduction band and valence band.\n\nWe can calculate the exact location by equating the [conduction band electron concentration](#conduction-band-electron-concentration) and [valence band electron concentration](#valence-band-electron-concentration).\n\n$$E_{Fi} = E_{midgap} + \\frac{3}{4} kT \\ln{\\bigg(\\frac{m_p^*}{m_n^*}\\bigg)} $$\n\n- $m_p^* = m_n^* \\implies E_{Fi}$ is at the center. \n- $m_p^* > m_n^* \\implies E_{Fi}$ is above center. \n- $m_p^* < m_n^* \\implies E_{Fi}$ is below center. \n\n## Dopant Atoms and Energy Levels\n\n### Doping\n\nDoping a semiconductor means that we alter the semiconductor by adding substitutional impurity atoms to increase or decrease its conductivity. \n\n### Extrinsic Semiconductor\n\nIf an [intrinsic semiconductor](#intrinsic-semiconductor) is doped with an impurity atom, it becomes an **extrinsic semiconductor**.\n\n### Donor Impurity Atoms\n\nIf a semiconductor is doped with an atom that contains extra electrons and it donates those electrons to the conduction band (and does not create holes in the valence band), it is said to be a **donor impurity atom**.\n\nAn example of this would be if an Si semiconductor, a group IV element, was doped with a group V element (like Phosphorous).\n\n#### Donor Ionization Energy\n\nAs a result of an atom donating its extra electrons, it therefore becomes ionized positively.\n\n### Acceptor Impurity Atoms\n\nIf a semiconductor is doped with an atom that contains an empty spot in its electron shell and it is able to take electrons from the valence band (e.g. by creating holes in the valence band), it is said to be an **acceptor impurity atom**.\n\nAn example of this would be if an Si semiconductor, a group IV element, was doped with a group III element (like Boron).\n\n#### Acceptor Ionization Energy\n\nAs a result of an atom accepting extra electrons from the semiconductor, it therefore becomes ionized negatively.\n\n### Amphoteric Impurity Atoms\n\nAn **amphoteric impurity atom** is one that, depending on what atom it replaces, it can either be a donor or acceptor.\n\n### n-type Semiconductors\n\nIf the electron concentration is greater than the hole concentration ($n_0 > p_0$), the semiconductor is an **n-type**.\n\n### p-type Semiconductors\n\nIf the hole concentration is greater than the electron concentration ($n_0 < p_0$), the semiconductor is a **p-type**.\n\n### $n_0 p_0$ product\n\n$$n_0 p_0 = n_i^2\n\n### Degenerate Semiconductors\n\n\n"}}]);