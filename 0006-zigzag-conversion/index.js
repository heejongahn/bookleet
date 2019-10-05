// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const charsInCycle = numRows + (numRows - 2);
  const numOfCycle = Math.ceil(s.length / charsInCycle);

  const result = [];

  for (let row = 0; row < numRows; row++) {
    for (let c = 0; c < numOfCycle; c++) {
      const base = c * charsInCycle;
      const first = row;
      const second = charsInCycle - row;

      result.push(s[base + first]);

      if (first < second && second < charsInCycle && base + second < s.length) {
        result.push(s[base + second]);
      }
    }
  }

  return result.join("");
};
