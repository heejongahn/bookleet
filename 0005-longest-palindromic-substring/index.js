// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) {
    return "";
  }

  let longest = s[0];

  for (let i = 1; i < s.length; i++) {
    let oddRadius = 0;
    let evenRadius = 0;

    while (i - oddRadius >= 0 && i + oddRadius < s.length) {
      const length = 2 * oddRadius + 1;
      if (s[i - oddRadius] === s[i + oddRadius]) {
        if (length > longest.length) {
          longest = s.substr(i - oddRadius, length);
        }
      } else {
        break;
      }

      oddRadius = oddRadius + 1;
    }

    while (i - 1 - evenRadius >= 0 && i + evenRadius < s.length) {
      const length = 2 * evenRadius + 2;
      if (s[i - 1 - evenRadius] === s[i + evenRadius]) {
        if (length > longest.length) {
          longest = s.substr(i - 1 - evenRadius, length);
        }
      } else {
        break;
      }

      evenRadius = evenRadius + 1;
    }
  }

  return longest;
};
