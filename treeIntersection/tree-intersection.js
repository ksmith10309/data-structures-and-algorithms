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

class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc,cur) => acc + cur.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    if (arguments.length !== 2) return 'Bad request';
    let hash = this.hash(key);
    if(!this.map[hash]) this.map[hash] = [];
    this.map[hash].push({[key]:value});
  }

  find(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Cannot find ' + key;
    else {
      let found = this.map[hash].find(obj => Object.keys(obj).includes(key));
      if (!found) return 'Cannot find ' + key;
      else return found[key];
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;
    else {
      return this.map[hash].filter(obj => Object.keys(obj).includes(key)).length > 0;
    }
  }

  getHash(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Cannot find ' + key;
    else {
      return hash;
    }
  }

}

function treeIntersection(tree1, tree2) {
  if (arguments.length !== 2) {
    return 'Two trees are needed';
  }

  if (!tree1.root && !tree2.root) {
    return 'Trees are empty';
  }

  let treeMap = new HashTable(10);

  function preOrderTree1(node) {
    treeMap.add(node.value, node.value);
    if (node.left !== null) {
      preOrderTree1(node.left);
    }
    if (node.right !== null) {
      preOrderTree1(node.right);
    }
  }
  preOrderTree1(tree1.root);

  let arr = [];

  function preOrderTree2(node) {
    if (treeMap.contains(node.value)) {
      arr.push(node.value);
    }
    if (node.left !== null) {
      preOrderTree2(node.left);
    }
    if (node.right !== null) {
      preOrderTree2(node.right);
    }
  }
  preOrderTree2(tree2.root);

  if (arr.length === 0) {
    return 'No common values between trees';
  }

  console.log(treeMap.map);
  return arr;
}

module.exports = { Node, BinaryTree, treeIntersection };
