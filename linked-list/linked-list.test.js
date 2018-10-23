'use strict';

const LinkedList = require('./linked-list.js');

const testlist = new LinkedList();

describe('Testing LinkedList constructor', () => {
  it('should construct a new LinkedList', () => {
    expect(testlist).toBeDefined();
  });
  it('should construct a new LinkedList that is empty when constructed', () => {
    expect(testlist.head).toBeNull();
  });
});

describe('Testing LinkedList insert method', () => {
  it('should be A for the value of the head after inserting a node with a value of A', () => {
    testlist.insert('A');
    expect(testlist.head.value).toBe('A');
  });
  it('should be B for the value of the head after inserting a node with a value of B', () => {
    testlist.insert('B');
    expect(testlist.head.value).toBe('B');
  });
  it('should be C for the value of the head after inserting a node with a value of C', () => {
    testlist.insert('C');
    expect(testlist.head.value).toBe('C');
  });
});

describe('Testing LinkedList includes method', () => {
  it('should return true when testing if it includes A', () => {
    expect(testlist.includes('A')).toBe(true);
  });
  it('should return true when testing if it includes C', () => {
    expect(testlist.includes('C')).toBe(true);
  });
  it('should return false when testing if it includes D', () => {
    expect(testlist.includes('D')).toBe(false);
  });
});

describe('Testing LinkedList print method', () => {
  it('should return C, B, A after printing', () => {
    expect(testlist.print()).toBe('C, B, A');
  });
});

const testlist2 = new LinkedList();
testlist2.insert('C');
testlist2.insert('B');
testlist2.insert('A');

describe('Testing LinkedList append method', () => {
  it('should print A, B, C, D after appending D', () => {
    testlist2.append('D');
    expect(testlist2.print()).toBe('A, B, C, D');
  });
  it('should print A, B, C, D, E after appending E', () => {
    testlist2.append('E');
    expect(testlist2.print()).toBe('A, B, C, D, E');
  });
  it('should print A, B, C, D, E, F after appending F', () => {
    testlist2.append('F');
    expect(testlist2.print()).toBe('A, B, C, D, E, F');
  });
});

const testlist3 = new LinkedList();
testlist3.insert('A');
testlist3.insert('B');
testlist3.insert('C');

describe('Testing LinkedList insertBefore method', () => {
  it('should print C, D, B, A after inserting D before B', () => {
    testlist3.insertBefore('B', 'D');
    expect(testlist3.print()).toBe('C, D, B, A');
  });
  it('should print C, D, E, B, A after inserting E before B', () => {
    testlist3.insertBefore('B', 'E');
    expect(testlist3.print()).toBe('C, D, E, B, A');
  });
  it('should print C, D, E, B, F, A after inserting F before A', () => {
    testlist3.insertBefore('A', 'F');
    expect(testlist3.print()).toBe('C, D, E, B, F, A');
  });
});

const testlist4 = new LinkedList();
testlist4.insert('C');
testlist4.insert('B');
testlist4.insert('A');

describe('Testing LinkedList insertAfter method', () => {
  it('should print A, B, D, C after inserting D after B', () => {
    testlist4.insertAfter('B', 'D');
    expect(testlist4.print()).toBe('A, B, D, C');
  });
  it('should print A, B, E, D, C after inserting E after B', () => {
    testlist4.insertAfter('B', 'E');
    expect(testlist4.print()).toBe('A, B, E, D, C');
  });
  it('should print A, F, B, E, D, C after insert F after C', () => {
    testlist4.insertAfter('A', 'F');
    expect(testlist4.print()).toBe('A, F, B, E, D, C');
  });
});

const testlist5 = new LinkedList();
testlist5.insert('A');
testlist5.insert('B');
testlist5.insert('C');
testlist5.insert('D');

describe('Testing LinkedList offsetFromEnd method', () => {
  it('should return A with an offset of 0', () => {
    expect(testlist5.offsetFromEnd(0)).toBe('A');
  });
  it('should return D with an offset of 3', () => {
    expect(testlist5.offsetFromEnd(3)).toBe('D');
  });
  it('should return C with an offset of 2', () => {
    expect(testlist5.offsetFromEnd(2)).toBe('C');
  });
});
