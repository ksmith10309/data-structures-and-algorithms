'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

const testpseudo = new PseudoQueue;

describe('Testing PseudoQueue constructor', () => {
  it('should construct a new PseudoQueue', () => {
    expect(testpseudo).toBeDefined();
  });
  it('should construct a new PseudoQueue that is empty when constructed', () => {
    expect(testpseudo.enqueueStack.top).toBeNull();
    expect(testpseudo.dequeueStack.top).toBeNull();
  });
});

describe('Testing PseudoQueue enqueue method', () => {
  it('should be A for the top value of the enqueueStack after enqueueing', () => {
    testpseudo.enqueue('A');
    expect(testpseudo.enqueueStack.top.value).toBe('A');
    expect(testpseudo.dequeueStack.top).toBeNull();
  });
  it('should be B for the top value of the enqueueStack after enqueueing', () => {
    testpseudo.enqueue('B');
    expect(testpseudo.enqueueStack.top.value).toBe('B');
    expect(testpseudo.dequeueStack.top).toBeNull();
  });
  it('should be C for the top value of the enqueueStack after enqueueing', () => {
    testpseudo.enqueue('C');
    expect(testpseudo.enqueueStack.top.value).toBe('C');
    expect(testpseudo.dequeueStack.top).toBeNull();
  });
});

describe('Testing PseudoQueue dequeue method', () => {
  it('should be A for the value that is dequeued', () => {
    expect(testpseudo.dequeue().value).toBe('A');
    expect(testpseudo.dequeueStack.top.value).toBe('B');
    expect(testpseudo.enqueueStack.top).toBeNull();
  });
  it('should be B for the next value that is dequeued', () => {
    expect(testpseudo.dequeue().value).toBe('B');
    expect(testpseudo.dequeueStack.top.value).toBe('C');
    expect(testpseudo.enqueueStack.top).toBeNull();
  });
  it('should be C for the next value that is dequeued', () => {
    expect(testpseudo.dequeue().value).toBe('C');
    expect(testpseudo.dequeueStack.top).toBeNull();
    expect(testpseudo.enqueueStack.top).toBeNull();
  });
  it('should return PseudoQueue is empty after trying to dequeue from an empty PseudoQueue', () => {
    expect(testpseudo.dequeue()).toBe('PseudoQueue is empty');
  });
});
