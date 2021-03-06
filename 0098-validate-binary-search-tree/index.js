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
const isValidBST_inorder = function(root) {
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

const isValidBST_iterative = function(root) {
  if (root == null) {
    return true;
  }

  const stack = [[root, null, null]];

  while (stack.length > 0) {
    const [node, lowerLimit, upperLimit] = stack.pop();

    if (node == null) {
      continue;
    }

    if (lowerLimit != null && node.val <= lowerLimit) {
      return false;
    }

    if (upperLimit != null && upperLimit <= node.val) {
      return false;
    }

    stack.push([node.left, lowerLimit, node.val]);
    stack.push([node.right, node.val, upperLimit]);
  }

  return true;
};

const isValidBST = isValidBST_iterative;
