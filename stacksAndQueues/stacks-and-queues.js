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

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    }
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue() {
    let dequeueNode = this.front;
    if (this.front === null) {
      return 'Queue is empty';
    }
    else if (this.front === this.rear && this.front) {
      this.front = null;
      this.rear = null;
      return dequeueNode;
    }
    else {
      this.front = this.front.next;
      dequeueNode.next = null;
      return dequeueNode;
    }
  }
  peek() {
    return this.front;
  }
}

module.exports = { Stack, Queue };
