// https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  if (tree.length === 1) {
    return 1;
  }

  if (tree.length === 2) {
    return 2;
  }

  let current = {};

  let hi = 0;
  let lo = 0;

  let loAnchor = 0;

  current.first = tree[0];
  let max = 0;

  for (let i = 1; i < tree.length; i++) {
    hi = i;

    if (current.second == null) {
      if (tree[i] === current.first) {
        // 1 1 1
        // 아무것도 할 필요 없다
      } else {
        // 1 1 2
        current.second = tree[i];
        loAnchor = i;
      }

      continue;
    }

    if (tree[i] === current.first) {
      // 1 1 2 1
      // 1 1 2 1 2
      current.first = current.second;
      current.second = tree[i];
      loAnchor = i;
    } else if (tree[i] === current.second) {
      // 1 1 2 2
      // 아무것도 할 필요 없다
    } else {
      // 1 1 1 2 3
      // OR
      // 1 1 2 1 3
      max = Math.max(hi - lo, max);
      current.first = current.second;
      current.second = tree[i];
      lo = loAnchor;
      loAnchor = i;
    }
  }

  max = Math.max(hi - lo + 1, max);
  return max;
};
