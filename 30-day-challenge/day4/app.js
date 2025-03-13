"use strict";

var createCounter = function (init) {
  let firstVal = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: () => {
      init = firstVal;
      return init;
    },
  };
};

const counter = createCounter(5);
console.log(counter);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
