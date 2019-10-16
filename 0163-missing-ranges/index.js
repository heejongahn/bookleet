// https://leetcode.com/problems/missing-ranges/

function getRange(from, to) {
  if (from === to) {
    return `${from}`;
  }

  return `${from}->${to}`;
}

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  let next = lower;
  let result = [];

  for (const num of nums) {
    if (next >= num) {
      next = num + 1;
      continue;
    }

    result.push(getRange(next, num - 1));
    next = num + 1;
  }

  if (next <= upper) {
    result.push(getRange(next, upper));
  }

  return result;
};
