(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{515:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Probability\ndescription: Probably relevant.\n---\n\n# Probabilistic Models\n\n### Experiment\n\nThe problem at hand.\n\n### Outcome\n\nThe results of the [experiment](#experiment).\n\n### Sample Space ($\\Omega$)\n\nThe set of all possible [outcomes](#outcome) of an [experiment](#experiment).\n\n### Event\n\nA subset of the [sample space](#sample-space-omega) containing the possible [outcomes](#outcome).\n\n### Mutual Exclusivity (Disjointness)\n\nElements of the [sample space](#sample-space-omega) should be distinct.\n\n### Collectively Exhaustive\n\nAll of the [events](#event) must be accounted for in the [sample space](#sample-space-omega).\n\n# Probability Axioms\n\n### Non-negativity\n\nFor each event $A$, \n\n$$\\bold{P}(A) \\geq 0$$\n\n### Additivity\n\nIf the sets $A$ and $B$ are [disjoint](/sets/#disjoint) events, then:\n\n$$\\bold{P}(A \\cup B) = \\bold{P}(A) + \\bold{P}(B)$$\n\n### Normalization\n\nThe probability of the [sample space](#sample-space-omega) is equal to $1$.\n\n$$\\bold{P}(\\Omega) = 1$$\n\n# Discrete Models\n\n### Discrete Probability\n\nThe probability of an event $\\left\\{s_1, s_2, ..., s_3\\right\\}$ is the sum of of the probabilities of its elements:\n\n$$\\bold{P}(\\left\\{s_1, s_2, ..., s_3\\right\\}) = \\bold{P}(s_1) + \\bold{P}(s_2) + ... + \\bold{P}(s_n) $$\n\n### Discrete Uniform Probability Law\n\nGiven an event $A$ with $n$ possible outcomes, the probability of any event $A$ is:\n\n$$\\bold{P}(A) = \\frac{\\text{number of elements of A}}{n}$$\n\n### Intersection\n\n$$\\bold P (AB) = \\bold P(A) + \\bold P(B) - \\bold P(A\\cup B)$$\n\n# Conditional Probability\n\nWhen only partial information is given and we want to know the outcome of an experiment, conditional probability is useful.\n\nLet $A$ and $B$ be two events. The conditional probability of $A$ given $B$ is denoted as:\n\n$$\\bold{P}(A|B) = \\frac{\\bold{P}(A \\cap B)}{\\bold{P}(B)} = \\frac{\\text{number of elements} \\in A \\cap B}{\\text{number of elements} \\in B}$$\n\nwhere $\\bold{P}(B) \\gt 0$.\n\nIn other words, the conditional probability is the ratio of $A$ and $B$ occurring to the probability of $B$ occurring. $B$ has already occurred, and so the only probability left of occurring is intersect between $A$ and $B$.\n\n## Multiplication Rule\n\nAssuming all of the conditioning events have positive probability,\n\n$$\\bold{P}\\bigg(\\bigcap^n_{i=1} A_i\\bigg) = \\bold{P}(A_1) \\bold{P}(A_2|A_1)\\bold{P}(A_3|A_1 \\cap A_2) ... \\bold{P}\\bigg(A_n | \\bigcap^{n-1}_{i=1}) A_i\\bigg)$$\n\nThis rule is often seen when multiplying independent events together in a tree diagram.\n\n## Total Probability Theorem\n\nLet $A_1 ... A_n$ be disjoint events that form a partition of the sample space and assume $\\bold{P}(A_i) > 0 \\forall i$. For any event $B$,\n\n$$\\bold{P}(B) = \\bold{P}(A_1 \\cap B) + ... + \\bold{P}(A_n \\cap B) \\\\\n= \\bold{P}(A_1)\\bold{P}(B|A_1) + ... + \\bold{P}(A_n)\\bold{P}(B|A_n)$$\n\nMore compactly,\n\n$$\\bold P(B) = \\sum_{i = 1}^n P(A_i)P(B | A_i)$$\n\nThis theorem is often seen when adding together various event outcomes to calculate the probability of an event occurring.\n\n## Bayes' Rule\n\nBayes' rule is used when finding the reversed conditional probability. \n\n$$\\bold{P}(A_i | B) = \\frac{\\bold{P}(A_i)\\bold{P}(B | A_i)}{\\bold{P}(B)} = \\frac{\\bold{P}(A_i) \\bold{P}(B|A_i)}{\\bold{P}(A_1) \\bold{P}(B|A_1) + ... + \\bold{P}(A_n) \\bold{P}(B|A_n)}$$\n\n# Independence\n\n$A$ is independent of $B$ if \n\n$$\\bold{P}(A|B) = \\bold{P}(A) = \\frac{\\bold{P}(A \\cap B)}{\\bold{P}(B)} = \\frac{\\bold{P}(A) \\bold P(B)}{\\bold{P}(B)}$$\n\nAlso, if $\\bold{P}(B) > 0$\n\n$$\\bold{P}(A|B) = \\bold{P}(A)$$\n\n# Counting Principle\n\nLet's say there is a process consisting of $r$ stages.\n- $n_1$ possible results in the first stage. \n- For every possible result of the first stage, there are $n_2$ possbile results at the second stage.\n\n### $k$-permutations\n\nLet's say we want to count the number of permutations with $n$ distinct objects, but we only have room to choose $k$ objects.\n\n- $n$ distinct objects\n- Pick only $k$ out of $n$ objects\n- Order matters (number of arrangements)\n- $n \\geq k$\n\n$$\\frac{n!}{(n-k)!}$$\n\n### Permutations\n\nLet's say we have $n$ distinct objects and have $n$ spots. In other words, $n = k$. We aim to find how many sequences there are when choosing $k$ balls.\n\n#### With Replacement\n\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we replace the object, so the number of possibilities stays the same as the first, $n$.\n\nWe continue this until $k$.\n\n$$n \\cdot n \\cdot n \\cdots = n^k$$\n\n#### Without Replacement\n\n$$P^n_k = n(n-1)(n-2) \\cdots 2 \\cdot 1 = n!$$\n\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we do not replace the object, so we lose one possibility; thus we are left with $n-1$ possibilities.\n\nWe continue this until $n - (k - 1)$.\n\n### Combinations\n\n#### Without Repetition\n\nLet's say we want to count the number of combinations with $n$ distinct objects, but we only want to choose $k$ objects.\n\n- $n$ distinct objects\n- Pick only $k$ out of $n$ objects\n- Order doesn't matter\n- $n \\geq k$\n\n$${ n \\choose k } = \\frac{n!}{k!(n-k)!}$$\n\n# Partitions\n\nLet's say we wanted to split $n$ distinct objects into $r$ groups, and those groups are of size $n_1, n_2, \\ldots, n_r$ where $n_1 + n_2 + \\ldots + n_r = n$. \n\nIn other words, $n_1, n_2, \\ldots, n_r$ is just the partition of $n$.\n\nWe use the counting principle and define it as the multinomial coefficient,\n\n$${n \\choose n_1,n_2,\\ldots, n_r} = {n \\choose n_1} {n - n_1 \\choose n_2} {n - n_1 - n_2 \\choose n_3} \\cdots {n - n_1 - \\ldots - n_{r-1} \\choose n_r}$$\n\n$$\\frac{n!}{n_1!(n-n_1)!} \\cdot \\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \\cdots \\frac{n-n_1-\\ldots-n_{r-1}!}{n_r!(n-n_1-\\ldots-n_{r-1} - n_r)!}$$\n\nFirst, we choose $n_1$ objects to insert into the first group from the pool of $n$.\n\nNext, from the remaining pool of $n - n_1$, we choose however many objects we want to insert into group $n_2$.\n\nWe repeat this until the group $r$.\n\n# Discrete Random Variables\n\nA random variable $X$ is a function that assigns a real number $X(w)$ to each outcome $w \\in \\Omega$.\n\n## Probability Mass Function (PMF)\n\nIf $S_X$ is a discrete set, $X$ is a discrete random variable.\n\nWe can assign a probability to each element $x \\in S_X$, and this assignment is called the probability mass function (PMF). In essence, we are assigning some weight to how probable an element $x$ occurs. We denote the PMF by:\n\n$$\\bold{P}(X = x)$$\n\nGiven a PMF, it has the properties:\n- $\\bold{P}(X = x) \\geq 0$\n- $\\displaystyle \\sum_x \\bold{P}(X = x) = 1$\n\n## Cumulative Distribution Function (CDF)\n\nThe cumulative distribution function describes the situation in which the random value $X$ will take a value less than or equal to $x$.\n\n$$F_X(x) = \\bold{P}(X \\leq x) = \\sum_{k = - \\infty}^x P(X = k)$$\n\nIn other words, it's the cumulative probability that of a distribution up to a value $x$.\n\n## Probability Generating Function (PGF)\n\nThe probability generating function is a sequence encompasses both the probabilities and possible values associated with a random variable.\n\n$$G_X(z) = \\bold{E}[z^x] = \\sum_{k=0}^\\infty z^k \\bold{P} (X=k) = z^0 \\bold{P}(K = 0) + z^1 \\bold{P}(K = 1) + z^2 \\bold{P}(K = 2) + \\dots$$\n\n- Each exponent $k$ of $z^k$ denote the possible values a random variable can take on. \n- The coefficient of $z^k$ denotes the probability attached to the possible value.\n\nIf we take the first derivative:\n\n$$\\frac{\\text{d}G_X}{\\text{d}z} = \\sum_{k=0}^\\infty k z^{k-1} \\bold{P} (X=k)$$\n\nAnd second derivative:\n\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2} = \\sum_{k=0}^\\infty k(k-1) z^{k-2} \\bold{P} (X=k)$$\n\n### Expectation Value\n\nThe expectation value is the average of the probability mass function. In other words, it is the value we expect the most, as this is where the distribution of weights is located in the probability mass function.\n\nIt is the first derivative of the [PGF](#probability-generating-function-pgf) where $z=1$.\n\n$$\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X] = \\sum_{k \\in S_x} k \\bold{P} (X = k)$$\n\n### Second Moment\n\nThe second moment is the sum of the first and second derivatives of the [PGF](#probability-generating-function-pgf) where $z=1$.\n\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X^2]$$\n\n### Variance\n\nThe variance tells us how far numbers are spread out from the average or expected value.\n\n$$\\text{Var}[X] = \\bold{E}[X^2] - \\bold{E}[X]^2 = \\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} - \\bigg(\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1}\\bigg)^2$$\n\n### Standard Deviation\n\nThe standard deviation describes the spread of values.\n\n$\\text{stdiv} = \\sigma = \\sqrt{\\text{var}[X]}$\n\n## Discrete Random Variable Conditioning\n\n$$\\bold P(X = x \\mid Y = y) = \\frac{\\bold P(X = x, Y = y)}{\\bold P(Y = y)}$$\n\n## Bernoulli Distribution\n\nThe Bernoulli distribution describes the situation in which the probability mass function consists of a binary set of outcomes, $S_X = \\{ 0, 1 \\}$. It is a special case of the binomial distribution, where $n = 1$.\n\n### Probability Mass Function\n\n$$\\bold P (X = x) = \\begin{cases}p & x = 1\\\\1-p & x = 0\\end{cases}$$\n\n### Cumulative Density Function\n\n$$\\bold P (X \\leq x) = \\begin{cases}\n0 & x < 0 \\\\\n1 - p & 0 \\leq x < 1 \\\\\np & x \\geq 1\n\\end{cases}$$\n\n### Expected Value\n\n$$\\bold E[X] = p$$\n\n### Variance\n\n$$\\text{var}[X] = p(1-p)$$\n\n### Transform\n\n$$M_X(s) = 1 - p + pe^s \\quad k = 0, 1$$\n\n## Binomial Distribution\n\nThe binomial probability mass function describes the situation in which the $n$ independent trials occur with $k$ successes with probability $p$ and $n - k$ fails with probability $1-p$ with replacement.\n\n### Probability Mass Function\n\n$$\\bold P(X = k) = {n \\choose k} p^k (1-p)^k$$\n\n### Cumulative Density Function\n\n$$\\bold P(X \\leq x) = \\sum_{i = 1}^x {n \\choose i} p^i (1-p)^{n-i}$$\n\n### Expected Value\n\n$$\\bold E[X] = np$$\n\n### Variance\n\n$$\\text{var}[X] = np(1-p)$$\n\n### Transform\n\n$$M_X(s) = (1 - p + pe^s)^n \\quad k = 0, 1, \\dots, n$$\n\n## Geometric Distribution\n\nThe geometric probability mass function describes the situation in which $n$ independent trials are required before the event occurs with probability $p$.\n\n### Probability Mass Function\n\n$$P(X = n) = (1-p)^{n-1}p$$\n$$\\sum_{k=1}^\\infty \\bold{P}(X = k) = \\sum_{k=1}^\\infty (1-p)^{k-1} p$$\n\nIn other words, $k-1$ trials occur before the event occurs.\n\n### Cumulative Density Function\n\n$$\\bold P (X \\leq x) = 1-(1-p)^{n-1}$$\n\n### Expected Value\n\n$$\\bold E[X] = \\frac{1}{p}$$\n\n### Variance\n\n$$\\text{var}[X] = \\frac{1-p}{p^2}$$\n\n### Transform\n\n$$M_X(s) = \\frac{pe^s}{1 - (1 - p) e^s)} \\quad k = 1, 2, \\dots$$\n\n## Hypergeometric Distribution\n\nThe hypergeometric distribution is a discrete distribution that characterizes the probability of observed $k$ successes in $n$ draws without replacement. $N$ is the population size and $K$ is the number of successes in the population.\n\n### Probability Mass Function\n\n$$\\bold P (X = k) = \\frac{\\begin{pmatrix} K \\\\ k \\end{pmatrix} \\begin{pmatrix} N - K \\\\ n - k \\end{pmatrix}}{\\begin{pmatrix} N \\\\ n \\end{pmatrix}}$$\n\n### Multivariate Hypergeometric Distribution\n\n$$\\frac{\\displaystyle \\prod_{i = 1}^c \\begin{pmatrix} K_i \\\\ k_i \\end{pmatrix}}{\\begin{pmatrix} N \\\\ n \\end{pmatrix}}$$\n\nFor $c$ different populations $K_i$, we select $k_i$ people.\n\n$N = \\displaystyle \\sum_{i=1}^c K_i$ is the total number of populations.\n\n## Poisson Distribution\n\nThe Poisson distribution is a discrete distribution that is useful for calculating the likelihood of the average rate of occurrences $\\lambda$ of an event over some time $t$. $k$ is the number of occurrences.\n\n$$\\bold P(X = k) = \\frac{\\lambda t^k e^{-\\lambda t}}{k!} \\quad k = 0, 1, 2, \\dots$$\n\n### Expected Value\n\n$$\\bold E[X] = \\lambda t$$\n\n### Variance\n\n$$\\text{var}[X] = \\lambda t$$\n\n### Transform\n\n$$X(z) = e^{\\lambda t (z - 1)}$$\n\n## Functions of Random Variables\n\nGiven a random variable $X$, we can generate other random variables by applying various transformations on $X$. If $Y$ depends on $X$: $Y = g(X)$\n\n$$p_Y (y) = \\sum_{x \\mid g(x) = y } p_X(x) $$\n\n## Joint Probability Mass Function (PMF)\n\nThe joint PMF is denoted by\n\n$$\\bold P(\\{ X = x, Y = y \\})$$\n\nIt represents the probability of both $X$ and $Y$ occurring.\n\n### Marginal PMF\n\nThe marginal PMF allows us to obtain individual random variable values from a vector random variable.\n\n$$\\bold P(X = x) = \\sum_y \\bold P({X = x, Y = y}) $$\n$$\\bold P(Y = y) = \\sum_x \\bold P({X = x, Y = y}) $$\n\n# Continuous Random Variables\n\nA continuous random variable infinitely many values, as opposed to discrete random variables where only countable values are considered.\n\n## Probability Density Function (PDF)\n\nA PDF is analogous to a [PMF](#probability-mass-function-pmf). It defines the distribution of probabilities over a range of values.\n\n$$f_X(x) = \\frac{\\text dF_X(x)}{\\text dx}$$\n\nA function $f_X(x)$ is a PDF if it satisfies:\n\n- $f_X(x) \\geq 0 \\forall x$\n- $\\displaystyle \\int_{-\\infty}^\\infty f_X(x) \\text dx = 1$\n- $\\forall$ numbers $a$, $b$ then $\\displaystyle \\bold P [a \\leq X \\leq b] = \\int_a^b f_X(x) \\text dx$\n\n### Marginal PDF\n\nThe marginal PDF extracts the density function for a random variable from a joint PDF.\n\n$$f_X(x) = \\int_{-\\infty}^\\infty f_{X,Y}(X,Y) dy$$\n\n$$f_Y(y) = \\int_{-\\infty}^\\infty f_{X,Y}(X,Y) dx$$\n\n## Cumulative Distribution Function (CDF)\n\nThe CDF of a random variable describes the distribution and is defined as:\n\n$$F_X (x) = \\bold P(X \\leq x) = \\int_{-\\infty}^x f_X(t) dt$$\n\nIn continuous time, for an infinitesimally large step $\\delta$, the probability is found to be zero.\n\n$$\\bold P [x \\leq x \\leq x + \\delta] = \\int_x^{x+\\delta} f_X(x) \\text dx \\approx f_X(\\delta) \\delta X \\approx 0$$\n\nIn a semi-closed interval $(a, b]$ for $a< b$,\n\n$$P(a < X \\leq B) = F_X(b) - F_X(a)$$\n\n## Conditioning\n\n### On an event\n\n$$\\bold{P} (X \\in B \\mid X \\in A) = \\frac{\\bold P (X \\in B, X \\in A)}{\\bold P (X \\in A)} = \\frac{\\displaystyle \\int_{A \\cap B} f_X(x) dx)}{\\bold P (X \\in A)} = \\int_B f_{X \\mid A} (x) dx $$\n\n# General Random Variables\n\n## Uniform Distribution\n\nA uniformly distributed random variable has a constant probability density function.\n\n### Probability Density Function\n\n$$f_X(x) = \\begin{cases} \\frac{1}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n### Cumulative Distribution Function\n\n$$F_X(x) = \\int_{a}^x f_X(x) \\text dx = \\begin{cases} 0 & x < a \\\\ \\frac{x - a}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n### Expected Value\n\n$$\\bold E[X] = \\frac{1}{2} (a+b)$$\n\n### Variance\n\n$$\\text{var}[X] = \\frac{1}{12} (b-a)^2$$\n\n### Transform\n\n$$M_X(s) = \\frac{e^{as}}{b - a + 1} \\cdot \\frac{e^{(b - a + 1)s} - 1}{e^s - 1} \\quad k = a, a + 1, \\dots, b$$\n\n## Exponential Distribution\n\nAn exponentially distributed random variable has an exponentially growing probability density function with a rate $\\lambda$.\n\nIt is often used to calculate the inter-arrival time.\n\n### Probability Density Function\n\n$$f_X (x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\geq 0 \\\\ 0 & \\text{otherwise} \\end{cases} = \\lambda e^{-\\lambda x} u(x)$$\n\n### Cumulative Distribution Function\n\n$$F_X(x) = \\int_0^x \\lambda e^{-\\lambda \\beta} \\text d\\beta = 1-e^{-\\lambda x}$$\n\n### Expected Value\n\n$$\\bold E[X] = \\frac{1}{\\lambda}$$\n\n### Variance\n\n$$\\text{var}[X] = \\frac{1}{\\lambda^2}$$\n\n### Transform\n\n$$M_X(s) = \\displaystyle \\frac{\\lambda}{\\lambda - s} \\quad s < \\lambda$$\n\n## Gaussian / Normal Distribution\n\nA Gaussian or normally distributed distribution $X$ is only continuous.\n\n$$f_X (x) = \\frac{1}{\\sqrt{2\\pi} \\sigma} e^{-(x-\\mu)^2 / 2\\sigma^2}$$\n\nIt has scalar parameters:\n\n$$\\sigma = \\sqrt{\\text{var}(X)} \\quad \\sigma > 0$$\n$$\\mu = \\bold E [X]$$ \n\n### Expected Value\n\n$$\\bold E [X] = \\mu$$\n\n### Variance\n\n$$\\text{var}(X) = \\sigma^2$$\n\n### Transform\n\n$$M_X(s) = \\displaystyle e^{(\\sigma^2 s^2 / 2) + \\mu s}$$\n\n## Standard Normal Distribution\n\nA normal random variable $X$ is standard normal if it has $\\bold E [X] = 0$ and $\\text{var}(X) = 1$. It is useful to find values for normal distributions since solving for the regular normal random variable is difficult. We define:\n\n$$\\phi(y) = \\bold P (Y \\leq y) = P(Y < y) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^y e^{-t^2 / 2} dt$$\n\nLet $Y$ be another random variable (that is also normal because of linearity) with $\\bold E [Y] = \\mu$ and $\\text{var}(Y) = \\sigma^2$. Then:\n\n$$Y = \\frac{X - \\mu}{\\sigma}$$\n\nA useful property is that $\\phi(-x) = 1 - \\phi(x) \\quad \\forall x$.\n\n### Calculating the Normal Distribution\n\nTo properly use the standard normal table, we need to normalize the normal distribution to have a mean $\\bold \\mu = E[X] = 0$ and variance $\\sigma^2 = 1$, also written as $X \\sim N(\\mu, \\sigma^2) = N(0, 1)$.\n\nWe calculate the standard normal variable $Y$, which is the normalized version of the normal random variable:\n\n$$\\bold P (X \\leq x) = \\bold P \\bigg(\\frac{X - \\mu}{\\sigma} \\leq \\frac{x - \\mu}{\\sigma}\\bigg) = \\bold P \\bigg(Y \\leq \\frac{x - \\mu}{\\sigma}\\bigg) = \\phi \\bigg(\\frac{x - \\mu}{\\sigma} \\bigg) $$\n\n## Erlang Distribution\n\nThe Erlang distribution is a **continuous distribution** that is useful for calculating the probability the of wait time given the average rate of occurrences $\\lambda$ and $n$ number of occurrences.\n\nIn other words, the $n$-Erlang distribution is defined by a sum of exponential random variables $X = X_1 + X_2 + \\dots + X_n$ where $X_i$ represents the $i$-th occurrence.\n\nGiven $n \\in \\mathbb{R}^+$ with a rate $\\lambda > 0$, the $n$-Erlang PDF is given by:\n\n$$f_X(x) = \\frac{\\lambda^n x^{n - 1} e^{-\\lambda x}}{(n - 1)!} \\quad x \\geq 0$$\n\n### Expected Value\n\n$$\\bold E[X] = \\frac{n}{\\lambda}$$\n\n### Variance\n\n$$\\text{var}[X] = \\frac{n}{\\lambda^2}$$\n\n### Transforms\n\n$$M_X(s) = \\bigg(\\frac{\\lambda}{\\lambda + s}\\bigg)^n$$\n\n## Rayleigh Distribution\n\nThe Rayleigh distribution is a continuous distribution used to often measure component lifetime.\n\n$$f_X(x) = x e^{-x^2/2}$$\n\nThis PDF originates from the magnitude of two independently, normally distributed, and non-negative random variables, $\\sqrt{X^2 + Y^2}$.\n\n# Derived Distributions\n\nA derived distribution is useful for finding a PMF or PDF of a function of one or more random variables.\n\n**Note**: When finding the expected value, we do not need to calculate derived distributions.\n\n## Discrete\n\nGiven a random variable $Y = g(X)$:\n\n$$p_Y = \\bold P (g(X) = y) = \\sum_{x: g(x) = y} p_X(x)$$\n\n## Continuous\n\nGiven a function of one random variable $Y = g(X)$ and its PDF $f_X(x)$:\n\nFirst, get the CDF of $Y$:\n\n$$F_Y(y) = \\bold P (g(X) \\leq y) = \\int_{x: g(x) \\leq y} f_X(x) dx$$\n\nThen differentiate the CDF:\n\n$$f_Y(y) = \\frac{dF_Y}{dy}(y)$$\n\n## Solving Cases\n\n### Multi-variable Derived Distribution\n\nGiven a function of random variable $W = g(X, Y)$ and its PDF $f_W(w)$:\n\nFirst, get the CDF of $W$:\n\n$$F_W(w) = \\bold P (g(X,Y) \\leq w) = \\iint_{(x, y) \\mid g(x,y) \\leq w} f_W(w) dydx$$\n\nThen differentiate the CDF:\n\n$$f_W(w) = \\frac{dF_W}{dw}(w)$$\n\n### Multi-variable Derived Distribution with Joint PDF\n\nGiven $V = g_1(X, Y)$ and $W = g_2(X, Y)$ with joint PDF $f_{X,Y}(x,y)$ and\n\n- $v = g_1(x,y), w = g_2(x,y)$ can be uniquely solved for $x,y$ in terms of $v,w$; for example $x=h_1(v,w), y=h_2(v,w)$\n- The derivatives of $x,y$ with respect to $v,w$ are continuous and exist.\n\nThen, solve for $x=h_1(v,w), y=h_2(v,w)$ and use the equation:\n\n$$f_{V,W}(v,w) = f_{X,Y}[h_1(v,w), h_2(v,w)] |J(v,w)|$$ \n\nWhere $J(v,w)$ is the Jacobian:\n\n$$J(v,w) = \\begin{vmatrix}\n\\displaystyle \\frac{\\partial x}{\\partial v} & \\displaystyle \\frac{\\partial x}{\\partial w} \\\\[10pt]\n\\displaystyle \\frac{\\partial y}{\\partial v} & \\displaystyle \\frac{\\partial y}{\\partial w}\n\\end{vmatrix}$$\n\n### Sum of Independent Random Variables (Convolution)\n\n# Expectation\n\nThe expected value predicts the value of a random variable. \n\n$$\\bold E [g(X,Y)] = \\begin{cases}\n\\displaystyle \\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} g(X,Y) f_{X,Y}(x,y) dxdy & \\text{continuous} \\\\\n\\displaystyle \\sum_{-\\infty}^{\\infty} \\sum_{-\\infty}^{\\infty} g(X,Y) p_{X,Y}(x,y)& \\text{discrete}\n\\end{cases}$$\n\n## Conditional Expectation\n\nGiven a fixed value $Y = y$, we can find the expected value of $X$.\n\n$$\\bold E[X | Y = y] = \\begin{cases}\n\\displaystyle \\int_{-\\infty}^\\infty x f_{X \\mid Y}(x | y) dx  & \\text{continuous} \\\\\n\\displaystyle \\sum_x x \\bold P(X = x \\mid Y = y) & \\text{discrete}\n\\end{cases}$$\n\n## Law of Iterated (Total) Expectation\n\n$$\\bold E[X] = \\bold E[\\bold E[X | Y]] = \\begin{cases}\n\\displaystyle \\int_{-\\infty}^\\infty \\bold E[X|Y=y] f_Y(y) dy & \\text{continuous} \\\\\n\\displaystyle \\sum_y \\bold E [X|Y=y] \\bold P[Y = y] & \\text{discrete}\n\\end{cases}$$\n\n## Covariance\n\nThe covariance tells us how two random variables $X$ and $Y$ are related.\n\n$$\\text{cov}(X,Y) = \\bold E[(X - \\bold E[X])(Y - \\bold E[Y])]$$\n\n$$\\bold E [XY] - \\bold E[X] \\bold E[Y]$$\n\n## Correlation\n\nThe correlation tells us how linearly related two random variables $X$ and $Y$ are.\n\n$$\\rho_{XY}(x,y) = \\frac{\\text{cov}(X,Y)}{\\sigma_x \\sigma_y} = \\frac{\\bold E [XY] - \\bold E[X] \\bold E[Y]}{\\sigma_x \\sigma_y}$$\n\n- If $X,Y$ are independent, then $\\rho_{X,Y} = 0$.\n- $\\rho_{X,Y}$ = 0 means $X$ and $Y$ are uncorrelated.\n- $-1 \\leq \\rho_{X,Y} \\leq 1$\n  - $\\rho_{X,Y}(x,y) \\rightarrow -1$ with high $X$ and low $Y$\n  - $\\rho_{X,Y}(x,y) \\rightarrow 1$ with low $X$ and high $Y$\n- $\\rho_{X,Y} = 1 \\iff Y = aX+b \\quad a > 0$\n- $\\rho_{X,Y} = -1 \\iff Y = aX+b \\quad a < 0$\n\n## Sum of Expectations\n\nGiven a sum of random variables $W=X+Y$, we observe:\n\n$$\\bold E[W] = \\bold E[X+Y] = \\bold E[X] + \\bold E[Y]$$\n\nfrom the linearity of integration. Note that this property is true even if $X,Y$ are dependent.\n\n## Sum of Variances\n\nUnlike expectation, variance is not linear. Thus,\n\n$$\\text{var}[aX+bY] = a^2 \\text{var}[X] + b^2 \\text{var}[Y] + 2ab \\text{ } \\text{cov}(X,Y)$$\n\n## Mean Squared Error\n\nIf we want to estimate the value of an unobserved random variable $X$, we can calculate the mean squared error.\n\n$$\\text{MSE} = [M_n - \\bold E[X]] = \\text{var}[M_n] = \\frac{1}{n^2} \\sum_{i=1}^n X_i = \\frac{1}{n^2} n \\sigma_x^2 = \\frac{\\sigma_x^2}{n}$$\n\n# Transforms & Moment Generating Function\n\nThe moment generating function represents the distribution of probabilities over the reals. It is similar to the probability generating function, except here we use $e^s$ instead of $z$.\n\n$$M_X(s) = \\bold E [e^{sX}] = \\begin{cases} \\displaystyle \\int_{-\\infty}^\\infty e^{sx} f_X(x) dx & X \\text{continuous} \\\\ \\displaystyle \\sum_x e^{sx} p_X(x) & X \\text{discrete} \\end{cases}$$\n\n## Expected Value\n\n$$\\bold E [X] = \\frac{d}{ds} M_X(s)\\Bigr|_{s=0}$$\n$$\\bold E [X^n] = \\frac{d^n}{ds^n} M_X(s)\\Bigr|_{s=0}$$\n\n## Linearity\n\n- If $Y = aX+b$ then $M_Y(s) = e^{sb}M_X(as)$\n\n## Independence\n\n### With transforms\n\nGiven $W = X + Y$, if $X$ and $Y$ are independent, then the sum is the multiplication of transforms. $W$'s distribution is characterized by:\n\n$$M_{W}(s) = \\bold E[e^{sW}] = \\bold E [e^{sX}] \\bold E [e^{sY}] = M_X(s) M_Y(s)$$\n\n### With convolution\n\nThe density function of multiple variables can also be obtained using convolution. Given $W = X + Y$, if $X$ and $Y$ are independent:\n\n#### Discrete Case\n\n$$p_W(w) = \\bold P (X + Y = w) = \\sum_x p_X(x) p_Y(w-x)$$\n\n#### Continuous Case\n\n$$\\bold P(W \\leq w | X = x) = \\bold P(Y \\leq w - x) = \\int_{-\\infty}^\\infty f_X(x) f_Y(w - x) dx$$\n\n## Multivariate Transform\n\nGiven $n$ random variables $X_1, \\dots, X_n$ and $s_1, \\dots, s_n$ scalars, the multivariate transform is defined as:\n\n$$M_{X_1, \\dots, X_n} (s_1, \\dots, s_n) = \\bold E [e^{s_1 X_1 + \\dots + s_n X_n}]$$\n\n# Limit Theorems\n\nLimit theorems answer questions to asymptotic behaviors to sequences of independently identically distributed random variables $S_n = X_1, X_2, \\dots, X_n$ as $n \\rightarrow \\infty$.\n\n## Sample Mean\n\nThe sample mean of a distribution is the average of picked values from the distribution.\n\n$$M_n = \\frac{1}{n} \\sum_{i = 1}^n X_i = \\frac{S_n}{n}$$\n\nFrom it, we can derive that\n\n$$\\bold E [M_n] = \\mu$$\n\n$$\\text{var}(M_n) = \\frac{\\sigma^2}{n}$$\n\n## Central Limit Theorem\n\nFor $X_1, X_2, \\dots$ independently and identically distributed random variables with common mean $\\bold E[X]$ and variance $\\sigma^2$.\n\n$$Z_n = \\frac{X_1 + \\dots + X_n - n\\mu}{\\sigma \\sqrt{n}}$$\n\nWe notice that as $n \\rightarrow \\infty$, $Z_n$ converges to the standard normal cumulative distribution function:\n\n$$\\lim_{n \\rightarrow \\infty} \\bold P(Z_n \\leq z) = \\Phi(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-x^2 / 2} dx$$\n\n### De-Moivre - Laplace Approximation (1/2 approximation)\n\nFor a binomial random variable  with $n \\rightarrow \\infty$ and $p$ with $k,l \\in \\mathbb{Z}^+$\n\n$$\\bold P (k \\leq S_n \\leq l) = \\Phi(\\frac{l + \\frac{1}{2} - np}{\\sqrt{np(1-p)}}) - \\Phi(\\frac{k - \\frac{1}{2} - np}{\\sqrt{np(1-p)}}) $$\n\n## Markov Inequality\n\nFor a non-negative random variable $X$ and constant $a>0$,\n\n$$\\bold P (X \\geq a) \\leq \\frac{\\bold E [X]}{a}$$\n\nIn other words, the Markov inequality gives the confidence of the probability distribution for the upper bound of values $x \\geq a$.\n\n## Chebyshev Inequality\n\nFor any random variable $X$,\n\n$$\\bold P (|X - \\bold E[X]| \\geq a) \\leq \\frac{\\sigma_x^2}{a^2}$$\n\nIn other words, the Chebyshev inequality provides the confidence of the probability distribution for the range $\\bold E[X] \\pm a$.\n\n## The Weak Law of Large Numbers\n\nFor a finite mean $\\bold E[X]$ and $\\epsilon > 0$,\n\n$$\\lim_{n \\rightarrow \\infty} \\bold P [|M_n - \\mu| < \\epsilon] = 1$$\n\nIn other words, it tells us that if we had infinitely many data points, the sample mean converges in probability towards the expected value.\n"}}]);