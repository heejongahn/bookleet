// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number
 */
const longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) {
    return 0;
  }

  const [numOfRows, numOfColumns] = [matrix.length, matrix[0].length];

  const cache = [];
  for (let row = 0; row < numOfRows; row++) {
    cache.push(Array.from({ length: numOfColumns }).map(_ => undefined));
  }

  let longestPathLength = 0;

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      longestPathLength = Math.max(
        longestPathLength,
        DFS(matrix, cache, row, column)
      );
    }
  }

  return longestPathLength;
};

function DFS(matrix, cache, row, column) {
  const [numOfRows, numOfColumns] = [cache.length, cache[0].length];

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  if (cache[row][column] == null) {
    const candidates = directions
      .map(direction => [row + direction[0], column + direction[1]])
      .filter(
        ([r, c]) =>
          r >= 0 &&
          r < numOfRows &&
          c >= 0 &&
          c < numOfColumns &&
          matrix[row][column] < matrix[r][c]
      );

    cache[row][column] =
      candidates.length > 0
        ? 1 +
          Math.max(
            ...candidates.map(candidate =>
              DFS(matrix, cache, candidate[0], candidate[1])
            )
          )
        : 1;
  }

  return cache[row][column];
}
