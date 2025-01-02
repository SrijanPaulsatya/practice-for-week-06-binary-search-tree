// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      }
      else {
        this.insert(val, currentNode.left);
      }
    }
    else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      }
      else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while(currentNode) {
      if (currentNode.val === val) {
        return true;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    console.log(currentNode.val);
    let leftNode = this.preOrderTraversal(currentNode.left);
    let rightNode = this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    let leftNode = this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    let rightNode = this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    let leftNode = this.postOrderTraversal(currentNode.left);
    let rightNode = this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [this.root];
    
    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.val);

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

}

module.exports = { BinarySearchTree, TreeNode };
