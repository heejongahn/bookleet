// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const length = s.length;

  if (length === 0 || k === 0) {
    return 0;
  }

  const countMap = {};

  let start = 0;
  let uniqueCount = 0;

  let max = 0;

  for (let end = 0; end < length; end++) {
    const char = s[end];

    // Case 1: 이미 윈도우 안에 있는 캐릭터
    if (countMap[char]) {
      countMap[char] = countMap[char] + 1;
      continue;
    }

    // Case 2: 윈도우 안에 없던 캐릭터
    uniqueCount = uniqueCount + 1;
    countMap[char] = 1;

    // Case 2-1: k 초과하지 않음
    if (uniqueCount <= k) {
      continue;
    }

    // Case 2-2: k 초과, 하나 완전히 지워질 때까지 start를 앞으로 당김
    max = Math.max(max, end - start);

    while (uniqueCount > k && start < end) {
      const startChar = s[start];
      countMap[startChar] = countMap[startChar] - 1;

      if (countMap[startChar] === 0) {
        uniqueCount = uniqueCount - 1;
      }

      start = start + 1;
    }
  }

  max = Math.max(max, length - start);

  return max;
};
