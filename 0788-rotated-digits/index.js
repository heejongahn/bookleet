// https://leetcode.com/problems/rotated-digits/

const categoryMap = {
  0: "boring",
  1: "boring",
  2: "good",
  3: "bad",
  4: "bad",
  5: "good",
  6: "good",
  7: "bad",
  8: "boring",
  9: "good"
};

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let result = 0;

  for (let i = 1; i <= N; i++) {
    const digits = `${i}`.split("");

    let hasGoodDigit = false;
    let hasBadDigit = false;

    for (const digit of digits) {
      const category = categoryMap[digit];

      if (category === "good") {
        hasGoodDigit = true;
      } else if (category === "bad") {
        hasBadDigit = true;
      }
    }

    if (hasGoodDigit && !hasBadDigit) {
      result = result + 1;
    }
  }

  return result;
};
