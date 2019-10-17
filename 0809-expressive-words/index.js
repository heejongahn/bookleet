// https://leetcode.com/problems/expressive-words/

function parse(str) {
  if (str.length === 0) {
    return [];
  }

  const result = [];

  let count = 0;
  let lastChar = str[0];

  for (const char of str) {
    if (char === lastChar) {
      count += 1;
    } else {
      result.push({ char: lastChar, count: count });
      count = 1;
      lastChar = char;
    }
  }

  result.push({ char: lastChar, count: count });

  return result;
}

function isStretchy(target, token) {
  if (target.char !== token.char) {
    return false;
  }

  const isCountEqual = target.count === token.count;
  const isStretchAvailable = target.count > token.count && target.count >= 3;

  return isCountEqual || isStretchAvailable;
}

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  const parsedTarget = parse(S);
  const parsedWords = words
    .map(word => parse(word))
    .filter(parsedWord => parsedWord.length === parsedTarget.length);

  let count = 0;

  for (const parsedWord of parsedWords) {
    let isValid = true;

    for (let i = 0; i < parsedTarget.length; i++) {
      const target = parsedTarget[i];
      const token = parsedWord[i];

      isValid = isValid && isStretchy(target, token);
    }

    if (isValid) {
      count += 1;
    }
  }

  return count;
};
