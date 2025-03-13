"use strict";

const testArr = [34, 15, 88, 2];
const testArr2 = [34, 15, 88, 2, 30];
const testArr3 = [34, -245, -1, 100];

var returnMin = function (arr) {
  let minVal = 0;
  arr.forEach((elem, index) => {
    if (index == 0) {
      minVal = elem;
    } else {
      if (elem < minVal) {
        minVal = elem;
      }
    }
  });
  return minVal;
};

console.log(returnMin(testArr));
console.log(returnMin(testArr2));
console.log(returnMin(testArr3));
