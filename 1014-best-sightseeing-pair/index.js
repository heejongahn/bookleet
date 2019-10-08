// https://leetcode.com/problems/best-sightseeing-pair/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  const maxSinceArray = [];
  let maxSince = -Infinity;

  for (let i = A.length - 1; i >= 0; i--) {
    maxSince = Math.max(maxSince, A[i] - i);
    maxSinceArray.push(maxSince);
  }

  maxSinceArray.reverse();

  const maxBeforeArray = [];
  let maxBefore = -Infinity;

  for (let i = 0; i < A.length; i++) {
    maxBeforeArray.push(maxBefore);
    maxBefore = Math.max(maxBefore, A[i] + i);
  }

  let max = 0;
  for (let i = 1; i < A.length; i++) {
    max = Math.max(max, maxBeforeArray[i] + maxSinceArray[i]);
  }

  return max;
};
