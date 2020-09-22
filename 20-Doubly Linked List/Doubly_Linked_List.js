class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
 }

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val)
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++;
    return this
  }
  // much simpler than in singly linked list
  pop(){
    if (this.length === 0){
      return undefined
    }
    let oldTail = this.tail
    // edge case, starts with only 1 element, will now be an empty list
    if (this.length === 1){
      this.head = null;
      this.tail = null
    }
    else{
      this.tail = oldTail.prev // set new tail to 2nd to last item
      this.tail.next = null
      oldTail.prev = null // need to remove both connections
    }
    this.length--;
    return oldTail;   
  }

  shift(){
    if (this.length === 0){ // or !this.head
      return undefined
    }
    let oldHead = this.head;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = oldHead.next
      this.head.prev = null;
      oldHead.next = null
    }
    this.length--;
    return oldHead;
  }

  unshift(val){
    let newNode = new Node(val)
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode
    }
    else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if (index < 0 || index >= this.length){
      return null
    }
    let half = (this.length / 2)
    // if index is closer to the front of the list
    let current;
    if (index < half){
      current = this.head;
      for (let i = 0; i < index; i++){
        current = current.next
      }
    }
    // if index is closer to the end of the list - traverse backward
    else{
      current = this.tail
      for (let i = this.length - 1; i > index; i--){
        current = current.prev
      }
    }
    return current
  }

  set(index, value){
    let foundNode = this.get(index)
    if (foundNode !== null){
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value)

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next;

    newNode.prev = beforeNode; // connect previous
    newNode.next = beforeNode.next; //connect to next
    beforeNode.next = newNode; // connect prev's next to the new inserted node
    newNode.next = afterNode;// connext next's prev to the new inserted node
    this.length++;
    return true;
  }

  remove(index){
    if (index < 0 || index >= this.length){
      return undefined
    }
    if (index === 0){
      return this.shift()
    }
    if (index === this.length - 1){
      return this.pop()
    }

    let removedNode = this.get(index)
    let previousNode = removedNode.prev;
    let nextNode = removedNode.next;
    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  reverse(){
    //start from the end
    let currentNode = this.tail;
    // swap the tail and the head
    this.tail = this.head;
    this.head = currentNode;
    // loop through the array
    for(let i = 0; i < this.length; i++) {
      // swap the current node's prev and next
      let previous = currentNode.prev
      currentNode.prev = currentNode.next;
      currentNode.next = previous
      
      // even though the loop is going forward,
      // currentNode starts as the original tail, and it's .next is now it's original previous, so basically traversing it backwards
      currentNode = currentNode.next 
    }
    return this
  }
  
}

 let list = new DoublyLinkedList()
list.push("hello")
list.push("my")
list.push("name")
list.push("is")
list.push("Elisheva")