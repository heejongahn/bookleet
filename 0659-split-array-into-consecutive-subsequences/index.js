// https://leetcode.com/problems/split-array-into-consecutive-subsequences/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const one = {};
  let oneCount = 0;

  const two = {};
  let twoCount = 0;

  const threeAndMore = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (one[num]) {
      one[num] = one[num] - 1;
      oneCount = oneCount - 1;

      two[num + 1] = (two[num + 1] || 0) + 1;
      twoCount += 1;
    } else if (two[num]) {
      two[num] = two[num] - 1;
      twoCount -= 1;

      threeAndMore[num + 1] = (threeAndMore[num + 1] || 0) + 1;
    } else if (threeAndMore[num]) {
      threeAndMore[num] = threeAndMore[num] - 1;
      threeAndMore[num + 1] = (threeAndMore[num + 1] || 0) + 1;
    } else {
      one[num + 1] = (one[num + 1] || 0) + 1;
      oneCount = oneCount + 1;
    }
  }

  return oneCount === 0 && twoCount === 0;
};
