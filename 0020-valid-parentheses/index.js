// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const openingParens = ["(", "{", "["];
  const closingParens = [")", "}", "]"];

  const matchMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const stack = [];
  for (const char of s) {
    if (openingParens.includes(char)) {
      stack.push(char);
    }

    if (closingParens.includes(char)) {
      if (matchMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
