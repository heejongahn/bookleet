// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  function helper(startRow, startColumn, endRow, endColumn) {
    const n = endRow - startRow + 1;

    if (n <= 1) {
      return;
    }

    for (let i = 0; i < n - 1; i++) {
      const up = [startRow, startColumn + i];
      const right = [startRow + i, endColumn];
      const down = [endRow, endColumn - i];
      const left = [endRow - i, startColumn];

      const tmp = matrix[right[0]][right[1]];
      matrix[right[0]][right[1]] = matrix[up[0]][up[1]];
      matrix[up[0]][up[1]] = matrix[left[0]][left[1]];
      matrix[left[0]][left[1]] = matrix[down[0]][down[1]];
      matrix[down[0]][down[1]] = tmp;
    }

    helper(startRow + 1, startColumn + 1, endRow - 1, endColumn - 1);
  }

  helper(0, 0, matrix.length - 1, matrix.length - 1);
};
