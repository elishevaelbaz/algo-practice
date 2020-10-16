// we will be building an undirected graph

class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  // adds a key to the adjacency list with the name of the vertex 
  // and sets it's value to be an empty array
  addVertex(vertex){
    if (!this.adjacencyList[vertex]){ //checking if it already exists first so won't overwrite
      this.adjacencyList[vertex] = []
    }
  }

  // find the key of v1 and push v2 to the array
  // find the key of v2 and push v1 to the array
  // don't worry about error handling
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
  }

  // remove all edges and the vertex itself:

  // loop as long as there are any other vertices in the ajacency list for that vertex
    // call removeEdge with the vertex we are removing and any values in the ajacency list for that vertex
  // delete the key in the ajacency list for that vertex
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.adjacencyList)
g.removeVertex("Hong Kong")
console.log(g.adjacencyList)