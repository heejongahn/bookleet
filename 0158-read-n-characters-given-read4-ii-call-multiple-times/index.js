// https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  let remaining = [];

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    // Part 0: Remaining is enough
    if (n < remaining.length) {
      for (let i = 0; i < n; i++) {
        buf.push(remaining[i]);
      }

      remaining = remaining.slice(n);
      return n;
    }

    let readCount = 0;

    const afterRemaining = n - remaining.length;
    const quotient = Math.floor(afterRemaining / 4);
    const modulo = afterRemaining % 4;

    const tmp = [];

    // Part I: Spend remaining chars
    for (let i = 0; i < remaining.length; i++) {
      buf.push(remaining[i]);
      readCount += 1;
    }

    remaining = [];

    // Part II: Make repeated read4 calls
    for (let i = 0; i < quotient; i++) {
      const tmpReadCount = read4(tmp);

      // EOF reached
      if (tmpReadCount === 0) {
        return readCount;
      }

      for (let i = 0; i < tmpReadCount; i++) {
        buf.push(tmp[i]);
      }

      readCount += tmpReadCount;
    }

    // Part III: Make final read4 calls, push leftovers to remaining for future use
    if (modulo > 0) {
      const tmpReadCount = read4(tmp);

      for (let i = 0; i < tmpReadCount; i++) {
        if (i < modulo) {
          buf.push(tmp[i]);
          readCount += 1;
        } else {
          remaining.push(tmp[i]);
        }
      }
    }

    return readCount;
  };
};
