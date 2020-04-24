---
header: Discrete Math
description: Integer number of things.
---

# Basics of Math

### Variables

Variables are a placeholder for an unknown value to generalize it.

### Mathematical Statements

| Type        | Description                     | Example           |
| ----------- | ------------------------------- | ----------------- |
| Universal   | True for all elements in a set. | "For all ..."     |
| Conditional | True under a constraint.        | "If ... then ..." |
| Existential | True for at least one element.  | "There is a ..."  |

# Set Notation

A set is a collection of elements.

### Set Roster Notation

$$S = \left\{ x, y, z \right\}$$

### Symbols

| Symbol | Meaning      | Example   |
| ------ | ------------ | --------- |
| $\in$  | in           | $x \in S$ - "$x$ is an element of $S$" |
| $\dots$| and so forth | $\left\{ 1, 2, 3, ... \right\}$ - "Set of all positive integers" |
| $\mathbb{R} \text{}$ | Set of all real numbers | $\left\{ ..., -1, -\frac{1}{2}, 0, \frac{1}{2}, 1, ... \right\}$ |
| $\mathbb{Z} \text{}$ | Set of all integers | $\left\{ ..., -2, -1, 0, 1, 2, ... \right\} \text{}$ |
| $\mathbb{Q} \text{}$ | Set of all rational numbers, quotients of integers | - |

### Axiom of Extension

A set is defined by its elements, not its element's order or frequency.

### Set Builder Notation

Set builder notation is a shorthand method to describe a set's elements. We can write it like:

| Notation                                     | Translation |
| -------------------------------------------- | ----------- |
| $\left\{ x \in S \mid P(x) \right\} \text{}$ | The set of all elements $x$ in $S$ such that $P(x)$ is true. | 

For instance, these two sets are equivilent:

$$\left\{ x \in \mathbb{R} \mid 10 \le x \le 15 \right\} = \left\{10, 11, 12, 13, 14, 15 \right\}$$

### Subset

Let $A$ and $B$ be sets. If $A$ is a subset of $B$, or $A \subseteq B$, then each element of $A$ is also an element of $B$.

| Notation         | Translation |
------------------ | ----------- |
| $A \subseteq B$  | $\forall$ elements $x$, if $x \in A$ then $x \in B$. | 
| $A \subsetneq B$ | There is at least one element $x \mid x \in A, x \not\in B$ |

#### Subset Example

Let's say $A$ and $B$ are sets.

$$A = \left\{ 1,2,3 \right\}$$
$$B = \left\{ 1,2,3,4 \right\}$$

$A \subseteq B$ because each element $x$ (1, 2 and 3) in $A$ exists in $B$.

#### Non-Subset Example

Let's say $A$ and $B$ are sets.

$$A = \left\{ 1,2,3 \right\}$$
$$B = \left\{ 1,2,4 \right\}$$

$A \subsetneq B$ because the element $3$ in $A$ does not exist in $B$.

### Proper Subset

- Let $A$ and $B$ be sets.
- If $A$ is a proper subset of $B$, then each element of $A$ is in $B$.
- There is at least one element of $B$ not in $A$.

In other words, $A$ cannot equal $B$. There must be at least one element that differs between the two sets.

### Ordered Pair

- Let $a$ and $b$ be elements.
- $(a, b)$ is an ordered pair with $a$ and $b$ together such that $a$ is the first element of the pair and $b$ is the second. 

Let $c$ and $d$ be two other elements, and let $(c, d)$ be another ordered pair. 

$(a, b)$ = $(c, d)$ is true if $a=c$ and $b=d$.

# Relations and Functions

### Cartesian Product

- Let $A$ and $B$ be sets.
- The Cartesian product of $A$ and $B$, or $A \times B$, is the set of all ordered pairs $(a, b)$ such that $a \in B$ and $b \in B$ is:

$$A \times B = \left\{ (a, b) \mid a \in A, b \in B \right\}$$

#### Cartesian Product Example

Let $A = \left\{ 1, 2 \right\}$ and $\left\{ 3, 4 \right\}$. The Cartesian product of $A$ and $B$ is:

$$A \times B = \left\{ (1, 2), (1, 4), (2, 3), (2, 4) \right\} \text{}$$

### Relationships

A relationship is the connection between two different things.

- Let $A$ and $B$ be sets.
- A relation set $R$ from $A$ to $B$ is a subset of $A \times B$ ($R \subseteq A \times B$).

Now we can say:

