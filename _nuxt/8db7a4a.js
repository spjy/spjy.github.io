(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{494:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Algorithms\ndescription: The data playground.\n---\n\n# Algorithm Analysis\n\n## Loop Invariants\n\nThe loop invariant is a property that is true before and after each iteration of the loop. We must prove that the initialization (base case), maintenance (induction step) and termination are all true.\n\n### Initialization\n\nThe property where the loop invariant is true before the first iteration. Typically, it is the outcome you are expecting once the loop ends.\n\n### Maintenance\n\nThe property where if the invariant is true before an iteration of the loop, it remains true before the iteration as well as after.\n\n### Termination\n\nWhen we halt iteration, our result should be useful to us.\n\n## Asymptotic Notation\n\nOften, for algorithms, we want to analyze and quantify their space and time efficiency for large inputs.\n\n### $\\Theta$ Notation\n\nBig Theta notation describes the \n\n### $O$ Notation\n\nBig O notation describes the upper bound of a function. In other words, it tells us \n\n### $\\Omega$ Notation\n\nBig Omega notation describes the \n\n# Sorting Algorithms\n\nSorting algorithms consist of manipulating numbers and sorting them.\n\n## Insertion Sort\n\n- Efficient for small amount of elements\n- Sorts in place\n\n### Complexities\n\n| Time | Space |\n|-|-|\n| $O(n^2)$ | $O(1)$ |\n\n### Algorithm\n\n1. Loop through each index\n2. At the $i$-th index, loop backwards and keep swapping until the element is in the proper place.\n3. Continue until array is completely sorted.\n\n### Pseudocode\n\n```python\ndef insertion_sort(arr):\n  # Loop through each key in array\n  for i in range(1, len(arr)): \n    key = arr[i]\n    j = i - 1\n\n    # For each key, if the previous key is less than\n    # the current key, swap elements\n    while j >= 0 and key < arr[j]:\n      arr[j + 1] = arr[j]\n      j -= 1\n    arr[j + 1] = key\n```\n\n## Merge Sort\n\n## Heapsort\n\n- Sort in place\n\n### Complexities\n\n| Time | Space |\n|-|-|\n| $O(n \\log n)$ | $O(1)$ |\n\n## Counting Sort\n\nCounting sort works by counting the number of occurrences of a certain element and generates a new array by using the occurrence array.\n\nIt assumes a small range of integer values.\n\n### Complexities\n| Time | Space |\n|-|-|\n| $O(n)$ | $O(\\text{max})$ |\n\n### Algorithm\n\n1. Get maximum number $max$ in array `A[0, ... n]`\n2. Initialize zero array `occurrences` with $max + 1$ elements to store number of occurrences of each number.\n3. Loop through the `occurrences` starting at index $1$ and in the $i$-th index, store the sum of the $i$-th and $i - 1$-th indices\n4. Loop through the `occurrences` array and get the value at `A[n - 1]`.\n5. Initialize array `output` of size $A[n - 1]$, iterate backwards through `occurrences` array and for the $output[occurrence[A[j]]]$-th element, store `A[j]` here.\n\n## Radix Sort\n\nRadix sort is useful for sorting a numerical place value, for example, in the decimal counting system, we could sort by the ones, tens or hundreds place.\n\n## Bucket Sort\n\nBucket sort works by creating \"buckets\" and distributing elements within them. In each bucket, a sorting algorithm is executed and subsequently each bucket is concatenated together in the resulting array.\n\nIt assumes uniform distribution such that each bucket has few values in them.\n\n### Complexities\n| Time (avg) x| Space |\n|-|-|\n| $O(n)$ | $O(\\text{max})$ |\n\n# Data Structures\n\n## B-Trees\n\n- Self-balancing trees.\n- Have many children.\n- Every $n$ node has height $O(lg n)$\n- If an internal node $x$ has $n$ keys, $x$ has $n+1$ children.\n\nFor each node $x$,\n- $n$ is the number of keys stored in node $x$.\n- Each key is stored in non-decreasing order\n- $l$ is a boolean indicating if $x$ is a leaf or not.\n\nFor each internal node $x$,\n- Contains $n+1$ pointers to its children.\n\nLeaf nodes have no children.\n\nAll leaves have the same depth, height $h$.\n\nEvery node other than the root must have $t-1$ keys,\n\nInternal nodes must have at least $t$ children\n\nNodes contain at most $2t-1$ keys.\n\nInternal nodes have at most $2t$ children.\n\n## 2-3-4 Trees\n\nA 2-3-4 tree is a self-balancing tree.\n\n- A node has a max of three values. Values are sorted in ascending order.\n- All leaves are on the same level.\n- Internal nodes can have 2, 3 or 4 children.\n  - Given an internal node $i$-node for $2 \\leq i \\leq 4$, that node can have $i$ children and $i - 1$ values.\n- A leaf has the same properties as an internal $i$ node except its children are null.\n\n### Insertion\n\nGiven a value $v$ that you wish to insert into the tree:\n\n1. Insert $v$ in a leaf node in the correct node.\n2. If the node becomes too full (e.g. it is a $4$-node) [split](#splitting).\n\n### Splitting $4$-node\n\n1. Move the middle value to its parent.\n   1. If the moved value is the root and it becomes too full, move the middle value up and that becomes the new root.\n2. Create two $2$-nodes by moving the left value to a $2$-node on the left of the $4$-node and the right element to another $2$-node on the right.\n3. If the $4$-node points \n\n## Red-Black Tree\n\nA red-black tree is a self-balancing binary search tree.\n\n- **Height**: $O(\\log n)$\n- A node is either red or black.\n- Root and leaves (`NIL`) are black.\n- If a node is red, its children are black.\n- Paths from a node to its `NIL` descendents contain the same number of black nodes.\n- **Longest path**: Alternating red and black nodes\n- **Shortest path**: All black nodes\n- **Black Height**: Number of black nodes on a path from the current node to a leaf.\nb\n\n### Insertion\n\nSuppose we insert a node $N$.\n\n- Inserted node $N$ is always red.\n- Recolor and rotate to fix violation.\n  \n1. $\\text{N}$ = root\n   1. Re-color $N$ black\n2. $\\text{N.uncle}$ = red\n   1. Re-color $\\text{N.uncle}$, $\\text{N.parent}$ black \n   2. Re-color $\\text{N.grandparent}$ red\n3. $\\text{N.uncle}$ = black (triangle)\n   1. Rotate $\\text{N.parent}$.\n4. $\\text{N.uncle}$ = black (line)\n   1. Rotate $\\text{N.grandparent}$ towards $\\text{N.uncle}$.\n   2. Change $\\text{N.sibling}$ to become $\\text{N.grandparent}$'s child.\n   3. Re-color $\\text{N.parent}$ to black.\n   4. Re-color $\\text{N.grandparent}$ to red.\n\n### Deletion\n\nSuppose we want to delete a node $N$ and we replace it with the node $R$.\n\n#### Step 1\n\n1. $N$ has 2 `NIL` children (a leaf)\n   1. $R$ is `NIL`.\n2. $N$ has 1 `NIL` child and 1 non-`NIL` child\n   1. $R$ is the non-`NIL` child.\n3. $N$ has 2 non-`NIL` children\n   1. $R$ is the right child before the replacement is spliced out.\n\n#### Step 2\n\n1. $N$ is red and $R$ is red or `NIL`\n   1. Done.\n2. $N$ is red and $R$ is black.\n   1. Color replacement node red.\n   2. Proceed to step 3.\n3. $N$ is black and its replacement is red.\n   1. Color replacement node black.\n4. $N$ is black and its replacement is `NIL` or black.\n   1. Proceed to step 3.\n\n#### Step 3: Cases\n\n1. $R$ is red.\n   1. Re-color $X$ black.\n   2. Done.\n2. $R$ is black and its sibling $W$ is red.\n   1. Re-color $W$ black.\n   2. Re-color $R.parent$ red\n   3. If $R$ is the left child\n      1. Left rotate $R.parent$.\n   4. If $R$ is the right child\n      1. Right rotate $R.parent$.\n   5. If $R$ is the left child\n      1. Set $W = R.parent.right$\n      2. Set $W = R.parent.left$\n   6. With $R$ and new $W$ continue to other cases.\n3. Node $R$ is black and its sibling $W$ is black and both of $W$'s children are black\n   1. Re-color $W$ red\n   2. Set $R = R.parent$\n      1. If $R$ is red, color $W$ black.\n      2. Done\n   3. If $R$ is black, continue onto cases 2, 3 or 4. We have a new $W$.\n4. $R$ is black and sibling $W$ is black and if $R$ is a left child, $W$'s left child is red and $W$'s right child is black OR if $R$ is the right child, $W$'s right child is red and $W$'s left child is black.\n   1. Color $W$'s child black.\n   2. If $R$ is the left child\n      1. Rotate $W$ right\n   3. If $R$ is the right child\n      1. Rotate $W$ left\n   4. If $R$ is the left child\n      1. Set $W = R.parent.left$\n   5. If $R$ is the right child\n      1. Set $W = R.parent.left$\n   6. Go to case 5.\n5. $R$ is black and its sibling $W$ is black and if $R$ is the left child, $W$'s right child is red OR if $R$ is the right child, $W$'s left child is red.\n   1. Re-color $W$ the same color as $R.parent$.\n   2. Re-color $R.parent$ black.\n   3. If $R$ is the left child,\n      1. Re-color $W.right$ black.\n   4. If $R$ is the right child,\n      1. Re-color $W.left$ black.\n   5. If $R$ is the left child,\n      1. Rotate $R.parent$ left.\n   6. If $R$ is the right child,\n      1. Rotate $R.parent$ right.\n   7. Done.\n\n## Pre-order Tree Traversal\n\n1. Visit node\n2. Traverse left subtree\n3. Traverse right subtree\n\n## In-order Tree Traversal\n\n1. Traverse Left\n2. Visit Node\n3. Traverse right\n\n# Flow Networks\n\nA flow network $G=(V,E)$ is a directed graph that:\n- Has edges $(u,v) \\in E$ with $c(u,v) \\geq 0$\n- If $\\exists (u,v) \\in E$, there is no edge $(v,u)$.\n- Has a source node $s$\n- Has a sink node $t$\n- Assume graph is connected\n  - $s$ has an entering edge\n  - $|E| \\geq |V| - 1$\n- Has a capacity function $c$\n\n## Capacity Constraint\n\n$\\forall u,v \\in V, 0 \\leq f(u,v) \\leq c(u,v)$\n\n## Flow conservation\n\n$\\forall u \\in V - {s, t}, \\displaystyle \\sum_{v \\in V} f(u, v) = \\sum _{v \\in V} f(u,v)$\n\nIf $(u,v) \\nin E$, the flow $f(u,v) = 0$\n\n# NP-completeness\n\n## Non-deterministic Algorithm\n\nA non-deterministic algorithm is one that contains many choices in its logic, and the choice is determined by choice that is arbitrary (e.g. not determined by its inputs).\n\nThere exists a solution to the algorithm only if those arbitrary choices make all the correct guesses. \n\nIn other words, we do not know how the algorithm works exactly.\n\n## Deterministic Algorithms\n\nA deterministic algorithm is the opposite of a [non-deterministic algorithm](#non-deterministic-algorithm). Its input determines its output since it is consistent and its logic is known.\n\n## Polynomial Time Reduction\n\nGiven two algorithms $A$ and $B$, $A$ reduces to $B$ if we take an instance (input) of $A$ and can transform the instance $B$ in polynomial time and use the answer of the instanced algorithms $B$ for $A$.\n\nThus, we can deduce that if we can solve $A$ in a certain time complexity, $B$ is solved as well in the same complexity and vice versa.\n\n## Algorithm Classes\n\n### Polynomial (P) Time\n\nClass $P$ algorithms take polynomial time and are deterministic, such as merge sort ($O(n\\log n$) or binary search ($O(\\log n)$).\n\n### Non-deterministic Polynomial (NP) Time\n\nClass $NP$ algorithms take polynomial time but are non-deterministic.\n\nWe can verify the correctness of the algorithm's solution, but do not have an efficient algorithm to find it.\n\nAlso, if one problem in the NP class is solved, all of the other problems will be solved as well.\n\n### NP and P\n\nRelating NP with P, we can say that:\n\n$$P \\subseteq NP$$\n\nThis is because all algorithms start out to be $NP$, but when we discover their logic and verify it, it becomes $P$.\n\n### NP-hard (NPH)\n\nAn algorithm is NP-hard if we could solve it fast, all problems in $NP$-fast can be solved.\n\nGiven an algorithm $A$ and $B$, we can [reduce](#reduction) $A$ to $B$ and prove that $A$ is as hard as $B$.\n\n### NP-complete (NPC)\n\nAn algorithm is NP-complete if we have a known NP-hard algorithm, and we have an $NP$ algorithm for it, the algorithm becomes NP-complete.\n\n$$NPC = \\{ NP \\} \\cap \\{ NPH \\}$$\n\n# Graphs\n\n\n"}}]);