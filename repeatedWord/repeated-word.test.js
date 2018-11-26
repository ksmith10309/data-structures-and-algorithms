'use strict';

const repeatedWord = require('./repeated-word.js');

let string1 = 'Once upon a time, there was a brave princess who...';

let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

let string4 = 'There are no duplicate words in this string...';

describe('Testing repeatedWord function', () => {
  it('should return Not a string if not a string', () => {
    expect(repeatedWord([])).toBe('Not a string');
  });
  it('should return a', () => {
    expect(repeatedWord(string1)).toBe('a');
  });
  it('should return it', () => {
    expect(repeatedWord(string2)).toBe('it');
  });
  it('should return summer', () => {
    expect(repeatedWord(string3)).toBe('summer');
  });
  it('should return No duplicate words if no duplicate words', () => {
    expect(repeatedWord(string4)).toBe('No duplicate words');
  });
});
