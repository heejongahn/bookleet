// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  const length = inorder.length;

  if (length === 0) {
    return null;
  }

  const root = preorder[0];

  const leftLength = inorder.findIndex(value => value === root);

  const inorderLeft = inorder.slice(0, leftLength);
  const inorderRight = inorder.slice(1 + leftLength, length);

  const preorderLeft = preorder.slice(1, 1 + leftLength);
  const preorderRight = preorder.slice(1 + leftLength, length);

  return {
    val: root,
    left: buildTree(preorderLeft, inorderLeft),
    right: buildTree(preorderRight, inorderRight)
  };
};
