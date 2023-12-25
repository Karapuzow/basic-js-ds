const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.roots = null;
  }

  root() {
    return this.roots; 
  }

  add(data) {
    let newNode = new Node(data)
    if(!this.roots) {
      this.roots = newNode;
      return;
    }

    let currentNode = this.roots;
    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left 
      }
      else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right
      }
    }
  }
  
  has(data) {
    let currentNode = this.roots;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.roots;
    while (currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  remove(data) {
    this.root = removeNode(this.roots, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } 
      else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } 
      else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let rightMin = node.right
        while (rightMin.left) {
          rightMin = rightMin.left
        }
        node.data = rightMin.data
        node.right = removeNode(node.right, rightMin.data)
        return node
      }
    }
  }

  min() {
    let currentNode = this.roots;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.roots;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};