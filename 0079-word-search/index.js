// https://leetcode.com/problems/word-search/submissions/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
  const visitedMap = {};

  if (board.length === 0) {
    return false;
  }

  const numOfRows = board.length;
  const numOfColumns = board[0].length;

  const up = [-1, 0];
  const down = [1, 0];
  const left = [0, -1];
  const right = [0, 1];
  const directions = [up, down, left, right];

  function DFS(row, column, word) {
    if (row < 0 || numOfRows <= row) {
      return false;
    }

    if (column < 0 || numOfColumns <= column) {
      return false;
    }

    const visitedKey = `${row}_${column}`;

    if (visitedMap[visitedKey]) {
      return false;
    }

    const firstChar = word[0];
    const currentChar = board[row][column];

    if (currentChar !== firstChar) {
      return false;
    }

    if (currentChar === word) {
      return true;
    }

    visitedMap[visitedKey] = true;

    let found = false;
    for (const direction of directions) {
      const neighborRow = row + direction[0];
      const neighborColumn = column + direction[1];

      found = found || DFS(neighborRow, neighborColumn, word.substr(1));
    }

    visitedMap[visitedKey] = false;
    return found;
  }

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      if (DFS(row, column, word)) {
        return true;
      }
    }
  }

  return false;
};
