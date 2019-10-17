// https://leetcode.com/problems/next-closest-time/

function isValidHour(first, second) {
  if (first <= 1) {
    return true;
  }

  if (first === 2) {
    return second <= 3;
  }

  return false;
}

function isValidTime(digits) {
  return isValidHour(digits[0], digits[1]) && digits[3] <= 5;
}

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  let max = [2, 3, null, 5, 9];

  const min = [Infinity, Infinity, null, Infinity, Infinity];
  const result = time.split("").map((c, i) => (i === 2 ? c : parseInt(c)));

  const options = new Set();

  for (const digit of time) {
    if (!isNaN(parseInt(digit))) {
      options.add(parseInt(digit));
    }
  }

  for (let i = 4; i >= 0; i--) {
    if (i === 2) {
      continue;
    }

    const digit = parseInt(time[i]);

    let minimumValidIncreased = null;

    for (const option of options) {
      min[i] = Math.min(min[i], option);

      const replaced = [...result];
      replaced[i] = option;

      if (digit < option && isValidTime(replaced)) {
        minimumValidIncreased = Math.min(
          minimumValidIncreased || Infinity,
          option
        );
      }
    }

    if (minimumValidIncreased != null) {
      result[i] = minimumValidIncreased;

      for (let j = i + 1; j < 5; j++) {
        if (j === 2) {
          continue;
        }

        result[j] = min[j];
      }

      return result.join("");
    }
  }

  const minDigit = Math.min(...Array.from(options));
  return `${minDigit}${minDigit}:${minDigit}${minDigit}`;
};
