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

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let currentNode = this.head;
    if (currentNode === null) return false;
    else if (currentNode.value === value) return true;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.value === value) return true;
    }
    return false;
  }

  print() {
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

  append(value) {
    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    newNode.next = null;
    currentNode.next = newNode;
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    while(currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(newVal);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value, newVal) {
    let currentNode = this.head;
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(newVal);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

}

module.exports = LinkedList;
