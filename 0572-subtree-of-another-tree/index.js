// https://leetcode.com/problems/subtree-of-another-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const mark = function(t) {
  if (t == null) {
    return "null";
  }

  const l = mark(t.left);
  const r = mark(t.right);

  t.hash = `${l},${t.val},${r}`;
  return t.hash;
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  mark(s);
  mark(t);

  const stack = [s];
  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr == null) {
      continue;
    }

    if (curr.hash === t.hash) {
      return true;
    }

    stack.push(curr.left);
    stack.push(curr.right);
  }

  return false;
};
