(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{519:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Microelectronics\ndescription: The study of small electrical components.\n---\n\n# Brief\nWe'll analyze circuit components such as diodes, amplifiers and MOSFETs.\n\n# Operational Amplifiers (Op amp)\nThe main goal of an operational amplifier is to amplify a voltage. It has three terminals, two inputs and one output, as seen in the figure:\n\n![opamp](/microelectronics/opamp.svg)\n\nAn op amp is operated by DC power supplies with one rail connected to positive voltage and the other connected to negative voltage.\n\n## Ideal Operation Amplifier Model\n\nWe can assume four characteristics of an ideal op amp:\n\n1. $i_{input} = 0 \\implies R_i \\rightarrow \\infty$. No current flows into the input terminals, thus the input impedance is infinite.\n2. $v_o = A(v_2-v_1) \\implies R_o \\rightarrow 0$. The output terminal acts like an ideal voltage source, where $v_o = A(v_2-v_1)$, so the output impedance is zero.\n3. Bandwidth $\\rightarrow \\infty$. In other words, the op amp can amplify signals at any frequency with equal gain.\n4. Infinite Open Loop Gain. $A \\rightarrow \\infty$.\n4. Infinite Common Mode Rejection, so $v_1=v_2$ assuming the differential gain $A \\rightarrow \\infty$.\n    * $\\displaystyle \\lim_{A \\rightarrow \\infty} \\frac{v_o}{A} = v_2 - v_1 \\implies v_1 = v_2$.\n    * Common mode rejection is the amplifier's ability to rid of the common mode voltage. In other words, if an ideal op amp removed all of the common mode voltage, then say $v_1=v_2=1v$. \n    \n    $$v_o = A(v_2-v_1) = A(1 - 1) = 0$$\n\n### Differential & Common Mode Signals\n\n#### Differential Input\n- The difference between the input signals $v_1$ and $v_2$.\n\n$$v_{Id} = v_2 - v_1$$\n\n#### Common Mode Input\n- The average of the input signals $v_1$ and $v_2$.\n\n$$v_{Icm}=\\frac{1}{2} (v_1+v_2)$$\n\n### Closed Loop Gain\n\n$$G \\equiv \\frac{v_O}{v_I}$$\n\n# MOSFETs\nA MOSFET is a metal oxide semiconductor (MOS) field effect transistor (FET). It is a two terminal semiconductor device that is often utilized in integrated circuits. \n\n## N-channel MOS\nThe N-channel MOS is one that has a heavily doped n-channel regions in the source and drain regions. It has the drain, source, gate and body.\n\n### NMOS Dependencies\n\n#### Gate Voltage $V_G$\n\n#### Drain Voltage $V_D$\n\n#### Source Voltage $V_S$\n\n#### Gate to Source Voltage\n- The potential difference between the gate and source.\n\n$$V_{GS} = V_G - V_S$$\n\n#### Drain to Source Voltage\n- The potential difference between the drain and source.\n\n$$V_{DS} = V_D - V_S$$\n\n#### Threshold Voltage $V_t$\n\n- The minimum voltage required to form a conducting channel between the source and drain terminals.\n- A manufacturing dependent value.\n\n#### Effective / Overdrive Voltage\n\n- The excess $V_{GS}$ over $V_t$.\n- Determines charge of the conducting channel.\n\n$$V_{OV} \\equiv V_{GS} - V_t$$\n\n#### Channel Width $W$\n\n#### Channel Length $L$\n\n#### Permittivity of Silicon Dioxide\n\n$$\\epsilon_{ox} = 3.9 \\epsilon_0 = 3.9 \\times 8.854 \\times 10^{-12} = 3.45 \\times 10^{-11} \\frac{F}{M}$$\n\n#### Oxide Thickness $t_o\\phantom{}_x$\n\n- A manufacturing dependent value.\n\n#### Oxide Capacitance\n\n- The capacitance of the parallel plate capacitor per unit gate area.\n\n$$C_{ox} = \\frac{\\epsilon_{ox}}{t_{ox}}$$\n\n#### Electron Charge Magnitude\n\n$$|Q| = C_{ox}(WL)V_{OV}$$\n\n#### Gate to Channel Capacitance\n\n$$C=C_{ox}WL$$\n\n#### Electron Mobility $\\mu_n$\n\n#### Process Transconductance\n\n$$k^{'}_{n} = \\mu_n C_{ox}$$\n\n#### MOSFET Transconductance Parameter\n\n$$k_n = k^{'}_{n} (\\frac{W}{L}) = \\mu_n C_{ox} (\\frac{W}{L})$$\n\n#### MOSFET Resistance\n\n$$r_{DS}=\\frac{1}{g_{DS}} = \\frac{1}{\\mu_n C_{ox} (\\frac{W}{L})V_{OV}}$$\n\n### NMOS Regions of Operation\n\n#### Cutoff\n\n- As long as the following conditions are satisfied, the MOSFET is in cutoff:\n\n$$V_{GS} < V_{tn}$$\n\n- If the MOSFET is in cutoff, the drain current is zero ($i_D=0$).\n- In this state, the channel is pitched so no current can flow.\n\n#### Triode\n- As long as the following conditions are satisfied, the MOSFET is in triode:\n\n$$V_{GS} > V_{tn}$$\n$$V_{GD} > V_t \\text{ or } V_{DS} < V_{OV}$$\n\n- The drain current when in triode is:\n\n$$i_D= k'_n \\frac{W}{L} [(V_{GS}-V_{tn})V_{DS}-\\frac{1}{2} V_{DS}^2]$$\n\n#### Saturation\n\n- As long as the following conditions are satisfied, the MOSFET is in triode:\n\n$$V_{GS} > V_{tn}$$\n$$V_{GD} \\leq V_{tn} \\text{ or } V_{DS} \\geq V_{OV}$$\n\n- The drain current when in triode is:\n\n$$i_D= k'_n \\frac{W}{L} (V_{GS}-V_{tn})^2$$\n"}}]);