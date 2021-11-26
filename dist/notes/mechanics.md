---
header: Mechanics
description: Newton.
---

# Kinematics

Kinematics describe how a particles moves in Euclidian space with respect to time ($t$) and spatial position ($xyz$).

## Position

The position of a particle describes where it is located within a space at a certain time.

### Vector Notation

The magnitude and direction are described as:

$$\bold{r}(t) = x(t) \hat{\bold{i}} + y(t) \hat{\bold{j}} + z(t) \hat{\bold{k}} $$

### Magnitude

The magnitude of the position vector is:

$$||\bold{r}(t) || = \sqrt{x^2 + y^2 + z^2} = \sqrt{\bold{r} \cdot \bold{r}}$$

## Velocity

The velocity of a particle describes its motion, or the change in position over the change in time. 

$$\bold{v}(t) = \frac{dx(t)}{dt} \hat{\bold{i}} + \frac{dy(t)}{dt} \hat{\bold{j}} + \frac{dz(t)}{dt} \hat{\bold{k}}$$

## Acceleration

The acceleration of a particle describes how its motion changes, or the change in velocity over the change in time. 

$$\bold{a}(t) = \frac{d^2x(t)}{dt^2} \hat{\bold{i}} + \frac{d^2y(t)}{dt^2} \hat{\bold{j}} + \frac{d^2z(t)}{dt^2} \hat{\bold{k}}$$

# Netonian Mechanics

## Force

To alter the motion of a particle, you must exert a force on it.

### Newton's Laws

#### First Law

A body at rest remains at rest. A body in motion tends to stay in motion. These statements are true given no net external forces act upon the body.

#### Second Law

The net force on a body of mass $m$ with an absolute (inertial frame of reference) acceleration of the center of mass $a$.

$$\bold{F}_{net} = m\bold{a}$$

#### Third Law

Given a force on a body, there is an equal and opposite one.

$$\bold{F}_{\text{a on b}} = -\bold{F}_{\text{b on a}}$$

### Common Forces

#### Gravity

Gravity always points downwards from a body.

$$\bold{w} = m\bold{g}$$

#### Normal Force

The normal force always points normal to the surface of the body.

$$\bold{n}$$

#### Tension

Tension is the force along the length of a flexible connection (e.g. rope). It points along the material.

$$\bold{T}$$

#### Friction

Friction is the opposing force of a body's motion, pointing opposite to the direction of motion.

## Impulse

Impulse is overall effect of force over time.

$$\bold{I} = \int_{t_1}^{t_2} \bold{F} \text{ } dt$$
