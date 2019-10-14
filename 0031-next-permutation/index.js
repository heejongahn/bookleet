// https://leetcode.com/problems/next-permutation/

function reverse(arr, start, end) {
  let lo = start;
  let hi = end;

  while (lo < hi) {
    const tmp = arr[lo];
    arr[lo] = arr[hi];
    arr[hi] = tmp;

    lo = lo + 1;
    hi = hi - 1;
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let increasingIndex = -1;
  let targetIndex = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      increasingIndex = i + 1;
      targetIndex = i;
    } else if (
      nums[targetIndex] < nums[i + 1] &&
      nums[i + 1] <= nums[increasingIndex]
    ) {
      increasingIndex = i + 1;
    }
  }

  if (targetIndex === -1) {
    nums.reverse();
    return;
  }

  let tmp = nums[targetIndex];
  nums[targetIndex] = nums[increasingIndex];
  nums[increasingIndex] = tmp;

  reverse(nums, targetIndex + 1, nums.length - 1);
};
