'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top === null) {
      return 'Stack is empty';
    }
    let popNode = this.top;
    this.top = popNode.next;
    popNode.next = null;
    return popNode;
  }
  peek() {
    return this.top;
  }
}

class PseudoQueue {
  constructor() {
    this.enqueueStack = new Stack;
    this.dequeueStack = new Stack;
  }
  enqueue(value) {
    if (this.dequeueStack.peek() === null) {
      this.enqueueStack.push(value);
    }
    else {
      while (this.dequeueStack.peek() !== null) {
        this.enqueueStack.push(this.dequeueStack.pop().value);
      }
    }
  }
  dequeue() {
    if (this.enqueueStack.peek() === null && this.dequeueStack.peek() === null) {
      return 'PseudoQueue is empty';
    }
    else if (this.enqueueStack.peek() === null) {
      return this.dequeueStack.pop();
    }
    else {
      while (this.enqueueStack.peek() !== null) {
        this.dequeueStack.push(this.enqueueStack.pop().value);
      }
      return this.dequeueStack.pop();
    }
  }
}

module.exports = PseudoQueue;
