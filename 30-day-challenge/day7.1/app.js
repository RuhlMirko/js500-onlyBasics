"use strict";

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const itemList = [];
  for (const i in arr) {
    itemList.push(fn(arr[i], Number(i)));
  }
  return itemList;
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
);
console.log(
  filter([-2, -1, 0, 1, 2], function plusone(n, i) {
    return n + 1;
  })
);
