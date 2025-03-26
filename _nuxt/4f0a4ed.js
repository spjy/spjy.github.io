(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{503:function(n,e,r){"use strict";r.r(e),e.default="---\r\nheader: Algorithms\r\ndescription: The data playground.\r\n---\r\n\r\n# Algorithm Analysis\r\n\r\n## Loop Invariants\r\n\r\nThe loop invariant is a property that is true before and after each iteration of the loop. We must prove that the initialization (base case), maintenance (induction step) and termination are all true.\r\n\r\n### Initialization\r\n\r\nThe property where the loop invariant is true before the first iteration. Typically, it is the outcome you are expecting once the loop ends.\r\n\r\n### Maintenance\r\n\r\nThe property where if the invariant is true before an iteration of the loop, it remains true before the iteration as well as after.\r\n\r\n### Termination\r\n\r\nWhen we halt iteration, our result should be useful to us.\r\n\r\n## Asymptotic Notation\r\n\r\nOften, for algorithms, we want to analyze and quantify their space and time efficiency for large inputs.\r\n\r\n### $\\Theta$ Notation\r\n\r\nBig Theta notation describes the \r\n\r\n### $O$ Notation\r\n\r\nBig O notation describes the upper bound of a function. In other words, it tells us \r\n\r\n### $\\Omega$ Notation\r\n\r\nBig Omega notation describes the \r\n\r\n# Sorting Algorithms\r\n\r\nSorting algorithms consist of manipulating numbers and sorting them.\r\n\r\n## Insertion Sort\r\n\r\n- Efficient for small amount of elements\r\n- Sorts in place\r\n\r\n### Complexities\r\n\r\n| Time | Space |\r\n|-|-|\r\n| $O(n^2)$ | $O(1)$ |\r\n\r\n### Algorithm\r\n\r\n1. Loop through each index\r\n2. At the $i$-th index, loop backwards and keep swapping until the element is in the proper place.\r\n3. Continue until array is completely sorted.\r\n\r\n### Pseudocode\r\n\r\n```python\r\ndef insertion_sort(arr):\r\n  # Loop through each key in array\r\n  for i in range(1, len(arr)): \r\n    key = arr[i]\r\n    j = i - 1\r\n\r\n    # For each key, if the previous key is less than\r\n    # the current key, swap elements\r\n    while j >= 0 and key < arr[j]:\r\n      arr[j + 1] = arr[j]\r\n      j -= 1\r\n    arr[j + 1] = key\r\n```\r\n\r\n## Merge Sort\r\n\r\n## Heapsort\r\n\r\n- Sort in place\r\n\r\n### Complexities\r\n\r\n| Time | Space |\r\n|-|-|\r\n| $O(n \\log n)$ | $O(1)$ |\r\n\r\n## Counting Sort\r\n\r\nCounting sort works by counting the number of occurrences of a certain element and generates a new array by using the occurrence array.\r\n\r\nIt assumes a small range of integer values.\r\n\r\n### Complexities\r\n| Time | Space |\r\n|-|-|\r\n| $O(n)$ | $O(\\text{max})$ |\r\n\r\n### Algorithm\r\n\r\n1. Get maximum number $max$ in array `A[0, ... n]`\r\n2. Initialize zero array `occurrences` with $max + 1$ elements to store number of occurrences of each number.\r\n3. Loop through the `occurrences` starting at index $1$ and in the $i$-th index, store the sum of the $i$-th and $i - 1$-th indices\r\n4. Loop through the `occurrences` array and get the value at `A[n - 1]`.\r\n5. Initialize array `output` of size $A[n - 1]$, iterate backwards through `occurrences` array and for the $output[occurrence[A[j]]]$-th element, store `A[j]` here.\r\n\r\n## Radix Sort\r\n\r\nRadix sort is useful for sorting a numerical place value, for example, in the decimal counting system, we could sort by the ones, tens or hundreds place.\r\n\r\n## Bucket Sort\r\n\r\nBucket sort works by creating \"buckets\" and distributing elements within them. In each bucket, a sorting algorithm is executed and subsequently each bucket is concatenated together in the resulting array.\r\n\r\nIt assumes uniform distribution such that each bucket has few values in them.\r\n\r\n### Complexities\r\n| Time (avg) x| Space |\r\n|-|-|\r\n| $O(n)$ | $O(\\text{max})$ |\r\n\r\n# Data Structures\r\n\r\n## B-Trees\r\n\r\n- Self-balancing trees.\r\n- Have many children.\r\n- Every $n$ node has height $O(lg n)$\r\n- If an internal node $x$ has $n$ keys, $x$ has $n+1$ children.\r\n\r\nFor each node $x$,\r\n- $n$ is the number of keys stored in node $x$.\r\n- Each key is stored in non-decreasing order\r\n- $l$ is a boolean indicating if $x$ is a leaf or not.\r\n\r\nFor each internal node $x$,\r\n- Contains $n+1$ pointers to its children.\r\n\r\nLeaf nodes have no children.\r\n\r\nAll leaves have the same depth, height $h$.\r\n\r\nEvery node other than the root must have $t-1$ keys,\r\n\r\nInternal nodes must have at least $t$ children\r\n\r\nNodes contain at most $2t-1$ keys.\r\n\r\nInternal nodes have at most $2t$ children.\r\n\r\n## 2-3-4 Trees\r\n\r\nA 2-3-4 tree is a self-balancing tree.\r\n\r\n- A node has a max of three values. Values are sorted in ascending order.\r\n- All leaves are on the same level.\r\n- Internal nodes can have 2, 3 or 4 children.\r\n  - Given an internal node $i$-node for $2 \\leq i \\leq 4$, that node can have $i$ children and $i - 1$ values.\r\n- A leaf has the same properties as an internal $i$ node except its children are null.\r\n\r\n### Insertion\r\n\r\nGiven a value $v$ that you wish to insert into the tree:\r\n\r\n1. Insert $v$ in a leaf node in the correct node.\r\n2. If the node becomes too full (e.g. it is a $4$-node) [split](#splitting).\r\n\r\n### Splitting $4$-node\r\n\r\n1. Move the middle value to its parent.\r\n   1. If the moved value is the root and it becomes too full, move the middle value up and that becomes the new root.\r\n2. Create two $2$-nodes by moving the left value to a $2$-node on the left of the $4$-node and the right element to another $2$-node on the right.\r\n3. If the $4$-node points \r\n\r\n## Red-Black Tree\r\n\r\nA red-black tree is a self-balancing binary search tree.\r\n\r\n- **Height**: $O(\\log n)$\r\n- A node is either red or black.\r\n- Root and leaves (`NIL`) are black.\r\n- If a node is red, its children are black.\r\n- Paths from a node to its `NIL` descendents contain the same number of black nodes.\r\n- **Longest path**: Alternating red and black nodes\r\n- **Shortest path**: All black nodes\r\n- **Black Height**: Number of black nodes on a path from the current node to a leaf.\r\nb\r\n\r\n### Insertion\r\n\r\nSuppose we insert a node $N$.\r\n\r\n- Inserted node $N$ is always red.\r\n- Recolor and rotate to fix violation.\r\n  \r\n1. $\\text{N}$ = root\r\n   1. Re-color $N$ black\r\n2. $\\text{N.uncle}$ = red\r\n   1. Re-color $\\text{N.uncle}$, $\\text{N.parent}$ black \r\n   2. Re-color $\\text{N.grandparent}$ red\r\n3. $\\text{N.uncle}$ = black (triangle)\r\n   1. Rotate $\\text{N.parent}$.\r\n4. $\\text{N.uncle}$ = black (line)\r\n   1. Rotate $\\text{N.grandparent}$ towards $\\text{N.uncle}$.\r\n   2. Change $\\text{N.sibling}$ to become $\\text{N.grandparent}$'s child.\r\n   3. Re-color $\\text{N.parent}$ to black.\r\n   4. Re-color $\\text{N.grandparent}$ to red.\r\n\r\n### Deletion\r\n\r\nSuppose we want to delete a node $N$ and we replace it with the node $R$.\r\n\r\n#### Step 1\r\n\r\n1. $N$ has 2 `NIL` children (a leaf)\r\n   1. $R$ is `NIL`.\r\n2. $N$ has 1 `NIL` child and 1 non-`NIL` child\r\n   1. $R$ is the non-`NIL` child.\r\n3. $N$ has 2 non-`NIL` children\r\n   1. $R$ is the right child before the replacement is spliced out.\r\n\r\n#### Step 2\r\n\r\n1. $N$ is red and $R$ is red or `NIL`\r\n   1. Done.\r\n2. $N$ is red and $R$ is black.\r\n   1. Color replacement node red.\r\n   2. Proceed to step 3.\r\n3. $N$ is black and its replacement is red.\r\n   1. Color replacement node black.\r\n4. $N$ is black and its replacement is `NIL` or black.\r\n   1. Proceed to step 3.\r\n\r\n#### Step 3: Cases\r\n\r\n1. $R$ is red.\r\n   1. Re-color $X$ black.\r\n   2. Done.\r\n2. $R$ is black and its sibling $W$ is red.\r\n   1. Re-color $W$ black.\r\n   2. Re-color $R.parent$ red\r\n   3. If $R$ is the left child\r\n      1. Left rotate $R.parent$.\r\n   4. If $R$ is the right child\r\n      1. Right rotate $R.parent$.\r\n   5. If $R$ is the left child\r\n      1. Set $W = R.parent.right$\r\n      2. Set $W = R.parent.left$\r\n   6. With $R$ and new $W$ continue to other cases.\r\n3. Node $R$ is black and its sibling $W$ is black and both of $W$'s children are black\r\n   1. Re-color $W$ red\r\n   2. Set $R = R.parent$\r\n      1. If $R$ is red, color $W$ black.\r\n      2. Done\r\n   3. If $R$ is black, continue onto cases 2, 3 or 4. We have a new $W$.\r\n4. $R$ is black and sibling $W$ is black and if $R$ is a left child, $W$'s left child is red and $W$'s right child is black OR if $R$ is the right child, $W$'s right child is red and $W$'s left child is black.\r\n   1. Color $W$'s child black.\r\n   2. If $R$ is the left child\r\n      1. Rotate $W$ right\r\n   3. If $R$ is the right child\r\n      1. Rotate $W$ left\r\n   4. If $R$ is the left child\r\n      1. Set $W = R.parent.left$\r\n   5. If $R$ is the right child\r\n      1. Set $W = R.parent.left$\r\n   6. Go to case 5.\r\n5. $R$ is black and its sibling $W$ is black and if $R$ is the left child, $W$'s right child is red OR if $R$ is the right child, $W$'s left child is red.\r\n   1. Re-color $W$ the same color as $R.parent$.\r\n   2. Re-color $R.parent$ black.\r\n   3. If $R$ is the left child,\r\n      1. Re-color $W.right$ black.\r\n   4. If $R$ is the right child,\r\n      1. Re-color $W.left$ black.\r\n   5. If $R$ is the left child,\r\n      1. Rotate $R.parent$ left.\r\n   6. If $R$ is the right child,\r\n      1. Rotate $R.parent$ right.\r\n   7. Done.\r\n\r\n## Pre-order Tree Traversal\r\n\r\n1. Visit node\r\n2. Traverse left subtree\r\n3. Traverse right subtree\r\n\r\n## In-order Tree Traversal\r\n\r\n1. Traverse Left\r\n2. Visit Node\r\n3. Traverse right\r\n\r\n# Flow Networks\r\n\r\nA flow network $G=(V,E)$ is a directed graph that:\r\n- Has edges $(u,v) \\in E$ with $c(u,v) \\geq 0$\r\n- If $\\exists (u,v) \\in E$, there is no edge $(v,u)$.\r\n- Has a source node $s$\r\n- Has a sink node $t$\r\n- Assume graph is connected\r\n  - $s$ has an entering edge\r\n  - $|E| \\geq |V| - 1$\r\n- Has a capacity function $c$\r\n\r\n## Capacity Constraint\r\n\r\n$\\forall u,v \\in V, 0 \\leq f(u,v) \\leq c(u,v)$\r\n\r\n## Flow conservation\r\n\r\n$\\forall u \\in V - {s, t}, \\displaystyle \\sum_{v \\in V} f(u, v) = \\sum _{v \\in V} f(u,v)$\r\n\r\nIf $(u,v) \\not\\in E$, the flow $f(u,v) = 0$\r\n\r\n# NP-completeness\r\n\r\n## Non-deterministic Algorithm\r\n\r\nA non-deterministic algorithm is one that contains many choices in its logic, and the choice is determined by choice that is arbitrary (e.g. not determined by its inputs).\r\n\r\nThere exists a solution to the algorithm only if those arbitrary choices make all the correct guesses. \r\n\r\nIn other words, we do not know how the algorithm works exactly.\r\n\r\n## Deterministic Algorithms\r\n\r\nA deterministic algorithm is the opposite of a [non-deterministic algorithm](#non-deterministic-algorithm). Its input determines its output since it is consistent and its logic is known.\r\n\r\n## Polynomial Time Reduction\r\n\r\nGiven two algorithms $A$ and $B$, $A$ reduces to $B$ if we take an instance (input) of $A$ and can transform the instance $B$ in polynomial time and use the answer of the instanced algorithms $B$ for $A$.\r\n\r\nThus, we can deduce that if we can solve $A$ in a certain time complexity, $B$ is solved as well in the same complexity and vice versa.\r\n\r\n## Algorithm Classes\r\n\r\n### Polynomial (P) Time\r\n\r\nClass $P$ algorithms take polynomial time and are deterministic, such as merge sort ($O(n\\log n$) or binary search ($O(\\log n)$).\r\n\r\n### Non-deterministic Polynomial (NP) Time\r\n\r\nClass $NP$ algorithms take polynomial time but are non-deterministic.\r\n\r\nWe can verify the correctness of the algorithm's solution, but do not have an efficient algorithm to find it.\r\n\r\nAlso, if one problem in the NP class is solved, all of the other problems will be solved as well.\r\n\r\n### NP and P\r\n\r\nRelating NP with P, we can say that:\r\n\r\n$$P \\subseteq NP$$\r\n\r\nThis is because all algorithms start out to be $NP$, but when we discover their logic and verify it, it becomes $P$.\r\n\r\n### NP-hard (NPH)\r\n\r\nAn algorithm is NP-hard if we could solve it fast, all problems in $NP$-fast can be solved.\r\n\r\nGiven an algorithm $A$ and $B$, we can [reduce](#reduction) $A$ to $B$ and prove that $A$ is as hard as $B$.\r\n\r\n### NP-complete (NPC)\r\n\r\nAn algorithm is NP-complete if we have a known NP-hard algorithm, and we have an $NP$ algorithm for it, the algorithm becomes NP-complete.\r\n\r\n$$NPC = \\{ NP \\} \\cap \\{ NPH \\}$$\r\n\r\n# Graphs\r\n"}}]);