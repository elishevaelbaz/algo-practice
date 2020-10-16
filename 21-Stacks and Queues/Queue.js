// similar to using singly linked list for queue, we add to the end (tail) like `push()`
// and remove from the beginning (head) like `shift()`

// if we did `unshift()` and `pop` instead, it would be really inefficient for `pop()`
// because the only way to set the 2nd to last to be the new tail is to traverse the whole queue
  
  class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // adding to the end (see comments above)
  enqueue(val){
    let newNode = new Node(val)
    if (this.size === 0){
      this.first = newNode;
      this.last = newNode
    }
    else{
      let oldLast = this.last;
      oldLast.next = newNode
      this.last = newNode;
    }
    return ++this.size; // this.size++; // return this.size
  }
  // remove from the beginning (see comments above)
  dequeue(){
    if (this.size === 0){
      return null
    }
    let oldFirst = this.first;
    // only 1 node
    if (this.first === this.last){
      this.last = null;
    }
    this.first = oldFirst.next;
    oldFirst.next = null; // remove connection to the stack
    this.size--;
    return oldFirst.val;
  }
}

// Example of using a queue (similar to singly linked list)
// function 20day trailing avg
// takes a number and asks you to give 20 day average
// function trailingAvg(num, pastVals){

//   if (pastVals.size === 20){
//     pastVals.dequeue() 
//   }
//   pastVals.enqueue(num)
//   let total = 0;
//   let currentNode = pastVals.first
//   while (currentNode.next){
//     total += currentNode.val
//     currentNode = currentNode.next
//   }
//   return total / pastVals.size
// }

// without needing to traverse (num is new amount, pastVals is a queue of 20 values, and total is the total from the day before)
function trailingAvg(num, pastVals, total){

  if (pastVals.size === 20){
    let firstVal = pastVals.dequeue() 
    total -= firstVal;
  }
  pastVals.enqueue(num)
  total += num;
  return total / pastVals.size
}


// another problem is to keep a running average of all the days,
// so you won't need a queue
// just store the average from yesterday, and the total number of days.

// multiply the average by # of days
// add the val from today
// increemnt the # of days by 1
// divide the total by new # of days