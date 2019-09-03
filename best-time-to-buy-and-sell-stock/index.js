/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit_bruteForce = function(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const newProfit = prices[j] - prices[i];
      if (newProfit > profit) {
        profit = newProfit;
      }
    }
  }

  return profit;
};
