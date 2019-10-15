// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let overflow = false;
  let result = [];

  const digit = digits.pop();
  const currentSum = digit + 1;
  result.push(currentSum % 10);
  overflow = currentSum >= 10;

  while (digits.length > 0) {
    const digit = digits.pop();
    const currentSum = digit + (overflow ? 1 : 0);
    result.push(currentSum % 10);
    overflow = currentSum >= 10;
  }

  if (overflow) {
    result.push(1);
  }

  result.reverse();

  return result;
};
