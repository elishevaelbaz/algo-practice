// Depth First Search
// traverse down (vertically), before visiting sibling nodes


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
  // PreOrder
  // 1. visit the node (add to the list)
  // 2. left (in binary tree example)
  // 3. right
  DFSPreOrder(){
    let data = [];
    function traverse(node){
      data.push(node.val)
      if (node.left){
        traverse(node.left)
      }
      if (node.right){
        traverse(node.right)
      }
    }
    traverse(this.root);
    return data
  }
  //PostOrder
  // 1. left
  // 2. right
  // 3. visit the node (add to the list)
    DFSPostOrder(){
    let data = [];
    function traverse(node){
      if (node.left){
        traverse(node.left)
      }
      if (node.right){
        traverse(node.right)
      }
      data.push(node.val)
    }
    traverse(this.root);
    return data
  }
  //InOrder - in sort order if binary search tree
  // 1. left
  // 2. visit the node (add to the list)
  // 3. right
  DFSInOrder(){
    let data = []
    function traverse(node){
      if (node.left){
        traverse(node.left)
      }
      data.push(node.val)
      if (node.right){
        traverse(node.right)
      }
    }
    traverse(this.root);
    return data;
  }


}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
