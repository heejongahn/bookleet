// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const negatedValueIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const negatedValueIndex = negatedValueIndexMap[num];

    if (negatedValueIndex === undefined) {
      negatedValueIndexMap[target - num] = i;
    } else {
      return [negatedValueIndex, i];
    }
  }
};
