// https://leetcode.com/problems/gas-station/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let surplus = 0;
  let deficit = 0;
  let startingPoint = 0;

  for (let i = 0; i < gas.length; i++) {
    const value = gas[i] - cost[i];
    const curr = surplus + value;

    if (curr < 0) {
      startingPoint = i + 1;
      surplus = 0;
      deficit = deficit + curr;
    } else {
      surplus = curr;
    }
  }

  return startingPoint === gas.length || surplus + deficit < 0
    ? -1
    : startingPoint;
};