- An ordered pair $(x, y) \in A \times B$, we can state $x$ is related to $y$ by $R$, or $x$ $R$ $y$ iff $(x, y) \in R$.
- $A$ is the domain of $R$ and $B$ is the co-domain.
- $x$ $R$ $y$ means $(x,y) \in R$.
- $x$ $\not{R}$ $y$ means $(x,y) \not\in R$.

### Functions

A function $F$ from a set $A$ to set $B$ is the relationship between the domain $A$ and co-domain $B$. It has the restrictions that:

- $\forall x \in A, \exists y \in B \mid (x,y) \in F$
- $\forall x \in A$ and $y,z \in B$, if $(x, y) \in F$ and $(x,z) \in F \implies y=z$

In other words, for each $x$ in the domain, there exists a value for $x$ in the co-domain. Additionally, each element $x$ in the domain may map to exactly one value $y$ in the co-domain.

#### Function Notation

If $A$ and $B$ are sets and $F$ is a function from $A$ to $B$, then given any element $x \in A$, the unique element in $B$ that is related to $x$ by $F$ is $F(x)$, read as F of x.

#### Function Mapping Notation

Let $A$ and $B$ be sets and $f$ be a function. If $x \in A$ and $y \in B$, a function $f: A \rightarrow B$ is defined by $f: x \mapsto y$ means $f(x) = y$, the domain is defined on the set $A$ and the co-domain is defined on the set $B$.

# Logic and Statements

### Logical Connective Symbols

| Symbol   | Meaning           |
| -------- | ----------------- |
| $\lnot$  | negation (not)    |
| $\wedge$ | conjunction (and) |
| $\vee$   | disjunction (or)  |

### Structure

A compound statement is composed of:

