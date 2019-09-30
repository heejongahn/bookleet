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

function binarySearch(sequence, target) {
  let start = 0;
  let end = sequence.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start < end) {
    const midValue = sequence[mid];

    if (midValue < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return sequence[mid] >= target ? mid : mid + 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS_nLogN = function(nums) {
  const length = nums.length;

  if (length === 0) {
    return 0;
  }

  const piles = [nums[0]];

  for (let i = 1; i < length; i++) {
    const num = nums[i];
    const index = binarySearch(piles, num);

    if (index >= piles.length) {
      piles.push(num);
    } else {
      piles[index] = num;
    }
  }

  return piles.length;
};

const lengthOfLIS = lengthOfLIS_nLogN;
