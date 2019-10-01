// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const length = nums.length;

  let max = 0;
  const maxUntilArray = Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    const num = nums[i];

    const currentMax = Math.max(max, num + (maxUntilArray[i - 2] || 0));

    maxUntilArray[i] = currentMax;
    max = Math.max(max, currentMax);
  }

  return max;
};
