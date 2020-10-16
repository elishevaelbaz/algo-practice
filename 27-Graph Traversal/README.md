# Graph Traversal

Visiting every node in the graph - unlike a tree which only had 1 path between 2 nodes, there is more than 1 way to travel between nodes in a graph

## Real World Applications
- peer to peer networking
- web crawlers (many web pages link to one another)
- finding closest matches/recommendations
- shortest path problems
  - GPS navigation
  - solving mazes
  - AI (Shortest path to win the game)

### Depth First
- recursive
- iterative - using stack

Not as intuitive what depth vs breadth is in a graph (much clearer in a tree)  
Depth  = follow neighbors and continuing to follow neighbors before backtracking  
  so if A is neighbors with B and C,  
  we go from A -> B and then go to one of B's neighbors (before going to C)  

It's important to remember where we have already visited so we don't repeat or get stuck visiting the same 2 (infinite loop)

### Breadth First
- using queue

Prioritizes visiting all the neighbors at a given depth before moving downwards
(before visiting neighbors of neighbors)

Can look at the height, based on how many jumps away from the starting node
