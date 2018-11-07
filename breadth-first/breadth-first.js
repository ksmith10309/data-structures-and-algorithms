'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  breadthFirst(tree = this) {
    if (tree.root === null) return null;

    let queue = [];
    let printArr = [];
    queue.unshift(tree.root);

    while (queue.length > 0) {
      let currNode = queue.pop();
      printArr.push(currNode.value);

      if (currNode.left !== null) queue.unshift(currNode.left);
      if (currNode.right !== null) queue.unshift(currNode.right);
    }
    return printArr;
  }
}

module.exports = { Node, BinaryTree };
