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
visit every sibling node before we look at a child

Create a queue, and a variable to store the values of nodes visited (an array [2,5,8,3,19])  
Place the root node in the queue  
As long as there is anything in the queue, dequque a node from the queue and push the value of the node into the variable that stores the nodes  
if the dequeued node has a left property, add it to the queue.  
if the dequeued node has a right property, add it to the queue.  
When, fall out of the loop because there is nothing in the queue, return the variables that stores all the nodes

