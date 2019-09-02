// https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const appearedValues = {};

  for (const num of nums) {
    if (appearedValues[num] !== undefined) {
      return true;
    } else {
      appearedValues[num] = true;
    }
  }

  return false;
};
