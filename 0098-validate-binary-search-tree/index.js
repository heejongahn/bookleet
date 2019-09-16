// https://leetcode.com/problems/validate-binary-search-tree/

function inorder(node) {
  if (node == null) {
    return [];
  }

  const left = node.left == null ? [] : inorder(node.left);
  const right = node.right == null ? [] : inorder(node.right);

  return [...left, node, ...right];
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
 * @return {boolean}
 */
const isValidBST = function(root) {
  if (root == null) {
    return true;
  }

  let last = -Infinity;

  const inorderNodeList = inorder(root);

  for (const node of inorderNodeList) {
    if (last >= node.val) {
      return false;
    }

    last = node.val;
  }

  return true;
};
