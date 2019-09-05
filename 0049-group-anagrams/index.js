/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const map = {};

  for (const str of strs) {
    const key = str
      .split("")
      .sort()
      .join("");

    if (map[key] === undefined) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }

  return Object.values(map);
};
