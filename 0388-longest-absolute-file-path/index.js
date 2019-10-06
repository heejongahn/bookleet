// https://leetcode.com/problems/longest-absolute-file-path/

const newLine = "\n";
const tab = "\t";
const tabLength = tab.length;

function getLeadingTabs(line) {
  return line.split(tab).length - 1;
}

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const root = {
    value: "",
    children: []
  };

  const lines = input.split(newLine);
  const stack = [root];

  for (const line of lines) {
    const stackDepth = stack.length - 1;
    const currentDepth = getLeadingTabs(line);

    const node = {
      value: line.substr(tabLength * currentDepth),
      children: []
    };

    const depthDiff = stackDepth - currentDepth;

    for (let i = 0; i < depthDiff; i++) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }

  function helper(node) {
    if (node.children.length === 0) {
      return node.value.includes(".") ? node.value.length : 0;
    }

    let max = 0;

    for (const child of node.children) {
      const childResult = helper(child);
      max = Math.max(max, childResult);
    }

    return max > 0 ? max + node.value.length + 1 : 0;
  }

  return Math.max(helper(root) - 1, 0);
};
