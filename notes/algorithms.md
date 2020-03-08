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
