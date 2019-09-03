// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

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

const maxProfit = function(prices) {
  let miminumPriceSoFar = Infinity;
  const mimimumPriceArray = [];

  for (const price of prices) {
    mimimumPriceArray.push(miminumPriceSoFar);

    if (miminumPriceSoFar > price) {
      miminumPriceSoFar = price;
    }
  }

  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - mimimumPriceArray[i]);
  }

  return maxProfit;
};
