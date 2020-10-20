---
header: Linear Algebra
description: The study of linear equations.
---

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

where $n$ is the number of rows in the vector and $[\bold x]_i$ is the $i$-th entry.

## Dot Product

The dot product is the sum of products of each component between two vectors. It tells us the magnitude of how much in a direction one vector is to another.

$$\bold x \cdot \bold y = \sum_{i = 1}^n x_i b_i$$

### Orthogonality

If the dot product results in the zero vector $\bold{0}$, the two vectors are said to be perpendicular.

$$\bold x \cdot \bold y = \sum_{i = 1}^n x_i b_i = \bold 0 \implies \text{x,y are perpendicular}$$

### Length

The magnitude or length of a vector is the root of the dot product of itself.

$$||\bold x|| = \sqrt{\bold x \cdot \bold x} = (x_1^2 + x_2^2 + \dots + x_n^2)^{1/2}$$

Geometrically, the components of the vector form a right triangle, and using the pythagorean theorem, we find the hypotenuse of that triangle.

### Unit Length

A unit vector has unit length, or $||\bold u|| = 1$.

### Unit Vector

The unit vector $\bold u$ is a vector with [unit length](#unit-length).

$$\bold u = \frac{\bold x}{||\bold x||}$$

It also retains the same direction as $x$.

### Angle

The angle $\theta$ between two vectors is defined as:

$$\cos \theta = \frac{x \cdot y}{||\bold x|| \text{ } ||\bold y||}$$

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

$$S = \bigg\{ \sum_{i=1}^n a_i\bold{v}_i | a_i \in \mathbb{R}, 1 \leq i \leq p \bigg\}$$

### Linear Dependence

Given a set of vectors $S = \{v_1, v_2, v_3, \ldots, v_n\}$, we say the set of vectors is **linearly dependent** if there are $a_1, a_2, a_3, \ldots, a_n$, $a_i$ not all equal to zero such that

$$a_1 \bold{x}_1 + a_2 \bold{x}_2 + a_3 \bold{x}_3 + ... + a_n \bold{x}_n = 0$$

In other words, there exists a solution that is non-trivial. The vectors span less than $\mathbb{R}^n$.

### Linear Independence

On the other hand, the set of vectors $S = \{v_1, v_2, v_3, \ldots, v_n\}$ is **linearly independent** if all $a_i = 0$, the trivial solution, is the only solution.

$$a_1 \bold{x}_1 + a_2 \bold{x}_2 + a_3 \bold{x}_3 + ... + a_n \bold{x}_n = 0$$

In other words, the only solution that exists is the trivial solution. The vectors span all of $\mathbb{R}^n$.

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

Intuitively, a matrix has the ability to transform a vector. Take, for example, $A \bold{x = b}$. We are calculating how to achieve the vector $\bold b$ by scaling $\bold x$ by $A$.

A matrix is a rectangular array of numbers of the form:

### Notation

$$A_{mn} =
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

$${A} =
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

$$\bold{(AB)C = A(BC)}$$

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

#### Exponents

$$\bold A^n = \bold{A_1 A_2} \dots \bold A_n$$
$$\bold{A^n A^m = A^{n+m}}$$
$$\bold{(A^n)^m=\bold A^{nm}}$$

## Identity Matrix

The identity matrix is a square $n \times n$ matrix that contains 1's on the diagonal and 0's elsewhere.

$$ \bold{I}_n =
\left[
\begin{array}{ccccc}
1 & 0 & \dots & 0 \\
0 & 1 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\ 
0 & 0 & \dots & 1 \\
\end{array}
\right]$$

It has the special property that:

$$\bold I \bold x = \bold x$$

## Rectangular Matrix

Given an $m \times n$ matrix $A$, $A$ is a rectangular matrix if $m \neq n$.

## Square Matrix

Given an $m \times n$ matrix $A$, $A$ is a square matrix if $m=n$.

## Diagonal Matrix

A diagonal matrix is one where there are non-zero elements in indices such that $i=j$ (the column index equals the row index), and all other elements are zero.

$$
D =
\begin{bmatrix}
  d_{1} & & \\
  & \ddots & \\
  & & d_{n}
\end{bmatrix}
$$

## Nonsingular Matrix

Given a square matrix $A$, suppose that the columns are linearly independent, or the solution set is only the trivial solution and there exists only one solution.

$A$ is a nonsingular matrix.

Otherwise, $A$ is a singular matrix, or in other words, there are infinite or no solutions and the columns are linearly dependent.

## Inverting a Matrix

Given an $n \times n$ matrix $A$, $B$ is an inverse of $\bold A$ where:

$$\bold{AB} = \bold{BA} = \bold I \implies \bold{A A^{-1} = A^{-1} A = I}$$

$\bold A^{-1}$ is denoted as the inverse of $\bold A$.

Intuitively, we are undoing the transformation of a matrix. Take $A \bold{x = b} \implies \bold x = A^{-1} \bold b$.

We are trying to retrieve the original vector $\bold x$ transformed by $A$ by undoing that transformation and taking the inverse $A^{-1}$.

### Conditions for Invertibility

Given a square matrix $\bold A$:

- $\bold A$ must have $n$ non-zero pivots (linearly independent columns).
- $\det \bold A \neq 0$
- $\bold A\bold x = \bold 0$ where $x = 0$, the trivial solution, is the only solution.
- Gauss-Jordan elimination eliminates $[ \bold A \bold I ]$ to $[ \bold I \bold A^{-1} ]$
- $\bold A$ is invertible if $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$ (it is diagonally dominant)

### Properties

- $(A^{-1})^{-1} = A$
- $(kA)^{-1} = k^{-1} A^{-1} \text{}$
- $\det(A^{-1}) = (\det A)^{-1} \text{}$

### Calculating inverse of diagonal matrix

Given an invertible, square, and diagonal matrix with non-zero diagonal entries:

$$D =
\begin{bmatrix}
  d_{1} & & \\
  & \ddots & \\
  & & d_{n}
\end{bmatrix} \implies D^{-1}=
\begin{bmatrix}
  \frac{1}{d_{1}} & & \\
  & \ddots & \\
  & & \frac{1}{d_{n}}
\end{bmatrix}$$

### Calculating inverse of matrix product

If $A$ and $B$ are invertible, then $AB$ is as well.

$$(AB)^{-1} = B^{-1} A^{-1}$$

## Elementary Matrix

An elementary matrix is one that applies a row operation.

### Row switch

$R_i \leftrightarrow R_j$

$$E_s = \begin{bmatrix}
  1 &        &   &        &   &        &   \\
    & \ddots &   &        &   &        &   \\
    &        & 0 &        & 1 &        &   \\
    &        &   & \ddots &   &        &   \\
    &        & 1 &        & 0 &        &   \\
    &        &   &        &   & \ddots &   \\
    &        &   &        &   &        & 1
\end{bmatrix}$$

#### Inverse

$$E_s^{-1} = E_s$$

### Row multiplication: 

$k R_i \rightarrow R_i \quad k \neq 0$

$$E_m(k) = \begin{bmatrix}
  1 &        &   &   &   &        &   \\
    & \ddots &   &   &   &        &   \\
    &        & 1 &   &   &        &   \\
    &        &   & k &   &        &   \\
    &        &   &   & 1 &        &   \\
    &        &   &   &   & \ddots &   \\
    &        &   &   &   &        & 1
\end{bmatrix}$$

#### Inverse

$$E_m^{-1}\bigg(\frac{1}{k}\bigg) = E_m(k)$$

### Row addition: 

$R_i + k R_j \quad i \neq j$

$$E_a(k) = \begin{bmatrix}
  1 &        &   &        &   &        &   \\
    & \ddots &   &        &   &        &   \\
    &        & 1 &        &   &        &   \\
    &        &   & \ddots &   &        &   \\
    &        & k &        & 1 &        &   \\
    &        &   &        &   & \ddots &   \\
    &        &   &        &   &        & 1
\end{bmatrix}$$

#### Inverse

$$E_a^{-1}(-k) = E_a(k)$$

## Multiplication

$$\bold A_{mn} \bold B_{np} = \bold C_{mp}$$

### Inner (Dot) Product

Each entry $ij$ is calculated by calculating the dot product of the $i$th row and the $j$th column.

where each entry $[\bold C]_{ij} = \displaystyle \sum_{i=1}^n a_{ik} b_{kj} \text{}$

$$\bold a^T \bold b = \left[
\begin{array}{c}
a_1 & a_2 & \dots & a_n 
\end{array}
\right]
\left[
\begin{array}{c}
a_1 \\ a_2 \\ \vdots \\ a_n 
\end{array}
\right]$$

### Outer Product

The outer product is a much easier method to multiply matrices. Simply multiply the columns by the rows and add them together.

$$\bold {ab}^T = \left[
\begin{array}{c}
a_1 \\ a_2 \\ \vdots \\ a_n 
\end{array}
\right]
\left[
\begin{array}{c}
a_1 & a_2 & \dots & a_n 
\end{array}
\right]
$$

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

We can succinctly compact this into:

$$\bold{Ax} = \bold b$$

### Coefficient Matrix

We take the coefficients of each variable and put it into a matrix:

$$ \bold{A} =
\left[
\begin{array}{ccccc}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
a_{21} & a_{22} & a_{23} & \dots & a_{2n} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\ 
a_{m1} & a_{m2} & \dots & a_{m3} & a_{mn} \\
\end{array}
\right]$$

### Vector of Constants

The target of what we want to get:

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

The solution to the linear equations:

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

The system intersects at every point. One or more variables are free.

### No Solutions

The system does not intersect at any point.

## Consistent Solutions

A system of linear equations is **consistent** if it has at least one solution. Otherwise, it is inconsistent.

### Independent and Dependent Variables

In a consistent system of linear equations, a variable that is not dependent on another variable is called **independent** or free.

Otherwise, it is called a **dependent** variable.

## Gaussian Elimination

The **elimination** algorithm is a systematic method of solving systems of linear equations. As the name states, we are eliminating variables from equations to make it easier to solve.

- Apply row operations expressed as elementary matrices $E_{ij}$ to transform the system into an upper triangular system (all values below the diagonal are zeros).
- Apply back substitution from the bottom up to solve the system.

#### Row Operations

For the row operations, there are two important terms, **pivots** and **multipliers**. 

- A pivot is the first non-zero entry in a row that does elimination.
- A multiplier is defined as the entry in row $i$ divided by the pivot value in row $j$.

If successful, after we apply elimination, the pivots should be on the diagonal of the matrix and have non-zero values. It succeeds if there is a [single solution](#single-unique-solution). This would occur if the matrix is [nonsingular](#nonsingular-matrix).

Otherwise, elimination fail if any of the pivots are zero. This situation occurs if there are [infinite](#infinite-solutions) or [no](#no-solutions) solutions. This occurs if the matrix is [singular](#nonsingular-matrix).

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
\right] = [ \bold{Ab}]$$

We are appending the vector of constants onto the coefficient matrix.

## Reduced Row Echelon Form

1. Any rows of zeroes are at the bottom.
2. The first non-zero entry of a non-zero row is one (1).
3. Starting from the top left, the leading one (1) appears to the right of the leading one (1) of the preceding row.
4. All other entries of a column containing a leading one (1) is zero (0).

### Gauss-Jordan Elimination

Gauss-Jordan Elimination can be used to solve systems of linear equations and find inverses of invertible matrices. The goal is to get the matrix in reduced row echelon form.

### Pivot Column

A pivot column in context of the reduced row echelon form of a matrix is a column containing a leading $1$ (in the leftmost non-zero entry).

### Zero Row

A zero row is a row containing all zeros. They are at the bottom.
