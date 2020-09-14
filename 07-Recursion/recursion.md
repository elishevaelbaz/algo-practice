# Recursion
Recursion is a process that calls itself

Some examples we've been using recursion without necessarily knowing it
- JSON.parse or JSON.stringify are often written recursively
- document.getElementById & DOM traversal algorithms - DOM is tree structure - can be 100 layers nested of divs

### Call Stack
  data structure that manages what happens when functions are invoked
when a function is invoked, it is placed on the top of the call stack
when JS sees the `return` keyword or when the function end, the compiler will remove the function from the stack

A recursive funstion keeps pushing the same function, over and over, onto the call stack

There are 2 essentials parts to a recursive function
- base case
- different input (each time it gets called with different input)

Recursive function will invoke the same function over and over, until the __base case__ is reached
The *base case* is condition when the recursion ends