// https://leetcode.com/problems/find-and-replace-in-string/

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  const validOperations = {};

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const source = sources[i];
    const target = targets[i];

    let isValid = true;
    for (let k = 0; k < source.length; k++) {
      if (S[index + k] !== source[k]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      validOperations[index] = {
        target,
        next: index + source.length
      };
    }
  }

  let result = "";

  let i = 0;
  while (i < S.length) {
    const operation = validOperations[i];

    if (operation == null) {
      result += S[i];
      i++;
    } else {
      const { target, next } = operation;
      result += target;
      i = next;
    }
  }

  return result;
};
