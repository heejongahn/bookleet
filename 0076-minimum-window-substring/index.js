// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  if (t === "") {
    return "";
  }

  const targetMap = {};
  for (const targetChar of t) {
    targetMap[targetChar] = (targetMap[targetChar] || 0) + 1;
  }

  let remainingCount = t.length;

  let minimumWindow = undefined;
  let start = 0;
  const map = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    map[char] = (map[char] || 0) + 1;

    if (targetMap[char] !== undefined && targetMap[char] >= map[char]) {
      // If the `map[char]` is a part of the target string and
      // we haven't found enough `map[char]` compared to the target string,
      // current `map[char]` is "useful".
      remainingCount = remainingCount - 1;
    }

    if (remainingCount > 0) {
      // We still haven't found the valid window
      continue;
    }

    // Once we've found the valid window (that is, once we pass the test above),
    // We'll shrink the window from left, as much as we can until the validity breaks.
    // As we won't go "too far" and break the validity, we don't care about `remainingCount`.
    let startChar = s[start];
    while (
      targetMap[startChar] === undefined ||
      map[startChar] - 1 >= targetMap[startChar]
    ) {
      map[startChar] = map[startChar] - 1;
      start = start + 1;
      startChar = s[start];
    }

    if (
      minimumWindow === undefined ||
      end - start < minimumWindow.end - minimumWindow.start
    ) {
      minimumWindow = { start, end };
    }
  }

  return minimumWindow !== undefined
    ? s.substr(minimumWindow.start, minimumWindow.end - minimumWindow.start + 1)
    : "";
};
