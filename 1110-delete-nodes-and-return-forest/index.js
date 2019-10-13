// https://leetcode.com/problems/delete-nodes-and-return-forest/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

// # of nodes <= 1000
// value of node: 1 ~ 1000
// to.delete_length <= 1000
var delNodes = function(root, to_delete) {
  const result = [];

  const deleteValues = Array(1000).fill(false);

  for (const deleteValue of to_delete) {
    deleteValues[deleteValue - 1] = true;
  }

  function helper(node, parent) {
    if (node == null) {
      return null;
    }

    const shouldDeleteNode = deleteValues[node.val - 1];

    if (shouldDeleteNode) {
      helper(node.left, null);
      helper(node.right, null);
      return null;
    } else {
      if (parent == null) {
        // `node` is root
        result.push(node);
      }

      node.left = helper(node.left, node);
      node.right = helper(node.right, node);
      return node;
    }
  }

  helper(root, null);

  return result;
};
