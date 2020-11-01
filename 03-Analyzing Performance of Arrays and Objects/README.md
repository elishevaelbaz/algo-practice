# Objectives
- Understand how arrays and objects work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast runtime for arrays and objects, as well as built-in methods.

## Objects
Unordered data structure, everything stored in key, value pairs.

#### When to use
- When you don't need order
- When you need fast access / insertion and removal

### Big O of Objects
- Insertion __O(1) Constant time__
- Removal __O(1) Constant time__
- Access __O(1) Constant time__
- Object.hasOwnProperty() __O(1) Constant time__

- Searching __O(n) - linear__
- Object.keys, Object.values, Object.entries __O(n) - linear__

## Arrays
Ordered data structure

#### When to use
- When you need order
- When you need fast access / insertion and removal (sort of)

insertion and removal time complexity depends on _where_  
If insert/remove at the beginning of an array -  reindexing all the elements  __O(n)__ 

### Big O of Arrays
- Insertion __depends__ (beginning (unshift) __O(n)__, end (push) __O(1)__) 
- Removal __depends__ (beginning (shift) __O(n)__, end (pop) __O(1)__)
- Access __O(1) Constant time__

- Searching __O(n) - linear__
- concat, slice, splice __O(n) - linear__
- forEach, map, reduce etc (looping over each element) __O(n) - linear__

- sort method __O(n log(n))__