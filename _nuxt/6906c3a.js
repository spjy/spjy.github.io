(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{503:function(e,r,n){"use strict";n.r(r),r.default="---\r\nheader: Electromagnetism\r\ndescription: Electromagnetic forces.\r\n---\r\n\r\n# Coulomb's Law\r\n\r\nCoulomb's law quantifies the relationship between two electrically charged particles. It is useful for finding the electric field due to **point charges**.\r\n\r\n### Magnitude of Force\r\n\r\n$$|F| = k_e \\frac{q_1 q_2}{r^2}$$\r\n\r\n- $q_1$ is the magnitude of the first charge.\r\n- $q_2$ is the magnitude of the second charge.\r\n- $k_e = 8.988 \\times 10^9 N \\cdot m^2 \\cdot C^{-2} \\text{}$\r\n- $r$ is the distance between the two charges.\r\n\r\n### Force Vector\r\n\r\n$$\\bold{F} = k_e \\frac{q_1 q_2}{|\\bold{r}_{21}|^2} \\hat{\\bold{r}}_{21} = k_e \\frac{q_1 q_2}{|r_{21}|^2} \\frac{\\bold{r}_{21}}{|\\bold{r}_{21}|}$$\r\n\r\n- $q_1$ is the magnitude of the first charge.\r\n- $q_2$ is the magnitude of the second charge.\r\n- $k_e = 8.988 \\times 10^9 N \\cdot m^2 \\cdot C^{-2} \\text{}$\r\n- $r_{21}$ is the vector from $q_2$ to $q_1$.\r\n\r\n# Biot-Savart Law\r\n\r\nThe Biot-Savart Law quantifies the generation of a magnetic field from a constant current carrying conductor.\r\n\r\n$$d\\bold{F}_m = md \\bold{B} = m\\mu_0 \\frac{I dl \\times a_R}{4\\pi r^2}$$\r\n\r\n$$\\bold{B}(\\bold{r}) = \\frac{\\mu_0}{4 \\pi} \\int_c \\frac{I d\\bold{l} \\times \\bold{a}_R}{|a_R|^2} $$\r\n\r\n# Lorentz Force\r\n\r\n$$\\bold{F} = q \\bold{v} \\times \\bold{B}$$\r\n\r\n\r\n# Electric Field\r\n\r\n### Electric Field Intensity\r\n\r\n$$\\bold{E} = \\frac{\\bold{F}_2}{q} = \\frac{Q}{4 \\pi \\epsilon_0 R^2} \\bold{r}$$\r\n\r\nMore generally,\r\n\r\n$$\\bold{E} = \\sum_{i=1}^N \\frac{Q_i}{4 \\pi \\epsilon_0 R_i^2} \\bold{a}_{R_i}$$\r\n\r\n# Electric Flux\r\n\r\nThe electric flux eminating from a charged sphere is proportional to the total charge of the sphere.\r\n\r\n$$\\Phi_e = Q$$\r\n\r\n### Electric Flux Density over Sphere\r\n\r\n$$\\bold{D} = \\epsilon_0 \\bold{E} = \\frac{Q}{4 \\pi r^2} \\bold{a}_r$$\r\n\r\n| Variable           | Meaning                                     |\r\n| ------------------ | ------------------------------------------- |\r\n| $\\epsilon_0$       | $8.854 \\times 10^{-12} F \\cdot m^2 \\text{}$ |\r\n| $\\bold{E} \\text{}$ | Electric Field Intensity                    |\r\n| $\\bold{a}_r$       | Direction of Electric Flux Density          |\r\n\r\n### Electric Flux over Closed Surface $s$\r\n\r\n$$\\Phi_E = \\oint_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s} = \\frac{Q}{\\epsilon_0}$$\r\n\r\n# Maxwell's Equations\r\n\r\n### Gauss's Law, Electric Flux\r\n\r\nThe electric flux eminating over a closed surface $s$ is equal to the charge.\r\n\r\n#### Integral Form\r\n\r\n$$\\Phi_e = \\oint_s \\epsilon_0 \\bold{E} \\cdot d \\bold{s} = \\int_v \\rho_v dv = Q$$\r\n\r\n#### Differential Form\r\n\r\n$$\\nabla \\cdot (\\epsilon_0 \\bold{E}) = \\rho_v$$\r\n\r\n### Gauss's Law, Magnetic Flux\r\n\r\nThe magnetic flux eminating over a closed surface $s$ is equal to zero.\r\n\r\nNote:\r\n- Because magnetic fields are closed, the magnetic flux is equal to zero.\r\n- Isolated magnetic poles do not exist.\r\n\r\n#### Integral Form\r\n\r\n$$\\Phi_b = \\oint_s \\bold{B} \\cdot d \\bold{s} = 0$$\r\n\r\n#### Differential Form\r\n\r\n$$\\nabla \\cdot \\bold{B} = 0$$\r\n\r\n### Faraday's Law of Induction\r\n\r\nThe induced electromagnetic force (voltage) over a closed contour $c$ is caused by the change in the magnetic flux over a surface $s$.\r\n\r\nNote:\r\n- The voltage resists the change in magnetic field, hence the negative sign.\r\n\r\n#### Lenz's Law\r\n\r\nInduced emf is in such a way that opposes the change in magnetic flux.\r\n\r\n#### Integral Form\r\n\r\n$$\\text{V} = \\oint_c \\bold{E} \\cdot d\\bold{l} = -\\frac{d}{dt} \\int_s \\bold{B} \\cdot d\\bold{s}$$\r\n\r\n#### Differential Form\r\n\r\n$$\\nabla \\times \\bold{E} = - \\frac{\\partial \\bold{B}}{\\partial t}$$\r\n\r\n### Ampere's Law\r\n\r\nThe current over a closed contour $c$ is the current density over a surface $s$ and the change in magnetic flux over the surface $s$.\r\n\r\nThe term $\\displaystyle \\frac{d}{dt} \\int_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s}$ is often referred to as the \"virtual current\" because it is resistance of voltage to the change in electric flux.\r\n\r\n#### Integral Form\r\n\r\n$$I_{enc} = \\oint_c \\frac{\\bold{B}}{\\mu_0} \\cdot d\\bold{l} = \\int_s \\bold{J} \\cdot d\\bold{s} + \\frac{d}{dt} \\int_s \\epsilon_0 \\bold{E} \\cdot d\\bold{s}$$\r\n\r\n#### Differential Form\r\n\r\n$$\\nabla \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial (\\epsilon_0 \\bold{E})}{\\partial t}$$\r\n\r\n# Wave Propagation in Source Free Region\r\n\r\n### Source Free Region\r\n\r\nIf a wave is in a source free region, it means the wave is away from the source.\r\n\r\n### Maxwell's Equations in Source Free Region\r\n\r\nWe assume $\\rho_v = 0$ and $\\bold{J} = 0$ because we are in a [source free region](#source-free-region).\r\n\r\n$$\\bold{\\nabla} \\cdot \\epsilon_0 \\bold{E} = 0$$\r\n\r\n$$\\bold{\\nabla} \\cdot \\bold{B} = 0$$\r\n\r\n$$\\bold{\\nabla} \\times \\bold{E} = - \\frac{\\partial \\bold{B}}{\\partial t}$$\r\n\r\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = - \\frac{\\partial \\bold{\\epsilon}_0 \\bold{b}}{\\partial t}$$\r\n\r\n$$\\bold{\\nabla}^2 \\bold{E} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\bold{E}}{\\partial t^2} = 0$$\r\n\r\n$$\\bold{\\nabla}^2 \\bold{B} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\bold{B}}{\\partial t^2} = 0$$\r\n\r\n### Harmonic Fields in Phasor Representation\r\n\r\nRepresenting fields in the phasor form are useful for sinusoidal steady state analysis. However, because the phasor form is dependent solely on position (not time), it is incomplete for wave propagation analysis.\r\n\r\n### Characteristics\r\n\r\n#### Wavelength\r\n\r\n$$\\lambda = \\frac{2 \\pi}{\\beta_0}$$\r\n\r\n#### Wave Velocity\r\n\r\n$$v_p = \\frac{1}{\\sqrt{\\epsilon_o \\mu_o}} = c$$\r\n\r\n#### Phase Constant\r\n\r\n$$\\beta_o = \\omega \\sqrt{\\epsilon_o \\mu_o}$$\r\n\r\n#### Intrinsic Impedence\r\n\r\n$$\\frac{\\hat{E}_x}{\\hat{H}_y} = \\eta_o = \\sqrt{\\mu_o}{\\epsilon_o}$$\r\n\r\n### General Solution to Maxwell's Equations in Phasor Form\r\n\r\n$$\\hat{E}_x = \\hat{E}_m e^{-j \\beta_o z} + \\hat{E}_m e^{j \\beta_o z}$$\r\n\r\n### General Solution to Maxwell's Equations in Real Time Form\r\n\r\n$$E_x(z, t) = \\mathcal{Re} \\{ \\hat{E}_x e^{j\\omega t} \\} = E_m \\cos{(\\omega t - \\beta_o z)} + E_m \\cos{(\\omega t + \\beta_o z)} $$\r\n\r\n### Polarization State\r\n\r\n#### Linear Polarization\r\n\r\n#### Circular Polarization\r\n\r\n#### Elliptical Polarization\r\n\r\n\r\n\r\n# Maxwell's Equations and Plane Wave Propagation in Materials\r\n\r\nMaterials consist of atoms, which contain charged particles. Because of this, additional induced sources (creating electric and magnetic fields) from the presence and interaction of these charged particles must be accounted for and added to the existing [Maxwell's equations](#maxwells-equations).\r\n\r\nThe interaction of the charged particles results in conduction, polarization and magnetization. Each generates a mix of bound charge density, polarization or conduction currents.\r\n\r\nBoundary conditions describe the transition between different materials to account for the different properties of each.\r\n\r\n### Types of Materials\r\n\r\n#### Conductors\r\n\r\nConductors are described to have a preponderance of **free** electrons in the conduction band. They are constantly in motion from thermal energy.\r\n\r\nUnder the influence of external electric field $\\bold{E}$, the electrons experience a force and the flow of electrons is the **induced conduction current**\r\n\r\n#### Dielectrics (Insulators)\r\n\r\nDielectrics are described to have a preponderance of **bound** electrons in the valence band. Electrons are not free to move; they can only be displaced from their position. They have the ability to store electric energy.\r\n\r\nUnder the influence of external electric field $\\bold{E}$, an induced source known as the **polarization charges and currents** are generated.\r\n\r\n#### Magnetic Materials\r\n\r\nMagnetic materials have the ability to store magnetic energy.\r\n\r\nThe process of aligning current loops causes an induced source called the **magnetization current**. \r\n\r\n## Induced Sources\r\n\r\n### Conduction Current (Conductors)\r\n\r\nConduction current is generated due to an application of an external electric field $\\bold{E}$ on a conducting material. It is related to the movement drift of the free charges since its movement is confined within a lattice.\r\n\r\nElectrons not in free space do not accelerate due to the electric field; rather, they are assumed to be contained in the atomic structure of the material. Therefore, they are free to move inside the material but bounce off of the walls of the atomic lattice and induce friction.\r\n\r\nElectrons instead drift with a $\\bold{v}_a$ average drift velocity and $\\tau_c$ mean free time (average time interval between collisions):\r\n\r\n$$\\bold{J} = \\frac{m \\bold{v}_a}{\\tau_c} = -e\\bold{E} \\implies \\bold{v}_a = - \\frac{e \\tau_c}{m} \\bold{E}$$\r\n\r\nAnd we get the current density $\\bold{J}$ (Ohm's law in point form) associated with the flow of the electronic changes:\r\n\r\n$$\\bold{J} = (-ne) \\bold{v}_a = \\frac{ne^2 \\tau_c}{m} \\bold{E} = \\sigma \\bold{E}$$\r\n\r\nwhere $\\sigma$ is the conductivity of the material.\r\n\r\n### Polarization (Dielectrics)\r\n\r\nThere are three different types of polarization due to the application of external electric field $\\bold{E}$ on a dielectric material. It is related to the displacement of bound charges. \r\n\r\nElectrons within the dielectric material stores electric energy because of the shifts in the positions of the positive and negatives charges against normal molecular and atomic forces.\r\n\r\nCharges in dielectrics are bound (not free to move), so they are displaced; the charge displacement is called polarization.\r\n\r\n#### Electronic Polarization\r\n\r\nElectric polarization results in the displacement of bound electrons of an atom such that the center of the cloud of electrons is separated from the center of the nucleus. The atom is polarized since an electric dipole is generated.\r\n\r\nThe electric dipole moment, with point charges $+q$ and $-q$ with the distance between the two point charges $\\bold{d}$ is:\r\n\r\n$$\\bold{p} = q\\bold{d}$$\r\n\r\n#### Orientational Polarization\r\n\r\nPolarization may already exist without an external electric field; however, atoms are randomly oriented meaning the net polarization is zero (in a macro sense).\r\n\r\nWhen an electric field is induced, a torque is induced on microscopic dipoles to orient them in the direction of the field.\r\n\r\n#### Ionic Polarization\r\n\r\nMaterials that participate in ionic bonding electrically bind their positive and negative ions (since they transfer electrons between atoms).\r\n\r\nUpon applying an electric field the ions separate and form electric dipoles.\r\n\r\n#### Polarization\r\n\r\nThe polarization, describing the electric polarization on a macroscopic level, is given by:\r\n\r\n$$\\bold{P} = \\lim_{\\Delta v \\rightarrow 0} \\frac{1}{\\Delta v} \\sum_{i=1}^{n\\Delta v} \\bold{p}_i = n \\bold{p}_a = nq\\bold{d}_a = \\rho_+ \\bold{d}_a $$\r\n\r\nsuch that $n\\Delta v$ is the number of dipoles in a volume $\\Delta v$, $\\bold{p}_a$ is the average dipole moment per molecule, $\\bold{d}_a$ is the displacement between positive and negative charges and $\\rho_+ = nq$ the density of positive charges per unit volume generated int he polarized region.\r\n\r\nThe absence of an electric field implies the polarization is zero since dipoles are randomly polarized. However, if there is an electric field, the dipole moment is non-zero.\r\n\r\n#### Polarization Current\r\n\r\nSince we are considering the electric field's effect on a dielectric material (which has bound charges), we consider a time varying electric field $\\bold{E} = E_o \\cos{\\omega t} \\bold{a}_z$.\r\n\r\n$$\\bold{P} = \\epsilon_o \\chi_e \\bold{E} = \\epsilon_o \\chi_e E_o \\cos{\\omega t} \\bold{a}_z$$ \r\n\r\nThus, the polarization current is:\r\n\r\n$$\\bold{J}_p = \\frac{\\partial \\bold{P}}{\\partial t} = \\frac{\\partial{\\epsilon_o \\chi_e \\bold{E}}}{\\partial t}$$\r\n\r\n#### Polarization Charge Density\r\n\r\nWhen an external electric field is applied to a dielectric material, dipole moments will be induced and the material will subsequently be polarized. \r\n\r\nThe polarization over the area is equal to the induced charge distribution over the volume enclosed by the area.\r\n\r\n$$\\oint_s \\bold{P} \\cdot ds = -\\int_v \\rho_p dv$$\r\n\r\nIn point form:\r\n\r\n$$\\bold{\\nabla} \\cdot \\bold{P} = -\\rho_p$$\r\n\r\n### Magnetization\r\n\r\nMagnetization is the alignment of atomic magentic dipole moments along the direction of the applied magnetic field.\r\n\r\nThe magnetic dipole moment is given by the current multiplied by the differential element of area $ds$ encircled by the current:\r\n\r\n$$\\bold{m} = I d\\bold{s}$$\r\n\r\nWithout an external magnetic field, magnetic dipole moments are randomly oriented so $\\bold{m} = 0$ in the volume.\r\n\r\nWith an external magnetic field, a torque will be applied on the dipole moments.\r\n\r\nMagnetization is the total magnetic moment per unit volume:\r\n\r\n$$M = \\lim_{\\Delta v \\rightarrow 0} \\frac{1}{\\Delta v} \\sum_{i = 0}^{n \\Delta v} \\bold{m}_i = n \\bold{m}_a = n\\bold{I} d\\bold{s}$$\r\n\r\nThe torque is on the dipole is defined by:\r\n\r\n$$d\\bold{T} = \\bold{m} \\times \\bold{B}$$\r\n\r\n#### Magnetization Current Density\r\n\r\n## Modifications to Maxwell's Equations in Materials\r\n\r\n### Ampere's Law, Polarization Current\r\n\r\nWe will add the [polarization current](#polarization-current) term:\r\n\r\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial (\\epsilon_0 \\bold{E})}{\\partial t} + \\frac{\\partial \\bold{P}}{\\partial t}$$\r\n\r\nAdditionally, we must replace the permeability of free space constant to take into account the material:\r\n\r\n$$\\bold{\\nabla} \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t}$$\r\n\r\n$$\\bold{D} = \\epsilon_o \\epsilon_r \\bold{E}$$\r\n\r\nwhere $\\epsilon_r = 1 + \\chi_e$ is the suseptability of material to store electric energy due to induced polarization.\r\n\r\n### Ampere's Law, Magnetization Current\r\n\r\nWe will add the [magnetization current](#magnetization-current-density) term.\r\n\r\n$$\\nabla \\times \\frac{\\bold{B}}{\\mu_0} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t} + \\bold{J}_m = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t} + \\bold{\\nabla} \\times \\bold{M}$$\r\n\r\nSimplifying:\r\n\r\n$$\\bold{\\nabla} \\times \\bold{H} = \\bold{J} + \\frac{\\partial \\bold{D}}{\\partial t}$$\r\n$$\\bold{H} = \\frac{\\bold{B}}{\\mu_o} - \\bold{M}$$\r\n\r\n### Gauss's Law for Electric Field\r\n\r\nWe will add the induced charge distribution:\r\n\r\n$$\\bold{\\nabla} \\cdot \\epsilon_o \\bold{E} = \\rho_v + \\rho_p \\implies \\bold{\\nabla} \\cdot \\epsilon_o \\bold{E} = \\rho_v + \\bold{\\nabla} \\cdot \\bold{P}$$\r\n\r\nSimplifying:\r\n\r\n$$\\bold{\\nabla} \\cdot \\bold{D} = \\rho_v$$\r\n\r\n## Complex Permittivity\r\n\r\nComplex permittivity characterizes the heating losses associated with the frictional losses due to the rotation of electric dipoles due to the application of a time varying electric field in a dielectric.\r\n\r\nThe capacitance contains the complex permittivity.\r\n\r\n$$c=\\frac{\\epsilon^* A}{d}$$\r\n\r\n## Boundary Conditions\r\n\r\nBoundary conditions describe the transitional properties of the electric and magnetic fields between different materials.\r\n\r\nIt will be solved for by solving for the tangential and normal components.\r\n\r\n## Poynting Vector\r\n\r\nThe Poynting vector describes the energy flux, or energy transfer per unit area, associated with the propagation of electromagnetic waves. \r\n\r\n$$\\bold{P_p} = \\bold{E} \\times \\bold{H}$$\r\n\r\nFor practicality, we will take the time average Poynting vector.\r\n\r\n### Time Average Poynting Vector Real Time Form\r\n\r\n$$\\bold{P}_av (z) = \\frac{1}{t_2 - t_1} \\int_{t_1}^{t_2} \\bold{P}(z, t) dt $$\r\n\r\n### Time Average Poynting Vector Real Time Form (Sinusoid)\r\n\r\n$$\\bold{P}_av (z) = \\frac{1}{T} \\int_{0}^{T} \\bold{P}(z, t) dt $$\r\n\r\n### Complex Poynting Vector for Time Harmonic Fields\r\n\r\n$$\\bold{P}_az (z) = \\frac{1}{2} \\mathcal{Re} \\{ \\bold{\\hat{E}} \\times \\bold{\\hat{H}}^* \\} = \\frac{1}{2} \\mathcal{Re} \\{ (E_r + jE_i) \\bold{a}_x \\times (H_r + jH_i) \\bold{a}_y \\} = \\frac{1}{2} (E_r H_r + E_i H_i) \\bold{a}_z $$\r\n\r\n"}}]);