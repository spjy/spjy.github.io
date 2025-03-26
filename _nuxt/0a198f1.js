(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{513:function(n,r,o){"use strict";o.r(r),r.default="---\r\nheader: Finance \r\ndescription: Industry of money.\r\n---\r\n\r\n## Compounding\r\n\r\nCompounded interest $C$ of notional $N$ at year $T$ with rate $r$, and payout frequency $m$ is:\r\n\r\n$$C = N \\Big(1+\\frac{r}{m}\\Big)^{mT}$$\r\n\r\n### Continuously Compounded Rate\r\n\r\nA continuously compounded rate is a theoretical calculation that considers if the notional is reinvested over infinitely many periods, or when $m \\rightarrow \\infty$).\r\n\r\n$$\\Big(1+\\frac{r}{m}\\Big)^{mT} \\rightarrow e^{rT}$$\r\n$$C = N e^{rT}$$\r\n\r\n### Money Market Account\r\n\r\n## Zero Coupon Bond (Discount Bond)\r\n\r\nA zero coupon bond is a type of bond that is redeemed for face value (the worth of the bond) at the time maturity, $T$.\r\n\r\n### Continuously Compounded\r\n\r\n$$Z(t,T)  = \\frac{1}{(1+r_A)^{T-t}}$$\r\n\r\n### Annually Compounded\r\n$$Z(t,T) = e^{-r(T-t)}, t \\leq T$$\r\n"}}]);