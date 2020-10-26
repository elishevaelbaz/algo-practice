# Tree Traversal
Given any tree, (not necessarily binary), no special order, any number of nodes - generic tree  
visit each node once

Many different way to traverse  

Two main approaches:
- __Depth-first search__ - going down (vertically)
  - InOrder
  - PreOrder
  - PostOrder
- __Breadth-first search__ - start at the beginning and work across the tree horizontally

## Breadth First Search (BFS)
Visit every sibling node (horizontally) before we look at a child

Create a queue, and a variable `data` to store the values of nodes visited (an array [2,5,8,3,19])  
Place the root node in the queue  
As long as there is anything in the queue, dequeue a node from the queue and push the value of the node into the variable that stores the nodes  
if the dequeued node has a left property, add it to the queue.  
if the dequeued node has a right property, add it to the queue.  
When it falls out of the loop because there is nothing in the queue, return the variables that stores all the nodes (`data`)

## Depth First Search
Traverse down (vertically) before visiting sibling nodes  
3 steps that we change the order depending if we are doing PreOrder PostOrder or InOrder

- visit the node itself
- explore/traverse left side
- explore/traverse the right

Use __recursion__  
Create a variable `data` to store the values of the nodes visited  
Create a variable `current` and store the root of the tree in it  
Write a helper function which accepts a node
1. push the value of the node to the `data` variable ( -> PreOrder, for PostOrder would be 2,3,1, and InOrder would be 2,1,3 )
2. if the node has a left property, recursively call the helper function with the left property of the current node
3. if the node has a right property, recursively call the helper function with the right property of the current node  
Invoke the helper function with the current variable  
then return the array of values, `data`


### BFS vs DFS
Time complexity is the same, visiting each node once  
but if you have a tree with many levels (tree gets wide), the queue will need to store a lot of data in memory - high space complexity
in DFS, you only need to keep track of the nodes in a given branch all the way down. In a tree that is wider than it is deep, DFS will take less space

If we have a very long, narrow tree (kind of like a singly linked list), BFS would be better because only storing one thing in memory at any given time.

### PreOrder vs InOrder vs PostOrder
When to use one over the other?  
InOrder in a binary search tree, will end up with a set of all the nodes in (numerical) order `[3, 6, 8, 10, 15, 20]`  
PreOrder is good for cloning a tree if you want to be able to recreate it - it's clear what is the root etc `[10, 6, 3, 8, 15, 20]`
