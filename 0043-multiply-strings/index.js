// https://leetcode.com/problems/multiply-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const subSums = [];

  for (let i = 0; i < num1.length; i++) {
    const subSum = [];

    for (let j = 0; j < i; j++) {
      subSum.push(0);
    }

    let overflow = 0;
    const digit1 = num1[num1.length - 1 - i];
    for (let k = 0; k < num2.length; k++) {
      const digit2 = num2[num2.length - 1 - k];
      const current = parseInt(digit1) * parseInt(digit2) + overflow;

      overflow = Math.floor(current / 10);
      subSum.push(current % 10);
    }

    if (overflow > 0) {
      subSum.push(overflow);
    }

    subSums.push(subSum);
  }

  const result = [];
  const maxRadix = Math.max(...subSums.map(subSum => subSum.length));

  let overflow = 0;

  for (let i = 0; i < maxRadix; i++) {
    let sum = overflow;

    for (const subSum of subSums) {
      if (subSum[i]) {
        sum = sum + subSum[i];
      }
    }

    overflow = Math.floor(sum / 10);
    result.push(sum % 10);
  }

  if (overflow > 0) {
    result.push(overflow);
  }

  result.reverse();
  return result.join("");
};
