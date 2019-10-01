// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const robWithoutCircle = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return Math.max(
    robWithoutCircle(nums.slice(0, nums.length - 1)),
    robWithoutCircle(nums.slice(1))
  );
};
