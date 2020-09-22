// piece of data - val
// reference ot next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// with just the Node class can do the following

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// but it's bad way to rep linked list because you need to chain so many '.next'

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push method, accepts a value, create a new node using that value, return the list
  push(val){
    let newNode = new Node(val)
    //edge case - if there is no head (empty list), set the head and tail to be the new node
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    }
    //Otherwise, set the `next` property on the tail to the new node
      // and set tail property on list to be the new node
    else{
      this.tail.next = newNode
      this.tail = newNode
      
    }
    //increment the length of the list by 1
    this.length++
    return this
  }

  // pop is more involved, because we have to remove the node
  // and then set the 2nd to lst node to the new tail
  //  we can only find it by starting from the front

  // if nothing in the list, return undefined
  // otherwise loop through the list until you reach the tail
    // but keep track of what the previous node is (so we can still have 2nd to last node)
    // set the next property of the 2nd to last node to null
    // set the tail to be the 2nd to last node
    // decrement the length of the list by 1
    //return the value of the node that was removed
  pop(){
    if (this.length === 0){
      return undefined
    }
    else{
      let current = this.head
      let newTail;
      while (current.next){
        newTail = current
        current = current.next
      }
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      // special case, where the list only has one element, that you pop 
      // otherwise the head and tail will still be set to that element, even though it's been removed and list is empty
      if (this.length ===0){
        this.head = null;
        this.tail = null
      }
      return current;
    }
  } 
  shift(){
    if (this.length === 0){ // or !this.head
      return undefined
    }
    else {
      let oldHead = this.head;
      this.head = oldHead.next
      this.length--;
      if (this.length ===0){
        this.tail = null // because otherwise tail isn't being changed
      }
      return oldHead;
    }
  }
  // add to the beginning of a list 
  unshift(val){
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get(num) will return the item in that spot (but there are no indices, so must traverse `num` times)
  get(index){
    if (index < 0 || index >= this.length){
      return null
    }
    else{
      let current = this.head
      for (let i = 0; i < index; i++){
        current = current.next
      }
      return current
    }
  }
  // change the value of a node
  set(index, value){
    let foundNode = this.get(index)
    if (foundNode){
      foundNode.val = value
      return true
    }
    return false // if node doesn't exist, return false
  }
  // if index is less than 0, or greater than the length return false
  // if index is 0, use unshift
  // if index is the length of the list, use push
  // otherwise
    // use get method to find node at (index - 1)
    // set it's next property to the newly created node
    // connect the new node to the old next node
    // increment the length 
    // return true
  insert(index, value){
    if (index < 0 || index > this.length){
      return false
    }
    if (index === 0){
      this.unshift(value)
      return true
    }
    // can coerce to boolean 
    // if (index === this.length) return !!this.push(val)
    if (index === this.length){
      this.push(value)
      return true
    }
    let newNode = new Node(value)
    let prev = this.get(index - 1)
    newNode.next = prev.next;
    prev.next = newNode;
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
    let prev = this.get(index -1)
    let removedNode = prev.next
    prev.next = removed.next //prev.next.next
    this.length--;
    return removedNode; 
  }
  // reverse singly linked list in place
  reverse(){
    let next;
    let prev = null; // so that way tail.next will be null
    let node = this.head;
    this.head = this.tail // head is now the original tail
    this.tail = node; // tail is original head (we swapped h&t)
    for (let i = 0; i < this.length; i++){
      next = node.next // storing the next
      node.next = prev // setting the new next to be prev (so it's reversed)
      // next 2 lines moving to the next element in orig list, (shifting things over)
      prev = node // previous is set to the current node
      node = next // current node is now the next node
    }
    return this;
  }
}

let list = new SinglyLinkedList()
// list.push("hello")
// list.push("goodbye")