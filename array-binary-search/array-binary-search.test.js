'use strict';

const arrayBinarySearch = (arr, key) => {
  if (key === arr[0]) return 0;
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  let midIndex;
  while (lowIndex < highIndex) {
    midIndex = Math.ceil((highIndex + lowIndex)/2);
    if (key > arr[midIndex] && lowIndex !== midIndex) lowIndex = midIndex;
    else if (key > arr[midIndex]) return -1;
    if (key < arr[midIndex] && highIndex !== midIndex) highIndex = midIndex;
    else if (key < arr[midIndex]) return -1;
    if (key === arr[midIndex]) return midIndex;
  }
  return -1;
}

describe('Testing array binary search challenge', () => {
  it('should return 0', () => {
    expect(arrayBinarySearch([2, 4, 6, 8], 2)).toStrictEqual(0);
  });
  it('should return 2', () => {
    expect(arrayBinarySearch([1, 2, 3, 4, 5], 3)).toStrictEqual(2);
  });
  it('should return 3', () => {
    expect(arrayBinarySearch([2, 4, 6, 8], 8)).toStrictEqual(3);
  });
  it('should return -1', () => {
    expect(arrayBinarySearch([4, 8, 15, 23, 42], 2)).toStrictEqual(-1);
  });
  it('should return -1', () => {
    expect(arrayBinarySearch([2, 4, 6, 8], 5)).toStrictEqual(-1);
  });
  it('should return -1', () => {
    expect(arrayBinarySearch([2, 4, 6, 8], 10)).toStrictEqual(-1);
  });
});
