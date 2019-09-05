// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const initialValue = nums[0];
  const maxPositives = [initialValue >= 0 ? initialValue : undefined];
  const minNegatives = [initialValue > 0 ? undefined : initialValue];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const previousMaxPositive = maxPositives[i - 1];
    const previousMinNegative = minNegatives[i - 1];

    if (current === 0) {
      maxPositives.push(0);
      minNegatives.push(0);
    } else if (current > 0) {
      maxPositives.push(
        previousMaxPositive === undefined
          ? current
          : Math.max(previousMaxPositive * current, current)
      );
      minNegatives.push(
        previousMinNegative === undefined
          ? undefined
          : previousMinNegative * current
      );
    } else {
      maxPositives.push(
        previousMinNegative === undefined
          ? undefined
          : previousMinNegative * current
      );
      minNegatives.push(
        previousMaxPositive === undefined
          ? current
          : Math.min(previousMaxPositive * current, current)
      );
    }
  }

  return Math.max(...maxPositives.filter(v => !isNaN(v)));
};
