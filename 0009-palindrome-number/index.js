// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  const digits = [];

  let quotient = x;
  while (quotient > 0) {
    digits.push(quotient % 10);
    quotient = Math.floor(quotient / 10);
  }

  const reversed = [...digits].reverse();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
};
