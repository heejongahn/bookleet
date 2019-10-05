// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (Math.abs(x) < 10) {
    return x;
  }

  const isNegative = x < 0;
  const digits = [];
  let remainder = Math.abs(x);

  while (remainder > 0) {
    digits.push(remainder % 10);
    remainder = Math.floor(remainder / 10);
  }

  let radix = digits.length - 1;
  let reversed = 0;

  for (const digit of digits) {
    reversed = reversed + digit * Math.pow(10, radix);
    radix = radix - 1;
  }

  const bound = isNegative ? Math.pow(2, 31) : Math.pow(2, 31) - 1;

  if (reversed > bound) {
    return 0;
  }

  return isNegative ? -1 * reversed : reversed;
};
