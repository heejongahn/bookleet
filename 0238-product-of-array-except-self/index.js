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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  let accmFromStart = 1;
  let accmFromEnd = 1;

  const beforeArray = [];
  const reversedAfterArray = [];
  const resultArray = [];

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    accmFromStart = accmFromStart * nums[i];
    beforeArray.push(accmFromStart);
  }

  for (let i = 0; i < length; i++) {
    accmFromEnd = accmFromEnd * nums[length - 1 - i];
    // unshift is expensive
    reversedAfterArray.push(accmFromEnd);
  }

  const afterArray = reversedAfterArray.reverse();

  for (let i = 0; i < length; i++) {
    let result = 1;

    if (i > 0) {
      result = result * beforeArray[i - 1];
    }

    if (i < length - 1) {
      result = result * afterArray[i + 1];
    }

    resultArray.push(result);
  }

  return resultArray;
};
