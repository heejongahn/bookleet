const maxCode = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1;

function isValidOneDigit(str) {
  const parsed = parseInt(str);
  return parsed > 0 && parsed <= 9;
}

function isValidTwoDigit(str) {
  const parsed = parseInt(str);
  return parsed > 9 && parsed <= maxCode;
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === "") {
    return 1;
  }

  let previous = 1;
  let current = isValidOneDigit(s[0]) ? 1 : 0;

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    const beforeAndChar = s.substr(i - 1, 2);

    let tmp = 0;

    if (isValidOneDigit(char)) {
      tmp = tmp + current;
    }

    if (isValidTwoDigit(beforeAndChar)) {
      tmp = tmp + previous;
    }

    previous = current;
    current = tmp;
  }

  return current;
};
