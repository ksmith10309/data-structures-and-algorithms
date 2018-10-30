'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
const testshelter = new AnimalShelter;
const cat = {animal: 'cat'};
const dog = {animal: 'dog'};

describe('Testing AnimalShelter constructor', () => {
  it('should construct a new AnimalShelter', () => {
    expect(testshelter).toBeDefined();
  });
  it('should construct a new AnimalShelter that is empty when constructed', () => {
    expect(testshelter.shelter.length).toBe(0);
  });
});

describe('Testing AnimalShelter enqueue method', () => {
  it('should be cat as the first element after enqueueing a cat', () => {
    testshelter.enqueue(cat);
    expect(testshelter.shelter[0].animal).toBe('cat');
  });
  it('should be dog as the first element after enqueueing a dog', () => {
    testshelter.enqueue(dog);
    expect(testshelter.shelter[0].animal).toBe('dog');
    expect(testshelter.shelter[1].animal).toBe('cat');
  });
  it('should be cat for the first element after enqueueing a cat', () => {
    testshelter.enqueue(cat);
    expect(testshelter.shelter[0].animal).toBe('cat');
    expect(testshelter.shelter[1].animal).toBe('dog');
    expect(testshelter.shelter[2].animal).toBe('cat');
  });
});

describe('Testing AnimalShelter dequeue method', () => {
  it('should return dog after dequeueing with a preference of dog', () => {
    expect(testshelter.dequeue('dog').animal).toEqual('dog');
    expect(testshelter.shelter[0].animal).toBe('cat');
    expect(testshelter.shelter[1].animal).toBe('cat');
  });
  it('should return cat after dequeueing with no preference', () => {
    expect(testshelter.dequeue().animal).toBe('cat');
    expect(testshelter.shelter[0].animal).toBe('cat');
  });
  it('should return null after dequeueing again with a prefererence of dog', () => {
    expect(testshelter.dequeue('dog')).toBeNull();
    expect(testshelter.shelter[0].animal).toBe('cat');
  });
  it('should return cat after dequeueing with a preference of cat', () => {
    expect(testshelter.dequeue('cat').animal).toBe('cat');
    expect(testshelter.shelter[0]).toBeUndefined();
  });
  it('should return null after dequeueing an empty AnimalShelter', () => {
    expect(testshelter.dequeue()).toBe(null);
  });
});
