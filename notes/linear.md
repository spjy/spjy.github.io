---
header: Linear Algebra
description: The study of linear equations.
---

# Linear Equations

A **linear equation** can be expressed as

$$y=a_1x_1 + a_2x_2 + a_3x_3 + ... + a_nx_n = b$$

where $a_1, a_2, a_3, ... , a_n, b$ are scalar coefficients and $x_1, x_2, x_3, ..., x_n$ are variables.

## System of Linear Equations

A system of linear equations takes the form:

$$a_{11}x_1+a_{12}x_2+...+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+...+a_{2n}x_n=b_2\\
a_{31}x_1+a_{32}x_2+...+a_{3n}x_n=b_3\\
\newline
\newline \vdots
\newline
a_{m1}x_1+a_{m2}x_2+...+a_{mn}x_n=b_m$$

There are $m$ equations, and $a_1, a_2, a_3, ... , a_n, b$ are scalar coefficients and $x_1, x_2, x_3, ..., x_n$ are variables.

### Coefficient Matrix

$$ \bold{A}_{mn} =
\left[
\begin{array}{ccccc}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \dots & a_{2n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\ 
a_{m1} & a_{m2} & \dots & a_{m3} & a_{mn} \\
\end{array}
\right]$$

### Vector of Constants

$$ \bold{b} =
\left[
\begin{array}{c}
b_1 \\
b_2 \\
b_3 \\
\vdots \\
b_n
\end{array}
\right]$$

### Solution Vector

$$ \bold{x} =
\left[
\begin{array}{c}
x_1 \\
x_2 \\
x_3 \\
\vdots \\
x_n
\end{array}
\right]$$

### Homogenous System of Linear Equations

A homogenous system of linear equations takes the form

$$a_{11}x_1+a_{12}x_2+...+a_{1n}x_n=0\\
a_{21}x_1+a_{22}x_2+...+a_{2n}x_n=0\\
a_{31}x_1+a_{32}x_2+...+a_{3n}x_n=0\\
\newline
\newline \vdots
\newline
a_{m1}x_1+a_{m2}x_2+...+a_{mn}x_n=0$$

The right side of each linear equation is zero. In other words, the [vector of constants](#vector-of-constants) is the zero vector.

This is system of linear equations is homogenous because the solution to the system has at least one trivial solution, $x_1=x_2= ... =x_n=0$.

#### Theorem of Homogenous Systems

A homogenous system with $n$ variables and $m$ equations has $\infty$ solutions if $n>m$.

## Types of Solution Sets of a System of Linear Equations

A **solution set** is the set that contains every solution to a linear system.

Two systems are equivalent if their solution sets are equivalent.

There are three types of solution sets:

### Single, Unique Solution

The system intersects at exactly one point.

### Infinite Solutions

The system intersects at every point.

### No Solutions

The system does not intersect at any point.

## Consistent Solutions

A system of linear equations is consistent if it has at least one solution. Otherwise, it is inconsistent.

### Independent and Dependent Variables

In a consistent system of linear equations, a variable that is not dependent on another variable is called independent or free.

Otherwise, it is called a dependent variable.

## Augmented Matrix

Given a system of linear equations

$$a_{11}x_1+a_{12}x_2+...+a_{1n}x_n=b_1
\newline
\newline \vdots
\newline
a_{m1}x_1+a_{m2}x_2+...+a_{mn}x_n=b_n$$

We can extract the coefficients transform the system into an augmented matrix:

$$\left[
\begin{array}{cccc:c}
a_{11} & a_{12} & \dots & a_{1n} & b_1 \\ 
\vdots & \vdots & \ddots & \vdots & \vdots \\ 
a_{m1} & a_{m2} & \dots & a_{mn} & b_n \\
\end{array}
\right]$$

## Reduced Row Echelon Form

1. Any rows of zeroes are at the bottom.
2. The first non-zero entry of a non-zero row is one (1).
3. Starting from the top left, the leading one (1) appears to the right of the leading one (1) of the preceding row.
4. All other entries of a column containing a leading one (1) is zero (0).

### Pivot Column

A pivot column in context of the reduced row echelon form of a matrix is a column containing a leading $1$ (in the leftmost non-zero entry).

### Zero Row

A zero row is a row containing all zeros.

# Scalars

A scalar is a single number.

# Vectors

A vector is an array numbers.

## Notation

$$ \bold{A} =
\left[
\begin{array}{c}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{array}
\right]$$

where $[v]$ $n$ is the number of rows in the vector.

## Operations

### Equality



## Linear Combinations

A linear combination is the sum of scalar multiples of vectors. Let $\bold{v}_1 \dots \bold{v}_n$ be vectors and $a_1 \dots a_n$ be scalars:

$$a_1 \bold{v}_1 + a_2 \bold{v}_2 + \dots + a_n \bold{v}_n$$

We can represent a certain vector in terms of a linear combination of vectors by scaling the weights of each vector.

If we set the linear combination equal to a vector $\bold{b}$:

$$a_1 \bold{v}_1 + a_2 \bold{v}_2 + \dots + a_n \bold{v}_n = \bold b$$
 
we are trying to find a combination $a_1, a_2, \dots, a_n$ such that it results in the vector $\bold b$.

### Spanning Sets

The set of all possible linear combinations of $n$ vectors is the **spanning set** of the given $n$ vectors.

In other words, it is the set of all possible vectors you get by scaling each vector in some way and summing them.

$$S = \{ \sum_{i=1}^n a_i\bold{v}_i | a_i \in \mathbb{R}, 1 \leq i \leq p \}$$

### Linear Dependence

Given a set of vectors $S = \{v_1, v_2, v_3, \ldots, v_n\}$, we say the set of vectors is **linearly dependent** if there are $a_1, a_2, a_3, \ldots, a_n$, $a_i$ not all equal to zero such that

$$a_1 \bold{x}_1 + a_2 \bold{x}_2 + a_3 \bold{x}_3 + ... + a_n \bold{x}_n = 0$$

In other words, there exists a solution that is non-trivial.

### Linear Independence

On the other hand, the set of vectors $S = \{v_1, v_2, v_3, \ldots, v_n\}$ is **linearly independent** if all $a_i = 0$, the trivial solution, is the only solution.

$$a_1 \bold{x}_1 + a_2 \bold{x}_2 + a_3 \bold{x}_3 + ... + a_n \bold{x}_n = 0$$

In other words, the only solution that exists is the trivial solution.

### Basis

The basis of a vector space $V$ with a set of vectors $S = \{ \bold{v_1}, \dots, \bold{v_n} \}$ that are:
- [Linearly independent](#linear-independence)
- In the spanning set of $V$.

### Column Space

If we have an $m \times n$ matrix $A$ with column vectors $\bold{A}_1$, $\bold{A}_2$, $\dots$, $\bold{A}_n$, then the column space of a matrix $A$ is the set containing the linear combinations of the column vectors of the matrix.

It is denoted as:

$$\mathcal{CS}(\bold A) = \{ \bold{A}_1, \bold{A}_2, \dots \bold{A}_n \}$$

## Linear Transformation

A **linear transformation** is the act of inputting one vector and manipulating it such that you output a new vector.

For instance if you rotate a vector a certain number of degrees.

## Vector Space

A vector space defines the properties of operations of vectors.

# Matrices

A matrix is a two dimensional collection of numbers with a fixed number of rows and columns, of the form:

### Notation

$$ \bold{A}_{mn} =
\left[
\begin{array}{ccccc}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\ 
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{array}
\right]$$

where $A$ is an $m \times n$ matrix and $m$ are the rows and $n$ are the columns.

More generally,

$$\bold{A} =
\left[
\begin{array}{c}
a_{ij} 
\end{array}
\right]$$

$A$ is an $i \times j$ matrix where $i$ is the number of rows and $j$ is the number of columns.

### Rows

$\bold{A}_{i,:}$ denotes the $i$-th row of matrix $A$.

### Columns

$\bold{A}_{:,j}$ denotes the $j$-th column of matrix $A$.

### Entries

$\bold{A}_{i,j}$ denotes the $(i,j)$-th element of matrix $A$.

### Properties

Let

$$A =
\left[
\begin{array}{c}
a_{ij} 
\end{array}
\right]$$

$$B =
\left[
\begin{array}{c}
b_{ij} 
\end{array}
\right]$$

$$C =
\left[
\begin{array}{c}
c_{ij} 
\end{array}
\right]$$

and $c,d$ be scalars.

#### Addition

$$A + B =
\left[
\begin{array}{c}
a_{ij} + b_{ij}
\end{array}
\right]$$

#### Scalar Product

$$
c\bold{A} =
c \left[
\begin{array}{c}
a_{ij}
\end{array}
\right]
=
\left[
\begin{array}{c}
c a_{ij}
\end{array}
\right]
$$

#### Commutativity

$$\bold{A} + \bold{B} = \bold{B} + \bold{A} \text{}$$

#### Associativity

$$\bold{A} + (\bold{B} + \bold{C}) = (\bold{A} + \bold{B}) + \bold{C} \text{}$$

#### Scalar Distributivity

$$c(d\bold{A}) = (cd)\bold{A}$$

$$c(\bold{A} + \bold{B}) = c\bold{A} + d \bold{B}$$

$$(c + d) \bold{A} = c \bold{A} + d \bold{A}$$

#### Negativity

$$-\bold{A} =
\left[
\begin{array}{c}
- a_{ij}
\end{array}
\right]
$$

## Rectangular Matrix

Given an $m \times n$ matrix $A$, $A$ is a rectangular matrix if $m \neq n$.

## Square Matrix

Given an $m \times n$ matrix $A$, $A$ is a square matrix if $m=n$.

## Nonsingular Matrices

Given a square matrix $A$, suppose that the columns are linearly independent, or the solution set is only the trivial solution.

$A$ is a nonsingular matrix.

## Tensors

A tensor is a generalized form of vectors and scalars.
