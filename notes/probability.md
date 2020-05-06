---
header: Probability
description: Probably relevant.
---

# Probabilistic Models

### Experiment

The problem at hand.

### Outcome

The results of the [experiment](#experiment).

### Sample Space ($\Omega$)

The set of all possible [outcomes](#outcome) of an [experiment](#experiment).

### Event

A subset of the [sample space](#sample-space-omega) containing the possible [outcomes](#outcome).

### Mutual Exclusivity (Disjointness)

Elements of the [sample space](#sample-space-omega) should be distinct.

### Collectively Exhaustive

All of the [events](#event) must be accounted for in the [sample space](#sample-space-omega).

# Probability Axioms

### Non-negativity

For each event $A$, 

$$\bold{P}(A) \geq 0$$

### Additivity

If the sets $A$ and $B$ are [disjoint](/sets/#disjoint) events, then:

$$\bold{P}(A \cup B) = \bold{P}(A) + \bold{P}(B)$$

### Normalization

The probability of the [sample space](#sample-space-omega) is equal to $1$.

$$\bold{P}(\Omega) = 1$$

# Discrete Models

### Discrete Probability

The probability of an event $\left\{s_1, s_2, ..., s_3\right\}$ is the sum of of the probabilities of its elements:

$$\bold{P}(\left\{s_1, s_2, ..., s_3\right\}) = \bold{P}(s_1) + \bold{P}(s_2) + ... + \bold{P}(s_n) $$

### Discrete Uniform Probability Law

Given an event $A$ with $n$ possible outcomes, the probability of any event $A$ is:

$$\bold{P}(A) = \frac{\text{number of elements of A}}{n}$$

# Conditional Probability

When only partial information is given and we want to know the outcome of an experiment, conditional probability is useful.

Let $A$ and $B$ be two events. The conditional probability of $A$ given $B$ is denoted as:

$$\bold{P}(A|B) = \frac{\bold{P}(A \cap B)}{\bold{P}(B)} = \frac{\text{number of elements} \in A \cap B}{\text{number of elements} \in B}$$

where $\bold{P}(B) \gt 0$.

In other words, the conditional probability is the ratio of $A$ and $B$ occurring to the probability of $B$ occurring. $B$ has already occurred, and so the only probability left of occurring is intersect between $A$ and $B$.

## Multiplication Rule

Assuming all of the conditioning events have positive probability,

$$\bold{P}(\bigcap^n_{i=1} A_i = \bold{P}(A_1) \bold{P}(A_2|A_1)\bold{P}(A_3|A_1 \cap A_2) ... \bold{P}(A_n | \bigcap^{n-1}_{i=1}) A_i)$$

This rule is often seen when multiplying independent events together in a tree diagram.

## Total Probability Theorem

Let $A_1 ... A_n$ be disjoint events that form a partition of the sample space and assume $\bold{P}(A_i) > 0 \forall i$. For any event $B$,

$$\bold{P}(B) = \bold{P}(A_1 \cap B) + ... + \bold{P}(A_n \cap B) \\
= \bold{P}(A_1)\bold{P}(B|A_1) + ... + \bold{P}(A_n)\bold{P}(B|A_n)$$

More compactly,

$$\bold P(B) = \sum_{i = 1}^n P(A_i)P(B | A_i)$$

This theorem is often seen when adding together various event outcomes to calculate the probability of an event occurring.

## Bayes' Rule

Bayes' rule is used when finding the reversed conditional probability. 

$$\bold{P}(A_i | B) = \frac{\bold{P}(A_i)\bold{P}(B | A_i)}{\bold{P}(B)} = \frac{\bold{P}(A_i) \bold{P}(B|A_i)}{\bold{P}(A_1) \bold{P}(B|A_1) + ... + \bold{P}(A_n) \bold{P}(B|A_n)}$$

# Independence

$A$ is independent of $B$ if 

$$\bold{P}(A|B) = \bold{P}(A) = \frac{\bold{P}(A \cup B)}{\bold{P}(B)}$$

Also, if $\bold{P}(B) > 0$

$$\bold{P}(A|B) = \bold{P}(A)$$

# Counting Principle

Let's say there is a process consisting of $r$ stages.
- $n_1$ possible results in the first stage. 
- For every possible result of the first stage, there are $n_2$ possbile results at the second stage.

### $k$-permutations

Let's say we want to count the number of permutations with $n$ distinct objects, but we only have room to choose $k$ objects.

- $n$ distinct objects
- Pick only $k$ out of $n$ objects
- Order matters (number of arrangements)
- $n \geq k$

$$\frac{n!}{(n-k)!}$$

### Permutations

Let's say we have $n$ distinct objects and have $n$ spots. In other words, $n = k$. We aim to find how many sequences there are when choosing $k$ balls.

#### With Replacement

For the first spot, there are $n$ possibilities. Then, for the next spot, we replace the object, so the number of possibilities stays the same as the first, $n$.

We continue this until $k$.

$$n \cdot n \cdot n \cdots = n^k$$

#### Without Replacement

$$P^n_k = n(n-1)(n-2) \cdots 2 \cdot 1 = n!$$

For the first spot, there are $n$ possibilities. Then, for the next spot, we do not replace the object, so we lose one possibility; thus we are left with $n-1$ possibilities.

We continue this until $n - (k - 1)$.

### Combinations

#### Without Repetition

Let's say we want to count the number of combinations with $n$ distinct objects, but we only want to choose $k$ objects.

- $n$ distinct objects
- Pick only $k$ out of $n$ objects
- Order doesn't matter
- $n \geq k$

$${ n \choose k } = \frac{n!}{k!(n-k)!}$$

# Partitions

Let's say we wanted to split $n$ distinct objects into $r$ groups, and those groups are of size $n_1, n_2, \ldots, n_r$ where $n_1 + n_2 + \ldots + n_r = n$. 

In other words, $n_1, n_2, \ldots, n_r$ is just the partition of $n$.

We use the counting principle and define it as the multinomial coefficient,

$${n \choose n_1,n_2,\ldots, n_r} = {n \choose n_1} {n - n_1 \choose n_2} {n - n_1 - n_2 \choose n_3} \cdots {n - n_1 - \ldots - n_{r-1} \choose n_r}$$

$$\frac{n!}{n_1!(n-n_1)!} \cdot \frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \cdots \frac{n-n_1-\ldots-n_{r-1}!}{n_r!(n-n_1-\ldots-n_{r-1} - n_r)!}$$

First, we choose $n_1$ objects to insert into the first group from the pool of $n$.

Next, from the remaining pool of $n - n_1$, we choose however many objects we want to insert into group $n_2$.

We repeat this until the group $r$.

# Discrete Random Variables

A random variable $X$ is a function that assigns a real number $X(w)$ to each outcome $w \in \Omega$.

## Probability Mass Function (PMF)

If $S_X$ is a discrete set, $X$ is a discrete random variable.

We can assign a probability to each element $x \in S_X$, and this assignment is called the probability mass function (PMF). In essence, we are assigning some weight to how probable an element $x$ occurs. We denote the PMF by:

$$\bold{P}(X = x)$$

Given a PMF, it has the properties:
- $\bold{P}(X = x) \geq 0$
- $\displaystyle \sum_x \bold{P}(X = x) = 1$

## Cumulative Distribution Function (CDF)

The cumulative distribution function describes the situation in which the random value $X$ will take a value less than or equal to $x$.

$$F_X(x) = \bold{P}(X \leq x) = \sum_{k = - \infty}^x P(X = k)$$

In other words, it's the cumulative probability that of a distribution up to a value $x$.

## Probability Generating Function (PGF)

The probability generating function is a sequence encompasses both the probabilities and possible values associated with a random variable.

$$G_X(z) = \bold{E}[z^x] = \sum_{k=0}^\infty z^k \bold{P} (X=k) = z^0 \bold{P}(K = 0) + z^1 \bold{P}(K = 1) + z^2 \bold{P}(K = 2) + \dots$$

- Each exponent $k$ of $z^k$ denote the possible values a random variable can take on. 
- The coefficient of $z^k$ denotes the probability attached to the possible value.

If we take the first derivative:

$$\frac{\text{d}G_X}{\text{d}z} = \sum_{k=0}^\infty k z^{k-1} \bold{P} (X=k)$$

And second derivative:

$$\frac{\text{d}^2G_X}{\text{d}z^2} = \sum_{k=0}^\infty k(k-1) z^{k-2} \bold{P} (X=k)$$

### Expectation Value

The expectation value is the average of the probability mass function. In other words, it is the value we expect the most, as this is where the distribution of weights is located in the probability mass function.

It is the first derivative of the [PGF](#probability-generating-function-pgf) where $z=1$.

$$\frac{\text{d}G_X}{\text{d}z}\Bigr|_{z=1} = \bold{E}[X] = \sum_{k \in S_x} k \bold{P} (X = k)$$

### Second Moment

The second moment is the sum of the first and second derivatives of the [PGF](#probability-generating-function-pgf) where $z=1$.

$$\frac{\text{d}^2G_X}{\text{d}z^2}\Bigr|_{z=1} + \frac{\text{d}G_X}{\text{d}z}\Bigr|_{z=1} = \bold{E}[X^2]$$

### Variance

The variance tells us how far numbers are spread out from the average or expected value.

$$\text{Var}[X] = \bold{E}[X^2] - \bold{E}[X]^2 = \frac{\text{d}^2G_X}{\text{d}z^2}\Bigr|_{z=1} + \frac{\text{d}G_X}{\text{d}z}\Bigr|_{z=1} - \Big(\frac{\text{d}G_X}{\text{d}z}\Bigr|_{z=1}\Big)^2$$

### Standard Deviation

The standard deviation describes the spread of values.

$\text{stdiv} = \sigma = \sqrt{\text{var}[X]}$

## Geometric Distribution

The geometric probability mass function describes the situation in which $n$ independent trials are required before the event occurs with probability $p$.

### Probability Mass Function

$$P(X = n) = (1-p)^{n-1}p$$
$$\sum_{k=1}^\infty \bold{P}(X = k) = \sum_{k=1}^\infty (1-p)^{k-1} p$$

In other words, $k-1$ trials occur before the event occurs.

### Cumulative Density Function

$$\bold P (X \leq x) = 1-(1-p)^{n-1}$$

### Expected Value

$$\bold E[X] = \frac{1}{p}$$

### Variance

$$\text{var}[X] = \frac{1-p}{p^2}$$

## Bernoulli Distribution

The Bernoulli distribution describes the situation in which the probability mass function consists of a binary set of outcomes, $S_X = \{ 0, 1 \}$. It is a special case of the binomial distribution, where $n = 1$.

### Probability Mass Function

$$\bold P (X = x) = \begin{cases}p & x = 1\\1-p & x = 0\end{cases}$$

### Cumulative Density Function

$$\bold P (X \leq x) = \begin{cases}
0 & k < 0 \\
1 - p & 0 \leq k < 1 \\
p & k \geq 1
\end{cases}$$

### Expected Value

$$\bold E[X] = p$$

### Variance

$$\text{var}[X] = p(1-p)$$

## Binomial Distribution

The binomial probability mass function describes the situation in which the $n$ independent trials occur with $k$ successes with probability $p$ and $n - k$ fails with probability $1-p$ with replacement.

### Probability Mass Function

$$\bold P(X = k) = {n \choose k} p^k (1-p)^k$$

### Cumulative Density Function

$$\bold P(X \leq x) = \sum_{i = 1}^x {n \choose i} p^i (1-p)^{n-i}$$

### Expected Value

$$\bold E[X] = np$$

### Variance

$$\text{var}[X] = np(1-p)$$

## Hypergeometric Distribution

The hypergeometric distribution is a discrete distribution that characterizes the probability of observed $k$ successes in $n$ draws without replacement. $N$ is the population size and $K$ is the number of successes in the population.

### Probability Mass Function

$$\bold P (X = k) = \frac{\begin{pmatrix} K \\ k \end{pmatrix} \begin{pmatrix} N - K \\ n - k \end{pmatrix}}{\begin{pmatrix} N \\ n \end{pmatrix}}$$

### Multivariate Hypergeometric Distribution

$$\frac{\displaystyle \prod_{i = 1}^c \begin{pmatrix} K_i \\ k_i \end{pmatrix}}{\begin{pmatrix} N \\ n \end{pmatrix}}$$

For $c$ different populations $K_i$, we select $k_i$ people.

$N = \displaystyle \sum_{i=1}^c K_i$ is the total number of populations.

## Functions of Random Variables

Given a random variable $X$, we can generate other random variables by applying various transformations on $X$. If $Y$ depends on $X$: $Y = g(X)$

$$p_Y (y) = \sum_{x \mid g(x) = y } p_X(x) $$

## Joint Probability Mass Function (PMF)

The joint PMF is denoted by

$$\bold P(\{ X = x, Y = y \})$$

It represents the probability of both $X$ and $Y$ occurring.

### Marginal PMF

The marginal PMF allows us to obtain individual random variable values from a vector random variable.

$$\bold P(X = x) = \sum_y \bold P({X = x, Y = y}) $$
$$\bold P(Y = y) = \sum_x \bold P({X = x, Y = y}) $$

# Continuous Random Variables

A continuous random variable infinitely many values, as opposed to discrete random variables where only countable values are considered.

## Probability Density Function (PDF)

A PDF is analogous to a [PMF](#probability-mass-function-pmf). It defines the distribution of probabilities over a range of values.

$$f_X(x) = \frac{\text dF_X(x)}{\text dx}$$

A function $f_X(x)$ is a PDF if it satisfies:

- $f_X(x) \geq 0 \forall x$
- $\displaystyle \int_{-\infty}^\infty f_X(x) \text dx = 1$
- $\forall$ numbers $a$, $b$ then $\displaystyle \bold P [a \leq X \leq b] = \int_a^b f_X(x) \text dx$

## Cumulative Distribution Function (CDF)

The CDF of a random variable describes the distribution and is defined as:

$$F_X (x) = \bold P(X \leq x) = \int_{-\infty}^x f_X(t) dt$$

In continuous time, for an infinitesimally large step $\delta$, the probability is found to be zero.

$$\bold P [x \leq x \leq x + \delta] = \int_x^{x+\delta} f_X(x) \text dx \approx f_X(2) \Delta X \approx 0$$

In a semi-closed interval $(a, b]$ for $a< b$,

$$P(a < X \leq B) = F_X(b) - F_X(a)$$

## Conditioning

### On an event

$$\bold{P} (X \in B \mid X \in A) = \frac{\bold P (X \in B, X \in A)}{\bold P (X \in A)} = \frac{\displaystyle \int_{A \cap B} f_X(x) dx)}{\bold P (X \in A)} = \int_B f_{X \mid A} (x) dx $$

# General Random Variables



## Uniform Distribution

A uniformly distributed random variable has a constant probability density function.

### Probability Density Function

$$f_x(x) = \begin{cases} \frac{1}{b - a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}$$

### Cumulative Distribution Function

$$F_X(x) = \int_{-\infty}^\infty f_X(x) \text dx = \begin{cases} 0 & x < a \\ \frac{x - a}{b - a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}$$

### Expected Value

$$\bold E[X] = \frac{1}{2} (a+b)$$

### Variance

$$\text{var}[X] = \frac{1}{12} (b-a)^2$$

## Exponential Distribution

An exponentially distributed random variable has an exponentially growing probability density function with a rate $\lambda$.

It is often used to calculate the inter-arrival time.

### Probability Density Function

$$f_X (x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & \text{otherwise} \end{cases} = \lambda e^{-\lambda x} u(x)$$

### Cumulative Distribution Function

$$F_X(x) = \int_0^x \lambda e^{-\lambda \beta} \text d\beta = 1-e^{-\lambda x}$$

### Expected Value

$$\frac{1}{\lambda}$$

### Variance

$$\frac{1}{\lambda^2}$$

## Gaussian / Normal Distribution

A Gaussian or normally distributed Distribution $X$ is only continuous.

$$f_X (x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-(x-\mu)^2 / 2\sigma^2}$$

It has scalar parameters:

$$\sigma = \sqrt{\text{var}(X)} \quad \sigma > 0$$
$$\mu = \bold E [X]$$ 

### Expected Value

$$\bold E [X] = \mu$$

### Variance

$$\text{var}(X) = \sigma^2$$

## Standard Normal Distribution

A normal random variable $X$ is standard normal if it has $\bold E [X] = 0$ and $\text{var}(X) = 1$. It is useful to find values for normal distributions since solving for the regular normal random variable is difficult. We define:

$$\phi(y) = \bold P (Y \leq y) = P(Y < y) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^y e^{-t^2 / 2} dt$$

Let $Y$ be another random variable (that is also normal because of linearity) with $\bold E [Y] = \mu$ and $\text{var}(Y) = \sigma^2$. Then:

$$Y = \frac{X - \mu}{\sigma}$$

A useful property is that $\phi(-x) = 1 - \phi(x) \quad \forall x$.

### Calculating the Normal Distribution

To properly use the standard normal table, we need to normalize the normal distribution to have a mean $\bold \mu = E[X] = 0$ and variance $\sigma^2 = 1$, also written as $X \sim N(\mu, \sigma^2) = N(0, 1)$.

We calculate the standard normal variable $Y$, which is the normalized version of the normal random variable:

$$\bold P (X \leq x) = \bold P \bigg(\frac{X - \mu}{\sigma} \leq \frac{x - \mu}{\sigma}\bigg) = \bold P \bigg(Y \leq \frac{x - \mu}{\sigma}\bigg) = \phi \bigg(\frac{x - \mu}{\sigma} \bigg) $$

## Poisson Distribution

The Poisson distribution is a discrete distribution that is useful for calculating the likelihood of the average rate of occurrences $\lambda$ of an event over some time $t$. $k$ is the number of occurrences.

$$\bold P(X = k) = \frac{\lambda t^k e^{-\lambda t}}{k!} \quad k = 0, 1, 2, \dots$$

### Expected Value

$$\bold E[X] = \lambda t$$

### Variance

$$\text{var}[X] = \lambda t$$

### Transform

$$X(z) = e^{\lambda t (z - 1)}$$

## Erlang Distribution

The Erlang distribution is a **continuous distribution** that is useful for calculating the probability the of wait time given the average rate of occurrences $\lambda$ and $n$ number of occurrences.

In other words, the $n$-Erlang distribution is defined by a sum of exponential random variables $X = X_1 + X_2 + \dots + X_n$ where $X_i$ represents the $i$-th occurrence.

Given $n \in \mathbb{R}^+$ with a rate $\lambda > 0$, the $n$-Erlang PDF is given by:

$$f_X(x) = \frac{\lambda^n x^{n - 1} e^{-\lambda x}}{(n - 1)!} \quad x \geq 0$$

### Expected Value

$$\bold E[X] = \frac{n}{\lambda}$$

### Variance

$$\text{var}[X] = \frac{n}{\lambda^2}$$

## Rayleigh Distribution

The Rayleigh distribution is a continuous distribution used to often measure component lifetime.

$$f_X(x) = x e^{-x^2/2}$$

This PDF originates from the magnitude of two independently, normally distributed, and non-negative random variables, $\sqrt{X^2 + Y^2}$.

# Derived Distributions

A derived distribution is useful for finding a PMF or PDF of a function of one or more random variables.

**Note**: When finding the expected value, we do not need to calculate derived distributions.

## Discrete

Given a random variable $Y = g(X)$:

$$p_Y = \bold P (g(X) = y) = \sum_{x: g(x) = y} p_X(x)$$

## Continuous

Given a function of one random variable $Y = g(X)$ and its PDF $f_X(x)$:

First, get the CDF of $Y$:

$$F_Y(y) = \bold P (g(X) \leq y) = \int_{x: g(x) \leq y} f_X(x) dx$$

Then differentiate the CDF:

$$f_Y(y) = \frac{dF_Y}{dy}(y)$$

## Solving Cases

### Multi-variable Derived Distribution

Given a function of random variable $W = g(X, Y)$ and its PDF $f_W(w)$:

First, get the CDF of $W$:

$$F_W(w) = \bold P (g(X,y) \leq w) = \iint_{(x, y) \mid g(x,y) \leq w} f_W(w) dydx$$

Then differentiate the CDF:

$$f_W(w) = \frac{dF_W}{dw}(w)$$

### Multi-variable Derived Distribution with Joint PDF

Given $V = g_1(X, Y)$ and $W = g_2(X, Y)$ with joint PDF $f_{X,Y}(x,y)$ and

- $v = g_1(x,y), w = g_2(x,y)$ can be uniquely solved for $x,y$ in terms of $v,w$; for example $x=h_1(v,w), y=h_2(v,w)$
- The derivatives of $x,y$ with respect to $v,w$ are continuous and exist.

Then, solve for $x=h_1(v,w), y=h_2(v,w)$ and use the equation:

$$f_{V,W}(v,w) = f_{X,Y}[h_1(v,w), h_2(v,w)] |J(v,w)|$$ 

Where $J(v,w)$ is the Jacobian:

$$J(v,w) = \begin{vmatrix}
\displaystyle \frac{\partial x}{\partial v} & \displaystyle \frac{\partial x}{\partial w} \\[10pt]
\displaystyle \frac{\partial y}{\partial v} & \displaystyle \frac{\partial y}{\partial w}
\end{vmatrix}$$

### Sum of Independent Random Variables (Convolution)

# Expectation

The expected value predicts the value of a random variable. 

$$\bold E [g(X,Y)] = \begin{cases}
\displaystyle \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(X,Y) f_{X,Y}(x,y) dxdy & \text{continuous} \\
\displaystyle \sum_{-\infty}^{\infty} \sum_{-\infty}^{\infty} g(X,Y) p_{X,Y}(x,y)& \text{discrete}
\end{cases}$$

## Covariance

The covariance tells us how two random variables $X$ and $Y$ vary.

$$\text{cov}(X,Y) = \bold E[(X - \bold E[X])(Y - \bold E[Y])]$$

$$\bold E [XY] - \bold E[X] \bold E[Y]$$

## Correlation

The correlation tells us how related two random variables $X$ and $Y$ are.

$$\rho_{XY}(x,y) = \frac{\text{cov}(X,Y)}{\sigma_x \sigma_y} = \frac{\bold E [XY] - \bold E[X] \bold E[Y]}{\sigma_x \sigma_y}$$

## Sum of Expectations

Given a sum of random variables $W=X+Y$, we observe:

$$\bold E[W] = \bold E[X+Y] = \bold E[X] + \bold E[Y]$$

from the linearity of integration. Note that this property is true even if $X,Y$ are dependent.

# Transforms & Moment Generating Function

The moment generating function represents the distribution of probabilities over the reals. It is similar to the probability generating function, except here we use $e^s$ instead of $z$.

$$M_X(s) = \bold E [e^{sX}] = \begin{cases} \displaystyle \int_{-\infty}^\infty e^{sx} f_X(x) dx & X \text{continuous} \\ \displaystyle \sum_x e^{sx} p_X(x) & X \text{discrete} \end{cases}$$

## Expected Value

$$\bold E [X] = \frac{d}{ds} M_X(s)\Bigr|_{s=0}$$
$$\bold E [X^n] = \frac{d^n}{ds^n} M_X(s)\Bigr|_{s=0}$$

## Linearity

- If $Y = aX+b$ then $M_Y(s) = e^{sb}M_X(as)$

## Independence

### With transforms

Given $W = X + Y$, if $X$ and $Y$ are independent, then the sum is the multiplication of transforms. $W$'s distribution is characterized by:

$$M_{W}(s) = \bold E[e^{sW}] = \bold E [e^{sX}] \bold E [e^{sY}] = M_X(s) M_Y(s)$$

### With convolution

The density function of multiple variables can also be obtained using convolution. Given $W = X + Y$, if $X$ and $Y$ are independent:

#### Discrete Case

$$p_W(w) = \bold P (X + Y = w) = \sum_x p_X(x) p_Y(w-x)$$

#### Continuous Case

$$\bold P(W \leq w | X = x) = \bold P(Y \leq w - x) = \int_{-\infty}^\infty f_X(x) f_Y(w - x) dx$$

## Multivariate Transform

Given $n$ random variables $X_1, \dots, X_n$ and $s_1, \dots, s_n$ scalars, the multivariate transform is defined as:

$$M_{X_1, \dots, X_n} (s_1, \dots, s_n) = \bold E [e^{s_1 X_1 + \dots + s_n X_n}]$$

## Common Discrete Transforms

### Bernoulli (p)

$$M_X(s) = 1 - p + pe^s \quad k = 0, 1$$

### Binomial (n, p)

$$M_X(s) = (1 - p + pe^2)^n \quad k = 0, 1, \dots, n$$

### Geometric (p)

$$M_X(s) = \frac{pe^s}{1 - (1 - pe^s)} \quad k = 1, 2, \dots$$

### Poisson ($\lambda$)

$$M_X(s) = e^{\lambda(e^s - 1)} \quad k = 0, 1, \dots$$

### Uniform (a, b)

$$M_X(s) = \frac{e^{as}}{b - a + 1} \cdot \frac{e^{(b - a + 1)s} - 1}{e^s - 1} \quad k = a, a + 1, \dots, b$$

## Common Continuous Transforms

| Uniform $a \leq x \leq b$ | Exponential $x \geq 0$ | Normal $-\infty < x < \infty$ |
|-|-|-|
| $\displaystyle \frac{1}{b - a} \cdot \frac{e^{sb} - e^{sa}}{s} \text{}$ | $\displaystyle \frac{\lambda}{\lambda - s} \quad s < \lambda$ | $\displaystyle e^{(\sigma^2 s^2 / 2) + \mu s} \text{}$ |

# Limit Theorems

Limit theorems answer questions to asymptotic behaviors to sequences of independently identically distributed random variables $S_n = X_1, X_2, \dots, X_n$ as $n \rightarrow \infty$.

## Sample Mean

The sample mean of a distribution is the average of picked values from the distribution.

$$M_n = \frac{1}{n} \sum_{i = 1}^n X_i = \frac{S_n}{n}$$

From it, we can derive that

$$\bold E [M_n] = \mu$$

$$\text{var}(M_n) = \frac{\sigma^2}{n}$$

## Central Limit Theorem

For $X_1, X_2, \dots$ independently and identically distributed random variables with common mean $\bold E[X]$ and variance $\sigma^2$.

$$Z_n = \frac{X_1 + \dots + X_n - n\mu}{\sigma \sqrt{n}}$$

We notice that as $n \rightarrow \infty$, $Z_n$ converges to the standard normal cumulative distribution function:

$$\lim_{n \rightarrow \infty} \bold P(Z_n \leq z) = \Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^z e^{-x^2 / 2} dx$$

### De-Moivre - Laplace Approximation (1/2 approximation)

For a binomial random variable  with $n \rightarrow \infty$ and $p$ with $k,l \in \mathbb{Z}^+$

$$\bold P (k \leq S_n \leq l) = \Phi(\frac{l + \frac{1}{2} - np}{\sqrt{np(1-p)}}) - \Phi(\frac{k - \frac{1}{2} - np}{\sqrt{np(1-p)}}) $$

## Markov Inequality

For a non-negative random variable $X$ and constant $a>0$,

$$\bold P (X \geq a) \leq \frac{\bold E [X]}{a}$$

In other words, the Markov inequality gives the confidence of the probability distribution for the upper bound of values $x \geq a$.

## Chebyshev Inequality

For any random variable $X$,

$$\bold P (|X - \bold E[X]| \geq a) \leq \frac{\sigma_x^2}{a^2}$$

In other words, the Chebyshev inequality provides the confidence of the probability distribution for the range $\bold E[X] \pm a$.

## The Weak Law of Large Numbers

For a finite mean $\bold E[X]$ and $\epsilon > 0$,

$$\lim_{n \rightarrow \infty} \bold P [|M_n - \mu| < \epsilon] = 1$$

In other words, it tells us that if we had infinitely many data points, the sample mean converges in probability towards the expected value.
