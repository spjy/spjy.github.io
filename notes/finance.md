---
header: Finance 
description: Industry of money.
---

## Compounding

Compounded interest $C$ of notional $N$ at year $T$ with rate $r$, and payout frequency $m$ is:

$$C = N \Big(1+\frac{r}{m}\Big)^{mT}$$

### Continuously Compounded Rate

A continuously compounded rate is a theoretical calculation that considers if the notional is reinvested over infinitely many periods, or when $m \rightarrow \infty$).

$$\Big(1+\frac{r}{m}\Big)^{mT} \rightarrow e^{rT}$$
$$C = N e^{rT}$$

### Money Market Account

## Zero Coupon Bond (Discount Bond)

A zero coupon bond is a type of bond that is redeemed for face value (the worth of the bond) at the time maturity, $T$.

### Continuously Compounded

$$Z(t,T)  = \frac{1}{(1+r_A)^{T-t}}$$

### Annually Compounded
$$Z(t,T) = e^{-r(T-t)}, t \leq T$$
