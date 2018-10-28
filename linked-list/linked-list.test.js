'use strict';

const LinkedList = require('./linked-list.js');

const testlist = new LinkedList();

describe("Testing LinkedList constructor", () => {
  it("should construct a new LinkedList", () => {
    expect(testlist).toBeDefined();
  });
  it("should construct a new LinkedList that is empty when constructed", () => {
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
