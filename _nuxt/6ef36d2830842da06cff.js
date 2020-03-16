(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{493:function(e,n,t){"use strict";t.r(n),n.default="---\nheader: Electrical Engineering\ndescription: Coulomb movements.\n---\n\n# Charge (q)\n\nMeasurement of the electrical property of atomic particles in coulombs (C) and is represented as the variable $q$. The charge of an electron is often denoted as the constant value:\n\n$$e = -1.602 \\times 10^{-19} C$$\n\nNote:\n- In $1\\text{C}$ of charge, there are $\\displaystyle \\frac{1}{1.602 \\times 10^{-19}} = 6.24 \\times 10^{18}$ electrons.\n- The charges that occur in nature are integral multiples of the electric charge $e$.\n- The law of conservation of charge states charge cannot be created or destroyed.\n\n# Current (i)\n| Variable | Unit      | SI Unit          |\n| -------- | --------- | ---------------- | \n| i        | ampere (A) | $\\displaystyle \\frac{\\text{coulomb}}{\\text{second}} \\text{}$ |\n\nCurrent is the time rate of change of charge and is represented as the variable $i$. Its unit of measurement is denoted as amperes (A). An ampere is equivalent to a $\\text{coulomb / second}$.\n\n$$i = \\frac{dq}{dt}$$\n\nThe charge transferred between two time points is denoted as:\n\n$$q = \\int_{t_0}^t i \\text{ } dt$$\n\n## Types of Currents\n\n| Current Type        | Abbreviation | Description                                                     |\n| ------------------- | ------------ | --------------------------------------------------------------- |\n| Direct Current      | DC           | Current that flows in only one direction.                        |\n| Alternating Current | AC           | Current that changes direction constantly with respect to time. |\n\n# Voltage (v)\n| Variable | Unit     | SI Unit                               |\n| -------- | -------- | ------------------------------------- | \n| v        | volt (V) | $\\displaystyle \\frac{\\text{newton} \\cdot \\text{meter}}{\\text{second}} \\text{}$ |\n\nVoltage is the potential difference between two points and is represented as the variable $v$. In other words, it is the energy required to move from one point $a$ to another point $b$. Its unit of measurement is denoted as volts (V). A volt is equivalent to a $\\text{joule / coulomb}$ or a $\\text{newton} \\cdot \\text{meter / coulomb}$. Voltage is denoted as change in work over the change in charge:\n\n$$v_{ab} = \\frac{dw}{dq}$$\n\nThis means that a volt would deliver one joule of energy when one coulomb passes through a load.\n\n# Power (p)\n\n| Variable | Unit     | SI Unit        |\n| -------- | -------- | -------------- | \n| p        | watt (W) | $\\displaystyle \\frac{\\text{joule}}{\\text{second}} \\text{}$ |\n\nPower is the time rate of expending or absorbing energy and is represented as the variable $p$. Its unit of measurement is denoted as watts (W). A watt is equivalent to one $\\text{joule / second}$.\n\n$$p=\\frac{dw}{dt}=vi$$\n$$w=\\int_{t_0}^t p \\text{ } dt = \\int_{t_0}^t vi \\text{ } dt$$\n\nNote:\n- Positive power means power ($p=+vi$) is being absorbed.\n- Negative power means power ($p=-vi$) is being released.\n- The law of conservation of power states energy cannot be created or destroyed.\n\n# Energy (w)\n\nEnergy is the ability to do work and is measured in joules (J).\n\n# Circuit Elements\n\nAn electric circuit is a collection of connected elements.\n\n## Types of Circuit Elements\n\n#### Passive Circuit Element\nA passive circuit element is not capable of generating electricity.\n\n#### Active Circuit Element\nA passive circuit element is capable of generating electricity.\n\n## Types of Sources\n\n#### Ideal Independent Source\nAn ideal independent source is an active circuit element that provides a pre-determined voltage or current independent of other circuit elements.\n\n#### Ideal Dependent Source\nAn ideal dependent source is an active circuit element where the voltage or current is determined by its surrounding circuit elements.\n\n# Resistance (R)\nThe resistance is the ability for an element to resist the flow of charge and is denoted by the variable $R$. Its unit of measure is ohms ($\\Omega$). An ohm is equivalent to one $\\text{volt / amp} \\text{}$.\n\nIt depends on the material's length ($l$), cross sectional area ($A$) and resistivity ($\\rho$).\n\n$$R=\\rho \\frac{l}{A}$$\n\nNote:\n- When $\\displaystyle i=\\lim_{R \\rightarrow \\infty} \\frac{v}{R}=0$, or an element has no resistance, it is said to be a short circuit.\n- When $R=\\infty$, or an element has infinite resistance, it is said to be an open circuit.\n\n# Resistor\n\nA resistor is a linear two terminal passive circuit element that contains a resistance.\n\n#### Series Resistance Addition\nIf two resistors are in series, then that means it shares a common node. The equivalent resistance is merely the sum of each resistance. For $n$ resistors in series:\n\n$$R_{eq}=\\sum_{n=1}^N R_n$$\n\n#### Parallel Resistance Addition\nIf two resistors are in parallel, that means it shares two common nodes. The equivilent resistance is the product of each resistance divided by their sum. For $n$ resistors in parallel:\n\n$$\\frac{1}{R_{eq}}=\\frac{1}{R_{1}} + \\frac{1}{R_{2}} + \\ldots + \\frac{1}{R_{n}}$$\n\n# Ohms Law\nOhm's law states voltage and current are directly proportional.\n\n$$v=iR$$\n\n# Circuit Topology\n\n#### Branch (b)\nA branch is a circuit element.\n\n#### Node (n)\nA node is a connection between two branches.\n\n#### Loop (l)\nA loop is a closed path within the circuit.\n\nBranches, nodes and loops are connected by the equation:\n\n$$b=l+n-1$$\n\nNote:\n- If 2+ branches share a single node, they are said to be in series and have the same current.\n- If 2+ branches share 2+ nodes, they are said to be in parallel and have the same voltage.\n\n# Kirchhoff's Laws\n\n#### Kirchhoff's Current Law (KCL)\nThe sum of currents with $N$ elements entering a [node](/guides/ee#node-n) is zero.\n\n$$\\sum_{n=1}^N i_n=0$$\n\n#### Kirchhoff's Voltage Law (KVL)\nThe sum of voltages with $M$ elements around a [loop](/guides/ee#loop-l) is zero.\n\n$$\\sum_{m=1}^M v_m=0$$\n\n\n# Voltage Division\nFor $N$ resistors in series with a source voltage $v$, the $n$th resistor has the voltage drop of:\n\n$$\\displaystyle v_n=\\frac{R_n}{R_1+R_2+\\ldots+R_N} v$$\n\n![voltage-division](/ee/voltage-division.svg)\n\n# Current Division\nFor two resistors in parallel attached to a current source $i$, the current over resistor $R_1$ is:\n\n$$\\displaystyle i_1=\\frac{R_n \\text{ }}{R_1+R_2 + \\ldots + R_N} i$$\n\n![current-division](/ee/current-division.svg)\n\n# Wye-Delta Transformations\nResistors can appear in configuration that is not in [series](/guides/ee#series-resistance-addition) or [parallel](/guides/ee#parallel-resistance-addition). Wye-Delta ($Y-\\Delta$) transformations solve this issue of combining resistors when this situation arises.\n\n$Y$ / $T$ configuration:\n\n![wye](/ee/wye.svg)\n![T](/ee/T.svg)\n\n$$R_{12}(Y)=R_1+R_3$$\n\n$\\Delta$ / $\\Pi$  configuration:\n\n![delta](/ee/delta.svg)\n![pi](/ee/pi.svg)\n\n$$R_{12}(\\Delta)=R_b || (R_a+R_c)$$\n\nA $Y$ resistor configuration can be re-arranged into a $\\Pi$ resistor configuration, while the $\\Delta$ resistor configuration can be re-arranged to look like a $T$. This is called the $\\Pi-T$ configuration.\n\nFor a $\\Delta \\rightarrow Y$ transformation:\n\n$$R_1=\\frac{R_b R_c}{R_a+R_b+R_c}$$\n$$R_2=\\frac{R_c R_a}{R_a+R_b+R_c}$$\n$$R_3=\\frac{R_a R_b}{R_a+R_b+R_c}$$\n\nFor a $Y \\rightarrow \\Delta$ transformation:\n\n$$R_a = \\frac{R_1R_2+R_2R_3+R_3R_1}{R_1}$$\n$$R_b = \\frac{R_1R_2+R_2R_3+R_3R_1}{R_2}$$\n$$R_c = \\frac{R_1R_2+R_2R_3+R_3R_1}{R_3}$$\n\n# Circuit Analysis Techniques\n\n#### Nodal Analysis\nUse [Kirchhoff's Current Law](/guides/ee#kirchhoffs-current-law-kcl) at a node.\n\n#### Mesh Analysis\nUse [Kirchhoff's Voltage Law](/guides/ee#kirchhoffs-voltage-law-kvl) around a loop.\n\n#### Linearity\n\nTo be *linear* means it follows the superposition principle:\n\n| Property    | Definition                    |\n| ----------- | ---------------------------- |\n| Additivity  | $f(x_1+x_2) = f(x_1)+f(x_2)$ |\n| Homogeneity | $f(ax) = af(x)$              |\n\nResistors are said to be linear because it is directly proportional to its input through ohms law, $v=iR$.\n\n#### Superposition\n\nIn a [linear](/guides/ee#linearity) circuit, the voltage or current through an element is the sum of the voltage or current through an element due to each independent source acting alone.\n\n- Turn off all independent sources except one. Find the voltage or current as a result of the active source.\n- For all of the other independent sources, repeat step one (1).\n- Sum the voltages or currents of the element due to each independent source acting alone.\n\n#### Source Transformations\n\nIn a configuration when a voltage source is in series with a resistor, we can transform the said configuration into a current source in parallel with a resistor and vice versa.\n\nDependent sources can transform between each other, and likewise independent sources can transform between each other. However, the two source types cannot be interchanged (e.g. dependent sources cannot transform into independent sources).\n\nSource transformation are related by [Ohm's law](/guides/ee#ohms-law):\n\n$$v=iR$$\n$$i=\\frac{R}{v}$$\n\n![independent-source-transformation](/ee/independent-source-transformation.svg)\n\n![dependent-source-transformation](/ee/dependent-source-transformation.svg)\n\n# Capacitor\n\nA capacitor is a linear two terminal passive circuit element that stores energy in its electric field. It consists of two metal plates, and in between the metal plates is a dielectric (insulator).\n\nLet's say a capacitor is connected to a voltage source. Then, its charge and voltage are related by:\n\n$$q=Cv$$\n\nBy taking the derivative of the above equation, we get the i-v relationship:\n\n$$i=C \\frac{dv}{dt}$$\n\nAnd if we integrate the above equation, we can get the voltage:\n\n$$v(t)=\\frac{1}{C} \\int_{t_0}^t i(\\tau) \\text{ } d\\tau + v(t_0) $$\n$$v(t_0) = \\frac{q_{t_0}}{C}$$\n\n#### Capacitor Power\n\nThe instantaneous power of a capacitor is characterized by:\n\n$$p=vi=Cv \\frac{dv}{dt}$$\n\n#### Capacitance\n\nCapacitance is the ability for a circuit element to store energy in an electric field.\n\n$$C=\\frac{\\epsilon A}{d}$$\n\n#### Energy in a Capacitor\n\n$$w=\\frac{1}{2} Cv^2 = \\frac{q^2}{2C}$$\n\n#### DC Conditions\n\nIn DC conditions, if its voltage is not changing with respect to time, a capacitor acts like an open circuit.\n\nThis is because in DC conditions, voltage does not change with respect to time, so $\\frac{dv}{dt} = 0$:\n\n$$i = C \\frac{dv}{dt} = C * 0 = 0$$\n\n# Inductor\n\nAn inductor is a linear two terminal passive circuit element that stores energy in its magnetic field. It consists of a coiled conducting wire.\n\n# Alternating Current (AC) Analysis\n\nAC analysis is the study of circuits with time varying sinusoidal sources.\n\n## Sinusoids\n\nA sinusoid is a type of function that oscillates.\n\n$$v(t) = V_m \\sin{(\\omega t + \\phi)}$$\n\nwhere $V_m$ is the amplitude, $\\omega$ is the angular frequency and $\\omega t$ is the argument.\n\n### Period ($T$)\n\nThe period describes how often the sinusoid repeats itself every $T$ seconds.\n\n$$T = \\frac{2 \\pi}{\\omega}$$\n\nA function is said to be periodic if it satisfies the contraint that\n\n$$v(t) = v(t+nT)$$\n\n### Frequency ($f$)\n\nThe frequecy describes how often a wave repeats itself.\n\n$$f = \\frac{1}{T}$$\n\n### Phase ($\\phi$)\n\nThe phase describes the shift in the wave along the $x$ axis.\n\nGiven two sinusoids such that $phi \\dne 0$,\n\n$$v_1(t) = V_m \\sin{\\omega t}$$\n$$v_2(t) = V_m \\sin{(\\omega t + \\phi)}$$\n\n- $v_2$ leads $v_1$\n- $v_1$ lags $v_2$\n- $v_1$ and $v_2$ are out of phase\n- If $\\phi = 0$, the sinusoids are in phase.\n\n## Phasor Analysis\n\nWe use phasors, a complex number that represents the amplitude and phase of a sinusoid, to make analysis easier. \n\n### Representations\n\nAll three forms are related by the equations:\n\n$$r = \\sqrt{x^2 + y^2}$$\n$$\\phi = \\tan^{-1} \\frac{y}{x}$$\n$$x = r\\cos{\\phi}$$\n$$y = r \\sin{\\phi}$$\n\n$$z = x + jy = r \\angle \\phi = r(\\cos{\\phi} + j \\sin{\\phi}$$\n\nThese forms are possible in part by Euler's identity.\n\n#### Euler's Identity\n\n$$e^{\\pm j\\phi} = \\cos{\\phi} \\pm j \\sin{\\phi}$$\n$$\\cos\\phi = \\mathbb{R}e \\{e^{j \\phi}\\}$$\n$$\\sin\\phi = \\mathbb{I}m \\{e^{j \\phi)\\}\n\n#### Rectangular Form\n\n$$z = x + jy$$\n\n#### Polar Form\n\n$$z = r \\angle \\phi$$\n\n#### Exponential Form\n\n$$z = re^{j\\phi}$$\n\n### Transformations\n\n$$\\frac{dv}{dt} \\quad \\iff \\quad j\\omega\\bold{V}$$\n\n$$\\int v \\text{ } dt \\quad \\iff \\quad \\frac{\\bold{V}}{j\\omega}$$\n"}}]);