// https://leetcode.com/problems/0153-find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] < nums[end]) {
      return nums[start];
    }

    const center = Math.floor((start + end) / 2);
    if (nums[center] < nums[end]) {
      end = center;
    } else {
      start = center + 1;
    }
  }

  return nums[start];
};
