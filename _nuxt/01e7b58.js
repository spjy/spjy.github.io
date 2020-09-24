(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{515:function(n,e,t){"use strict";t.r(e),e.default='---\nheader: Set Theory\ndescription: The only theory that is set in stone.\n---\n\n# Set Notation\n\nA set is a collection of objects (or more formally, [elements](#elements)). It has the notation:\n\n$$\\left\\{ \\text{object}_1, \\text{object}_2, \\text{object}_3 \\right\\}$$\n\n### Elements\n\nElements are the objects within the set.\n\n### In\n\nThe $\\in$ symbol denotes whether an element is in the set.\n\n#### In Example\n\nLet $x$ be an element of the set $S$. This means:\n\n$$x \\in S$$\n\nIf $x$ was not in $S$, then it would be denoted as:\n\n$$x \\not\\in S$$\n\n### Universal Set ($\\Omega$)\n\nThe **universal set** is the set containing all elements or sets that are pertinent to your problem. It is denoted as:\n\n$$\\Omega$$\n\n### Empty Set ($\\emptyset$)\n\nIf the set $S$ contains no elements, it is denoted as:\n\n$$S = \\emptyset$$\n\n### Finite (and Countable) Set Notation\n\n$$S = \\left\\{x_1, x_2, x_3, ..., x_n\\right\\}$$\n\n### Infinite (and Countable) Set Notation\n\n$$S = \\left\\{x_1, x_2, x_3, ...\\right\\}$$\n\n### Set Builder (Uncountable) Notation\n\nSet builder notation can represent the above notations in addition to the uncountable set notation.\n\n$$\\left\\{ x \\mid x \\text{ satisfies } P \\right\\} $$\n\n"$\\mid$" means **such that**.\n\n### Subset ($\\subseteq$)\n\nLet $A$ and $B$ be sets.\n\nIf every element in $A$ is also an element of $B$, $A$ is a subset of $B$. It is denoted as:\n\n$$A \\subset B$$\n\n$A$ must equal $B$.\n\n### Proper Subset ($\\subsetneq$)\n\nLet $A$ and $B$ be sets.\n\nIf $A \\subset B$ but $A \\neq B$, $A$ is a proper subset of $B$. It is denoted as:\n\n$$A \\subsetneq B$$\n\nIn other words, there is at least one element in $B$ that is not in $A$.\n\n### Super Set ($\\supseteq$)\n\nLet $A$ and $B$ be sets.\n\nIf every element in $A$ is also an element of $B$, $B$ is a super set of $A$. It is denoted as:\n\n$$B \\supset A$$\n\n$B$ must equal $A$.\n\n### Proper Super Set ($\\supsetneq$)\n\nLet $A$ and $B$ be sets.\n\nIf $B \\supset A$ but $B \\neq A$, $B$ is a proper super set of $A$. It is denoted as:\n\n$$B \\supsetneq A$$\n\nIn other words, there is at least one element in $B$ that is not in $A$.\n\n### Disjoint Set\n\nIf the sets $A$ and $B$ are **disjoint**, $A$ does not share an element with $B$.\n\n$$A \\cap B = \\emptyset$$\n\n### Partition\n\nGiven a set $S$, a collection of sets is a **partition** of $S$ if the sets in the collection are [disjoint](#disjoint-set) and their [union](#union-cup) is $S$.\n\n$$A \\cup B \\cup ... = S$$\n\n# Set Operations\n\n### Complement ($S^c$)\n\nLet $S$ be a [proper subset](#proper-subset-subsetneq) of the [universal set](#universal-set-omega) $\\Omega$.\n\n$$S^c = \\left\\{ x \\in \\Omega \\mid x \\notin S \\right\\}$$\n\nIn other words, the complement is set of all elements in $\\Omega$ excluding the ones in $S$.\n\n### Union ($\\cup$)\n\nLet $A$ and $B$ be sets.\n\n$$A \\cup B = \\left\\{ x \\mid x \\in A \\lor x \\in B \\right\\}$$\n\nIn other words, the union is the set of all elements in $A$ or $B$.\n\n#### Union Sum\n\n$$\\displaystyle \\bigcup_{n=1}^{\\infty} S_n = S_1 \\cup S_2 \\cup S_3 \\cup ...$$\n\n### Intersection\n\nLet $A$ and $B$ be sets.\n\n$$A \\cap B = \\left\\{ x \\mid x \\in A \\land x \\in B \\right\\}$$\n\nIn other words, the intersection is the set of elements in both $A$ and $B$.\n\n#### Intersection Sum\n\n$$\\displaystyle \\bigcap_{n=1}^{\\infty} S_n = S_1 \\cap S_2 \\cap S_3 \\cap ...$$\n'}}]);