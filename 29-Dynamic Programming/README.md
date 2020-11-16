# Dynamic Programming
A method for solving a complex probelm by breaking it down into a collection of simpler subproblems, solving each of the subproblems just once, and storing their solutions (this reduces duplication).

An approach for solving _some_ problems.  
For those problems that can be solved with __dynamic programming__, it can make a huge difference in their performance.

2 indicators that we can use dynamic programming on a given problem:

- **overlapping subproblems** - 

- **optimal substructure**

__overlapping subproblems__ - can break one problem down into subproblems which are reused several times
For example: fibonacci sequence:

<img src="fib-tree.png" alt="visual of tree data structure">

To get `fib(5)`, we need `fib(4)` and `fib(3)` and for `fib(4)` we need `fib(3)` and `fib(2)` etc so that we are calculating the same subproblems multiple times.

MergeSort on the other hand, involves _subproblems_ (breaking a big problem into smaller pieces), but they are not _overlapping_, there is no way to reduce duplication, as we are sorting different pieces of the original array each time.

<img src="merge-sort-example.png" alt="visual of tree data structure">

(A special case would be `mergeSort([10, 24, 10, 24])`, there is overlap, because would split to `[10, 24]`, `[10, 24]`)