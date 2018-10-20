'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insert = function(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
}

LinkedList.prototype.includes = function(value) {
  let currentNode = this.head;
  if (currentNode === null) return false;
  else if (currentNode.value === value) return true;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    if (currentNode.value === value) return true;
  }
  return false;
}

LinkedList.prototype.print = function() {
  let str = '';
  let currentNode = this.head;
  if (currentNode === null) return str;
  else str += currentNode.value;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    str += ', ' + currentNode.value;
  }
  return str;
}

module.exports = LinkedList;
