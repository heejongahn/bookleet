// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function(s, t) {
  const minCharCode = "a".charCodeAt(0);
  const maxCharCode = "z".charCodeAt(0);

  const charCodeRange = maxCharCode - minCharCode + 1;

  const countArray = Array.from({ length: charCodeRange }).map(_ => 0);

  for (const char of s) {
    const index = char.charCodeAt(0) - minCharCode;
    countArray[index] = countArray[index] + 1;
  }

  for (const char of t) {
    const index = char.charCodeAt(0) - minCharCode;
    countArray[index] = countArray[index] - 1;
  }

  return !countArray.some(v => v !== 0);
};

const isAnagram_followUp = function(s, t) {
  const countMap = {};

  for (const char of s) {
    const beforeCount = countMap[char];
    countMap[char] = beforeCount === undefined ? 1 : beforeCount + 1;
  }

  for (const char of t) {
    const beforeCount = countMap[char];
    if (beforeCount === undefined) {
      return false;
    }

    countMap[char] = beforeCount - 1;
  }

  for (const count of Object.values(countMap)) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};
