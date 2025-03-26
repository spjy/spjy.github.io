(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{524:function(n,r,e){"use strict";e.r(r),r.default="---\r\nheader: Probability\r\ndescription: Probably relevant.\r\n---\r\n\r\n# Probabilistic Models\r\n\r\n### Experiment\r\n\r\nThe problem at hand.\r\n\r\n### Outcome\r\n\r\nThe results of the [experiment](#experiment).\r\n\r\n### Sample Space ($\\Omega$)\r\n\r\nThe set of all possible [outcomes](#outcome) of an [experiment](#experiment).\r\n\r\n### Event\r\n\r\nA subset of the [sample space](#sample-space-omega) containing the possible [outcomes](#outcome).\r\n\r\n### Mutual Exclusivity (Disjointness)\r\n\r\nElements of the [sample space](#sample-space-omega) should be distinct.\r\n\r\n### Collectively Exhaustive\r\n\r\nAll of the [events](#event) must be accounted for in the [sample space](#sample-space-omega).\r\n\r\n# Probability Axioms\r\n\r\n### Non-negativity\r\n\r\nFor each event $A$, \r\n\r\n$$\\bold{P}(A) \\geq 0$$\r\n\r\n### Additivity\r\n\r\nIf the sets $A$ and $B$ are [disjoint](/sets/#disjoint) events, then:\r\n\r\n$$\\bold{P}(A \\cup B) = \\bold{P}(A) + \\bold{P}(B)$$\r\n\r\n### Normalization\r\n\r\nThe probability of the [sample space](#sample-space-omega) is equal to $1$.\r\n\r\n$$\\bold{P}(\\Omega) = 1$$\r\n\r\n# Discrete Models\r\n\r\n### Discrete Probability\r\n\r\nThe probability of an event $\\left\\{s_1, s_2, ..., s_3\\right\\}$ is the sum of of the probabilities of its elements:\r\n\r\n$$\\bold{P}(\\left\\{s_1, s_2, ..., s_3\\right\\}) = \\bold{P}(s_1) + \\bold{P}(s_2) + ... + \\bold{P}(s_n) $$\r\n\r\n### Discrete Uniform Probability Law\r\n\r\nGiven an event $A$ with $n$ possible outcomes, the probability of any event $A$ is:\r\n\r\n$$\\bold{P}(A) = \\frac{\\text{number of elements of A}}{n}$$\r\n\r\n### Intersection\r\n\r\n$$\\bold P (AB) = \\bold P(A) + \\bold P(B) - \\bold P(A\\cup B)$$\r\n\r\n# Conditional Probability\r\n\r\nWhen only partial information is given and we want to know the outcome of an experiment, conditional probability is useful.\r\n\r\nLet $A$ and $B$ be two events. The conditional probability of $A$ given $B$ is denoted as:\r\n\r\n$$\\bold{P}(A|B) = \\frac{\\bold{P}(A \\cap B)}{\\bold{P}(B)} = \\frac{\\text{number of elements} \\in A \\cap B}{\\text{number of elements} \\in B}$$\r\n\r\nwhere $\\bold{P}(B) \\gt 0$.\r\n\r\nIn other words, the conditional probability is the ratio of $A$ and $B$ occurring to the probability of $B$ occurring. $B$ has already occurred, and so the only probability left of occurring is intersect between $A$ and $B$.\r\n\r\n## Multiplication Rule\r\n\r\nAssuming all of the conditioning events have positive probability,\r\n\r\n$$\\bold{P}\\bigg(\\bigcap^n_{i=1} A_i\\bigg) = \\bold{P}(A_1) \\bold{P}(A_2|A_1)\\bold{P}(A_3|A_1 \\cap A_2) ... \\bold{P}\\bigg(A_n | \\bigcap^{n-1}_{i=1}) A_i\\bigg)$$\r\n\r\nThis rule is often seen when multiplying independent events together in a tree diagram.\r\n\r\n## Total Probability Theorem\r\n\r\nLet $A_1 ... A_n$ be disjoint events that form a partition of the sample space and assume $\\bold{P}(A_i) > 0 \\forall i$. For any event $B$,\r\n\r\n$$\\bold{P}(B) = \\bold{P}(A_1 \\cap B) + ... + \\bold{P}(A_n \\cap B) \\\\\r\n= \\bold{P}(A_1)\\bold{P}(B|A_1) + ... + \\bold{P}(A_n)\\bold{P}(B|A_n)$$\r\n\r\nMore compactly,\r\n\r\n$$\\bold P(B) = \\sum_{i = 1}^n P(A_i)P(B | A_i)$$\r\n\r\nThis theorem is often seen when adding together various event outcomes to calculate the probability of an event occurring.\r\n\r\n## Bayes' Rule\r\n\r\nBayes' rule is used when finding the reversed conditional probability. \r\n\r\n$$\\bold{P}(A_i | B) = \\frac{\\bold{P}(A_i)\\bold{P}(B | A_i)}{\\bold{P}(B)} = \\frac{\\bold{P}(A_i) \\bold{P}(B|A_i)}{\\bold{P}(A_1) \\bold{P}(B|A_1) + ... + \\bold{P}(A_n) \\bold{P}(B|A_n)}$$\r\n\r\n# Independence\r\n\r\n$A$ is independent of $B$ if \r\n\r\n$$\\bold{P}(A|B) = \\bold{P}(A) = \\frac{\\bold{P}(A \\cap B)}{\\bold{P}(B)} = \\frac{\\bold{P}(A) \\bold P(B)}{\\bold{P}(B)}$$\r\n\r\nAlso, if $\\bold{P}(B) > 0$\r\n\r\n$$\\bold{P}(A|B) = \\bold{P}(A)$$\r\n\r\n# Counting Principle\r\n\r\nLet's say there is a process consisting of $r$ stages.\r\n- $n_1$ possible results in the first stage. \r\n- For every possible result of the first stage, there are $n_2$ possbile results at the second stage.\r\n\r\n### $k$-permutations\r\n\r\nLet's say we want to count the number of permutations with $n$ distinct objects, but we only have room to choose $k$ objects.\r\n\r\n- $n$ distinct objects\r\n- Pick only $k$ out of $n$ objects\r\n- Order matters (number of arrangements)\r\n- $n \\geq k$\r\n\r\n$$\\frac{n!}{(n-k)!}$$\r\n\r\n### Permutations\r\n\r\nLet's say we have $n$ distinct objects and have $n$ spots. In other words, $n = k$. We aim to find how many sequences there are when choosing $k$ balls.\r\n\r\n#### With Replacement\r\n\r\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we replace the object, so the number of possibilities stays the same as the first, $n$.\r\n\r\nWe continue this until $k$.\r\n\r\n$$n \\cdot n \\cdot n \\cdots = n^k$$\r\n\r\n#### Without Replacement\r\n\r\n$$P^n_k = n(n-1)(n-2) \\cdots 2 \\cdot 1 = n!$$\r\n\r\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we do not replace the object, so we lose one possibility; thus we are left with $n-1$ possibilities.\r\n\r\nWe continue this until $n - (k - 1)$.\r\n\r\n### Combinations\r\n\r\n#### Without Repetition\r\n\r\nLet's say we want to count the number of combinations with $n$ distinct objects, but we only want to choose $k$ objects.\r\n\r\n- $n$ distinct objects\r\n- Pick only $k$ out of $n$ objects\r\n- Order doesn't matter\r\n- $n \\geq k$\r\n\r\n$${ n \\choose k } = \\frac{n!}{k!(n-k)!}$$\r\n\r\n# Partitions\r\n\r\nLet's say we wanted to split $n$ distinct objects into $r$ groups, and those groups are of size $n_1, n_2, \\ldots, n_r$ where $n_1 + n_2 + \\ldots + n_r = n$. \r\n\r\nIn other words, $n_1, n_2, \\ldots, n_r$ is just the partition of $n$.\r\n\r\nWe use the counting principle and define it as the multinomial coefficient,\r\n\r\n$${n \\choose n_1,n_2,\\ldots, n_r} = {n \\choose n_1} {n - n_1 \\choose n_2} {n - n_1 - n_2 \\choose n_3} \\cdots {n - n_1 - \\ldots - n_{r-1} \\choose n_r}$$\r\n\r\n$$\\frac{n!}{n_1!(n-n_1)!} \\cdot \\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \\cdots \\frac{n-n_1-\\ldots-n_{r-1}!}{n_r!(n-n_1-\\ldots-n_{r-1} - n_r)!}$$\r\n\r\nFirst, we choose $n_1$ objects to insert into the first group from the pool of $n$.\r\n\r\nNext, from the remaining pool of $n - n_1$, we choose however many objects we want to insert into group $n_2$.\r\n\r\nWe repeat this until the group $r$.\r\n\r\n# Discrete Random Variables\r\n\r\nA random variable $X$ is a function that assigns a real number $X(w)$ to each outcome $w \\in \\Omega$.\r\n\r\n## Probability Mass Function (PMF)\r\n\r\nIf $S_X$ is a discrete set, $X$ is a discrete random variable.\r\n\r\nWe can assign a probability to each element $x \\in S_X$, and this assignment is called the probability mass function (PMF). In essence, we are assigning some weight to how probable an element $x$ occurs. We denote the PMF by:\r\n\r\n$$\\bold{P}(X = x)$$\r\n\r\nGiven a PMF, it has the properties:\r\n- $\\bold{P}(X = x) \\geq 0$\r\n- $\\displaystyle \\sum_x \\bold{P}(X = x) = 1$\r\n\r\n## Cumulative Distribution Function (CDF)\r\n\r\nThe cumulative distribution function describes the situation in which the random value $X$ will take a value less than or equal to $x$.\r\n\r\n$$F_X(x) = \\bold{P}(X \\leq x) = \\sum_{k = - \\infty}^x P(X = k)$$\r\n\r\nIn other words, it's the cumulative probability that of a distribution up to a value $x$.\r\n\r\n## Probability Generating Function (PGF)\r\n\r\nThe probability generating function is a sequence encompasses both the probabilities and possible values associated with a random variable.\r\n\r\n$$G_X(z) = \\bold{E}[z^x] = \\sum_{k=0}^\\infty z^k \\bold{P} (X=k) = z^0 \\bold{P}(K = 0) + z^1 \\bold{P}(K = 1) + z^2 \\bold{P}(K = 2) + \\dots$$\r\n\r\n- Each exponent $k$ of $z^k$ denote the possible values a random variable can take on. \r\n- The coefficient of $z^k$ denotes the probability attached to the possible value.\r\n\r\nIf we take the first derivative:\r\n\r\n$$\\frac{\\text{d}G_X}{\\text{d}z} = \\sum_{k=0}^\\infty k z^{k-1} \\bold{P} (X=k)$$\r\n\r\nAnd second derivative:\r\n\r\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2} = \\sum_{k=0}^\\infty k(k-1) z^{k-2} \\bold{P} (X=k)$$\r\n\r\n### Expectation Value\r\n\r\nThe expectation value is the average of the probability mass function. In other words, it is the value we expect the most, as this is where the distribution of weights is located in the probability mass function.\r\n\r\nIt is the first derivative of the [PGF](#probability-generating-function-pgf) where $z=1$.\r\n\r\n$$\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X] = \\sum_{k \\in S_x} k \\bold{P} (X = k)$$\r\n\r\n### Second Moment\r\n\r\nThe second moment is the sum of the first and second derivatives of the [PGF](#probability-generating-function-pgf) where $z=1$.\r\n\r\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X^2]$$\r\n\r\n### Variance\r\n\r\nThe variance tells us how far numbers are spread out from the average or expected value.\r\n\r\n$$\\text{Var}[X] = \\bold{E}[X^2] - \\bold{E}[X]^2 = \\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} - \\bigg(\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1}\\bigg)^2$$\r\n\r\n### Standard Deviation\r\n\r\nThe standard deviation describes the spread of values.\r\n\r\n$\\text{stdiv} = \\sigma = \\sqrt{\\text{var}[X]}$\r\n\r\n## Discrete Random Variable Conditioning\r\n\r\n$$\\bold P(X = x \\mid Y = y) = \\frac{\\bold P(X = x, Y = y)}{\\bold P(Y = y)}$$\r\n\r\n## Bernoulli Distribution\r\n\r\nThe Bernoulli distribution describes the situation in which the probability mass function consists of a binary set of outcomes, $S_X = \\{ 0, 1 \\}$. It is a special case of the binomial distribution, where $n = 1$.\r\n\r\n### Probability Mass Function\r\n\r\n$$\\bold P (X = x) = \\begin{cases}p & x = 1\\\\1-p & x = 0\\end{cases}$$\r\n\r\n### Cumulative Density Function\r\n\r\n$$\\bold P (X \\leq x) = \\begin{cases}\r\n0 & x < 0 \\\\\r\n1 - p & 0 \\leq x < 1 \\\\\r\np & x \\geq 1\r\n\\end{cases}$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = p$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = p(1-p)$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = 1 - p + pe^s \\quad k = 0, 1$$\r\n\r\n## Binomial Distribution\r\n\r\nThe binomial probability mass function describes the situation in which the $n$ independent trials occur with $k$ successes with probability $p$ and $n - k$ fails with probability $1-p$ with replacement.\r\n\r\n### Probability Mass Function\r\n\r\n$$\\bold P(X = k) = {n \\choose k} p^k (1-p)^k$$\r\n\r\n### Cumulative Density Function\r\n\r\n$$\\bold P(X \\leq x) = \\sum_{i = 1}^x {n \\choose i} p^i (1-p)^{n-i}$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = np$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = np(1-p)$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = (1 - p + pe^s)^n \\quad k = 0, 1, \\dots, n$$\r\n\r\n## Geometric Distribution\r\n\r\nThe geometric probability mass function describes the situation in which $n$ independent trials are required before the event occurs with probability $p$.\r\n\r\n### Probability Mass Function\r\n\r\n$$P(X = n) = (1-p)^{n-1}p$$\r\n$$\\sum_{k=1}^\\infty \\bold{P}(X = k) = \\sum_{k=1}^\\infty (1-p)^{k-1} p$$\r\n\r\nIn other words, $k-1$ trials occur before the event occurs.\r\n\r\n### Cumulative Density Function\r\n\r\n$$\\bold P (X \\leq x) = 1-(1-p)^{n-1}$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = \\frac{1}{p}$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = \\frac{1-p}{p^2}$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = \\frac{pe^s}{1 - (1 - p) e^s)} \\quad k = 1, 2, \\dots$$\r\n\r\n## Hypergeometric Distribution\r\n\r\nThe hypergeometric distribution is a discrete distribution that characterizes the probability of observed $k$ successes in $n$ draws without replacement. $N$ is the population size and $K$ is the number of successes in the population.\r\n\r\n### Probability Mass Function\r\n\r\n$$\\bold P (X = k) = \\frac{\\begin{pmatrix} K \\\\ k \\end{pmatrix} \\begin{pmatrix} N - K \\\\ n - k \\end{pmatrix}}{\\begin{pmatrix} N \\\\ n \\end{pmatrix}}$$\r\n\r\n### Multivariate Hypergeometric Distribution\r\n\r\n$$\\frac{\\displaystyle \\prod_{i = 1}^c \\begin{pmatrix} K_i \\\\ k_i \\end{pmatrix}}{\\begin{pmatrix} N \\\\ n \\end{pmatrix}}$$\r\n\r\nFor $c$ different populations $K_i$, we select $k_i$ people.\r\n\r\n$N = \\displaystyle \\sum_{i=1}^c K_i$ is the total number of populations.\r\n\r\n## Poisson Distribution\r\n\r\nThe Poisson distribution is a discrete distribution that is useful for calculating the likelihood of the average rate of occurrences $\\lambda$ of an event over some time $t$. $k$ is the number of occurrences.\r\n\r\n$$\\bold P(X = k) = \\frac{\\lambda t^k e^{-\\lambda t}}{k!} \\quad k = 0, 1, 2, \\dots$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = \\lambda t$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = \\lambda t$$\r\n\r\n### Transform\r\n\r\n$$X(z) = e^{\\lambda t (z - 1)}$$\r\n\r\n## Functions of Random Variables\r\n\r\nGiven a random variable $X$, we can generate other random variables by applying various transformations on $X$. If $Y$ depends on $X$: $Y = g(X)$\r\n\r\n$$p_Y (y) = \\sum_{x \\mid g(x) = y } p_X(x) $$\r\n\r\n## Joint Probability Mass Function (PMF)\r\n\r\nThe joint PMF is denoted by\r\n\r\n$$\\bold P(\\{ X = x, Y = y \\})$$\r\n\r\nIt represents the probability of both $X$ and $Y$ occurring.\r\n\r\n### Marginal PMF\r\n\r\nThe marginal PMF allows us to obtain individual random variable values from a vector random variable.\r\n\r\n$$\\bold P(X = x) = \\sum_y \\bold P({X = x, Y = y}) $$\r\n$$\\bold P(Y = y) = \\sum_x \\bold P({X = x, Y = y}) $$\r\n\r\n# Continuous Random Variables\r\n\r\nA continuous random variable infinitely many values, as opposed to discrete random variables where only countable values are considered.\r\n\r\n## Probability Density Function (PDF)\r\n\r\nA PDF is analogous to a [PMF](#probability-mass-function-pmf). It defines the distribution of probabilities over a range of values.\r\n\r\n$$f_X(x) = \\frac{\\text dF_X(x)}{\\text dx}$$\r\n\r\nA function $f_X(x)$ is a PDF if it satisfies:\r\n\r\n- $f_X(x) \\geq 0 \\forall x$\r\n- $\\displaystyle \\int_{-\\infty}^\\infty f_X(x) \\text dx = 1$\r\n- $\\forall$ numbers $a$, $b$ then $\\displaystyle \\bold P [a \\leq X \\leq b] = \\int_a^b f_X(x) \\text dx$\r\n\r\n### Marginal PDF\r\n\r\nThe marginal PDF extracts the density function for a random variable from a joint PDF.\r\n\r\n$$f_X(x) = \\int_{-\\infty}^\\infty f_{X,Y}(X,Y) dy$$\r\n\r\n$$f_Y(y) = \\int_{-\\infty}^\\infty f_{X,Y}(X,Y) dx$$\r\n\r\n## Cumulative Distribution Function (CDF)\r\n\r\nThe CDF of a random variable describes the distribution and is defined as:\r\n\r\n$$F_X (x) = \\bold P(X \\leq x) = \\int_{-\\infty}^x f_X(t) dt$$\r\n\r\nIn continuous time, for an infinitesimally large step $\\delta$, the probability is found to be zero.\r\n\r\n$$\\bold P [x \\leq x \\leq x + \\delta] = \\int_x^{x+\\delta} f_X(x) \\text dx \\approx f_X(\\delta) \\delta X \\approx 0$$\r\n\r\nIn a semi-closed interval $(a, b]$ for $a< b$,\r\n\r\n$$P(a < X \\leq B) = F_X(b) - F_X(a)$$\r\n\r\n## Conditioning\r\n\r\n### On an event\r\n\r\n$$\\bold{P} (X \\in B \\mid X \\in A) = \\frac{\\bold P (X \\in B, X \\in A)}{\\bold P (X \\in A)} = \\frac{\\displaystyle \\int_{A \\cap B} f_X(x) dx)}{\\bold P (X \\in A)} = \\int_B f_{X \\mid A} (x) dx $$\r\n\r\n# General Random Variables\r\n\r\n## Uniform Distribution\r\n\r\nA uniformly distributed random variable has a constant probability density function.\r\n\r\n### Probability Density Function\r\n\r\n$$f_X(x) = \\begin{cases} \\frac{1}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\r\n\r\n### Cumulative Distribution Function\r\n\r\n$$F_X(x) = \\int_{a}^x f_X(x) \\text dx = \\begin{cases} 0 & x < a \\\\ \\frac{x - a}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = \\frac{1}{2} (a+b)$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = \\frac{1}{12} (b-a)^2$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = \\frac{e^{as}}{b - a + 1} \\cdot \\frac{e^{(b - a + 1)s} - 1}{e^s - 1} \\quad k = a, a + 1, \\dots, b$$\r\n\r\n## Exponential Distribution\r\n\r\nAn exponentially distributed random variable has an exponentially growing probability density function with a rate $\\lambda$.\r\n\r\nIt is often used to calculate the inter-arrival time.\r\n\r\n### Probability Density Function\r\n\r\n$$f_X (x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\geq 0 \\\\ 0 & \\text{otherwise} \\end{cases} = \\lambda e^{-\\lambda x} u(x)$$\r\n\r\n### Cumulative Distribution Function\r\n\r\n$$F_X(x) = \\int_0^x \\lambda e^{-\\lambda \\beta} \\text d\\beta = 1-e^{-\\lambda x}$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = \\frac{1}{\\lambda}$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = \\frac{1}{\\lambda^2}$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = \\displaystyle \\frac{\\lambda}{\\lambda - s} \\quad s < \\lambda$$\r\n\r\n## Gaussian / Normal Distribution\r\n\r\nA Gaussian or normally distributed distribution $X$ is only continuous.\r\n\r\n$$f_X (x) = \\frac{1}{\\sqrt{2\\pi} \\sigma} e^{-(x-\\mu)^2 / 2\\sigma^2}$$\r\n\r\nIt has scalar parameters:\r\n\r\n$$\\sigma = \\sqrt{\\text{var}(X)} \\quad \\sigma > 0$$\r\n$$\\mu = \\bold E [X]$$ \r\n\r\n### Expected Value\r\n\r\n$$\\bold E [X] = \\mu$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}(X) = \\sigma^2$$\r\n\r\n### Transform\r\n\r\n$$M_X(s) = \\displaystyle e^{(\\sigma^2 s^2 / 2) + \\mu s}$$\r\n\r\n## Standard Normal Distribution\r\n\r\nA normal random variable $X$ is standard normal if it has $\\bold E [X] = 0$ and $\\text{var}(X) = 1$. It is useful to find values for normal distributions since solving for the regular normal random variable is difficult. We define:\r\n\r\n$$\\phi(y) = \\bold P (Y \\leq y) = P(Y < y) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^y e^{-t^2 / 2} dt$$\r\n\r\nLet $Y$ be another random variable (that is also normal because of linearity) with $\\bold E [Y] = \\mu$ and $\\text{var}(Y) = \\sigma^2$. Then:\r\n\r\n$$Y = \\frac{X - \\mu}{\\sigma}$$\r\n\r\nA useful property is that $\\phi(-x) = 1 - \\phi(x) \\quad \\forall x$.\r\n\r\n### Calculating the Normal Distribution\r\n\r\nTo properly use the standard normal table, we need to normalize the normal distribution to have a mean $\\bold \\mu = E[X] = 0$ and variance $\\sigma^2 = 1$, also written as $X \\sim N(\\mu, \\sigma^2) = N(0, 1)$.\r\n\r\nWe calculate the standard normal variable $Y$, which is the normalized version of the normal random variable:\r\n\r\n$$\\bold P (X \\leq x) = \\bold P \\bigg(\\frac{X - \\mu}{\\sigma} \\leq \\frac{x - \\mu}{\\sigma}\\bigg) = \\bold P \\bigg(Y \\leq \\frac{x - \\mu}{\\sigma}\\bigg) = \\phi \\bigg(\\frac{x - \\mu}{\\sigma} \\bigg) $$\r\n\r\n## Erlang Distribution\r\n\r\nThe Erlang distribution is a **continuous distribution** that is useful for calculating the probability the of wait time given the average rate of occurrences $\\lambda$ and $n$ number of occurrences.\r\n\r\nIn other words, the $n$-Erlang distribution is defined by a sum of exponential random variables $X = X_1 + X_2 + \\dots + X_n$ where $X_i$ represents the $i$-th occurrence.\r\n\r\nGiven $n \\in \\mathbb{R}^+$ with a rate $\\lambda > 0$, the $n$-Erlang PDF is given by:\r\n\r\n$$f_X(x) = \\frac{\\lambda^n x^{n - 1} e^{-\\lambda x}}{(n - 1)!} \\quad x \\geq 0$$\r\n\r\n### Expected Value\r\n\r\n$$\\bold E[X] = \\frac{n}{\\lambda}$$\r\n\r\n### Variance\r\n\r\n$$\\text{var}[X] = \\frac{n}{\\lambda^2}$$\r\n\r\n### Transforms\r\n\r\n$$M_X(s) = \\bigg(\\frac{\\lambda}{\\lambda + s}\\bigg)^n$$\r\n\r\n## Rayleigh Distribution\r\n\r\nThe Rayleigh distribution is a continuous distribution used to often measure component lifetime.\r\n\r\n$$f_X(x) = x e^{-x^2/2}$$\r\n\r\nThis PDF originates from the magnitude of two independently, normally distributed, and non-negative random variables, $\\sqrt{X^2 + Y^2}$.\r\n\r\n# Derived Distributions\r\n\r\nA derived distribution is useful for finding a PMF or PDF of a function of one or more random variables.\r\n\r\n**Note**: When finding the expected value, we do not need to calculate derived distributions.\r\n\r\n## Discrete\r\n\r\nGiven a random variable $Y = g(X)$:\r\n\r\n$$p_Y = \\bold P (g(X) = y) = \\sum_{x: g(x) = y} p_X(x)$$\r\n\r\n## Continuous\r\n\r\nGiven a function of one random variable $Y = g(X)$ and its PDF $f_X(x)$:\r\n\r\nFirst, get the CDF of $Y$:\r\n\r\n$$F_Y(y) = \\bold P (g(X) \\leq y) = \\int_{x: g(x) \\leq y} f_X(x) dx$$\r\n\r\nThen differentiate the CDF:\r\n\r\n$$f_Y(y) = \\frac{dF_Y}{dy}(y)$$\r\n\r\n## Solving Cases\r\n\r\n### Multi-variable Derived Distribution\r\n\r\nGiven a function of random variable $W = g(X, Y)$ and its PDF $f_W(w)$:\r\n\r\nFirst, get the CDF of $W$:\r\n\r\n$$F_W(w) = \\bold P (g(X,Y) \\leq w) = \\iint_{(x, y) \\mid g(x,y) \\leq w} f_W(w) dydx$$\r\n\r\nThen differentiate the CDF:\r\n\r\n$$f_W(w) = \\frac{dF_W}{dw}(w)$$\r\n\r\n### Multi-variable Derived Distribution with Joint PDF\r\n\r\nGiven $V = g_1(X, Y)$ and $W = g_2(X, Y)$ with joint PDF $f_{X,Y}(x,y)$ and\r\n\r\n- $v = g_1(x,y), w = g_2(x,y)$ can be uniquely solved for $x,y$ in terms of $v,w$; for example $x=h_1(v,w), y=h_2(v,w)$\r\n- The derivatives of $x,y$ with respect to $v,w$ are continuous and exist.\r\n\r\nThen, solve for $x=h_1(v,w), y=h_2(v,w)$ and use the equation:\r\n\r\n$$f_{V,W}(v,w) = f_{X,Y}[h_1(v,w), h_2(v,w)] |J(v,w)|$$ \r\n\r\nWhere $J(v,w)$ is the Jacobian:\r\n\r\n$$J(v,w) = \\begin{vmatrix}\r\n\\displaystyle \\frac{\\partial x}{\\partial v} & \\displaystyle \\frac{\\partial x}{\\partial w} \\\\[10pt]\r\n\\displaystyle \\frac{\\partial y}{\\partial v} & \\displaystyle \\frac{\\partial y}{\\partial w}\r\n\\end{vmatrix}$$\r\n\r\n### Sum of Independent Random Variables (Convolution)\r\n\r\n# Expectation\r\n\r\nThe expected value predicts the value of a random variable. \r\n\r\n$$\\bold E [g(X,Y)] = \\begin{cases}\r\n\\displaystyle \\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} g(X,Y) f_{X,Y}(x,y) dxdy & \\text{continuous} \\\\\r\n\\displaystyle \\sum_{-\\infty}^{\\infty} \\sum_{-\\infty}^{\\infty} g(X,Y) p_{X,Y}(x,y)& \\text{discrete}\r\n\\end{cases}$$\r\n\r\n## Conditional Expectation\r\n\r\nGiven a fixed value $Y = y$, we can find the expected value of $X$.\r\n\r\n$$\\bold E[X | Y = y] = \\begin{cases}\r\n\\displaystyle \\int_{-\\infty}^\\infty x f_{X \\mid Y}(x | y) dx  & \\text{continuous} \\\\\r\n\\displaystyle \\sum_x x \\bold P(X = x \\mid Y = y) & \\text{discrete}\r\n\\end{cases}$$\r\n\r\n## Law of Iterated (Total) Expectation\r\n\r\n$$\\bold E[X] = \\bold E[\\bold E[X | Y]] = \\begin{cases}\r\n\\displaystyle \\int_{-\\infty}^\\infty \\bold E[X|Y=y] f_Y(y) dy & \\text{continuous} \\\\\r\n\\displaystyle \\sum_y \\bold E [X|Y=y] \\bold P[Y = y] & \\text{discrete}\r\n\\end{cases}$$\r\n\r\n## Covariance\r\n\r\nThe covariance tells us how two random variables $X$ and $Y$ are related.\r\n\r\n$$\\text{cov}(X,Y) = \\bold E[(X - \\bold E[X])(Y - \\bold E[Y])]$$\r\n\r\n$$\\bold E [XY] - \\bold E[X] \\bold E[Y]$$\r\n\r\n## Correlation\r\n\r\nThe correlation tells us how linearly related two random variables $X$ and $Y$ are.\r\n\r\n$$\\rho_{XY}(x,y) = \\frac{\\text{cov}(X,Y)}{\\sigma_x \\sigma_y} = \\frac{\\bold E [XY] - \\bold E[X] \\bold E[Y]}{\\sigma_x \\sigma_y}$$\r\n\r\n- If $X,Y$ are independent, then $\\rho_{X,Y} = 0$.\r\n- $\\rho_{X,Y}$ = 0 means $X$ and $Y$ are uncorrelated.\r\n- $-1 \\leq \\rho_{X,Y} \\leq 1$\r\n  - $\\rho_{X,Y}(x,y) \\rightarrow -1$ with high $X$ and low $Y$\r\n  - $\\rho_{X,Y}(x,y) \\rightarrow 1$ with low $X$ and high $Y$\r\n- $\\rho_{X,Y} = 1 \\iff Y = aX+b \\quad a > 0$\r\n- $\\rho_{X,Y} = -1 \\iff Y = aX+b \\quad a < 0$\r\n\r\n## Sum of Expectations\r\n\r\nGiven a sum of random variables $W=X+Y$, we observe:\r\n\r\n$$\\bold E[W] = \\bold E[X+Y] = \\bold E[X] + \\bold E[Y]$$\r\n\r\nfrom the linearity of integration. Note that this property is true even if $X,Y$ are dependent.\r\n\r\n## Sum of Variances\r\n\r\nUnlike expectation, variance is not linear. Thus,\r\n\r\n$$\\text{var}[aX+bY] = a^2 \\text{var}[X] + b^2 \\text{var}[Y] + 2ab \\text{ } \\text{cov}(X,Y)$$\r\n\r\n## Mean Squared Error\r\n\r\nIf we want to estimate the value of an unobserved random variable $X$, we can calculate the mean squared error.\r\n\r\n$$\\text{MSE} = [M_n - \\bold E[X]] = \\text{var}[M_n] = \\frac{1}{n^2} \\sum_{i=1}^n X_i = \\frac{1}{n^2} n \\sigma_x^2 = \\frac{\\sigma_x^2}{n}$$\r\n\r\n# Transforms & Moment Generating Function\r\n\r\nThe moment generating function represents the distribution of probabilities over the reals. It is similar to the probability generating function, except here we use $e^s$ instead of $z$.\r\n\r\n$$M_X(s) = \\bold E [e^{sX}] = \\begin{cases} \\displaystyle \\int_{-\\infty}^\\infty e^{sx} f_X(x) dx & X \\text{continuous} \\\\ \\displaystyle \\sum_x e^{sx} p_X(x) & X \\text{discrete} \\end{cases}$$\r\n\r\n## Expected Value\r\n\r\n$$\\bold E [X] = \\frac{d}{ds} M_X(s)\\Bigr|_{s=0}$$\r\n$$\\bold E [X^n] = \\frac{d^n}{ds^n} M_X(s)\\Bigr|_{s=0}$$\r\n\r\n## Linearity\r\n\r\n- If $Y = aX+b$ then $M_Y(s) = e^{sb}M_X(as)$\r\n\r\n## Independence\r\n\r\n### With transforms\r\n\r\nGiven $W = X + Y$, if $X$ and $Y$ are independent, then the sum is the multiplication of transforms. $W$'s distribution is characterized by:\r\n\r\n$$M_{W}(s) = \\bold E[e^{sW}] = \\bold E [e^{sX}] \\bold E [e^{sY}] = M_X(s) M_Y(s)$$\r\n\r\n### With convolution\r\n\r\nThe density function of multiple variables can also be obtained using convolution. Given $W = X + Y$, if $X$ and $Y$ are independent:\r\n\r\n#### Discrete Case\r\n\r\n$$p_W(w) = \\bold P (X + Y = w) = \\sum_x p_X(x) p_Y(w-x)$$\r\n\r\n#### Continuous Case\r\n\r\n$$\\bold P(W \\leq w | X = x) = \\bold P(Y \\leq w - x) = \\int_{-\\infty}^\\infty f_X(x) f_Y(w - x) dx$$\r\n\r\n## Multivariate Transform\r\n\r\nGiven $n$ random variables $X_1, \\dots, X_n$ and $s_1, \\dots, s_n$ scalars, the multivariate transform is defined as:\r\n\r\n$$M_{X_1, \\dots, X_n} (s_1, \\dots, s_n) = \\bold E [e^{s_1 X_1 + \\dots + s_n X_n}]$$\r\n\r\n# Limit Theorems\r\n\r\nLimit theorems answer questions to asymptotic behaviors to sequences of independently identically distributed random variables $S_n = X_1, X_2, \\dots, X_n$ as $n \\rightarrow \\infty$.\r\n\r\n## Sample Mean\r\n\r\nThe sample mean of a distribution is the average of picked values from the distribution.\r\n\r\n$$M_n = \\frac{1}{n} \\sum_{i = 1}^n X_i = \\frac{S_n}{n}$$\r\n\r\nFrom it, we can derive that\r\n\r\n$$\\bold E [M_n] = \\mu$$\r\n\r\n$$\\text{var}(M_n) = \\frac{\\sigma^2}{n}$$\r\n\r\n## Central Limit Theorem\r\n\r\nFor $X_1, X_2, \\dots$ independently and identically distributed random variables with common mean $\\bold E[X]$ and variance $\\sigma^2$.\r\n\r\n$$Z_n = \\frac{X_1 + \\dots + X_n - n\\mu}{\\sigma \\sqrt{n}}$$\r\n\r\nWe notice that as $n \\rightarrow \\infty$, $Z_n$ converges to the standard normal cumulative distribution function:\r\n\r\n$$\\lim_{n \\rightarrow \\infty} \\bold P(Z_n \\leq z) = \\Phi(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-x^2 / 2} dx$$\r\n\r\n### De-Moivre - Laplace Approximation (1/2 approximation)\r\n\r\nFor a binomial random variable  with $n \\rightarrow \\infty$ and $p$ with $k,l \\in \\mathbb{Z}^+$\r\n\r\n$$\\bold P (k \\leq S_n \\leq l) = \\Phi(\\frac{l + \\frac{1}{2} - np}{\\sqrt{np(1-p)}}) - \\Phi(\\frac{k - \\frac{1}{2} - np}{\\sqrt{np(1-p)}}) $$\r\n\r\n## Markov Inequality\r\n\r\nFor a non-negative random variable $X$ and constant $a>0$,\r\n\r\n$$\\bold P (X \\geq a) \\leq \\frac{\\bold E [X]}{a}$$\r\n\r\nIn other words, the Markov inequality gives the confidence of the probability distribution for the upper bound of values $x \\geq a$.\r\n\r\n## Chebyshev Inequality\r\n\r\nFor any random variable $X$,\r\n\r\n$$\\bold P (|X - \\bold E[X]| \\geq a) \\leq \\frac{\\sigma_x^2}{a^2}$$\r\n\r\nIn other words, the Chebyshev inequality provides the confidence of the probability distribution for the range $\\bold E[X] \\pm a$.\r\n\r\n## The Weak Law of Large Numbers\r\n\r\nFor a finite mean $\\bold E[X]$ and $\\epsilon > 0$,\r\n\r\n$$\\lim_{n \\rightarrow \\infty} \\bold P [|M_n - \\mu| < \\epsilon] = 1$$\r\n\r\nIn other words, it tells us that if we had infinitely many data points, the sample mean converges in probability towards the expected value.\r\n"}}]);