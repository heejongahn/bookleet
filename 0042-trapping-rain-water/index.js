// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const N = height.length;

  const left = Array(N).fill(0);
  const right = Array(N).fill(0);

  let leftMax = 0;
  let rightMax = 0;

  let sum = 0;

  for (let i = 0; i < N; i++) {
    left[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);
  }

  for (let i = N - 1; i >= 0; i--) {
    right[i] = rightMax;
    rightMax = Math.max(rightMax, height[i]);
  }

  for (let i = 0; i < N; i++) {
    const lowerBoundingWall = Math.min(left[i], right[i]);
    const current = Math.max(0, lowerBoundingWall - height[i]);

    sum = sum + current;
  }

  return sum;
};
