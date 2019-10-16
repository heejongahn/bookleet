// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let start = 0;

  const count = {};
  let distinctCount = 0;

  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    const before = count[s[end]] || 0;

    if (before === 0) {
      distinctCount += 1;
    }

    count[s[end]] = before + 1;

    while (distinctCount > 2) {
      count[s[start]] = count[s[start]] - 1;
      if (count[s[start]] === 0) {
        distinctCount -= 1;
      }

      start = start + 1;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
