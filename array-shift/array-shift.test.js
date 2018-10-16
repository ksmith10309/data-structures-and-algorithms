'use strict';

const insertShiftArray = (arr, num) => {
  const shiftedArray = [];
  const middle = Math.ceil(arr.length/2);
  for (let i = 0; i < arr.length; i++) {
    if (i === middle) {
      shiftedArray[i] = num;
      shiftedArray[i + 1] = arr[i];
    } else if (i > middle) {
      shiftedArray[i + 1] = arr[i];
    } else {
      shiftedArray[i] = arr[i];
    }
  }
  return shiftedArray;
}

describe('Testing array shift challenge', () => {
  it('should return [1, 2, 3, 6, 4, 5]', () => {
    expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toStrictEqual([1, 2, 3, 6, 4, 5]);
  });
  it('should return [2, 4, 5, 6, 8]', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });
  it('should return [4, 8, 15, 23, 42]', () => {
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});
