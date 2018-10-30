'use strict';

const { Stack, Queue } = require('./stacks-and-queues.js');

const teststack = new Stack;

describe('Testing Stack constructor', () => {
  it('should construct a new Stack', () => {
    expect(teststack).toBeDefined();
  });
  it('should construct a new Stack that is empty when constructed', () => {
    expect(teststack.top).toBeNull();
  });
});

describe('Testing Stack peek method', () => {
  it('should be null for the top', () => {
    expect(teststack.peek()).toBe(null);
  });
});

describe('Testing Stack push method', () => {
  it('should be A for the value of the top after pushing a node to an empty stack', () => {
    teststack.push('A');
    expect(teststack.top.value).toBe('A');
  });
  it('should be B for the value of the top after pushing a node with a value of B', () => {
    teststack.push('B');
    expect(teststack.top.value).toBe('B');
    expect(teststack.top.next.value).toBe('A');
  });
  it('should be C for the value of the top after pushing a node with a value of C', () => {
    teststack.push('C');
    expect(teststack.top.value).toBe('C');
    expect(teststack.top.next.value).toBe('B');
  });
});

describe('Testing Stack peek method', () => {
  it('should be C for the value of the top', () => {
    expect(teststack.peek().value).toBe('C');
  });
});

describe('Testing Stack pop method', () => {
  it('should be B for the value of the top after popping a node', () => {
    expect(teststack.pop().value).toBe('C');
    expect(teststack.top.value).toBe('B');
    expect(teststack.top.next.value).toBe('A');
  });
  it('should be A for the value of the top after popping another node', () => {
    expect(teststack.pop().value).toBe('B');
    expect(teststack.top.value).toBe('A');
    expect(teststack.top.next).toBe(null);
  });
  it('should be null for the top after popping another node', () => {
    expect(teststack.pop().value).toBe('A');
    expect(teststack.top).toBe(null);
  });
  it('should return Stack is empty after trying to pop from an empty stack', () => {
    expect(teststack.pop()).toBe('Stack is empty');
  });
});

describe('Testing Stack peek method', () => {
  it('should be null for the top', () => {
    expect(teststack.peek()).toBe(null);
  });
});

const testqueue = new Queue;

describe('Testing Queue constructor', () => {
  it('should construct a new Queue', () => {
    expect(testqueue).toBeDefined();
  });
  it('should construct a new Queue that is empty when constructed', () => {
    expect(testqueue.front).toBeNull();
    expect(testqueue.rear).toBeNull();
  });
});

describe('Testing Queue peek method', () => {
  it('should be null for the front', () => {
    expect(testqueue.peek()).toBe(null);
  });
});

describe('Testing Queue enqueue method', () => {
  it('should be A for the value of the front and A for the value of the rear after queueing a node to an empty queue', () => {
    testqueue.enqueue('A');
    expect(testqueue.front.value).toBe('A');
    expect(testqueue.rear.value).toBe('A');
  });
  it('should be A for the value of the front and B for the value of the rear after queueing a node with a value of B', () => {
    testqueue.enqueue('B');
    expect(testqueue.front.value).toBe('A');
    expect(testqueue.rear.value).toBe('B');
    expect(testqueue.front.next.value).toBe('B');
  });
  it('should be A for the value of the front and C for the value of the rear after queueing a node with a value of C', () => {
    testqueue.enqueue('C');
    expect(testqueue.front.value).toBe('A');
    expect(testqueue.rear.value).toBe('C');
    expect(testqueue.front.next.value).toBe('B');
  });
});

describe('Testing Queue peek method', () => {
  it('should be A for the value of the front', () => {
    expect(testqueue.peek().value).toBe('A');
  });
});

describe('Testing Queue dequeue method', () => {
  it('should be B for the value of the front and C for the value of the rear after dequeueing a node', () => {
    expect(testqueue.dequeue().value).toBe('A');
    expect(testqueue.front.value).toBe('B');
    expect(testqueue.rear.value).toBe('C');
    expect(testqueue.front.next.value).toBe('C');
  });
  it('should be C for the value of the front and C for the value of the rear after dequeueing another node', () => {
    expect(testqueue.dequeue().value).toBe('B');
    expect(testqueue.front.value).toBe('C');
    expect(testqueue.rear.value).toBe('C');
    expect(testqueue.front.next).toBe(null);
  });
  it('should be null for the front and null for the rear after dequeueing another node', () => {
    expect(testqueue.dequeue().value).toBe('C');
    expect(testqueue.front).toBe(null);
    expect(testqueue.rear).toBe(null);
  });
  it('should return Queue is empty after trying to dequeue from an empty queue', () => {
    expect(testqueue.dequeue()).toBe('Queue is empty');
  });
});

describe('Testing Queue peek method', () => {
  it('should be null for the front', () => {
    expect(testqueue.peek()).toBe(null);
  });
});
