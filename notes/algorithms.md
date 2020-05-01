---
header: Algorithms
description: The data playground.
---

# Algorithm Analysis

## Loop Invariants

The loop invariant is a property that is true before and after each iteration of the loop. We must prove that the initialization (base case), maintenance (induction step) and termination are all true.

### Initialization

The property where the loop invariant is true before the first iteration. Typically, it is the outcome you are expecting once the loop ends.

### Maintenance

The property where if the invariant is true before an iteration of the loop, it remains true before the iteration as well as after.

### Termination

When we halt iteration, our result should be useful to us.

## Asymptotic Notation

Often, for algorithms, we want to analyze and quantify their space and time efficiency for large inputs.

### $\Theta$ Notation

Big Theta notation describes the 

### $O$ Notation

Big O notation describes the upper bound of a function. In other words, it tells us 

### $\Omega$ Notation

Big Omega notation describes the 

# Sorting Algorithms

Sorting algorithms consist of manipulating numbers and sorting them.

## Insertion Sort

- Efficient for small amount of elements
- Sorts in place

### Complexities

| Time | Space |
|-|-|
| $O(n^2)$ | $O(1)$ |

### Algorithm

1. Loop through each index
2. At the $i$-th index, loop backwards and keep swapping until the element is in the proper place.
3. Continue until array is completely sorted.

### Pseudocode

```python
def insertion_sort(arr):
  # Loop through each key in array
  for i in range(1, len(arr)): 
    key = arr[i]
    j = i - 1

    # For each key, if the previous key is less than
    # the current key, swap elements
    while j >= 0 and key < arr[j]:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = key
```

## Merge Sort

## Heapsort

- Sort in place

### Complexities

| Time | Space |
|-|-|
| $O(n \log n)$ | $O(1)$ |

## Counting Sort

Counting sort works by counting the number of occurrences of a certain element and generates a new array by using the occurrence array.

It assumes a small range of integer values.

### Complexities
| Time | Space |
|-|-|
| $O(n)$ | $O(\text{max})$ |

### Algorithm

1. Get maximum number $max$ in array `A[0, ... n]`
2. Initialize zero array `occurrences` with $max + 1$ elements to store number of occurrences of each number.
3. Loop through the `occurrences` starting at index $1$ and in the $i$-th index, store the sum of the $i$-th and $i - 1$-th indices
4. Loop through the `occurrences` array and get the value at `A[n - 1]`.
5. Initialize array `output` of size $A[n - 1]$, iterate backwards through `occurrences` array and for the $output[occurrence[A[j]]]$-th element, store `A[j]` here.

## Radix Sort

Radix sort is useful for sorting a numerical place value, for example, in the decimal counting system, we could sort by the ones, tens or hundreds place.

## Bucket Sort

Bucket sort works by creating "buckets" and distributing elements within them. In each bucket, a sorting algorithm is executed and subsequently each bucket is concatenated together in the resulting array.

It assumes uniform distribution such that each bucket has few values in them.

### Complexities
| Time (avg) x| Space |
|-|-|
| $O(n)$ | $O(\text{max})$ |

# Data Structures

## B-Trees

- Self-balancing trees.
- Have many children.
- Every $n$ node has height $O(lg n)$
- If an internal node $x$ has $n$ keys, $x$ has $n+1$ children.

For each node $x$,
- $n$ is the number of keys stored in node $x$.
- Each key is stored in non-decreasing order
- $l$ is a boolean indicating if $x$ is a leaf or not.

For each internal node $x$,
- Contains $n+1$ pointers to its children.

Leaf nodes have no children.

All leaves have the same depth, height $h$.

Every node other than the root must have $t-1$ keys,

Internal nodes must have at least $t$ children

Nodes contain at most $2t-1$ keys.

Internal nodes have at most $2t$ children.

## 2-3-4 Trees

A 2-3-4 tree is a self-balancing tree.

- A node has a max of three values. Values are sorted in ascending order.
- All leaves are on the same level.
- Internal nodes can have 2, 3 or 4 children.
  - Given an internal node $i$-node for $2 \leq i \leq 4$, that node can have $i$ children and $i - 1$ values.
- A leaf has the same properties as an internal $i$ node except its children are null.

### Insertion

Given a value $v$ that you wish to insert into the tree:

