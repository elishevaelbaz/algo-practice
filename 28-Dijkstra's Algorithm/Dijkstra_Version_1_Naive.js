// DIJKSTRA'S ALGORITHM
// A simple (naive) priority queue

// an array, and every time we add something to the array we give it a priority
// and then sort based on the priority

// every time we add to the array, we resort and remove from the array

// we are basically dequeuing the vertex that has the smallest distance from A (that's what we are prioritizing)

// because we are sorting every time, it's O(n * log(n))

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

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

  // Define function as a method on WeightedGraph class
  // accept start and end vertex
  // create an object (called distances) - will store the current shortest distance from start vertex to each of other vertices
    // set each key to be every vertex in adjacencyList with value of infinity
    // except the starting vertex which has value of 0

  // make a priority queue
  // add each one of our vertices into the PQ, where we set the priority to be the distance from start 
    // initialize all the priorities to be infinity (since we don't know them yet) 
    // except the start vertex - give in priority of 0 because that's where we begin
    // (every time we dequeue we get the smallest priority)

  // create an object (called previous) and set each key to be every vertex in the adjacency list with a value of null
  // (we will update the value for each key as we go)

  // loop through as long as there is anything in the priority queue, 
    // dequeue from PQ (picking the smallest distance from start vertex)
    // if that vertex is the same as the end vertex
      // we are done
    // otherwise loop through each value in the adjacency list of that vertex (ie: its neighbors)
      // calculate the distance to that vertex from the starting vertex
      // if the new distance (sum) is less than what we are currently storing
        // we update the distances object with new lower distance
        // update previous object to reflect which vertex we came from
        // enqueue the same vertex with a new total distance from the start node


  // if I'm understanding correctly, at the end we may still have things in the queue
  // but once we dequeu our end vertex, we are done - because that means it's the shortest if it was DQed

  dijkstra(start, end){
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};

    let path = []; // to return at end

    // build up initial state
    // for (let i = 0; i < this.adjacencyList.length; i++){
    for (let vertex in this.adjacencyList){
      if (vertex === start){
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0)
      }
      else{
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity)
      }
      previous[vertex] = null; // all are null, so do it outside the 'if'
    }

    while (priorityQueue.values.length){
      let smallest = priorityQueue.dequeue().val; // add the .val, otherwise would get obj with val and priority
      if (smallest === end){
        while(previous[smallest]){ // loop through until we get to start vertex which will have value of null
          path.push(smallest); // starts out as "E" or end vertex, push it in, set smallest to its prev, "F" and reloop
          smallest = previous[smallest]
        }
        break;
      }
      else{
        for (let neighbor in this.adjacencyList[smallest]){ // looping over an array so we are getting 0, 1, etc
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node; //because nextNode is the object {node: "B", weight: 10}, and we want the actual vertex letter
          if (candidate < distances[nextNeighbor]){
            // updating new smallest dist to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            priorityQueue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(start).reverse(); //need to reverse it and add start
  }
}

// loop through as long as there is anything in the priority queue, 
    // dequeue from PQ (picking the smallest distance from start vertex)
    // if that vertex is the same as the end vertex
      // we are done
    // otherwise loop through each value in the adjacency list of that vertex (ie: its neighbors)
      // calculate the distance to that vertex from the starting vertex
      // if the new distance (sum) is less than what we are currently storing
        // we update the distances object with new lower distance
        // update previous object to reflect which vertex we came from
        // enqueue the same vertex with a new total distance from the start node


let graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.adjacencyList)
console.log(graph.dijkstra("A", "E"))