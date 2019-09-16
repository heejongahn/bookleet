// https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (root == null) {
    return null;
  }

  const inverted = {
    val: root.val
  };

  inverted.right = invertTree(root.left);
  inverted.left = invertTree(root.right);

  return inverted;
};
