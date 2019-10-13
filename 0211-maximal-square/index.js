// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const columns = matrix[0].length;

  if (columns === 0) {
    return 0;
  }

  const maxMatrix = Array(rows);

  for (let r = 0; r < rows; r++) {
    maxMatrix[r] = Array(columns).fill(0);
  }

  let max = 0;

  const up = [-1, 0];
  const left = [0, -1];
  const diag = [-1, -1];

  const directions = [up, left, diag];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (matrix[r][c] === "0") {
        maxMatrix[r][c] = 0;
        continue;
      }

      const maxOfNeighbors = directions.map(direction => {
        const neighborRow = r + direction[0];
        const neighborColumn = c + direction[1];

        if (neighborRow < 0) {
          return 0;
        }

        if (neighborColumn < 0) {
          return 0;
        }

        return maxMatrix[neighborRow][neighborColumn];
      });

      const minSubSquare = Math.min(...maxOfNeighbors);

      maxMatrix[r][c] = minSubSquare + 1;
      max = Math.max(maxMatrix[r][c], max);
    }
  }

  return max * max;
};