- [Premises](#premise): Statements.
- [Conclusion](#conclusion): An assertion based on premises.

It usually takes the form of: 

If $p$ or $q$, then $r$. $q$. Therefore, $r$.

There is also:

| Structure           | Translation      |
| ------------------- | ---------------- |
| $p$ but $q$         | $p \wedge q$     |
| neither $p$ nor $q$ | $\lnot p$ $\vee$ $\lnot q$ |

### Statements

A statement is a sentence that is true or false but not both.

#### Statement Examples

- True: $1+1 = 2$
- False: $1+1 = 3$

#### Non-statement Examples

- $x + y > 0$ since it is true for some values but not for values $x + y \leq 0$

### Statement (Propositional) Form

A statement form is one that contains statement variables and [logical connectives](#logical-connective-symbols) only.

For example, the statement form of "$\text{My clothes are }$$\underbrace{\text{clean}}_p$ $\text{and not }$$\underbrace{\text{wrinkled}}_q$" would be $p$ $\wedge$ $\lnot q$.

### Truth Table

A truth table contains all of the possible combinations of a statement.

### Negation Truth Table

| $p$ | $\lnot p$ |
| - | - |
| T | F |
| F | T |

### Conjunction Truth Table

| $p$ | $q$ | $p \wedge q$ |
| - | - | - |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

### Disjunction Truth Table


| $p$ | $q$ | $p \vee q$ |
| - | - | - |
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

### Logical Equivalence

Being logically equivalent means that two statement forms have identical truth values for each combination possibility.

If $P$ and $Q$ are two [statement forms](#statement-propositional-form) and they are logically equivalent, then $P \equiv Q$.

### Tautology

A statement form that is always true in every interpretation.

### Contradiction

A statement form that is always false in every interpretation.

#### Tautology and Contradiction Example

A tautology is denoted as $t$, while a contradiction is denoted as $c$.

| $p$ | $\lnot p$ | $p \lor \lnot p$ | $p \land \lnot p$ |
| --- | - | - | - |
| T | F | T | F |
| F | T | T | F |

$p \lor \lnot p$ is the definition of a tautology. All interpretations are true.

$p \land \lnot p$ is the definition of a contradiction. All interpretations are false.

# Conditional Statements

A conditional statement has the form: If $p$ then $q$. More formally, the notation is $p \rightarrow q$, which means $p$ implies $q$.

The truthfulness of $q$ is dependent on the statement of $p$.

### Hypothesis (Antecedent)

The if statement ($p$).

### Conclusion (Consequent)

The then statement ($q$).

### Conditional Statement Truth Table

| $p$ | $q$ | $p \rightarrow q$ |
| - | - | - |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

### Vacuously True

An if statement is **vacuously true** (true by default) if the hypothesis is false.

### Conditional Statement as Or

A conditional statement is equivalent to the negation of the hypothesis ORed with the consequence.

$$p \rightarrow q \equiv \lnot p \lor q$$

#### Conditional Statement as Or Example

- **Or**: $\text{Either } \underbrace{\text{you do the dishes}}_p \text{ or } \underbrace{\text{you will not get desert}}_q$.
- **Conditional**: $\text{If } \underbrace{\text{you do not do the dishes}}_{\lnot p}, \underbrace{\text{you will not get desert}}_q$.


### Negation of Conditional Statement

If we negate a conditional statement, the resulting statement will be the hypothesis ANDed with the negation of the consequent.

$$\lnot (p \rightarrow q) \equiv p \land \lnot q$$

#### Negation of Conditional Statement Example

- **Conditional**: If I eat dinner, I will not be hungry.
- **Negated Conditional $\rightarrow$ And Statement**: I ate dinner and I am hungry.

### Contrapositive of Conditional Statement

A conditional statement is equivalent to the conditional statement of the negated hypothesis and negated consequence.

$$p \rightarrow q \equiv \lnot q \rightarrow \lnot p$$

### Contrapositive of Conditional Statement Example

- **Conditional**: If I drive to work, I will be on time.
- **Contrapositive**: If I am not on time, then I did not drive to work.

### Converse of Conditional Statement

Let "$p \rightarrow q$" be a conditional statement.

The **converse** of the statement is:

$$q \rightarrow p$$

### Inverse of Conditional Statement

Let "$p \rightarrow q$" be a conditional statement.

The **inverse** of the statement is:

$$\lnot p \rightarrow \lnot q$$

### Only If

$p$ only if $q$ means $p$ is true if $q$ is true, or in other words:

$$\lnot q \rightarrow \lnot p \equiv p \rightarrow q$$

$p$ can happen **only if** $q$ happens. Therefore, if $q$ does not occur, $p$ cannot occur.

### Biconditional

Let $p$ and $q$ be statement variables.

The **biconditional** of $p$ and $q$ is "$p$ if and only if (iff) $q$":

$$p \leftrightarrow q$$

$p$ can only happen if $q$ happens. Similarly, $q$ must be true if $p$ is true.

#### Truth Table for Biconditional

| $p$ | $q$ | $p \leftrightarrow q$ |
| - | - | - |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

### Sufficient Condition

Let $r$ be a **sufficient condition** for $s$. This means:

$$r \rightarrow s$$

or $r$ is sufficient to guarantee $s$ is true.

### Necessary Condition

Let $r$ be a **necessary condition** for $s$. This means:

$$\lnot r \rightarrow \lnot s$$

or if $r$ is false, $s$ is false.

### Sufficient and Necessary Condition

Let $r$ be a **sufficient and necessary** condition. This means:

$$r \leftrightarrow s$$

# Arguments

An argument is a sequence of statements.

### Argument Form

An argument form is the sequence of [statement forms](#statement-propositional-form).

### Premise

**Premises** are statements in an argument and all statement forms in an argument form except the final one.

### Conclusion

A **conclusion** is the final statement or statement form.

# Valid Argument Form

A **valid argument form** means if the premises are all true, the conclusion is true.

#### Critical Row

The **critical row** is the row of a truth table where all of the premises are true.

An argument form is said to be invalid if the [conclusion](#conclusion) is false in the critical row.

### Modus Ponens

**Modus Ponens** is a [valid argument form](#valid-argument-form) that says the conclusion is affirmed. It has the form:

$$
p \rightarrow q. \\
p. \\
\therefore q
$$

### Modus Tollens

**Modus Tollens** is a [valid argument form](#valid-argument-form) that says the conclusion is a denial. It is [logically equivalent](#logical-equivalence) to [Modus Ponens](#modus-ponens) through the [contrapositive](#contrapositive-of-conditional-statement) identity. It has the form:

$$
p \rightarrow q. \\
\lnot q. \\
\therefore \lnot p.
$$

### Rule of Inference

A **rule of inference** is a [valid argument form](#valid-argument-form).

#### Generalization

$$
p. \\
\therefore p \lor q.
$$

$$
q. \\
\therefore p \lor q.
$$

#### Elimination

$$
p \lor q. \\
\lnot q. \\
\therefore p.
$$

$$
p \lor q. \\
\lnot p. \\
\therefore q.
$$

#### Transitivity

$$
p \rightarrow q. \\
q \rightarrow r. \\
\therefore p \rightarrow r.
$$

### Division into Cases

$$
p \lor q. \\
p \rightarrow r. \\
q \rightarrow r. \\
\therefore r.
$$

### Sound Argument

An argument is **sound** iff it is valid and all its premises are true.

### Unsound Argument

An argument that is not sound.

# Fallacy (Invalid Argument)

A fallacy is an invalid argument due to an error in reasoning. In other words, the [critical row](#critical-row) contains [premises](#premise) that are true but the [conclusion](#conclusion) is false.

### Converse Error

The following argument is **invalid**:

$$
p \rightarrow q. \\
q. \\
\therefore p.
$$

### Inverse Error

The following argument is **invalid**:

$$
p \rightarrow q. \\
\lnot p. \\
\therefore \lnot q.
$$

# Contradictions

If the statement $p$ is false and leads logically to a contradiction, you can conclude $p$ is true.

$$
\lnot p \rightarrow c \\
\therefore p
$$

# Number Theory

### Even Integer

Let $n$ be an integer.

$n$ is even $\iff \exists$ an integer $k$ such that $n = 2k$.

#### Theorem.

The sum of any two even integers is even.

### Odd Integer

Let $n$ be an integer.

$n$ is odd $\iff \exists$ an integer $k$ such that $n = 2k + 1$.

### Prime

Let $n$ be an integer for $n > 1$.

$n$ is prime $\iff \forall$ positive integers $r$ and $s$, if $n = rs$ then either $r = 1$ and $s = n$ or $r = n$ and $s = 1$.

### Rational

$r$ is rational $\iff \exists$ integers $a$ and $b$ such that $\displaystyle r = \frac{a}{b}$ and $b \neq 0$.

#### Theorem: Every integer is rational.

#### Theorem: The sum of any two rational numbers is rational.

#### Corollary: The double of a rational number is rational.

#### Zero Product Property

If neither of two real numbers is zero, then their product is also not zero.

### Irrational

A real number that is not [rational](#rational) is irrational.

### Standard Factored Form

For an integer $n > 1$, the standard factored from of $n$ is an expression of the form:

$$n = p_1^{e_1} p_2^{e_2} p_3^{e_3} ... p_k^{e_k}$$

where

- $k$ is a positive integer
- $p_1, p_2, ..., p_k$ are prime
- $e_1, e_2, ..., e_k$ are positive integers
- $p_1 < p_2 < ... < p_k$

### Floor

For $x \in \mathbb{R}$, $\lfloor x \rfloor$ is the floor of $x$.

$\lfloor x \rfloor = n \iff n \leq x \lt n + 1$

### Ceiling

For $x \in \mathbb{R}$, $\lceil x \rceil$ is the floor of $x$.

$\lceil x \rceil = n \iff n - 1 \lt x \leq n$

### Divisibility

If $n, d \in \mathbb{Z}$ and $d \neq 0$ then:

$n$ is divisible by $d$ iff $n = d \cdot k$ for $k \in \mathbb{Z}$.

$n$ being divisible by $d$ also means:
- $n$ is a multiple of $d$
- $d$ is a factor of $n$
- $d$ is a divisor of $n$
- $d$ divides $n$

### Divides

If $n, d \in \mathbb{Z}$, $d$ divides $n$ is denoted as $d \mid n$.

$d \mid n \iff \exists$ an integer $k$ such that $n = dk$.

# Sequences

### Finite Sequence

$$a_m, a_{m+1}, a_{m+2}, \dots, a_n$$

### Infinite Sequence

$$a_m, a_{m+1}, a_{m+2}, \dots, a_n$$

### Explicit Formula

A sequence showing how $a_k$ depends on $k$.

### Summation Notation

$$\sum_{k=m}^n a_k = a_m + a_{m+1} + a_{m+2} + \dots + a_n$$

### Product Notation

$$\prod_{k=m}^n a_k = a_m \cdot a_{m+1} \cdot a_{m+2} \cdot \dots \cdot a_n$$

### Factorial

For $n \in \mathbb{Z}^+$,

$$n! = n \cdot (n-1) \dots 3 \cdot 2 \cdot 1$$

#### Zero Factorial

$$0! = 1$$

### Choose (Combinations)

For $n, r \in \mathbb{Z}^+$ and $0 \leq r \leq n$,

$$
\left(
\begin{array}{c}
n \\
r
\end{array}
\right) =
\frac{n!}{r! (n - r)!}
$$

The notation is said as $n$ choose $r$. It represents a combination where order in a set does not matter for the number of possibilities.

# Functions

A function describes a dependence of a varying quantity to another. Give a function $f$ from a set $x$ ([domain](#domain)) to a set $y$ ([co-domain](#co-domain)), then $f$ maps $x$ to $y$:

$$f: x \rightarrow y$$

$$f(x) = y$$

### Constraints

- Every element in $x$ is related to some element $y$.
- No element in $x$ is related to more than one element $y$.

### Domain (Preimage)

The domain $x$ is the possible input values of $f$.

### Co-domain

The co-domain $y$ is the possible output values of $f$.

### Range (Image)

The range is the set of all values of $f$ that are actually output. It is a subset of the [co-domain](#co-domain).

## Types of Functions

### One-to-One (Injective)

A one-to-one function means that each element in the domain $x$ maps to a unique element in the co-domain $y$.

Let $f$ be a function from a set $x$ to set $y$.

$$f: x \rightarrow y \text{ is one-to-one} \iff \forall x_1, x_2 \in x, f(x_1) = f(x_2) \rightarrow x_1 = x_2$$

### Onto (Surjective)

A surjective function is one in which for every $x_n \in x$ you there is a corresponding element $y_n \in y$. In other words, the range is equal to the co-domain.

$$f:x \rightarrow y \text{ is onto} \iff \forall y_n \in y, \exists x_n \in x \mid f(x) = y$$

### One-to-One Correspondence (Bijection)

A bijective function is both [injective](#one-to-one-injective) and [surjective](#onto-surjective).

### Inverse

Given a bijective function $f: x\rightarrow y$, 

$$f^{-1}(y) = x \iff y = f(x)$$

### Power Function

$$p_a(x) = x^a \quad \forall x \in \mathbb{R}^+$$

# Graph Theory

## Terms

### Graph

A graph is a structure of discrete objects with connections between them.

### Vertices

The discrete objects.

### Edges

The connections joining vertices.

### Endpoints

Each edge is associated with a set of either one or two vertices.

### Loops

An edge with one endpoint.

### Parallel 

An endpoint that shares two or more distinct edges.

### Connectedness

An edge connects two endpoints.

### Adjacent

Two vertices that are connected by an edge.

### Incident

An edge is incident to a vertex.

### Degree

## Types of Graphs

### Directed Graph (digraph)

### Simple Graph

### Complete Graph

### Complete Bipartite Graph

### Subgraph

## Applications

### Walks

#### Closed Walk

### Trails

#### Euler Trail

### Paths

### Circuit

#### Simple Circuit

#### Hamiltonian Circuit

## Graph Representation

### Adjacentcy List

An adjacency list is usually used in the case of sparse graphs, where $|E| << |V|^2$.

A list of the vertices a particular vertex is connected to is what an adjacentcy list consists of.

### Adjacentcy Matrix

In this case, an adjacency matrix is used where $|E|$ is close to $|V|^2$. 

## Algorithms

### Topological Sort

Topological sort sorts directed acyclic graphs. It is usually used like a dependency graph.

$(u, v)$ represents an edge in the edge set.

## Graph Terminology

Given a graph $G = (V, E)$ where $V$ is a vertex set and $E$ is an edge set:

### Isolation

A vertex is isolated if its degree is zero, or in other words it has no edges.

### Path

A path of length $k$ from vertex $u$ to $u'$ in a graph $G=(V,E)$ is a sequence 

$$(v_0, v_1, \dots, v_k)$$

such that $u = v_0$, $u' = v_k$ and $(v_{i - 1}, v_i) \in E$ for $i = 1, 2, \dots, k$.

### Directed Graph

A directed graph contains edges that are directed.

- $V$ is a finite set
- $E$ is a binary relation on $V$.
- Self-loops are possible

#### Incidence

An edge $(u, v)$ is incident from $u$ and indicent to $v$. In other words, the edge is directed from $u$ to $v$.

#### Adjacency

Given an edge $(u, v)$, vertex $u$ is adjacent to $v$, but not vice versa.

#### Degree

The degree of a directed graph is its in-degree plus out-degree vertices.

#### Cycle

A path of a directed graph forms a cycle if for a path $(v_0, v_1, \dots, v_k)$ $v_0 = v_k$ and the path contains at least an edge.

### Undirected graph

An undirected graph contains edges that are bidirectional.

- $E$ is a set ${u, v}$ such that $u, v \in V$ and $u \neq v$.

#### Adjacency

Given an edge $(u, v)$, the vertices $u, v$ are adjacent to each other.

#### Degree

The degree of an undirected graph is the number of incident edges onto a vertex.

#### Connectedness

An undirected graph is connected if every vertex is reachable from all other verticies.

### Isomorphic Graphs

Two graphs $G=(V,E)$ and $G'=(V',E')$ are isomorphic if there exists a bijection $f: V \rightarrow V'$ such that $(u,v) \in E$ iff $(f(u), f(v)) \in E'$.

In other words the two graphs $G$ and $G'$ contain the same topology.
