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
