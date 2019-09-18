// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const numberSet = new Set();
  const countMap = {};

  // O(n)
  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
    numberSet.add(num);
  }

  // O(n)
  // Assume this is typical array, allocated in contiguous memory...
  const buckets = [];
  for (const uniqueNum of numberSet) {
    const index = countMap[uniqueNum] - 1;

    if (buckets[index] == null) {
      buckets[index] = [];
    }

    buckets[index].push(uniqueNum);
  }

  // O(n)
  let result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (buckets[i] == null) {
      continue;
    }

    result = result.concat(buckets[i]);

    if (result.length >= k) {
      return result;
    }
  }
};
