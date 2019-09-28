// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const occurenceMap = {};
  const visitedMap = {};

  for (const num of nums) {
    occurenceMap[num] = true;
  }

  function getConsec(num) {
    if (!occurenceMap[num]) {
      return 0;
    }

    visitedMap[num] = true;

    const prev = num - 1;
    const next = num + 1;

    const hasPrev = occurenceMap[prev];
    const hasNext = occurenceMap[next];

    let consec = 1;

    if (hasPrev && !visitedMap[prev]) {
      consec = consec + getConsec(prev);
    }

    if (hasNext && !visitedMap[next]) {
      consec = consec + getConsec(next);
    }

    return consec;
  }

  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedMap[num]) {
      continue;
    }

    max = Math.max(max, getConsec(num));
  }

  return max;
};
