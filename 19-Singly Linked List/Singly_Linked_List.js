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
      return current;
    }
  }
}

let list = new SinglyLinkedList()
// list.push("hello")
// list.push("goodbye")