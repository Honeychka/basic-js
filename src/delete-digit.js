const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let res = 0;
  let numArr = [];
    while (num) {
      numArr.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < numArr.length; i++) {
      let n = 0;
        for (let j = numArr.length - 1; j >= 0; j--) {
            if (j !== i) {
                n = n * 10 + numArr[j];
            }
        }
        res = Math.max(n, res);
    }
    return res;
}

module.exports = {
  deleteDigit
};
