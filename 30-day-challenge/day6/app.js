"use strict";

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {};

console.log(map([1, 2, 3]), function plusone(n) {
  return n + 1;
});
console.log(map([1, 2, 3]), function plusInd(n, i) {
  return n + i;
});
console.log(map([1, 2, 3]), function constant(n, i) {
  return 42;
});
