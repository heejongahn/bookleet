// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s === "") {
    return 0;
  }

  let currentStart = 0;
  let map = {};

  let maxStart = 0;
  let maxEnd = 0;

  for (let currentEnd = 0; currentEnd < s.length; currentEnd++) {
    const char = s[currentEnd];

    if (map[char]) {
      while (map[char]) {
        map[s[currentStart]] = false;
        currentStart = currentStart + 1;
      }
    }

    map[char] = true;
    if (currentEnd - currentStart > maxEnd - maxStart) {
      maxEnd = currentEnd;
      maxStart = currentStart;
    }
  }

  return maxEnd - maxStart + 1;

  // If the question requires max substring,
  // return `s.substr(maxStart, maxEnd - maxStart + 1)`
};
