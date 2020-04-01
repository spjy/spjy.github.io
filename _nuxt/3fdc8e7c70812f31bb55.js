(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{490:function(e,n,t){"use strict";t.r(n),n.default="---\nheader: Algorithms\ndescription: The data playground.\n---\n\n# Algorithm Analysis\n\n## Loop Invariants\n\nThe loop invariant is a property that is true before and after each iteration of the loop. We must prove that the initialization (base case), maintenance (induction step) and termination are all true.\n\n### Initialization\n\nThe property where the loop invariant is true before the first iteration. Typically, it is the outcome you are expecting once the loop ends.\n\n### Maintenance\n\nThe property where if the invariant is true before an iteration of the loop, it remains true before the iteration as well as after.\n\n### Termination\n\nWhen we halt iteration, our result should be useful to us.\n\n## Asymptotic Notation\n\nOften, for algorithms, we want to analyze and quantify their space and time efficiency for large inputs.\n\n### $\\Theta$ Notation\n\nBig Theta notation describes the \n\n# Sorting Algorithms\n\nSorting algorithms consist of manipulating numbers and sorting them.\n\n## Insertion Sort\n\nIt sorts an array $A[1, ..., n]$ of $n$ numbers or keys from smallest to greatest values.\n\n- Efficient for small amount of elements\n- Sorts in place\n\n### Complexities\n\n| Time | Space |\n|-|-|\n| $O(n^2)$ | $O(1)$ |\n\n### Pseudocode\n\n```python\ndef insertion_sort(arr):\n  # Loop through each key in array\n  for i in range(1, len(arr)): \n    key = arr[i]\n    j = i - 1\n\n    # For each key, if the previous key is less than\n    # the current key, swap elements\n    while j >= 0 and key < arr[j]:\n      arr[j + 1] = arr[j]\n      j -= 1\n    arr[j + 1] = key\n```\n\n## Merge Sort\n\n## Heapsort\n\n- Sort in place\n\n### Complexities\n\n| Time | Space |\n|-|-|\n| $O(n \\log n)$ | $O(1)$ |\n\n# Data Structures\n\n## B-Trees\n\n- Self-balancing trees.\n- Have many children.\n- Every $n$ node has height $O(lg n)$\n- If an internal node $x$ has $n$ keys, $x$ has $n+1$ children.\n\nFor each node $x$,\n- $n$ is the number of keys stored in node $x$.\n- Each key is stored in non-decreasing order\n- $l$ is a boolean indicating if $x$ is a leaf or not.\n\nFor each internal node $x$,\n- Contains $n+1$ pointers to its children.\n\nLeaf nodes have no children.\n\nAll leaves have the same depth, height $h$.\n\nEvery node other than the root must have $t-1$ keys,\n\nInternal nodes must have at least $t$ children\n\nNodes contain at most $2t-1$ keys.\n\nInternal nodes have at most $2t$ children.\n\n## 2-3-4 Trees\n\nA 2-3-4 tree is a self-balancing tree.\n\n- A node has a max of three values. Values are sorted in ascending order.\n- All leaves are on the same level.\n- Internal nodes can have 2, 3 or 4 children.\n  - Given an internal node $i$-node for $2 \\leq i \\leq 4$, that node can have $i$ children and $i - 1$ values.\n- A leaf has the same properties as an internal $i$ node except its children are null.\n\n### Insertion\n\nGiven a value $v$ that you wish to insert into the tree:\n\n1. Insert $v$ in a leaf node in the correct node.\n2. If the node becomes too full (e.g. it is a $4$-node) [split](#splitting).\n\n### Splitting $4$-node\n\n1. Move the middle value to its parent.\n   1. If the moved value is the root and it becomes too full, move the middle value up and that becomes the new root.\n2. Create two $2$-nodes by moving the left value to a $2$-node on the left of the $4$-node and the right element to another $2$-node on the right.\n3. If the $4$-node points \n\n## Red-Black Tree\n\nA red-black tree is a self-balancing binary search tree.\n\n- **Height**: $O(\\log n)$\n- A node is either red or black.\n- Root and leaves (`NIL`) are black.\n- If a node is red, its children are black.\n- Paths from a node to its `NIL` descendents contain the same number of black nodes.\n- **Longest path**: Alternating red and black nodes\n- **Shortest path**: All black nodes\n- **Black Height**: Number of black nodes on a path from the current node to a leaf.\nb\n\n### Insertion\n\nSuppose we insert a node $N$.\n\n- Inserted node $N$ is always red.\n- Recolor and rotate to fix violation.\n  \n1. $\\text{N}$ = root\n   1. Re-color $N$ black\n2. $\\text{N.uncle}$ = red\n   1. Re-color $\\text{N.uncle}$, $\\text{N.parent}$ black \n   2. Re-color $\\text{N.grandparent}$ red\n3. $\\text{N.uncle}$ = black (triangle)\n   1. Rotate $\\text{N.parent}$.\n4. $\\text{N.uncle}$ = black (line)\n   1. Rotate $\\text{N.grandparent}$ towards $\\text{N.uncle}$.\n   2. Change $\\text{N.sibling}$ to become $\\text{N.grandparent}$'s child.\n   3. Re-color $\\text{N.parent}$ to black.\n   4. Re-color $\\text{N.grandparent}$ to red.\n\n### Deletion\n\nSuppose we want to delete a node $N$ and we replace it with the node $R$.\n\n#### Step 1\n\n1. $N$ has 2 `NIL` children (a leaf)\n   1. $R$ is `NIL`.\n2. $N$ has 1 `NIL` child and 1 non-`NIL` child\n   1. $R$ is the non-`NIL` child.\n3. $N$ has 2 non-`NIL` children\n   1. $R$ is the right child before the replacement is spliced out.\n\n#### Step 2\n\n1. $N$ is red and $R$ is red or `NIL`\n   1. Done.\n2. $N$ is red and $R$ is black.\n   1. Color replacement node red.\n   2. Proceed to step 3.\n3. $N$ is black and its replacement is red.\n   1. Color replacement node black.\n4. $N$ is black and its replacement is `NIL` or black.\n   1. Proceed to step 3.\n\n#### Step 3: Cases\n\n1. $R$ is red.\n   1. Re-color $X$ black.\n   2. Done.\n2. $R$ is black and its sibling $W$ is red.\n   1. Re-color $W$ black.\n   2. Re-color $R.parent$ red\n   3. If $R$ is the left child\n      1. Left rotate $R.parent$.\n   4. If $R$ is the right child\n      1. Right rotate $R.parent$.\n   5. If $R$ is the left child\n      1. Set $W = R.parent.right$\n      2. Set $W = R.parent.left$\n   6. With $R$ and new $W$ continue to other cases.\n3. Node $R$ is black and its sibling $W$ is black and both of $W$'s children are black\n   1. Re-color $W$ red\n   2. Set $R = R.parent$\n      1. If $R$ is red, color $W$ black.\n      2. Done\n   3. If $R$ is black, continue onto cases 2, 3 or 4. We have a new $W$.\n4. $R$ is black and sibling $W$ is black and if $R$ is a left child, $W$'s left child is red and $W$'s right child is black OR if $R$ is the right child, $W$'s right child is red and $W$'s left child is black.\n   1. Color $W$'s child black.\n   2. If $R$ is the left child\n      1. Rotate $W$ right\n   3. If $R$ is the right child\n      1. Rotate $W$ left\n   4. If $R$ is the left child\n      1. Set $W = R.parent.left$\n   5. If $R$ is the right child\n      1. Set $W = R.parent.left$\n   6. Go to case 5.\n5. $R$ is black and its sibling $W$ is black and if $R$ is the left child, $W$'s right child is red OR if $R$ is the right child, $W$'s left child is red.\n   1. Re-color $W$ the same color as $R.parent$.\n   2. Re-color $R.parent$ black.\n   3. If $R$ is the left child,\n      1. Re-color $W.right$ black.\n   4. If $R$ is the right child,\n      1. Re-color $W.left$ black.\n   5. If $R$ is the left child,\n      1. Rotate $R.parent$ left.\n   6. If $R$ is the right child,\n      1. Rotate $R.parent$ right.\n   7. Done.\n\n## Pre-order Tree Traversal\n\n1. Visit node\n2. Traverse left subtree\n3. Traverse right subtree\n\n## In-order Tree Traversal\n\n1. Traverse Left\n2. Visit Node\n3. Traverse right\n"}}]);