1. Insert $v$ in a leaf node in the correct node.
2. If the node becomes too full (e.g. it is a $4$-node) [split](#splitting).

### Splitting $4$-node

1. Move the middle value to its parent.
   1. If the moved value is the root and it becomes too full, move the middle value up and that becomes the new root.
2. Create two $2$-nodes by moving the left value to a $2$-node on the left of the $4$-node and the right element to another $2$-node on the right.
3. If the $4$-node points 

## Red-Black Tree

A red-black tree is a self-balancing binary search tree.

- **Height**: $O(\log n)$
- A node is either red or black.
- Root and leaves (`NIL`) are black.
- If a node is red, its children are black.
- Paths from a node to its `NIL` descendents contain the same number of black nodes.
- **Longest path**: Alternating red and black nodes
- **Shortest path**: All black nodes
- **Black Height**: Number of black nodes on a path from the current node to a leaf.
b

### Insertion

Suppose we insert a node $N$.

- Inserted node $N$ is always red.
- Recolor and rotate to fix violation.
  
1. $\text{N}$ = root
   1. Re-color $N$ black
2. $\text{N.uncle}$ = red
   1. Re-color $\text{N.uncle}$, $\text{N.parent}$ black 
   2. Re-color $\text{N.grandparent}$ red
3. $\text{N.uncle}$ = black (triangle)
   1. Rotate $\text{N.parent}$.
4. $\text{N.uncle}$ = black (line)
   1. Rotate $\text{N.grandparent}$ towards $\text{N.uncle}$.
   2. Change $\text{N.sibling}$ to become $\text{N.grandparent}$'s child.
   3. Re-color $\text{N.parent}$ to black.
   4. Re-color $\text{N.grandparent}$ to red.

### Deletion

Suppose we want to delete a node $N$ and we replace it with the node $R$.

#### Step 1

1. $N$ has 2 `NIL` children (a leaf)
   1. $R$ is `NIL`.
2. $N$ has 1 `NIL` child and 1 non-`NIL` child
   1. $R$ is the non-`NIL` child.
3. $N$ has 2 non-`NIL` children
   1. $R$ is the right child before the replacement is spliced out.

#### Step 2

1. $N$ is red and $R$ is red or `NIL`
   1. Done.
2. $N$ is red and $R$ is black.
   1. Color replacement node red.
   2. Proceed to step 3.
3. $N$ is black and its replacement is red.
   1. Color replacement node black.
4. $N$ is black and its replacement is `NIL` or black.
   1. Proceed to step 3.

#### Step 3: Cases

1. $R$ is red.
   1. Re-color $X$ black.
   2. Done.
2. $R$ is black and its sibling $W$ is red.
   1. Re-color $W$ black.
   2. Re-color $R.parent$ red
   3. If $R$ is the left child
      1. Left rotate $R.parent$.
   4. If $R$ is the right child
      1. Right rotate $R.parent$.
   5. If $R$ is the left child
      1. Set $W = R.parent.right$
      2. Set $W = R.parent.left$
   6. With $R$ and new $W$ continue to other cases.
3. Node $R$ is black and its sibling $W$ is black and both of $W$'s children are black
   1. Re-color $W$ red
   2. Set $R = R.parent$
      1. If $R$ is red, color $W$ black.
      2. Done
   3. If $R$ is black, continue onto cases 2, 3 or 4. We have a new $W$.
4. $R$ is black and sibling $W$ is black and if $R$ is a left child, $W$'s left child is red and $W$'s right child is black OR if $R$ is the right child, $W$'s right child is red and $W$'s left child is black.
   1. Color $W$'s child black.
   2. If $R$ is the left child
      1. Rotate $W$ right
   3. If $R$ is the right child
      1. Rotate $W$ left
   4. If $R$ is the left child
      1. Set $W = R.parent.left$
   5. If $R$ is the right child
      1. Set $W = R.parent.left$
   6. Go to case 5.
5. $R$ is black and its sibling $W$ is black and if $R$ is the left child, $W$'s right child is red OR if $R$ is the right child, $W$'s left child is red.
   1. Re-color $W$ the same color as $R.parent$.
   2. Re-color $R.parent$ black.
   3. If $R$ is the left child,
      1. Re-color $W.right$ black.
   4. If $R$ is the right child,
      1. Re-color $W.left$ black.
   5. If $R$ is the left child,
      1. Rotate $R.parent$ left.
   6. If $R$ is the right child,
      1. Rotate $R.parent$ right.
   7. Done.

## Pre-order Tree Traversal

1. Visit node
2. Traverse left subtree
3. Traverse right subtree

## In-order Tree Traversal

1. Traverse Left
2. Visit Node
3. Traverse right

# Flow Networks

A flow network $G=(V,E)$ is a directed graph that:
- Has edges $(u,v) \in E$ with $c(u,v) \geq 0$
- If $\exists (u,v) \in E$, there is no edge $(v,u)$.
- Has a source node $s$
- Has a sink node $t$
- Assume graph is connected
  - $s$ has an entering edge
  - $|E| \geq |V| - 1$
- Has a capacity function $c$

## Capacity Constraint

$\forall u,v \in V, 0 \leq f(u,v) \leq c(u,v)$

## Flow conservation

$\forall u \in V - {s, t}, \displaystyle \sum_{v \in V} f(u, v) = \sum _{v \in V} f(u,v)$

If $(u,v) \nin E$, the flow $f(u,v) = 0$
