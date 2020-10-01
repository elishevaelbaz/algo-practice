class MaxBinaryHeap {
  constructor(){
    this.values = [];
    // Can use this when want to test out, without needing to insert each item
    // this.values = [41, 39, 33, 18, 27, 12];
  }

  // to insert a value into a Max Binary heap, add it to the end
  // and then bubble up - swapping with other values until it gets to the correct spot
    // because it most likely won't be the smallest value etc

  // to bubble up:
  // find the parent node (using the formula)
  // if the node is larger thanthe parent, swap the 2
  // then compare to the parent again (repeat)
  insert(val){
    this.values.push(val)
    this.bubbleUp()
  }
  // can give variables for element and parent values to make it read more easily
  bubbleUp(){  
    let index = this.values.length - 1
    while (index > 0){
      // in correct spot
      let parentIndex = Math.floor((index -1) / 2)
      if(this.values[index] <= this.values[parentIndex]) break;
      if (this.values[index] > this.values[parentIndex]){
        //swap
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        index = parentIndex;
      }
    }
  }
  // remove root from a heap
  // put the last value in the root spot (will most likely be wrong)
  // then sink down (bubble down/ castcade down... etc) 
   //by comparing to it's children - if it's smaller than both the children, swap with the larger one

  // return the extracted root

  // PSEUDOCODE:
  // swap the first value in the values property eith the last one
  // pop from the values property, so you can return the value at the end
  // have the new root bubble down to the correct spot
    // parent index starts at 0 (the root)
    // find the index of the left child (2n + 1), making sure it's not out of bounds 
    // find the index of the right child (2n + 2), making sure it's not out of bounds 
    // if the left OR right child is greater than the element, swap
    // if both are greater, swap with the largest child
    // child index that was swapped becomes the new parent index
    // keep looping and swapping until neither child is larger than the element
    // return the old root

  extractMax(){
    const max = this.values[0];
    const end = this.values.pop()
    // account for edge case - won't run this if there is only one element in the heap (now 0 elements)
    if (this.values.length > 0){
      this.values[0] = end;
      this.sinkDown() 
    }
    return max;
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
        if (leftChild > element){
          swap = leftIndex
        }
      }
      if (rightIndex < this.values.length){
        rightChild = this.values[rightIndex]
        // if only the right child is greater than element, OR both are greater than element, and rightChild > leftChild
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild) ){
          swap = rightIndex
        }
      }
      // neither are larger, we are finished
      if(swap === null) break;
      // do the actual swap
      this.values[parentIndex] = this.values[swap]
      this.values[swap] = element
      parentIndex = swap
    }
  }
}




  let heap = new MaxBinaryHeap();
  heap.insert(55)
  console.log(heap)
  console.log(heap.extractMax())
  console.log(heap)