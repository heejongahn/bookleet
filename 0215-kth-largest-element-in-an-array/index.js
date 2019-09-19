// https://leetcode.com/problems/kth-largest-element-in-an-array/

function mergeSort(arr) {
  const length = arr.length;

  switch (length) {
    case 0:
    case 1: {
      return arr;
    }

    case 2: {
      return arr[0] > arr[1] ? arr : [arr[1], arr[0]];
    }
  }

  const leftLength = Math.floor(length / 2);
  const left = arr.slice(0, leftLength);
  const right = arr.slice(leftLength);

  const sortedLeft = mergeSort(left).reverse();
  const sortedRight = mergeSort(right).reverse();

  const merged = [];

  while (sortedLeft.length > 0 || sortedRight.length > 0) {
    if (sortedLeft.length === 0) {
      merged.push(sortedRight.pop());
      continue;
    }

    if (sortedRight.length === 0) {
      merged.push(sortedLeft.pop());
      continue;
    }

    if (
      sortedLeft[sortedLeft.length - 1] > sortedRight[sortedRight.length - 1]
    ) {
      merged.push(sortedLeft.pop());
    } else {
      merged.push(sortedRight.pop());
    }
  }

  return merged;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const sorted = mergeSort(nums);
  return sorted[k - 1];
};
