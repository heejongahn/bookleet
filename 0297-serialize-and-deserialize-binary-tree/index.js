// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const serialize = function(root) {
  const result = [];

  function addNode(node) {
    if (node == null) {
      result.push("null");
      return;
    }

    result.push(node.val);
    addNode(node.left);
    addNode(node.right);
  }

  addNode(root);

  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  const nodes = data.split(",").reverse();

  function buildTree(values) {
    const value = values.pop();

    if (value === "null") {
      return null;
    }

    const node = {
      val: parseInt(value),
      left: buildTree(values),
      right: buildTree(values)
    };

    return node;
  }

  return buildTree(nodes);
};
