# Dijkstra's Algorithm

Finds the shortest path between two vertices on a graph.  

Uses priority queue as part of its implementation.  

Dijkstra was a Dutch programmer, physicist. established a lot of the academic rigor that is present in CS.  
Many of his discoveries and algorithms are still in use today.

### Uses
- GPS - finding fastest route
- Network Routing - finds shortest path for data across open networks
- Biology - used to model the spread of viruses among humans
- Airline tickets - finding cheapest route to your destination

So far we have only worked with unweighted graphs.  
We need to use __weighted graphs__ to store information about the edges (value associated - distance, price etc)

## The Approach

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node, we are going to visit, we look at each of it's neighbors.
3. For each neighbor, we calculate the distance by summing the total eges that lead to the node we are checking _from the staring node._
4. If the new total distance to a node is less than the previous total, we stor the new shorter distance for that node.

Every time through, we pick the current smallest distance from A that we haven't visited, we explore each of its neighbors and calculate the new shortest distance to each neighbor. If it's smaller than what we already stored, we update the distance that we store, and we update our 'previous' data structure
this allows us to piece everything together. (E <- F <- D etc)
('previous' data structure looks like an object with keys of each vertex, and values of the previous vertex that got us there starting from A - with shortest difference)

The way we are implementing it, it actually gives us the shortest path from A to any of the other vertices