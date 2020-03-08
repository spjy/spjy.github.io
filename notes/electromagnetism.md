---
header: Electromagnetism
description: Electromagnetic forces.
---

# Coulomb's Law

Coulomb's law quantifies the relationship between two electrically charged particles. It is useful for finding the electric field due to **point charges**.

### Magnitude of Force

$$|F| = k_e \frac{q_1 q_2}{r^2}$$

- $q_1$ is the magnitude of the first charge.
- $q_2$ is the magnitude of the second charge.
- $k_e = 8.988 \times 10^9 N \cdot m^2 \cdot C^{-2} \text{}$
- $r$ is the distance between the two charges.

### Force Vector

$$\bold{F} = k_e \frac{q_1 q_2}{|\bold{r}_{21}|^2} \hat{\bold{r}}_{21} = k_e \frac{q_1 q_2}{|r_{21}|^2} \frac{\bold{r}_{21}}{|\bold{r}_{21}|}$$

- $q_1$ is the magnitude of the first charge.
- $q_2$ is the magnitude of the second charge.
- $k_e = 8.988 \times 10^9 N \cdot m^2 \cdot C^{-2} \text{}$
- $r_{21}$ is the vector from $q_2$ to $q_1$.

# Biot-Savart Law

The Biot-Savart Law quantifies the generation of a magnetic field from a constant current carrying conductor.

$$d\bold{F}_m = md \bold{B} = m\mu_0 \frac{I dl \times a_R}{4\pi r^2}$$

$$\bold{B}(\bold{r}) = \frac{\mu_0}{4 \pi} \int_c \frac{I d\bold{l} \times \bold{a}_R}{|a_R|^2} $$

# Lorentz Force

$$\bold{F} = q \bold{v} \times \bold{B}$$


# Electric Field

### Electric Field Intensity

$$\bold{E} = \frac{\bold{F}_2}{q} = \frac{Q}{4 \pi \epsilon_0 R^2} \bold{r}$$

More generally,

$$\bold{E} = \sum_{i=1}^N \frac{Q_i}{4 \pi \epsilon_0 R_i^2} \bold{a}_{R_i}$$

# Electric Flux

The electric flux eminating from a charged sphere is proportional to the total charge of the sphere.

$$\Phi_e = Q$$

### Electric Flux Density over Sphere

$$\bold{D} = \epsilon_0 \bold{E} = \frac{Q}{4 \pi r^2} \bold{a}_r$$

| Variable           | Meaning                                     |
| ------------------ | ------------------------------------------- |
| $\epsilon_0$       | $8.854 \times 10^{-12} F \cdot m^2 \text{}$ |
| $\bold{E} \text{}$ | Electric Field Intensity                    |
| $\bold{a}_r$       | Direction of Electric Flux Density          |

### Electric Flux over Closed Surface $s$

$$\Phi_E = \oint_s \epsilon_0 \bold{E} \cdot d\bold{s} = \frac{Q}{\epsilon_0}$$

# Maxwell's Equations

### Gauss's Law, Electric Flux

The electric flux eminating over a closed surface $s$ is equal to the charge.

#### Integral Form

$$\Phi_e = \oint_s \epsilon_0 \bold{E} \cdot d \bold{s} = \int_v \rho_v dv = Q$$

#### Differential Form

$$\nabla \cdot (\epsilon_0 \bold{E}) = \rho_v$$

### Gauss's Law, Magnetic Flux

The magnetic flux eminating over a closed surface $s$ is equal to zero.

Note:
- Because magnetic fields are closed, the magnetic flux is equal to zero.
- Isolated magnetic poles do not exist.

#### Integral Form

$$\Phi_b = \oint_s \bold{B} \cdot d \bold{s} = 0$$

#### Differential Form

$$\nabla \cdot \bold{B} = 0$$

### Faraday's Law of Induction

The induced electromagnetic force (voltage) over a closed contour $c$ is caused by the change in the magnetic flux over a surface $s$.

Note:
- The voltage resists the change in magnetic field, hence the negative sign.

#### Lenz's Law

Induced emf is in such a way that opposes the change in magnetic flux.

#### Integral Form

