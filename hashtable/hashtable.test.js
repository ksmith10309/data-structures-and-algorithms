'use strict';

const HashTable = require('./hashtable.js');

let table = new HashTable(6);

table.add('Katherine', 'Student');
table.add('Jen', 'Student');

describe('Testing HashTable add method', () => {
  it('should be able to add Katherine to the hash table', () => {
    expect(table.map[table.hash('Katherine')]).toBeDefined;
  });
  it('should be able to add Jen to the hash table', () => {
    expect(table.map[table.hash('Jen')]).toBeDefined;
  });
  it('should not be able to add no arguments to the hash table', () => {
    expect(table.add()).toBe('Bad request');
  });
});

describe('Testing HashTable find method', () => {
  it('should be able to find Katherine in the hash table', () => {
    expect(table.find('Katherine')).toBe('Student');
  });
  it('should be able to find Jen in the hash table', () => {
    expect(table.find('Jen')).toBe('Student');
  });
  it('should not be able to find Luna in the hash table', () => {
    expect(table.find('Luna')).toBe('Cannot find Luna');
  });
});

describe('Testing HashTable contains method', () => {
  it('should contain Katherine in the hash table', () => {
    expect(table.contains('Katherine')).toBe(true);
  });
  it('should contain Jen in the hash table', () => {
    expect(table.contains('Jen')).toBe(true);
  });
  it('should not contain Luna in the hash table', () => {
    expect(table.contains('Luna')).toBe(false);
  });
});

describe('Testing HashTable getHash method', () => {
  it('should return the index of Katherine', () => {
    expect(table.getHash('Katherine')).toBe(5);
  });
  it('should return the index of Jen', () => {
    expect(table.getHash('Jen')).toBe(3);
  });
  it('should not be able to return the index of Luna', () => {
    expect(table.getHash('Luna')).toBe('Cannot find Luna');
  });
});
