// "A": [{node: "B", weight:10}, ...]
// "B": [{node: "A", weight:10}, ...]
// instead of "A": ["B", "C"]
class WeightedGraph {
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
  addEdge(v1, v2, weight){
    this.adjacencyList[v1].push({node: v2, weight}) // same as weight:weight
    this.adjacencyList[v2].push({node: v1, weight})
  }

  // skipping remove vertex and remove edge for now
}

let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B", 9)
graph.addEdge("A", "C", 5)
graph.addEdge("B", "C", 7)

console.log(graph.adjacencyList)