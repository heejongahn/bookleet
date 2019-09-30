// https://leetcode.com/problems/combination-sum-iv/

function sum(arr) {
  return arr.reduce((accm, curr) => accm + curr, 0);
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const cache = Array(target).fill(null);

  function helper(t) {
    if (cache[t] != null) {
      return cache[t];
    }

    if (t === 0) {
      return 1;
    }

    if (t < 0) {
      return 0;
    }

    cache[t] = sum(nums.map(n => helper(t - n)));

    return cache[t];
  }

  return helper(target);
};
