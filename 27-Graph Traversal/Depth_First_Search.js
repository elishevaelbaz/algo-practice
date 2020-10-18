// DFS
// not as intuitive what depth vs breadth is in a graph (much clearer in a tree)
// follow neighbors before and continuing to follow neighbors before backtracking
  // so if A is neighbors with B and C,
  // we go from A -> B and then go to one of B's neighbors (before going to C)

// important to remember where we have already visited
//so we don't repeat or get stuck visiting the same 2 (infinite loop)

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

  // recursive DFS (takes in a vertex as argument)

// create a list to store end result to be returned at very end
// create an object to store visited vertices
// create a helper function which accepts a vertex
  // if the vertex is empty
    // return (this is base case)
  // add vertex to result list
  // mark vertex as visited (by adding to visited object)
  // for each neighbor in vertex's neighbors"
    //if neighbor is not visited:
      // recursively call DFS helper function on neighbor
// invoke the helper function with the starting vertex

// return the result array

  DFSRecursive(startVertex){
    let result = [];
    let visited = {};

    // using arrow function to bind
    // or right before the helper function, need to say 
      //const adjacencyList = this.adjacencyList; 
    // because 'this' won't refer to the graph inside helper function
    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex]) return;
      result.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]){
          return dfs(neighbor)
        }
      }) 
    } // can also immediately invoke by writing (function dfs(vertex){ })(startVertex)
    // invoke helper funcction
    dfs(startVertex)
    return result
  }

  // DFS Iterative - gets a different order than recursive, but still Depth-first
  // use a stack (we will use an array)
  // push the starting node onto the stack,
  // while there is something in the stack
    // pop the vertex off
    // if it hasn't been visited
      // visit (add to result list)
      // mark it as visited (in visited obj)
      // for each of its neighbors
        // push neighbor into stack
  DFSIterative(start){
    let stack = [];
    let result = [];
    let visited = {};

    stack.push(start);
    while (stack.length){
      console.log(stack)
      let currentVertex = stack.pop();
      if (!visited[currentVertex]){
        result.push(currentVertex)
        visited[currentVertex] = true;
        this.adjacencyList[currentVertex].forEach(neighbor => {
          stack.push(neighbor)
        })
      }
    }
    return result;
  }
// Colt's code - better? 
// we get the same result, but his doesn't add things to the stack if they have already been visited 
// mine does, but then does the check and just won't add them to results arr again

//   depthFirstIterative(start){
//     const stack = [start];
//     const result = [];
//     const visited = {};
//     let currentVertex;

//     visited[start] = true;
//     while(stack.length){
//         currentVertex = stack.pop();
//         result.push(currentVertex);

//         this.adjacencyList[currentVertex].forEach(neighbor => {
//            if(!visited[neighbor]){
//                visited[neighbor] = true;
//                stack.push(neighbor)
//            } 
//         });
//     }
//     return result;
// }
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

console.log(g.DFSRecursive("A"))
console.log(g.DFSIterative("A"))