// using a singly linked list for stack, we actually are adding/removing from the beginning
// even though the methods are called push() and pop(), they are basically just the shift(), unshift() methods we know 
// this is because it is supposed to be constant time complexity
  // singly linked list would need to iterate through from the head
  // doubly linked list can do push() and pop() from the end
  
  class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // adding to the beginning (see comments above)
  push(val){
    let newNode = new Node(val)
    if (this.size === 0){
      this.first = newNode;
      this.last = newNode
    }
    else{
      let oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    return ++this.size; // this.size++; // return this.size
  }
// remove from the beginning (see comments above)
  pop(){
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