/**
 * This is the record of my first attempt.
 * Very verbose and unnecessarily complex – see improved version at index.js
 */

const binaryPivotSearch = function(nums) {
  const length = nums.length;

  let start = 0;
  let end = length - 1;

  while (start <= end) {
    const center = Math.floor((start + end) / 2);

    const s = nums[start];

    const e = nums[end];
    const beforeE = nums[(end - 1 + length) % length];

    const c = nums[center];
    const beforeC = nums[(center - 1 + length) % length];

    if (e >= c && c >= s) {
      return start;
    } else if (s >= e && e >= c) {
      if (c < beforeC) {
        return center;
      }

      end = center - 1;
    } else {
      if (e < beforeE) {
        return end;
      }

      start = center + 1;
    }
  }
};

const binarySearch = function(nums, target, pivotIndex) {
  const length = nums.length;

  let start = pivotIndex;
  let end = pivotIndex + length - 1;

  while (start <= end) {
    const center = Math.floor((start + end) / 2);
    const moduloCenter = center % length;

    if (nums[moduloCenter] === target) {
      return moduloCenter;
    } else if (nums[moduloCenter] > target) {
      end = center - 1;
    } else {
      start = center + 1;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  const pivotIndex = binaryPivotSearch(nums);
  return binarySearch(nums, target, pivotIndex);
};
