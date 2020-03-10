---
header: Algorithms
description: The data playground.
---

# Algorithm Analysis

## Loop Invariants

The loop invariant has three properties.

### Initialization

The property where the loop invariant is true before the first iteration. Typically, it is the outcome you are expecting once the loop ends.

### Maintenance

The property where if the invariant is true before an iteration of the loop, it remains true before the next iteration.

### Termination

The condition which stops the loop.

# Sorting Algorithms

Sorting algorithms consist of manipulating numbers and sorting them.

## Insertion Sort

It sorts an array $A[1, ..., n]$ of $n$ numbers or keys from smallest to greatest values.

Pros:
- Efficient for small amount of elements
- Sorts in place

### Complexities

| Time | Space |
|-|-|
| $O(n^2)$ | $O(1)$ |

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

## Deletion

Suppose we want to delete a node $N$ and we replace it with the node $R$.

### Step 1

1. $N$ has 2 `NIL` children (a leaf)
   1. $R$ is `NIL`.
2. $N$ has 1 `NIL` child and 1 non-`NIL` child
   1. $R$ is the non-`NIL` child.
3. $N$ has 2 non-`NIL` children
   1. $R$ is the right child before the replacement is spliced out.

### Step 2

1. $N$ is red and $R$ is red or `NIL`
   1. Done.
2. $N$ is red and $R$ is black.
   1. Color replacement node red.
   2. Proceed to step 3.
3. $N$ is black and its replacement is red.
   1. Color replacement node black.
4. $N$ is black and its replacement is `NIL` or black.
   1. Proceed to step 3.

### Step 3: Cases

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