$$\text{V} = \oint_c \bold{E} \cdot d\bold{l} = -\frac{d}{dt} \int_s \bold{B} \cdot d\bold{s}$$

#### Differential Form

$$\nabla \times \bold{E} = - \frac{\partial \bold{B}}{\partial t}$$

### Ampere's Law

The current over a closed contour $c$ is the current density over a surface $s$ and the change in magnetic flux over the surface $s$.

The term $\displaystyle \frac{d}{dt} \int_s \epsilon_0 \bold{E} \cdot d\bold{s}$ is often referred to as the "virtual current" because it is resistance of voltage to the change in electric flux.

#### Integral Form

$$I_{enc} = \oint_c \frac{\bold{B}}{\mu_0} \cdot d\bold{l} = \int_s \bold{J} \cdot d\bold{s} + \frac{d}{dt} \int_s \epsilon_0 \bold{E} \cdot d\bold{s}$$

#### Differential Form

$$\nabla \times \frac{\bold{B}}{\mu_0} = \bold{J} + \frac{\partial (\epsilon_0 \bold{E})}{\partial t}$$

# Wave Propagation in Source Free Region

### Source Free Region

If a wave is in a source free region, it means the wave is away from the source.

### Maxwell's Equations in Source Free Region

We assume $\rho_v = 0$ and $\bold{J} = 0$ because we are in a [source free region](#source-free-region).

$$\bold{\nabla} \cdot \epsilon_0 \bold{E} = 0$$

$$\bold{\nabla} \cdot \bold{B} = 0$$

$$\bold{\nabla} \times \bold{E} = - \frac{\partial \bold{B}}{\partial t}$$

$$\bold{\nabla} \times \frac{\bold{B}}{\mu_0} = - \frac{\partial \bold{\epsilon}_0 \bold{b}}{\partial t}$$

$$\bold{\nabla}^2 \bold{E} - \mu_0 \epsilon_0 \frac{\partial^2 \bold{E}}{\partial t^2} = 0$$

$$\bold{\nabla}^2 \bold{B} - \mu_0 \epsilon_0 \frac{\partial^2 \bold{B}}{\partial t^2} = 0$$

### Harmonic Fields in Phasor Representation

Representing fields in the phasor form are useful for sinusoidal steady state analysis. However, because the phasor form is dependent solely on position (not time), it is incomplete for wave propagation analysis.

### Characteristics

#### Wavelength

$$\lambda = \frac{2 \pi}{\beta_0}$$

#### Wave Velocity

$$v_p = \frac{1}{\sqrt{\epsilon_o \mu_o}} = c$$

#### Phase Constant

$$\beta_o = \omega \sqrt{\epsilon_o \mu_o}$$

#### Intrinsic Impedence

$$\frac{\hat{E}_x}{\hat{H}_y} = \eta_o = \sqrt{\mu_o}{\epsilon_o}$$

### General Solution to Maxwell's Equations in Phasor Form

$$\hat{E}_x = \hat{E}_m e^{-j \beta_o z} + \hat{E}_m e^{j \beta_o z}$$

### General Solution to Maxwell's Equations in Real Time Form

$$E_x(z, t) = \mathcal{Re} \{ \hat{E}_x e^{j\omega t} \} = E_m \cos{(\omega t - \beta_o z)} + E_m \cos{(\omega t + \beta_o z)} $$

### Polarization State

#### Linear Polarization

#### Circular Polarization

#### Elliptical Polarization



# Maxwell's Equations and Plane Wave Propagation in Materials

Materials consist of atoms, which contain charged particles. Because of this, additional induced sources (creating electric and magnetic fields) from the presence and interaction of these charged particles must be accounted for and added to the existing [Maxwell's equations](#maxwells-equations).

The interaction of the charged particles results in conduction, polarization and magnetization. Each generates a mix of bound charge density, polarization or conduction currents.

Boundary conditions describe the transition between different materials to account for the different properties of each.

### Types of Materials

#### Conductors

Conductors are described to have a preponderance of **free** electrons in the conduction band. They are constantly in motion from thermal energy.

Under the influence of external electric field $\bold{E}$, the electrons experience a force and the flow of electrons is the **induced conduction current**

#### Dielectrics (Insulators)

Dielectrics are described to have a preponderance of **bound** electrons in the valence band. Electrons are not free to move; they can only be displaced from their position. They have the ability to store electric energy.

Under the influence of external electric field $\bold{E}$, an induced source known as the **polarization charges and currents** are generated.

#### Magnetic Materials

Magnetic materials have the ability to store magnetic energy.

The process of aligning current loops causes an induced source called the **magnetization current**. 

## Induced Sources

### Conduction Current (Conductors)

Conduction current is generated due to an application of an external electric field $\bold{E}$ on a conducting material. It is related to the movement drift of the free charges since its movement is confined within a lattice.

Electrons not in free space do not accelerate due to the electric field; rather, they are assumed to be contained in the atomic structure of the material. Therefore, they are free to move inside the material but bounce off of the walls of the atomic lattice and induce friction.

Electrons instead drift with a $\bold{v}_a$ average drift velocity and $\tau_c$ mean free time (average time interval between collisions):

$$\bold{J} = \frac{m \bold{v}_a}{\tau_c} = -e\bold{E} \implies \bold{v}_a = - \frac{e \tau_c}{m} \bold{E}$$

And we get the current density $\bold{J}$ (Ohm's law in point form) associated with the flow of the electronic changes:

$$\bold{J} = (-ne) \bold{v}_a = \frac{ne^2 \tau_c}{m} \bold{E} = \sigma \bold{E}$$

where $\sigma$ is the conductivity of the material.

### Polarization (Dielectrics)

There are three different types of polarization due to the application of external electric field $\bold{E}$ on a dielectric material. It is related to the displacement of bound charges. 

Electrons within the dielectric material stores electric energy because of the shifts in the positions of the positive and negatives charges against normal molecular and atomic forces.

Charges in dielectrics are bound (not free to move), so they are displaced; the charge displacement is called polarization.

#### Electronic Polarization

Electric polarization results in the displacement of bound electrons of an atom such that the center of the cloud of electrons is separated from the center of the nucleus. The atom is polarized since an electric dipole is generated.

The electric dipole moment, with point charges $+q$ and $-q$ with the distance between the two point charges $\bold{d}$ is:

$$\bold{p} = q\bold{d}$$

#### Orientational Polarization

Polarization may already exist without an external electric field; however, atoms are randomly oriented meaning the net polarization is zero (in a macro sense).

When an electric field is induced, a torque is induced on microscopic dipoles to orient them in the direction of the field.

#### Ionic Polarization

Materials that participate in ionic bonding electrically bind their positive and negative ions (since they transfer electrons between atoms).

Upon applying an electric field the ions separate and form electric dipoles.

#### Polarization

The polarization, describing the electric polarization on a macroscopic level, is given by:

$$\bold{P} = \lim_{\Delta v \rightarrow 0} \frac{1}{\Delta v} \sum_{i=1}^{n\Delta v} \bold{p}_i = n \bold{p}_a = nq\bold{d}_a = \rho_+ \bold{d}_a $$

such that $n\Delta v$ is the number of dipoles in a volume $\Delta v$, $\bold{p}_a$ is the average dipole moment per molecule, $\bold{d}_a$ is the displacement between positive and negative charges and $\rho_+ = nq$ the density of positive charges per unit volume generated int he polarized region.

The absence of an electric field implies the polarization is zero since dipoles are randomly polarized. However, if there is an electric field, the dipole moment is non-zero.

#### Polarization Current

Since we are considering the electric field's effect on a dielectric material (which has bound charges), we consider a time varying electric field $\bold{E} = E_o \cos{\omega t} \bold{a}_z$.

$$\bold{P} = \epsilon_o \chi_e \bold{E} = \epsilon_o \chi_e E_o \cos{\omega t} \bold{a}_z$$ 

Thus, the polarization current is:

$$\bold{J}_p = \frac{\partial \bold{P}}{\partial t} = \frac{\partial{\epsilon_o \chi_e \bold{E}}}{\partial t}$$

#### Polarization Charge Density

When an external electric field is applied to a dielectric material, dipole moments will be induced and the material will subsequently be polarized. 

The polarization over the area is equal to the induced charge distribution over the volume enclosed by the area.

$$\oint_s \bold{P} \cdot ds = -\int_v \rho_p dv$$

In point form:

$$\bold{\nabla} \cdot \bold{P} = -\rho_p$$

### Magnetization

Magnetization is the alignment of atomic magentic dipole moments along the direction of the applied magnetic field.

The magnetic dipole moment is given by the current multiplied by the differential element of area $ds$ encircled by the current:

$$\bold{m} = I d\bold{s}$$

Without an external magnetic field, magnetic dipole moments are randomly oriented so $\bold{m} = 0$ in the volume.

With an external magnetic field, a torque will be applied on the dipole moments.

Magnetization is the total magnetic moment per unit volume:

$$M = \lim_{\Delta v \rightarrow 0} \frac{1}{\Delta v} \sum_{i = 0}^{n \Delta v} \bold{m}_i = n \bold{m}_a = n\bold{I} d\bold{s}$$

The torque is on the dipole is defined by:

$$d\bold{T} = \bold{m} \times \bold{B}$$

#### Magnetization Current Density

## Modifications to Maxwell's Equations in Materials

### Ampere's Law, Polarization Current

We will add the [polarization current](#polarization-current) term:

$$\bold{\nabla} \times \frac{\bold{B}}{\mu_0} = \bold{J} + \frac{\partial (\epsilon_0 \bold{E})}{\partial t} + \frac{\partial \bold{P}}{\partial t}$$

Additionally, we must replace the permeability of free space constant to take into account the material:

$$\bold{\nabla} \times \frac{\bold{B}}{\mu_0} = \bold{J} + \frac{\partial \bold{D}}{\partial t}$$

$$\bold{D} = \epsilon_o \epsilon_r \bold{E}$$

where $\epsilon_r = 1 + \chi_e$ is the suseptability of material to store electric energy due to induced polarization.

### Ampere's Law, Magnetization Current

We will add the [magnetization current](#magnetization-current-density) term.

$$\nabla \times \frac{\bold{B}}{\mu_0} = \bold{J} + \frac{\partial \bold{D}}{\partial t} + \bold{J}_m = \bold{J} + \frac{\partial \bold{D}}{\partial t} + \bold{\nabla} \times \bold{M}$$

Simplifying:

$$\bold{\nabla} \times \bold{H} = \bold{J} + \frac{\partial \bold{D}}{\partial t}$$
$$\bold{H} = \frac{\bold{B}}{\mu_o} - \bold{M}$$

### Gauss's Law for Electric Field

We will add the induced charge distribution:

$$\bold{\nabla} \cdot \epsilon_o \bold{E} = \rho_v + \rho_p \implies \bold{\nabla} \cdot \epsilon_o \bold{E} = \rho_v + \bold{\nabla} \cdot \bold{P}$$

Simplifying:

$$\bold{\nabla} \cdot \bold{D} = \rho_v$$

## Complex Permittivity

Complex permittivity characterizes the heating losses associated with the frictional losses due to the rotation of electric dipoles due to the application of a time varying electric field in a dielectric.

The capacitance contains the complex permittivity.

$$c=\frac{\epsilon^* A}{d}$$

## Boundary Conditions

Boundary conditions describe the transitional properties of the electric and magnetic fields between different materials.

It will be solved for by solving for the tangential and normal components.

## Poynting Vector

The Poynting vector describes the energy flux, or energy transfer per unit area, associated with the propagation of electromagnetic waves. 

$$\bold{P_p} = \bold{E} \times \bold{H}$$

For practicality, we will take the time average Poynting vector.

### Time Average Poynting Vector Real Time Form

$$\bold{P}_av (z) = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} \bold{P}(z, t) dt $$

### Time Average Poynting Vector Real Time Form (Sinusoid)

$$\bold{P}_av (z) = \frac{1}{T} \int_{0}^{T} \bold{P}(z, t) dt $$

### Complex Poynting Vector for Time Harmonic Fields

$$\bold{P}_az (z) = \frac{1}{2} \mathcal{Re} \{ \bold{\hat{E}} \times \bold{\hat{H}}^* \} = \frac{1}{2} \mathcal{Re} \{ (E_r + jE_i) \bold{a}_x \times (H_r + jH_i) \bold{a}_y \} = \frac{1}{2} (E_r H_r + E_i H_i) \bold{a}_z $$

