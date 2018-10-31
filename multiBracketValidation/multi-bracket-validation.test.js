'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('Testing multiBracketValidation function', () => {
  it('should return false with an odd number of brackets', () => {
    expect(multiBracketValidation('()}')).toBe(false);
  });
  it('should work even with non-bracket characters', () => {
    expect(multiBracketValidation('((code))')).toBe(true);
    expect(multiBracketValidation('([code)}')).toBe(false);
  });
  it('should return true with an input of {([])}', () => {
    expect(multiBracketValidation('{([])}')).toBe(true);
  });
  it('should return false with an input of {([]})', () => {
    expect(multiBracketValidation('{([]})')).toBe(false);
  });
});
