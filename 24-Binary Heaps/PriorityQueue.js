// We will implement a MinBinaryHeap
// each node has a value and a priority

// our implementation does not take into account if 2 nodes have the same priority
// that the first one to be enqueued is dequeued first
// (would probably need another attribute on the node, and take that into account when comparing etc)

class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp(){  
    let index = this.values.length - 1
    while (index > 0){
      // in correct spot
      let parentIndex = Math.floor((index -1) / 2)
      // this variable makes the code easier to read
      let parent = this.values[parentIndex]
      if(this.values[index].priority >= parent.priority){ 
        break;
      }
      // if gets here, the element is less than the parent and needs to swap
      //swap
      let temp = this.values[index];
      this.values[index] = parent;
      this.values[parentIndex] = temp;
      index = parentIndex;
      }
    }

  dequeue(){
    const min = this.values[0];
    const end = this.values.pop()
    // account for edge case - won't run this if there is only one element in the heap (now 0 elements)
    if (this.values.length > 0){
      this.values[0] = end;
      this.sinkDown() 
    }
    return min;
  }
  sinkDown(){
    let parentIndex = 0;
    const element = this.values[0]
    while (true){
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;
      let leftChild, rightChild;
      let swap = null;
      // check that there is a left child
      if (leftIndex < this.values.length){
        leftChild = this.values[leftIndex]
        if (leftChild.priority < element.priority){
          swap = leftIndex
        }
      }
      if (rightIndex < this.values.length){
        rightChild = this.values[rightIndex]
        // if only the right child is less than element, OR both are less than element, and rightChild < leftChild
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority) ){
          swap = rightIndex
        }
      }
      // neither are smaller, we are finished
      if(swap === null) break;
      // do the actual swap
      this.values[parentIndex] = this.values[swap]
      this.values[swap] = element
      parentIndex = swap
    }
  }
}




  let ER = new PriorityQueue();
  ER.enqueue("common cold", 5)
  console.log(ER)
  ER.enqueue("broken arm", 2)
  console.log(ER)

  ER.enqueue("high fever", 4)
  console.log(ER)


  ER.enqueue("gunshot wound", 1)
  console.log(ER)
  console.log(ER.dequeue())
  console.log(ER)
  console.log(ER.dequeue())
  console.log(ER)
  console.log(ER.dequeue())
  console.log(ER)
