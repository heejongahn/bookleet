// https://leetcode.com/problems/pacific-atlantic-water-flow

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const [numOfRows, numOfColumns] = [matrix.length, matrix[0].length];

  const pacificVisited = [];
  const pacificReachable = [];
  const pacificQueue = [];

  const atlanticVisited = [];
  const atlanticReachable = [];
  const atlanticQueue = [];

  for (let i = 0; i < numOfRows; i++) {
    [
      pacificVisited,
      pacificReachable,
      atlanticVisited,
      atlanticReachable
    ].forEach(array => {
      array.push(Array.from({ length: numOfColumns }).map(_ => false));
    });
  }

  for (let column = 0; column < numOfColumns; column++) {
    pacificQueue.push([0, column]);
    pacificVisited[0][column] = true;
  }

  for (let row = 1; row < numOfRows; row++) {
    pacificQueue.push([row, 0]);
    pacificVisited[row][0] = true;
  }

  while (pacificQueue.length > 0) {
    BFS(matrix, pacificQueue, pacificReachable, pacificVisited);
  }

  for (let column = 0; column < numOfColumns; column++) {
    atlanticQueue.push([numOfRows - 1, column]);
    atlanticVisited[numOfRows - 1][column] = true;
  }

  for (let row = 0; row < numOfRows - 1; row++) {
    atlanticQueue.push([row, numOfColumns - 1]);
    atlanticVisited[row][numOfColumns - 1] = true;
  }

  while (atlanticQueue.length > 0) {
    BFS(matrix, atlanticQueue, atlanticReachable, atlanticVisited);
  }

  const result = [];

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      if (pacificReachable[row][column] && atlanticReachable[row][column]) {
        result.push([row, column]);
      }
    }
  }

  return result;
};

function BFS(matrix, queue, reachable, visited) {
  const [numOfRows, numOfColumns] = [matrix.length, matrix[0].length];

  const [row, column] = queue.pop();
  reachable[row][column] = true;

  const up = [row - 1, column];
  const down = [row + 1, column];
  const left = [row, column - 1];
  const right = [row, column + 1];

  for (const [neighborRow, neighborColumn] of [up, down, left, right]) {
    if (
      neighborRow < 0 ||
      numOfRows <= neighborRow ||
      neighborColumn < 0 ||
      numOfColumns <= neighborColumn
    ) {
      continue;
    }

    if (visited[neighborRow][neighborColumn]) {
      continue;
    }

    if (matrix[neighborRow][neighborColumn] >= matrix[row][column]) {
      visited[neighborRow][neighborColumn] = true;
      queue.push([neighborRow, neighborColumn]);
    }
  }
}
