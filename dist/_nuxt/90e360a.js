(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{500:function(n,e,t){"use strict";t.r(e),e.default='---\nheader: Discrete Math\ndescription: Integer number of things.\n---\n\n# Basics of Math\n\n### Variables\n\nVariables are a placeholder for an unknown value to generalize it.\n\n### Mathematical Statements\n\n| Type        | Description                     | Example           |\n| ----------- | ------------------------------- | ----------------- |\n| Universal   | True for all elements in a set. | "For all ..."     |\n| Conditional | True under a constraint.        | "If ... then ..." |\n| Existential | True for at least one element.  | "There is a ..."  |\n\n# Set Notation\n\nA set is a collection of elements.\n\n### Set Roster Notation\n\n$$S = \\left\\{ x, y, z \\right\\}$$\n\n### Symbols\n\n| Symbol | Meaning      | Example   |\n| ------ | ------------ | --------- |\n| $\\in$  | in           | $x \\in S$ - "$x$ is an element of $S$" |\n| $\\dots$| and so forth | $\\left\\{ 1, 2, 3, ... \\right\\}$ - "Set of all positive integers" |\n| $\\mathbb{R} \\text{}$ | Set of all real numbers | $\\left\\{ ..., -1, -\\frac{1}{2}, 0, \\frac{1}{2}, 1, ... \\right\\}$ |\n| $\\mathbb{Z} \\text{}$ | Set of all integers | $\\left\\{ ..., -2, -1, 0, 1, 2, ... \\right\\} \\text{}$ |\n| $\\mathbb{Q} \\text{}$ | Set of all rational numbers, quotients of integers | - |\n\n### Axiom of Extension\n\nA set is defined by its elements, not its element\'s order or frequency.\n\n### Set Builder Notation\n\nSet builder notation is a shorthand method to describe a set\'s elements. We can write it like:\n\n| Notation                                     | Translation |\n| -------------------------------------------- | ----------- |\n| $\\left\\{ x \\in S \\mid P(x) \\right\\} \\text{}$ | The set of all elements $x$ in $S$ such that $P(x)$ is true. | \n\nFor instance, these two sets are equivilent:\n\n$$\\left\\{ x \\in \\mathbb{R} \\mid 10 \\le x \\le 15 \\right\\} = \\left\\{10, 11, 12, 13, 14, 15 \\right\\}$$\n\n### Subset\n\nLet $A$ and $B$ be sets. If $A$ is a subset of $B$, or $A \\subseteq B$, then each element of $A$ is also an element of $B$. In other words, $A$ is contained in $B$ and $B$ contains $A$.\n\n| Notation         | Translation |\n------------------ | ----------- |\n| $A \\subseteq B$  | $\\forall$ elements $x$, if $x \\in A$ then $x \\in B$. | \n| $A \\subsetneq B$ | There is at least one element $x \\mid x \\in A, x \\not\\in B$ |\n\n#### Subset Example\n\nLet\'s say $A$ and $B$ are sets.\n\n$$A = \\left\\{ 1,2,3 \\right\\}$$\n$$B = \\left\\{ 1,2,3,4 \\right\\}$$\n\n$A \\subseteq B$ because each element $x$ (1, 2 and 3) in $A$ exists in $B$.\n\n#### Non-Subset Example\n\nLet\'s say $A$ and $B$ are sets.\n\n$$A = \\left\\{ 1,2,3 \\right\\}$$\n$$B = \\left\\{ 1,2,4 \\right\\}$$\n\n$A \\subsetneq B$ because the element $3$ in $A$ does not exist in $B$.\n\n### Proper Subset\n\n- Let $A$ and $B$ be sets.\n- If $A$ is a proper subset of $B$, then each element of $A$ is in $B$.\n- There is at least one element of $B$ not in $A$.\n\nIn other words, $A$ cannot equal $B$. There must be at least one element that differs between the two sets.\n\n### Ordered Pair\n\n- Let $a$ and $b$ be elements.\n- $(a, b)$ is an ordered pair with $a$ and $b$ together such that $a$ is the first element of the pair and $b$ is the second. \n\nLet $c$ and $d$ be two other elements, and let $(c, d)$ be another ordered pair. \n\n$(a, b)$ = $(c, d)$ is true if $a=c$ and $b=d$.\n\n# Relations and Functions\n\n### Cartesian Product\n\n- Let $A$ and $B$ be sets.\n- The Cartesian product of $A$ and $B$, or $A \\times B$, is the set of all ordered pairs $(a, b)$ such that $a \\in B$ and $b \\in B$ is:\n\n$$A \\times B = \\left\\{ (a, b) \\mid a \\in A, b \\in B \\right\\}$$\n\n#### Cartesian Product Example\n\nLet $A = \\left\\{ 1, 2 \\right\\}$ and $\\left\\{ 3, 4 \\right\\}$. The Cartesian product of $A$ and $B$ is:\n\n$$A \\times B = \\left\\{ (1, 3), (1, 4), (2, 3), (2, 4) \\right\\} \\text{}$$\n\n#### Cartesian Product and Cartesian Plane\n\nThe points on the Cartesian Plane can be expressed in the following way:\n\n$$\\bold R \\times \\bold R = \\{ (x,y) \\mid x \\in \\mathbb R, y \\in \\mathbb R \\}$$\n\n### Relationships\n\nA relationship is the connection between two different things.\n\n- Let $A$ and $B$ be sets.\n- A relation set $R$ from $A$ to $B$ is a subset of $A \\times B$ ($R \\subseteq A \\times B$).\n\nNow we can say:\n\n- Given an ordered pair $(x, y) \\in A \\times B$, we can state $x$ is related to $y$ by $R$, or $x$ $R$ $y$ iff $(x, y) \\in R$.\n- $A$ is the domain of $R$\n- $B$ is the co-domain.\n- $x$ $R$ $y$ means $(x,y) \\in R$.\n- $x$ $\\not{R}$ $y$ means $(x,y) \\not\\in R$.\n\nIn other words, we can relate the elements of the ordered pair $(x,y)$ of the cartesian product of $A$ and $B$ ($A \\times B$) by imposing a constraint on a third relational set and seeing if the pair is contained in $R$.\n\nThis lays the framework for function notation.\n\n### Functions\n\nA function $F$ from a set $A$ to set $B$ is the relationship between the domain $A$ and co-domain $B$. It has the restrictions that:\n\n- $\\forall x \\in A, \\exists y \\in B \\mid (x,y) \\in F$\n- $\\forall x \\in A$ and $y,z \\in B$, if $(x, y) \\in F$ and $(x,z) \\in F \\implies y=z$\n\nIn other words, for each $x$ in the domain, there exists a value $y$ for $x$ in the co-domain. This is expressed as an ordered pair that is in $F$, $(x,y) \\in F$. Additionally, each element $x$ in the domain may map to only one value $y$ in the co-domain (each ordered pair in $F$ is distinct).\n\n#### Function Notation\n\nIf $A$ and $B$ are sets and $F$ is a function from $A$ to $B$, then given any element $x \\in A$, the unique element in $B$ that is related to $x$ by $F$ is $F(x)$, read as F of x.\n\n#### Function Mapping Notation\n\nLet $A$ and $B$ be sets and $f$ be a function. If $x \\in A$ and $y \\in B$, a function $f: A \\rightarrow B$ is defined by $f: x \\mapsto y$ means $f(x) = y$, the domain is defined on the set $A$ and the co-domain is defined on the set $B$.\n\n#### Function Equality\n\nLet $f$ and $g$ be functions.\n\n$f=g$ iff $f(x) = g(x) \\forall x \\in A$.\n\n# Logic and Statements\n\n### Logical Connective Symbols\n\n| Symbol   | Meaning           |\n| -------- | ----------------- |\n| $\\lnot$  | negation (not)    |\n| $\\wedge$ | conjunction (and) |\n| $\\vee$   | disjunction (or)  |\n\n### Structure\n\nA compound statement is composed of:\n\n- [Premises](#premise): Statements.\n- [Conclusion](#conclusion): An assertion based on premises.\n\nIt usually takes the form of: \n\nIf $p$ or $q$, then $r$. $q$. Therefore, $r$.\n\nThere is also:\n\n| Structure           | Translation      |\n| ------------------- | ---------------- |\n| $p$ but $q$         | $p \\wedge q$     |\n| neither $p$ nor $q$ | $\\lnot p$ $\\vee$ $\\lnot q$ |\n\n### Statements\n\nA statement is a sentence that is true or false but not both.\n\n#### Statement Examples\n\n- True: $1+1 = 2$\n- False: $1+1 = 3$\n\n#### Non-statement Examples\n\n- $x + y > 0$ since it is true for some values but not for values $x + y \\leq 0$\n\n### Statement (Propositional) Form\n\nA statement form is one that contains statement variables and [logical connectives](#logical-connective-symbols) only.\n\nFor example, the statement form of "$\\text{My clothes are }$$\\underbrace{\\text{clean}}_p$ $\\text{and not }$$\\underbrace{\\text{wrinkled}}_q$" would be $p$ $\\wedge$ $\\lnot q$.\n\n### Truth Table\n\nA truth table contains all of the possible combinations of a statement.\n\n### Negation Truth Table\n\n| $p$ | $\\lnot p$ |\n| - | - |\n| T | F |\n| F | T |\n\n### Conjunction Truth Table\n\n| $p$ | $q$ | $p \\wedge q$ |\n| - | - | - |\n| T | T | T |\n| T | F | F |\n| F | T | F |\n| F | F | F |\n\n### Disjunction Truth Table\n\n\n| $p$ | $q$ | $p \\vee q$ |\n| - | - | - |\n| T | T | T |\n| T | F | T |\n| F | T | T |\n| F | F | F |\n\n### Logical Equivalence\n\nBeing logically equivalent means that two statement forms have identical truth values for each combination possibility.\n\nIf $P$ and $Q$ are two [statement forms](#statement-propositional-form) and they are logically equivalent, then $P \\equiv Q$.\n\n### Tautology\n\nA statement form that is always true in every interpretation.\n\n### Contradiction\n\nA statement form that is always false in every interpretation.\n\n#### Tautology and Contradiction Example\n\nA tautology is denoted as $t$, while a contradiction is denoted as $c$.\n\n| $p$ | $\\lnot p$ | $p \\lor \\lnot p$ | $p \\land \\lnot p$ |\n| --- | - | - | - |\n| T | F | T | F |\n| F | T | T | F |\n\n$p \\lor \\lnot p$ is the definition of a tautology. All interpretations are true.\n\n$p \\land \\lnot p$ is the definition of a contradiction. All interpretations are false.\n\n# Conditional Statements\n\nA conditional statement has the form: If $p$ then $q$. More formally, the notation is $p \\rightarrow q$, which means $p$ implies $q$.\n\nThe truthfulness of $q$ is dependent on the statement of $p$.\n\n### Hypothesis (Antecedent)\n\nThe if statement ($p$).\n\n### Conclusion (Consequent)\n\nThe then statement ($q$).\n\n### Conditional Statement Truth Table\n\n| $p$ | $q$ | $p \\rightarrow q$ |\n| - | - | - |\n| T | T | T |\n| T | F | F |\n| F | T | T |\n| F | F | T |\n\n### Vacuously True\n\nAn if statement is **vacuously true** (true by default) if the hypothesis is false.\n\n### Conditional Statement as Or\n\nA conditional statement is equivalent to the negation of the hypothesis ORed with the consequence.\n\n$$p \\rightarrow q \\equiv \\lnot p \\lor q$$\n\n#### Conditional Statement as Or Example\n\n- **Or**: $\\text{Either } \\underbrace{\\text{you do the dishes}}_p \\text{ or } \\underbrace{\\text{you will not get desert}}_q$.\n- **Conditional**: $\\text{If } \\underbrace{\\text{you do not do the dishes}}_{\\lnot p}, \\underbrace{\\text{you will not get desert}}_q$.\n\n\n### Negation of Conditional Statement\n\nIf we negate a conditional statement, the resulting statement will be the hypothesis ANDed with the negation of the consequent.\n\n$$\\lnot (p \\rightarrow q) \\equiv p \\land \\lnot q$$\n\n#### Negation of Conditional Statement Example\n\n- **Conditional**: If I eat dinner, I will not be hungry.\n- **Negated Conditional $\\rightarrow$ And Statement**: I ate dinner and I am hungry.\n\n### Contrapositive of Conditional Statement\n\nA conditional statement is equivalent to the conditional statement of the negated hypothesis and negated consequence.\n\n$$p \\rightarrow q \\equiv \\lnot q \\rightarrow \\lnot p$$\n\n### Contrapositive of Conditional Statement Example\n\n- **Conditional**: If I drive to work, I will be on time.\n- **Contrapositive**: If I am not on time, then I did not drive to work.\n\n### Converse of Conditional Statement\n\nLet "$p \\rightarrow q$" be a conditional statement.\n\nThe **converse** of the statement is:\n\n$$q \\rightarrow p$$\n\n### Inverse of Conditional Statement\n\nLet "$p \\rightarrow q$" be a conditional statement.\n\nThe **inverse** of the statement is:\n\n$$\\lnot p \\rightarrow \\lnot q$$\n\n### Only If\n\n$p$ only if $q$ means $p$ is true if $q$ is true, or in other words:\n\n$$\\lnot q \\rightarrow \\lnot p \\equiv p \\rightarrow q$$\n\n$p$ can happen **only if** $q$ happens. Therefore, if $q$ does not occur, $p$ cannot occur.\n\n### Biconditional\n\nLet $p$ and $q$ be statement variables.\n\nThe **biconditional** of $p$ and $q$ is "$p$ if and only if (iff) $q$":\n\n$$p \\leftrightarrow q$$\n\n$p$ can only happen if $q$ happens. Similarly, $q$ must be true if $p$ is true.\n\n#### Truth Table for Biconditional\n\n| $p$ | $q$ | $p \\leftrightarrow q$ |\n| - | - | - |\n| T | T | T |\n| T | F | F |\n| F | T | F |\n| F | F | T |\n\n### Sufficient Condition\n\nLet $r$ be a **sufficient condition** for $s$. This means:\n\n$$r \\rightarrow s$$\n\nor $r$ is sufficient to guarantee $s$ is true.\n\n### Necessary Condition\n\nLet $r$ be a **necessary condition** for $s$. This means:\n\n$$\\lnot r \\rightarrow \\lnot s$$\n\nor if $r$ is false, $s$ is false.\n\n### Sufficient and Necessary Condition\n\nLet $r$ be a **sufficient and necessary** condition. This means:\n\n$$r \\leftrightarrow s$$\n\n# Arguments\n\nAn argument is a sequence of statements.\n\n### Argument Form\n\nAn argument form is the sequence of [statement forms](#statement-propositional-form).\n\n### Premise\n\n**Premises** are statements in an argument and all statement forms in an argument form except the final one.\n\n### Conclusion\n\nA **conclusion** is the final statement or statement form.\n\n# Valid Argument Form\n\nA **valid argument form** means if the premises are all true, the conclusion is true.\n\n#### Critical Row\n\nThe **critical row** is the row of a truth table where all of the premises are true.\n\nAn argument form is said to be invalid if the [conclusion](#conclusion) is false in the critical row.\n\n### Modus Ponens\n\n**Modus Ponens** is a [valid argument form](#valid-argument-form) that says the conclusion is affirmed. It has the form:\n\n$$\np \\rightarrow q. \\\\\np. \\\\\n\\therefore q\n$$\n\n### Modus Tollens\n\n**Modus Tollens** is a [valid argument form](#valid-argument-form) that says the conclusion is a denial. It is [logically equivalent](#logical-equivalence) to [Modus Ponens](#modus-ponens) through the [contrapositive](#contrapositive-of-conditional-statement) identity. It has the form:\n\n$$\np \\rightarrow q. \\\\\n\\lnot q. \\\\\n\\therefore \\lnot p.\n$$\n\n### Rule of Inference\n\nA **rule of inference** is a [valid argument form](#valid-argument-form).\n\n#### Generalization\n\n$$\np. \\\\\n\\therefore p \\lor q.\n$$\n\n$$\nq. \\\\\n\\therefore p \\lor q.\n$$\n\n#### Elimination\n\n$$\np \\lor q. \\\\\n\\lnot q. \\\\\n\\therefore p.\n$$\n\n$$\np \\lor q. \\\\\n\\lnot p. \\\\\n\\therefore q.\n$$\n\n#### Transitivity\n\n$$\np \\rightarrow q. \\\\\nq \\rightarrow r. \\\\\n\\therefore p \\rightarrow r.\n$$\n\n### Division into Cases\n\n$$\np \\lor q. \\\\\np \\rightarrow r. \\\\\nq \\rightarrow r. \\\\\n\\therefore r.\n$$\n\n### Sound Argument\n\nAn argument is **sound** iff it is valid and all its premises are true.\n\n### Unsound Argument\n\nAn argument that is not sound.\n\n# Fallacy (Invalid Argument)\n\nA fallacy is an invalid argument due to an error in reasoning. In other words, the [critical row](#critical-row) contains [premises](#premise) that are true but the [conclusion](#conclusion) is false.\n\n### Converse Error\n\nThe following argument is **invalid**:\n\n$$\np \\rightarrow q. \\\\\nq. \\\\\n\\therefore p.\n$$\n\n### Inverse Error\n\nThe following argument is **invalid**:\n\n$$\np \\rightarrow q. \\\\\n\\lnot p. \\\\\n\\therefore \\lnot q.\n$$\n\n# Contradictions\n\nIf the statement $p$ is false and leads logically to a contradiction, you can conclude $p$ is true.\n\n$$\n\\lnot p \\rightarrow c \\\\\n\\therefore p\n$$\n\n# Number Theory\n\n### Even Integer\n\nLet $n$ be an integer.\n\n$n$ is even $\\iff \\exists$ an integer $k$ such that $n = 2k$.\n\n#### Theorem.\n\nThe sum of any two even integers is even.\n\n### Odd Integer\n\nLet $n$ be an integer.\n\n$n$ is odd $\\iff \\exists$ an integer $k$ such that $n = 2k + 1$.\n\n### Prime\n\nLet $n$ be an integer for $n > 1$.\n\n$n$ is prime $\\iff \\forall$ positive integers $r$ and $s$, if $n = rs$ then either $r = 1$ and $s = n$ or $r = n$ and $s = 1$.\n\n### Rational\n\n$r$ is rational $\\iff \\exists$ integers $a$ and $b$ such that $\\displaystyle r = \\frac{a}{b}$ and $b \\neq 0$.\n\n#### Theorem: Every integer is rational.\n\n#### Theorem: The sum of any two rational numbers is rational.\n\n#### Corollary: The double of a rational number is rational.\n\n#### Zero Product Property\n\nIf neither of two real numbers is zero, then their product is also not zero.\n\n### Irrational\n\nA real number that is not [rational](#rational) is irrational.\n\n### Standard Factored Form\n\nFor an integer $n > 1$, the standard factored from of $n$ is an expression of the form:\n\n$$n = p_1^{e_1} p_2^{e_2} p_3^{e_3} ... p_k^{e_k}$$\n\nwhere\n\n- $k$ is a positive integer\n- $p_1, p_2, ..., p_k$ are prime\n- $e_1, e_2, ..., e_k$ are positive integers\n- $p_1 < p_2 < ... < p_k$\n\n### Floor\n\nFor $x \\in \\mathbb{R}$, $\\lfloor x \\rfloor$ is the floor of $x$.\n\n$\\lfloor x \\rfloor = n \\iff n \\leq x \\lt n + 1$\n\n### Ceiling\n\nFor $x \\in \\mathbb{R}$, $\\lceil x \\rceil$ is the floor of $x$.\n\n$\\lceil x \\rceil = n \\iff n - 1 \\lt x \\leq n$\n\n### Divisibility\n\nIf $n, d \\in \\mathbb{Z}$ and $d \\neq 0$ then:\n\n$n$ is divisible by $d$ iff $n = d \\cdot k$ for $k \\in \\mathbb{Z}$.\n\n$n$ being divisible by $d$ also means:\n- $n$ is a multiple of $d$\n- $d$ is a factor of $n$\n- $d$ is a divisor of $n$\n- $d$ divides $n$\n\n### Divides\n\nIf $n, d \\in \\mathbb{Z}$, $d$ divides $n$ is denoted as $d \\mid n$.\n\n$d \\mid n \\iff \\exists$ an integer $k$ such that $n = dk$.\n\n# Sequences\n\n### Finite Sequence\n\n$$a_m, a_{m+1}, a_{m+2}, \\dots, a_n$$\n\n### Infinite Sequence\n\n$$a_m, a_{m+1}, a_{m+2}, \\dots, a_n$$\n\n### Explicit Formula\n\nA sequence showing how $a_k$ depends on $k$.\n\n### Summation Notation\n\n$$\\sum_{k=m}^n a_k = a_m + a_{m+1} + a_{m+2} + \\dots + a_n$$\n\n### Product Notation\n\n$$\\prod_{k=m}^n a_k = a_m \\cdot a_{m+1} \\cdot a_{m+2} \\cdot \\dots \\cdot a_n$$\n\n### Factorial\n\nFor $n \\in \\mathbb{Z}^+$,\n\n$$n! = n \\cdot (n-1) \\dots 3 \\cdot 2 \\cdot 1$$\n\n#### Zero Factorial\n\n$$0! = 1$$\n\n### Choose (Combinations)\n\nFor $n, r \\in \\mathbb{Z}^+$ and $0 \\leq r \\leq n$,\n\n$$\n\\left(\n\\begin{array}{c}\nn \\\\\nr\n\\end{array}\n\\right) =\n\\frac{n!}{r! (n - r)!}\n$$\n\nThe notation is said as $n$ choose $r$. It represents a combination where order in a set does not matter for the number of possibilities.\n\n# Functions\n\nA function describes a dependence of a varying quantity to another. Give a function $f$ from a set $x$ ([domain](#domain)) to a set $y$ ([co-domain](#co-domain)), then $f$ maps $x$ to $y$:\n\n$$f: x \\rightarrow y$$\n\n$$f(x) = y$$\n\n### Constraints\n\n- Every element in $x$ is related to some element $y$.\n- No element in $x$ is related to more than one element $y$.\n\n### Domain (Preimage)\n\nThe domain $x$ is the possible input values of $f$.\n\n### Co-domain\n\nThe co-domain $y$ is the possible output values of $f$.\n\n### Range (Image)\n\nThe range is the set of all values of $f$ that are actually output. It is a subset of the [co-domain](#co-domain).\n\n## Types of Functions\n\n### One-to-One (Injective)\n\nA one-to-one function means that each element in the domain $x$ maps to a unique element in the co-domain $y$.\n\nLet $f$ be a function from a set $x$ to set $y$.\n\n$$f: x \\rightarrow y \\text{ is one-to-one} \\iff \\forall x_1, x_2 \\in x, f(x_1) = f(x_2) \\rightarrow x_1 = x_2$$\n\n### Onto (Surjective)\n\nA surjective function is one in which for every $x_n \\in x$ you there is a corresponding element $y_n \\in y$. In other words, the range is equal to the co-domain.\n\n$$f:x \\rightarrow y \\text{ is onto} \\iff \\forall y_n \\in y, \\exists x_n \\in x \\mid f(x) = y$$\n\n### One-to-One Correspondence (Bijection)\n\nA bijective function is both [injective](#one-to-one-injective) and [surjective](#onto-surjective).\n\n### Inverse\n\nGiven a bijective function $f: x\\rightarrow y$, \n\n$$f^{-1}(y) = x \\iff y = f(x)$$\n\n### Power Function\n\n$$p_a(x) = x^a \\quad \\forall x \\in \\mathbb{R}^+$$\n\n# Graph Theory\n\n## Terms\n\n### Graph\n\nA graph is a structure of discrete objects with connections between them.\n\n### Vertices\n\nThe discrete objects.\n\n### Edges\n\nThe connections joining vertices.\n\n### Endpoints\n\nEach edge is associated with a set of either one or two vertices.\n\n### Loops\n\nAn edge with one endpoint.\n\n### Parallel \n\nAn endpoint that shares two or more distinct edges.\n\n### Connectedness\n\nAn edge connects two endpoints.\n\n### Adjacent\n\nTwo vertices that are connected by an edge.\n\n### Incident\n\nAn edge is incident to a vertex.\n\n### Degree\n\n## Types of Graphs\n\n### Directed Graph (digraph)\n\n### Simple Graph\n\n### Complete Graph\n\n### Complete Bipartite Graph\n\n### Subgraph\n\n## Applications\n\n### Walks\n\n#### Closed Walk\n\n### Trails\n\n#### Euler Trail\n\n### Paths\n\n### Circuit\n\n#### Simple Circuit\n\n#### Hamiltonian Circuit\n\n## Graph Representation\n\n### Adjacentcy List\n\nAn adjacency list is usually used in the case of sparse graphs, where $|E| << |V|^2$.\n\nA list of the vertices a particular vertex is connected to is what an adjacentcy list consists of.\n\n### Adjacentcy Matrix\n\nIn this case, an adjacency matrix is used where $|E|$ is close to $|V|^2$. \n\n## Algorithms\n\n### Topological Sort\n\nTopological sort sorts directed acyclic graphs. It is usually used like a dependency graph.\n\n$(u, v)$ represents an edge in the edge set.\n\n## Graph Terminology\n\nGiven a graph $G = (V, E)$ where $V$ is a vertex set and $E$ is an edge set:\n\n### Isolation\n\nA vertex is isolated if its degree is zero, or in other words it has no edges.\n\n### Path\n\nA path of length $k$ from vertex $u$ to $u\'$ in a graph $G=(V,E)$ is a sequence \n\n$$(v_0, v_1, \\dots, v_k)$$\n\nsuch that $u = v_0$, $u\' = v_k$ and $(v_{i - 1}, v_i) \\in E$ for $i = 1, 2, \\dots, k$.\n\n### Directed Graph\n\nA directed graph contains edges that are directed.\n\n- $V$ is a finite set\n- $E$ is a binary relation on $V$.\n- Self-loops are possible\n\n#### Incidence\n\nAn edge $(u, v)$ is incident from $u$ and indicent to $v$. In other words, the edge is directed from $u$ to $v$.\n\n#### Adjacency\n\nGiven an edge $(u, v)$, vertex $u$ is adjacent to $v$, but not vice versa.\n\n#### Degree\n\nThe degree of a directed graph is its in-degree plus out-degree vertices.\n\n#### Cycle\n\nA path of a directed graph forms a cycle if for a path $(v_0, v_1, \\dots, v_k)$ $v_0 = v_k$ and the path contains at least an edge.\n\n### Undirected graph\n\nAn undirected graph contains edges that are bidirectional.\n\n- $E$ is a set ${u, v}$ such that $u, v \\in V$ and $u \\neq v$.\n\n#### Adjacency\n\nGiven an edge $(u, v)$, the vertices $u, v$ are adjacent to each other.\n\n#### Degree\n\nThe degree of an undirected graph is the number of incident edges onto a vertex.\n\n#### Connectedness\n\nAn undirected graph is connected if every vertex is reachable from all other verticies.\n\n### Isomorphic Graphs\n\nTwo graphs $G=(V,E)$ and $G\'=(V\',E\')$ are isomorphic if there exists a bijection $f: V \\rightarrow V\'$ such that $(u,v) \\in E$ iff $(f(u), f(v)) \\in E\'$.\n\nIn other words the two graphs $G$ and $G\'$ contain the same topology.\n\n### Relaxation\n\nFor each vertex $v \\in V$, we have an attribute $v.distance$ that checks whether we can improve the shortest path to $v$ foun so far by going through $u$.\n\nRelaxating an edge $(u,v)$ is merely a test to see if we can improve the shortest path to $v$ so far from the node $u$.\n\nWe update $v.distance$ if $v.distance > u.distance + w(u,v)$ to $v.distance = u.distance + w(u,v)$.\n'}}]);