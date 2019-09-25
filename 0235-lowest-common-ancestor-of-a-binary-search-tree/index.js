// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let curr = root;

  while (true) {
    if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left;
    } else if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
};
