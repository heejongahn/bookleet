// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

function inorder(tree) {
  return tree == null
    ? []
    : [...inorder(tree.left), tree.val, ...inorder(tree.right)];
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  return inorder(root)[k - 1];
};
