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

function FizzBuzzTree(tree) {
  if (tree.root === null) return null;
  let treenode = tree.root;

  function fizzBuzzHelper(node) {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'fizzbuzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'fizz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }
    if (node.left !== null) {
      fizzBuzzHelper(node.left);
    }
    if (node.right !== null) {
      fizzBuzzHelper(node.right);
    }
  }
  fizzBuzzHelper(treenode);
  return tree;
}

module.exports = { Node, BinaryTree, FizzBuzzTree };
