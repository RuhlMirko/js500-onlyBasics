/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (val2) => {
      return (
        val2 === val ||
        (() => {
          throw new Error("Not Equal");
        })()
      );
    },
    notToBe: (val2) => {
      return (
        val2 !== val ||
        (() => {
          throw new Error("Equal");
        })()
      );
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
