# Graphs

A graph is a collection of nodes and connections between those nodes  

Tree is a special type of graph (so is a linked list)

## Uses for Graphs
- social networks
- location/mapping (calculating the fastest path)
- routing algorithms
- visual hierarchy
- file system optimizations
- recommendation engines ("people also watched", "you might also like...")
- EVERYWHERE!

## Types of Graphs

### Terminology
__vertex__ - a node  
__edge__ - connection between nodes  

tree - a graph in which any two vertices are connected by exactly one path  

__undirected__ graph - no direction/polarity to the edges - they are 2 way connections  (ex facebook friends - you see their content, and they see yours too)  

__directed__ graph - direction assigned to the edge (represented with arrows, can be bidrectional or unidirectional) (ex instagram, you can follow someone without them following you)

__weighted__ graph - each edge has a value assigned to it (in maps to find shortest way to get from one place to another)  
vs __unwweighted__ - no value to the edge

## Representing/Storing a Graph
- Adjacency Matrix
  can use a matrix to represent the connections (boolean values or 0s and 1s if there is a connection between the vertices represened by the row and col)  
  for each new vertex, would need to add a new row and col
- Adjacency List
  use an array to store the edges - if the nodes are represented by numbers, you can see the connections to 0 for example, by looking at 0th element - [1, 5], and you can see there are edges between 0 and 1 and 0 and 5  
  ```[
    [1, 5],
    [0, 2]
  ]```
  If the vertices are not numeric, or huge gaps between them, can use a hash table 
  ```
  {
    a: ["b", "f"],
    b: ["a", "c"]
  }
  ```

#### Time Complexity: 
| Operation     | Adjacency List         | Adjacency Matrix | 
| -----------   | -----------            | -----------      |
| Add Vertex    | O(1)                   | O( \| V^2 \| ) 
| Add Edge      | O(1)                   | O(1)
| Remove Vertex | O( \| V \| + \| E \| ) | O( \| V^2 \| ) 
| Remove Edge   | O( \| E \| )           | O(1)
| Query         | O( \| V \| + \| E \| ) | O(1)
| Storage       | O( \| V \| + \| E \| ) | O( \| V^2 \| ) |
|  | __Can take up less space (in sparse graphs)__| Takes up more space (in sparse graphs)
|  | __Faster to iterate over all edges__  | Slower to iterate over all edges
|  | Can be slower to look up specific edges | __Faster to look up a specific edge__ (just look in `[i][j]`)


**We will use Adjacency List because of the space it takes up, and most data in the real-world tends to lend itself to sparser and/or larger graphs