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
}

function findMaximumValue(tree) {
  if (!tree.root) return null;
  let max = tree.root.value;
  function recursiveHelper(node) {
    if (node.value > max) {
      max = node.value;
    }
    if (node.left) {
      recursiveHelper(node.left);
    }
    if (node.right) {
      recursiveHelper(node.right);
    }
  }
  recursiveHelper(tree.root);
  return max;
}

module.exports = { Node, BinaryTree, findMaximumValue };
