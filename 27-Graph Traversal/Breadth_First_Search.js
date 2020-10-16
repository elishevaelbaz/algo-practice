// BFS
// prioritizes visiting all the neighbors at a given depth before moving downwards
// (before visiting neighbors of neighbors)

// can look at the height, based on how many jumps away from the starting node

// copying this code for Graph class from previous section, 
// see there for comments and pseudocode

class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if (!this.adjacencyList[vertex]){ //checking if it already exists first so won't overwrite
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }

  // BFS - use a queue (we will use an array with push and shift so it's FIFO)
  // accept a starting vertex
  // create a queue and place the starting vertex inside
  // create a list to store end result to be returned at very end
  // create an object to store visited vertices
  // mark the starting vertex as visited
  // while there is anything in the queue
    // remove the first vertex from the queue and push it to result array
    // loop over each vertex in currentVertex's adjacency list
      // if it hasn't been visited
        // mark as visited 
        // add to the queue

  bfs(start){
    let queue = [];
    let result = [];
    let visited = {};
    queue.push(start);
    visited[start] = true;

    while(queue.length){
      let currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]){
          queue.push(neighbor)
          visited[neighbor] = true;
        }    
      });
    }
    return result
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList)

//           A
//        /    |
//       B     C
//       |     |
//       D --- E
//       \    / 
//         F 

console.log(g.bfs("A"))
