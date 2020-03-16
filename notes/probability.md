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

### Geometric Distribution

The geometric probability mass function describes the situation in which $n$ independent trials are required before the event occurs with probability $p$.

$$P(X = n) = (1-p)^{n-1}p$$
$$\sum_{k=1}^\infty \bold{P}(X = k) = \sum_{k=1}^\infty (1-p)^{k-1} p$$

In other words, $k-1$ trials occur before the event occurs.

### Binomial Distribution

The binomial probability mass function describes the situation in which the $n$ independent trials occur with $k$ successes with probability $p$ and $n - k$ fails with probability $1-p$.

$$\bold P(X = k) = {n \choose k} p^k (1-p)^k$$

### Bernoulli Distribution

The Bernoulli distribution describes the situation in which the probability mass function consists of a binary set of outcomes, $S_X = \{ 0, 1 \}$. It is a special case of the binomial distribution, where $n = 1$.

$$\bold P (X = x) = \begin{cases}p & x = 1\\1-p & x = 0\end{cases}$$

### Poisson Distribution

The Poisson distribution is a discrete distribution that is useful for counting the average number of occurrences $\lambda$ of an event over some time $t$.

$$\bold P(X = x) = \frac{\lambda^k e^{-\lambda}}{k!} \quad k = 0, 1, 2, \dots$$

#### Expected Value

$$\bold E[X] = \lambda$$

#### Variance

$$\text{Var} (X) = \lambda$$

## Cumulative Distribution Function (CDF)

The cumulative distribution function describes the situation in which the random value $X$ will take a value less than or equal to $x$.

$$F_X(x) = \bold{P}(X \leq x) = \sum_{k = - \infty}^x P(X = k)$$

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

$\text{stdiv} = \sqrt{\text{var}[X]}$

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

## Conditioning a Random Variable

### On an event

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

$$F_X (x) = \bold P(X \leq x)$$

In continuous time, for an infinitesimally large step $\Delta x$, the probability is found to be zero.

$$\bold P [2 \leq x \leq 2 + \Delta x] = \int_2^{2+\Delta x} f_X(x) \text dx \approx f_X(2) \Delta X \approx 0$$

In a semi-closed interval $(a, b]$ for $a< b$,

$$P(a < X \leq B) = F_X(b) - F_X(a)$$

### Uniformly Distributed Random Variable

A uniformly distributed random variable has a constant probability density function.

#### Probability Density Function

$$f_x(x) = \begin{cases} \frac{1}{b - a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}$$

#### Cumulative Distribution Function

$$F_X(x) = \int_{-\infty}^\infty f_X(x) \text dx = \begin{cases} 0 & x < a \\ \frac{x - a}{b - a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}$$

### Exponentially Distributed Random Variable

An exponentially distributed random variable has an exponentially growing probability density function.

$$f_X (x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & \text{otherwise} \end{cases} = \lambda e^{-\lambda x} u(x)$$

#### Cumulative Distribution Function

$$F_X(x) = \int_0^x \lambda e^{-\lambda \beta} \text d\beta = 1-e^{-\lambda x}$$
