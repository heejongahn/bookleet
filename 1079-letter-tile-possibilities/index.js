function fac(n) {
  if (n <= 1) {
    return 1;
  }

  return fac(n - 1) * n;
}

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  const checked = {};
  const cache = {};

  const sorted = [...tiles].sort();

  function helper(characters) {
    const key = characters.join("");

    if (checked[key]) {
      return 0;
    }

    checked[key] = true;
    if (characters.length === 0) {
      return 0;
    }

    if (characters.length === 1) {
      return 1;
    }

    let result = 0;

    for (let i = 0; i < characters.length; i++) {
      result = result + helper(characters.filter((_, index) => index !== i));
    }

    const occurences = Array(26).fill(0);

    for (const character of characters) {
      occurences[character.charCodeAt(0) - "A".charCodeAt(0)] += 1;
    }

    let current = fac(characters.length);
    for (const occurence of occurences) {
      current = current / fac(occurence);
    }

    result = result + current;

    cache[key] = result;
    return result;
  }

  return helper(sorted);
};
