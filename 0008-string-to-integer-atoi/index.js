// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let hasStarted = false;
  let isNegative = false;
  let converted = 0;

  for (const char of str) {
    if (!hasStarted && char === " ") {
      continue;
    }

    const parsedChar = parseInt(char);

    if (char === "+") {
      if (hasStarted) {
        break;
      }
    } else if (char === "-") {
      if (hasStarted) {
        break;
      }

      isNegative = true;
    } else if (isNaN(parsedChar)) {
      break;
    } else {
      converted = converted * 10;
      converted = converted + parsedChar;
    }

    hasStarted = true;
  }

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -1 * Math.pow(2, 31);

  if (!hasStarted) {
    return 0;
  }

  return isNegative
    ? Math.max(-1 * converted, INT_MIN)
    : Math.min(converted, INT_MAX);
};
