// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS_nSquare = function(nums) {
  const length = nums.length;

  if (length === 0) {
    return 0;
  }

  const lengthLIS = Array(length).fill(1);

  for (let i = length - 2; 0 <= i; i--) {
    for (let j = i + 1; j < length; j++) {
      if (nums[j] > nums[i]) {
        lengthLIS[i] = Math.max(lengthLIS[i], lengthLIS[j] + 1);
      }
    }
  }

  return Math.max(...lengthLIS);
};

const lengthOfLIS = lengthOfLIS_nSquare;
