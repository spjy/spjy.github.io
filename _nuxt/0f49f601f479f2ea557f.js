(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{505:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Probability\ndescription: Probably relevant.\n---\n\n# Probabilistic Models\n\n### Experiment\n\nThe problem at hand.\n\n### Outcome\n\nThe results of the [experiment](#experiment).\n\n### Sample Space ($\\Omega$)\n\nThe set of all possible [outcomes](#outcome) of an [experiment](#experiment).\n\n### Event\n\nA subset of the [sample space](#sample-space-omega) containing the possible [outcomes](#outcome).\n\n### Mutual Exclusivity (Disjointness)\n\nElements of the [sample space](#sample-space-omega) should be distinct.\n\n### Collectively Exhaustive\n\nAll of the [events](#event) must be accounted for in the [sample space](#sample-space-omega).\n\n# Probability Axioms\n\n### Non-negativity\n\nFor each event $A$, \n\n$$\\bold{P}(A) \\geq 0$$\n\n### Additivity\n\nIf the sets $A$ and $B$ are [disjoint](/sets/#disjoint) events, then:\n\n$$\\bold{P}(A \\cup B) = \\bold{P}(A) + \\bold{P}(B)$$\n\n### Normalization\n\nThe probability of the [sample space](#sample-space-omega) is equal to $1$.\n\n$$\\bold{P}(\\Omega) = 1$$\n\n# Discrete Models\n\n### Discrete Probability\n\nThe probability of an event $\\left\\{s_1, s_2, ..., s_3\\right\\}$ is the sum of of the probabilities of its elements:\n\n$$\\bold{P}(\\left\\{s_1, s_2, ..., s_3\\right\\}) = \\bold{P}(s_1) + \\bold{P}(s_2) + ... + \\bold{P}(s_n) $$\n\n### Discrete Uniform Probability Law\n\nGiven an event $A$ with $n$ possible outcomes, the probability of any event $A$ is:\n\n$$\\bold{P}(A) = \\frac{\\text{number of elements of A}}{n}$$\n\n# Conditional Probability\n\nWhen only partial information is given and we want to know the outcome of an experiment, conditional probability is useful.\n\nLet $A$ and $B$ be two events. The conditional probability of $A$ given $B$ is denoted as:\n\n$$\\bold{P}(A|B) = \\frac{\\bold{P}(A \\cap B)}{\\bold{P}(B)} = \\frac{\\text{number of elements} \\in A \\cap B}{\\text{number of elements} \\in B}$$\n\nwhere $\\bold{P}(B) \\gt 0$.\n\nIn other words, the conditional probability is the ratio of $A$ and $B$ occurring to the probability of $B$ occurring. $B$ has already occurred, and so the only probability left of occurring is intersect between $A$ and $B$.\n\n## Multiplication Rule\n\nAssuming all of the conditioning events have positive probability,\n\n$$\\bold{P}(\\bigcap^n_{i=1} A_i = \\bold{P}(A_1) \\bold{P}(A_2|A_1)\\bold{P}(A_3|A_1 \\cap A_2) ... \\bold{P}(A_n | \\bigcap^{n-1}_{i=1}) A_i)$$\n\nThis rule is often seen when multiplying independent events together in a tree diagram.\n\n## Total Probability Theorem\n\nLet $A_1 ... A_n$ be disjoint events that form a partition of the sample space and assume $\\bold{P}(A_i) > 0 \\forall i$. For any event $B$,\n\n$$\\bold{P}(B) = \\bold{P}(A_1 \\cap B) + ... + \\bold{P}(A_n \\cap B) \\\\\n= \\bold{P}(A_1)\\bold{P}(B|A_1) + ... + \\bold{P}(A_n)\\bold{P}(B|A_n)$$\n\nThis theorem is often seen when adding together various event outcomes to calculate the probability of an event occurring.\n\n## Bayes' Rule\n\nBayes' rule is used when finding the reversed conditional probability. \n\n$$\\bold{P}(A_i | B) = \\frac{\\bold{P}(A_i)\\bold{P}(B | A_i)}{\\bold{P}(B)} = \\frac{\\bold{P}(A_i) \\bold{P}(B|A_i)}{\\bold{P}(A_1) \\bold{P}(B|A_1) + ... + \\bold{P}(A_n) \\bold{P}(B|A_n)}$$\n\n# Independence\n\n$A$ is independent of $B$ if \n\n$$\\bold{P}(A|B) = \\bold{P}(A) = \\frac{\\bold{P}(A \\cup B)}{\\bold{P}(B)}$$\n\nAlso, if $\\bold{P}(B) > 0$\n\n$$\\bold{P}(A|B) = \\bold{P}(A)$$\n\n# Counting Principle\n\nLet's say there is a process consisting of $r$ stages.\n- $n_1$ possible results in the first stage. \n- For every possible result of the first stage, there are $n_2$ possbile results at the second stage.\n\n### $k$-permutations\n\nLet's say we want to count the number of permutations with $n$ distinct objects, but we only have room to choose $k$ objects.\n\n- $n$ distinct objects\n- Pick only $k$ out of $n$ objects\n- Order matters (number of arrangements)\n- $n \\geq k$\n\n$$\\frac{n!}{(n-k)!}$$\n\n### Permutations\n\nLet's say we have $n$ distinct objects and have $n$ spots. In other words, $n = k$. We aim to find how many sequences there are when choosing $k$ balls.\n\n#### With Replacement\n\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we replace the object, so the number of possibilities stays the same as the first, $n$.\n\nWe continue this until $k$.\n\n$$n \\cdot n \\cdot n \\cdots = n^k$$\n\n#### Without Replacement\n\n$$P^n_k = n(n-1)(n-2) \\cdots 2 \\cdot 1 = n!$$\n\nFor the first spot, there are $n$ possibilities. Then, for the next spot, we do not replace the object, so we lose one possibility; thus we are left with $n-1$ possibilities.\n\nWe continue this until $n - (k - 1)$.\n\n### Combinations\n\n#### Without Repetition\n\nLet's say we want to count the number of combinations with $n$ distinct objects, but we only want to choose $k$ objects.\n\n- $n$ distinct objects\n- Pick only $k$ out of $n$ objects\n- Order doesn't matter\n- $n \\geq k$\n\n$${ n \\choose k } = \\frac{n!}{k!(n-k)!}$$\n\n# Partitions\n\nLet's say we wanted to split $n$ distinct objects into $r$ groups, and those groups are of size $n_1, n_2, \\ldots, n_r$ where $n_1 + n_2 + \\ldots + n_r = n$. \n\nIn other words, $n_1, n_2, \\ldots, n_r$ is just the partition of $n$.\n\nWe use the counting principle and define it as the multinomial coefficient,\n\n$${n \\choose n_1,n_2,\\ldots, n_r} = {n \\choose n_1} {n - n_1 \\choose n_2} {n - n_1 - n_2 \\choose n_3} \\cdots {n - n_1 - \\ldots - n_{r-1} \\choose n_r}$$\n\n$$\\frac{n!}{n_1!(n-n_1)!} \\cdot \\frac{(n-n_1)!}{n_2!(n-n_1-n_2)!} \\cdots \\frac{n-n_1-\\ldots-n_{r-1}!}{n_r!(n-n_1-\\ldots-n_{r-1} - n_r)!}$$\n\nFirst, we choose $n_1$ objects to insert into the first group from the pool of $n$.\n\nNext, from the remaining pool of $n - n_1$, we choose however many objects we want to insert into group $n_2$.\n\nWe repeat this until the group $r$.\n\n# Discrete Random Variables\n\nA random variable $X$ is a function that assigns a real number $X(w)$ to each outcome $w \\in \\Omega$.\n\n## Probability Mass Function (PMF)\n\nIf $S_X$ is a discrete set, $X$ is a discrete random variable.\n\nWe can assign a probability to each element $x \\in S_X$, and this assignment is called the probability mass function (PMF). In essence, we are assigning some weight to how probable an element $x$ occurs. We denote the PMF by:\n\n$$\\bold{P}(X = x)$$\n\nGiven a PMF, it has the properties:\n- $\\bold{P}(X = x) \\geq 0$\n- $\\displaystyle \\sum_x \\bold{P}(X = x) = 1$\n\n### Geometric Distribution\n\nThe geometric probability mass function describes the situation in which $n$ independent trials are required before the event occurs with probability $p$.\n\n$$P(X = n) = (1-p)^{n-1}p$$\n$$\\sum_{k=1}^\\infty \\bold{P}(X = k) = \\sum_{k=1}^\\infty (1-p)^{k-1} p$$\n\nIn other words, $k-1$ trials occur before the event occurs.\n\n### Binomial Distribution\n\nThe binomial probability mass function describes the situation in which the $n$ independent trials occur with $k$ successes with probability $p$ and $n - k$ fails with probability $1-p$.\n\n$$\\bold P(X = k) = {n \\choose k} p^k (1-p)^k$$\n\n### Bernoulli Distribution\n\nThe Bernoulli distribution describes the situation in which the probability mass function consists of a binary set of outcomes, $S_X = \\{ 0, 1 \\}$. It is a special case of the binomial distribution, where $n = 1$.\n\n$$\\bold P (X = x) = \\begin{cases}p & x = 1\\\\1-p & x = 0\\end{cases}$$\n\n### Poisson Distribution\n\nThe Poisson distribution is a discrete distribution that is useful for counting the average number of occurrences $\\lambda$ of an event over some time $t$.\n\n$$\\bold P(X = x) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\quad k = 0, 1, 2, \\dots$$\n\n#### Expected Value\n\n$$\\bold E[X] = \\lambda$$\n\n#### Variance\n\n$$\\text{Var} (X) = \\lambda$$\n\n## Cumulative Distribution Function (CDF)\n\nThe cumulative distribution function describes the situation in which the random value $X$ will take a value less than or equal to $x$.\n\n$$F_X(x) = \\bold{P}(X \\leq x) = \\sum_{k = - \\infty}^x P(X = k)$$\n\n## Probability Generating Function (PGF)\n\nThe probability generating function is a sequence encompasses both the probabilities and possible values associated with a random variable.\n\n$$G_X(z) = \\bold{E}[z^x] = \\sum_{k=0}^\\infty z^k \\bold{P} (X=k) = z^0 \\bold{P}(K = 0) + z^1 \\bold{P}(K = 1) + z^2 \\bold{P}(K = 2) + \\dots$$\n\n- Each exponent $k$ of $z^k$ denote the possible values a random variable can take on. \n- The coefficient of $z^k$ denotes the probability attached to the possible value.\n\nIf we take the first derivative:\n\n$$\\frac{\\text{d}G_X}{\\text{d}z} = \\sum_{k=0}^\\infty k z^{k-1} \\bold{P} (X=k)$$\n\nAnd second derivative:\n\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2} = \\sum_{k=0}^\\infty k(k-1) z^{k-2} \\bold{P} (X=k)$$\n\n### Expectation Value\n\nThe expectation value is the average of the probability mass function. In other words, it is the value we expect the most, as this is where the distribution of weights is located in the probability mass function.\n\nIt is the first derivative of the [PGF](#probability-generating-function-pgf) where $z=1$.\n\n$$\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X] = \\sum_{k \\in S_x} k \\bold{P} (X = k)$$\n\n### Second Moment\n\nThe second moment is the sum of the first and second derivatives of the [PGF](#probability-generating-function-pgf) where $z=1$.\n\n$$\\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} = \\bold{E}[X^2]$$\n\n### Variance\n\nThe variance tells us how far numbers are spread out from the average or expected value.\n\n$$\\text{Var}[X] = \\bold{E}[X^2] - \\bold{E}[X]^2 = \\frac{\\text{d}^2G_X}{\\text{d}z^2}\\Bigr|_{z=1} + \\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1} - \\Big(\\frac{\\text{d}G_X}{\\text{d}z}\\Bigr|_{z=1}\\Big)^2$$\n\n### Standard Deviation\n\nThe standard deviation describes the spread of values.\n\n$\\text{stdiv} = \\sqrt{\\text{var}[X]}$\n\n## Functions of Random Variables\n\nGiven a random variable $X$, we can generate other random variables by applying various transformations on $X$. If $Y$ depends on $X$: $Y = g(X)$\n\n$$p_Y (y) = \\sum_{x \\mid g(x) = y } p_X(x) $$\n\n## Joint Probability Mass Function (PMF)\n\nThe joint PMF is denoted by\n\n$$\\bold P(\\{ X = x, Y = y \\})$$\n\nIt represents the probability of both $X$ and $Y$ occurring.\n\n### Marginal PMF\n\nThe marginal PMF allows us to obtain individual random variable values from a vector random variable.\n\n$$\\bold P(X = x) = \\sum_y \\bold P({X = x, Y = y}) $$\n$$\\bold P(Y = y) = \\sum_x \\bold P({X = x, Y = y}) $$\n\n## Conditioning a Random Variable\n\n### On an event\n\n# Continuous Random Variables\n\nA continuous random variable infinitely many values, as opposed to discrete random variables where only countable values are considered.\n\n## Probability Density Function (PDF)\n\nA PDF is analogous to a [PMF](#probability-mass-function-pmf). It defines the distribution of probabilities over a range of values.\n\n$$f_X(x) = \\frac{\\text dF_X(x)}{\\text dx}$$\n\nA function $f_X(x)$ is a PDF if it satisfies:\n\n- $f_X(x) \\geq 0 \\forall x$\n- $\\displaystyle \\int_{-\\infty}^\\infty f_X(x) \\text dx = 1$\n- $\\forall$ numbers $a$, $b$ then $\\displaystyle \\bold P [a \\leq X \\leq b] = \\int_a^b f_X(x) \\text dx$\n\n## Cumulative Distribution Function (CDF)\n\nThe CDF of a random variable describes the distribution and is defined as:\n\n$$F_X (x) = \\bold P(X \\leq x) = \\int_{-\\infty}^x f_X(t) dt$$\n\nIn continuous time, for an infinitesimally large step $\\delta$, the probability is found to be zero.\n\n$$\\bold P [x \\leq x \\leq x + \\delta] = \\int_x^{x+\\delta} f_X(x) \\text dx \\approx f_X(2) \\Delta X \\approx 0$$\n\nIn a semi-closed interval $(a, b]$ for $a< b$,\n\n$$P(a < X \\leq B) = F_X(b) - F_X(a)$$\n\n### Uniformly Distributed Random Variable\n\nA uniformly distributed random variable has a constant probability density function.\n\n#### Probability Density Function\n\n$$f_x(x) = \\begin{cases} \\frac{1}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n#### Cumulative Distribution Function\n\n$$F_X(x) = \\int_{-\\infty}^\\infty f_X(x) \\text dx = \\begin{cases} 0 & x < a \\\\ \\frac{x - a}{b - a} & a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$\n\n### Exponentially Distributed Random Variable\n\nAn exponentially distributed random variable has an exponentially growing probability density function.\n\n$$f_X (x) = \\begin{cases} \\lambda e^{-\\lambda x} & x \\geq 0 \\\\ 0 & \\text{otherwise} \\end{cases} = \\lambda e^{-\\lambda x} u(x)$$\n\n#### Cumulative Distribution Function\n\n$$F_X(x) = \\int_0^x \\lambda e^{-\\lambda \\beta} \\text d\\beta = 1-e^{-\\lambda x}$$\n\n### Gaussian / Normal Random Variable\n\nA Gaussian or normally distributed random variable $X$ is only continuous.\n\n$$f_X (x) = \\frac{1}{\\sqrt{2\\pi} \\sigma} e^{-(x-\\mu)^2 / 2\\sigma^2}$$\n\nIt has scalar parameters:\n\n$$\\sigma = \\sqrt{\\text{var}(X)} \\quad \\sigma > 0$$\n$$\\mu = \\bold E [X]$$ \n\n#### Expected Value\n\n$$\\bold E [X] = \\mu$$\n\n#### Variance\n\n$$\\text{var}(X) = \\sigma^2$$\n\n### Standard Normal Random Variable\n\nA normal random variable $X$ is standard normal if it has $\\bold E [X] = \\text{var}(X) = 0$. It is useful to find values for normal distributions. We define:\n\n$$\\phi(x) = \\bold P (X \\leq x) = P(X < x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^x e^{-t^2 / 2} dt$$\n\nLet $Y$ be another random variable (that is also normal because of linearity) with $\\bold E [Y] = \\mu$ and $\\text{var}(Y) = \\sigma^2$. Then:\n\n$$X = \\frac{Y - \\mu}{\\sigma}$$\n\nA useful property is that $\\phi(-x) = 1 - \\phi(x) \\quad \\forall x$.\n\n#### Calculation\n\n$$\\bold P (Y \\leq y) = \\bold P (\\frac{Y - \\mu}{\\sigma} \\leq \\frac{y - \\mu}{\\sigma}) = \\bold (X \\leq \\frac{y - \\mu}{\\sigma}) = \\phi (\\frac{y - \\mu}{\\sigma}) $$\n\n# Transforms & Moment Generating Function\n\nThe moment generating function represents the distribution of probabilities over the reals. It is similar to the probability generating function, except here we use $e^s$ instead of $z$.\n\n$$M_X(s) = \\bold E [e^{sX}] = \\begin{cases} \\displaystyle \\int_{-\\infty}^\\infty e^{sx} f_X(x) dx & X \\text{continuous} \\\\ \\displaystyle \\sum_x e^{sx} p_X(x) & X \\text{discrete} \\end{cases}$$\n\n## Expected Value\n\n$$\\bold E [X] = \\frac{d}{ds} M_X(s)\\Bigr|_{s=0}$$\n$$\\bold E [X^n] = \\frac{d^n}{ds^n} M_X(s)\\Bigr|_{s=0}$$\n\n## Linearity\n\n- If $Y = aX+b$ then $M_Y(s) = e^{sb}M_X(as)$\n\n## Independence\n\n### With transforms\n\nGiven $W = X + Y$, if $X$ and $Y$ are independent, then the sum is the multiplication of transforms. $W$'s distribution is characterized by:\n\n$$M_{W}(s) = \\bold E[e^{sW}] = \\bold E [e^{sX}] \\bold E [e^{sY}] = M_X(s) M_Y(s)$$\n\n### With convolution\n\nThe density function of multiple variables can also be obtained using convolution. Given $W = X + Y$, if $X$ and $Y$ are independent:\n\n#### Discrete Case\n\n$$p_W(w) = \\bold P (X + Y = w) = \\sum_x p_X(x) p_Y(w-x)$$\n\n#### Continuous Case\n\n$$\\bold P(W \\leq w | X = x) = \\bold P(Y \\leq w - x) = \\int_{-\\infty}^\\infty f_X(x) f_Y(w - x) dx$$\n\n## Multivariate Transform\n\nGiven $n$ random variables $X_1, \\dots, X_n$ and $s_1, \\dots, s_n$ scalars, the multivariate transform is defined as:\n\n$$M_{X_1, \\dots, X_n} (s_1, \\dots, s_n) = \\bold E [e^{s_1 X_1 + \\dots + s_n X_n}]$$\n\n## Common Discrete Transforms\n\n### Bernoulli (p)\n\n$$M_X(s) = 1 - p + pe^s \\quad k = 0, 1$$\n\n### Binomial (n, p)\n\n$$M_X(s) = (1 - p + pe^2)^n \\quad k = 0, 1, \\dots, n$$\n\n### Gemoetric (p)\n\n$$M_X(s) = \\frac{pe^s}{1 - (1 - pe^s)} \\quad k = 1, 2, \\dots$$\n\n### Poisson ($\\lambda$)\n\n$$M_X(s) = e^{\\lambda(e^s - 1)} \\quad k = 0, 1, \\dots$$\n\n### Uniform (a, b)\n\n$$M_X(s) = \\frac{e^{as}}{b - a + 1} \\cdot \\frac{e^{(b - a + 1)s} - 1}{e^s - 1} \\quad k = a, a + 1, \\dots, b$$\n\n## Common Continuous Transforms\n\n| Uniform $a \\leq x \\leq b$ | Exponential $x \\geq 0$ | Normal $-\\infty < x < \\infty$ |\n|-|-|-|\n| $\\displaystyle \\frac{1}{b - a} \\cdot \\frac{e^{sb} - e^{sa}}{s} \\text{}$ | $\\displaystyle \\frac{\\lambda}{\\lambda - s} \\quad s < \\lambda$ | $\\displaystyle e^{(\\sigma^2 s^2 / 2) + \\mu s} \\text{}$ |\n\n\n"}}]);