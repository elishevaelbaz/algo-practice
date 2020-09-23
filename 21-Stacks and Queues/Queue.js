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