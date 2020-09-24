
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

//   find(value){
//     if(this.root === null) return false;
//     var current = this.root,
//         found = false;
//     while(current && !found){
//         if(value < current.value){
//             current = current.left;
//         } else if(value > current.value){
//             current = current.right;
//         } else {
//             found = true;
//         }
//     }
//     if(!found) return undefined;
//     return current;
// }
// contains(value){
//     if(this.root === null) return false;
//     var current = this.root,
//         found = false;
//     while(current && !found){
//         if(value < current.value){
//             current = current.left;
//         } else if(value > current.value){
//             current = current.right;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

}




let tree = new BinarySearchTree();
// these are tedious so we will create an insert method to find the place for us 
tree.root = new Node(10)
tree.root.left = new Node(7)
tree.root.right = new Node(15)
tree.root.left.right = new Node(9)