// can use any tree, 
//just using BST because I can copy it from earlier file
class Node {
  constructor(val){
    this.val = val;
    this.left = null
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    // create a new node
    let newNode = new Node(val)
    // if there is no root
    if (this.root === null){
      this.root = newNode
      return this
    }
    let current = this.root
    while (true){
      // account for duplicate values (otherwise would have infinite loop)
      if (val === current.val){
        return undefined
      }
      if (val > current.val){
        if (current.right === null){
          current.right = newNode
          return this
        }
        else{
          // move on to the next node and continue while loop
          current = current.right
        }
      }
      // if val < current.val
      else{
        if (current.left === null){
          current.left = newNode
          return this
        }
        else{
          // move on to the next node and continue while loop
          current = current.left
        }
      }
    }
  }

  find(val){
    if (this.root === null)return undefined;
    let current = this.root;
    // let found = false;
    while (current){
      if (val === current.val){
        return current
      }
      else if (val < current.val){
        current = current.left
      }
      // val > current.val
      else{
      current = current.right
      }
    }
    if (current === null){
      return undefined
    }
    return current
  }
// using array for simplicity, but would really use 
  BreadthFirstSearch(){
    let data = [];
    let queue = [];
    let current = this.root;
    queue.push(current)

    while(queue.length){
      current = queue.shift();
      data.push(current.val)
      if (current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return data
  }

}

let tree = new BinarySearchTree();
