// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let distance = 0;

    while (
      i - distance >= 0 &&
      i + distance < s.length &&
      s[i - distance] === s[i + distance]
    ) {
      count = count + 1;
      distance = distance + 1;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    let distance = 0;

    while (
      i - distance >= 0 &&
      i + distance + 1 < s.length &&
      s[i - distance] === s[i + distance + 1]
    ) {
      count = count + 1;
      distance = distance + 1;
    }
  }

  return count;
};
