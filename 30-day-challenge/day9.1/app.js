"use strict";
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false;

  return function (...args) {
    if (called) {
      return undefined;
    }
    called = !called;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let sumFn = (a, b, c) => a + b + c;
let timesFn = (a, b, c, d) => a * b * c * d;
let onceFn = once(sumFn);
let onceFn1 = once(timesFn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
console.log(onceFn1(2, 3, 6, 9));
console.log(onceFn1(2, 3, 6, 9));
