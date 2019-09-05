// https://leetcode.com/problems/3sum/

function hasAppeared(map, threeSum) {
  const [first, second, third] = threeSum;

  return (
    map[first] !== undefined &&
    map[first][second] !== undefined &&
    map[first][second][third] !== undefined
  );
}

function addAppearance(map, threeSum) {
  const [first, second, third] = threeSum;

  if (map[first] === undefined) {
    map[first] = { [second]: { [third]: true } };
    return;
  }

  if (map[first][second] === undefined) {
    map[first][second] = { [third]: true };
    return;
  }

  map[first][second][third] = true;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum_TLE = function(rawNums) {
  // Time complexity: O(n^2) but TLE
  const nums = [...rawNums].sort();

  const results = [];
  const appearanceMap = {};

  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];
    const negatedValueMap = {};

    for (let j = i + 1; j < nums.length; j++) {
      // embedded solution for two sums problem.
      const num = nums[j];
      const negatedValue = negatedValueMap[num];

      if (negatedValue === undefined) {
        negatedValueMap[target - num] = num;
      } else {
        const newThreeSum = [-target, negatedValue, num];

        if (!hasAppeared(appearanceMap, newThreeSum)) {
          results.push(newThreeSum);
          addAppearance(appearanceMap, newThreeSum);
        }
      }
    }
  }

  return results;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(rawNums) {
  const nums = rawNums.sort((a, b) => a - b);
  const length = nums.length;

  const results = [];

  for (let i = 0; i < length - 2; i++) {
    const target = nums[i];

    // As `results` is sorted
    if (target > 0) {
      continue;
    }

    // Avoid duplicatation within same `target`s with different `i` values
    if (i > 0 && target === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = length - 1;

    while (j < k) {
      const first = nums[j];
      const second = nums[k];

      const sum = target + first + second;

      if (sum === 0) {
        const result = [target, first, second];
        results.push(result);

        j++;
        k--;

        // Avoid duplications within same `i` value
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return results;
};
