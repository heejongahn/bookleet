// https://leetcode.com/problems/0238-product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf_bruteForce = function(nums) {
  const resultArray = nums.map(_ => 1);

  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray.length; j++) {
      if (i !== j) {
        resultArray[i] = resultArray[i] * nums[j];
      }
    }
  }

  return resultArray;
};
