---
header: Set Theory
description: The only theory that is set in stone.
---

# Set Notation

A set is a collection of objects (or more formally, [elements](#elements)). It has the notation:

$$\left\{ \text{object}_1, \text{object}_2, \text{object}_3 \right\}$$

### Elements

Elements are the objects within the set.

### In

The $\in$ symbol denotes whether an element is in the set.

#### In Example

Let $x$ be an element of the set $S$. This means:

$$x \in S$$

If $x$ was not in $S$, then it would be denoted as:

$$x \not\in S$$

### Universal Set ($\Omega$)

The **universal set** is the set containing all elements or sets that are pertinent to your problem. It is denoted as:

$$\Omega$$

### Empty Set ($\emptyset$)

If the set $S$ contains no elements, it is denoted as:

$$S = \emptyset$$

### Finite (and Countable) Set Notation

$$S = \left\{x_1, x_2, x_3, ..., x_n\right\}$$

### Infinite (and Countable) Set Notation

$$S = \left\{x_1, x_2, x_3, ...\right\}$$

### Set Builder (Uncountable) Notation

Set builder notation can represent the above notations in addition to the uncountable set notation.

$$\left\{ x \mid x \text{ satisfies } P \right\} $$

"$\mid$" means **such that**.

### Subset ($\subseteq$)

Let $A$ and $B$ be sets.

If every element in $A$ is also an element of $B$, $A$ is a subset of $B$. It is denoted as:

$$A \subset B$$

$A$ must equal $B$.

### Proper Subset ($\subsetneq$)

Let $A$ and $B$ be sets.

If $A \subset B$ but $A \neq B$, $A$ is a proper subset of $B$. It is denoted as:

$$A \subsetneq B$$

In other words, there is at least one element in $B$ that is not in $A$.

### Super Set ($\supseteq$)

Let $A$ and $B$ be sets.

If every element in $A$ is also an element of $B$, $B$ is a super set of $A$. It is denoted as:

$$B \supset A$$

$B$ must equal $A$.

### Proper Super Set ($\supsetneq$)

Let $A$ and $B$ be sets.

If $B \supset A$ but $B \neq A$, $B$ is a proper super set of $A$. It is denoted as:

$$B \supsetneq A$$

In other words, there is at least one element in $B$ that is not in $A$.

### Disjoint Set

If the sets $A$ and $B$ are **disjoint**, $A$ does not share an element with $B$.

$$A \cap B = \emptyset$$

### Partition

Given a set $S$, a collection of sets is a **partition** of $S$ if the sets in the collection are [disjoint](#disjoint-set) and their [union](#union-cup) is $S$.

$$A \cup B \cup ... = S$$

# Set Operations

### Complement ($S^c$)

Let $S$ be a [proper subset](#proper-subset-subsetneq) of the [universal set](#universal-set-omega) $\Omega$.

$$S^c = \left\{ x \in \Omega \mid x \notin S \right\}$$

In other words, the complement is set of all elements in $\Omega$ excluding the ones in $S$.

### Union ($\cup$)

Let $A$ and $B$ be sets.

$$A \cup B = \left\{ x \mid x \in A \lor x \in B \right\}$$

In other words, the union is the set of all elements in $A$ or $B$.

#### Union Sum

$$\displaystyle \bigcup_{n=1}^{\infty} S_n = S_1 \cup S_2 \cup S_3 \cup ...$$

### Intersection

Let $A$ and $B$ be sets.

$$A \cap B = \left\{ x \mid x \in A \land x \in B \right\}$$

In other words, the intersection is the set of elements in both $A$ and $B$.

#### Intersection Sum

$$\displaystyle \bigcap_{n=1}^{\infty} S_n = S_1 \cap S_2 \cap S_3 \cap ...$$
