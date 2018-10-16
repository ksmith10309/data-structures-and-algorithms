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
