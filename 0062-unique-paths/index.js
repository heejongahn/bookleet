// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }

  const matrix = Array(n).fill(Array(m).fill(0));

  for (let column = 0; column < m; column++) {
    matrix[0][column] = 1;
  }

  for (let row = 0; row < n; row++) {
    matrix[row][0] = 1;
  }

  for (let row = 1; row < n; row++) {
    for (let column = 1; column < m; column++) {
      matrix[row][column] = matrix[row - 1][column] + matrix[row][column - 1];
    }
  }

  return matrix[n - 1][m - 1];
};
