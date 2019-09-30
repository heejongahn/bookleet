// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 실수 1: amount sanity check 안 함
  if (amount === 0) {
    return 0;
  }

  const resultMap = {};

  for (const coin of coins) {
    if (amount === coin) {
      return 1;
    }

    resultMap[coin] = 1;
  }

  function helper(price) {
    if (resultMap[price] != null) {
      return resultMap[price];
    }

    let min = Infinity;

    for (const coin of coins) {
      const beforePrice = price - coin;

      // 실수 2: Base condition 제대로 정의 안 함
      if (beforePrice <= 0) {
        continue;
      }

      const minForBeforePrice = helper(beforePrice);

      if (minForBeforePrice > 0) {
        // 실수 3: 1 더하는 것 빼먹음
        min = Math.min(min, minForBeforePrice + 1);
      }
    }

    if (min !== Infinity) {
      resultMap[price] = min;
      return min;
    }

    // 실수 4: 못 찾은 경우 캐시를 빼먹음
    resultMap[price] = -1;
    return -1;
  }

  return helper(amount);
};
