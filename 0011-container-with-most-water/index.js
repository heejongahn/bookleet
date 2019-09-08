// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let volume = 0;

  while (i < j) {
    volume = Math.max(volume, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return volume;
};
