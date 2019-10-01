// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const length = nums.length;

  if (length === 0) {
    return false;
  }

  let minimumKnownReachable = length - 1;

  for (let i = length - 2; i >= 0; i--) {
    const distanceToMKR = minimumKnownReachable - i;

    if (distanceToMKR <= nums[i]) {
      minimumKnownReachable = i;
    }
  }

  return minimumKnownReachable === 0;
};
