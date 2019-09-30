// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  function climb(num) {
    if (num <= 0) {
      return [1, 0];
    }

    if (num === 1) {
      return [1, 1];
    }

    const [previous, beforePrevious] = climb(num - 1);

    return [previous + beforePrevious, previous];
  }

  return climb(n)[0];
};
