# Binary Heaps

## Heaps
Tree-based data structure  
There are many kinds of heaps including:
- Fibonacci heap
- Leonardo heap
- Soft heap
- Leftist heap

We will focus on __binary heap__
Binary heap is similar to binary search tree, but with some different rules

__Max Binary Heap__
parent nodes are always larger than the children

__Min Binary Heap__
Parent nodes are always smaller than child nodes. 

(Unlike BST where left children are smaller and right children are larger than parent)

Each node can have at most 2 child nodes (binary) 
in __Max Binary Heap__ the parent is always greater than the children, but there are no guarantees between children  
Binary heap is as compact as possible. All the children of each node are as full as they can be. Left children are filled first

### Why do we care about heaps?
Will use Binary Heaps to implement priority queues - __very__ commonly used in data structures  
Also used with graph traversal algorithms

##### Finding a parent or child node
parent to find child node (where n is the index of parent) children are 2n +1 and 2n +2  
To find a parent of a node (at index n), will be at Math.floor((n -1 )/2)

#### Priority Queue
Data Structure where each element has a priority.  
Elements with higher priority are served before elements with lower priority

(Priority queue is an abstract concept, they are separate from heaps. Can implement with a list/array, not a _good_ implementation, but __can be done__ - simple, but naive)

##### Time Complexity:
Insertion and Deletion: __O(log n)__  
Suppose we wanted to insert a large number (worst case) we are only comparing it once each level.  
Each time we go down a step in binary heap, we are doubling the number of nodes, but each we are only increasing the number of comparisons by 1  

We mentioned in BST, the worst case, wouldn't be O(log n), but it would be linear - how ever many nodes are in there  
<img src="../22-Binary%20Search%20Trees/BST-worst-case.png" alt="worst case binary search tree">  
but this won't be a problem with heaps because the one of the rules for a heap is that it be balanced, ie filled out left to right

Best and worst case: Insertion and Deletion: __O(log n)__  
Search __O(n)__ (binary heaps are not really meant for searching)

