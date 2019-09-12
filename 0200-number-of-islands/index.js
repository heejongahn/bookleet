// https://leetcode.com/problems/number-of-islands

function isLand(grid, row, column) {
  return grid[row][column] === "1";
}

function getFlatIndex(currentRow, currentColumn, numOfColumns) {
  return currentRow * numOfColumns + currentColumn;
}

function constructGraph(grid) {
  const numOfRows = grid.length;
  const numOfColumns = grid[0].length;

  const vertices = [];
  const edges = {};

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      if (!isLand(grid, row, column)) {
        continue;
      }

      const neighborLands = [];

      const hasLeft = column > 0;
      const hasRight = column < numOfColumns - 1;
      const hasUp = row > 0;
      const hasDown = row < numOfRows - 1;

      if (hasLeft && isLand(grid, row, column - 1)) {
        neighborLands.push(getFlatIndex(row, column - 1, numOfColumns));
      }

      if (hasRight && isLand(grid, row, column + 1)) {
        neighborLands.push(getFlatIndex(row, column + 1, numOfColumns));
      }

      if (hasUp && isLand(grid, row - 1, column)) {
        neighborLands.push(getFlatIndex(row - 1, column, numOfColumns));
      }

      if (hasDown && isLand(grid, row + 1, column)) {
        neighborLands.push(getFlatIndex(row + 1, column, numOfColumns));
      }

      const flatIndex = getFlatIndex(row, column, numOfColumns);
      vertices.push(flatIndex);
      edges[flatIndex] = neighborLands;
    }
  }

  return {
    vertices,
    edges
  };
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslandsWithGraph = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const { vertices, edges } = constructGraph(grid);
  let numOfIslands = 0;

  const markedMap = {};

  for (const vertice of vertices) {
    if (markedMap[vertice]) {
      continue;
    }

    const tree = [vertice];
    while (tree.length > 0) {
      const currentVertice = tree.pop();

      if (markedMap[currentVertice]) {
        continue;
      }

      markedMap[currentVertice] = true;
      for (const neighbor of edges[currentVertice]) {
        tree.push(neighbor);
      }
    }

    numOfIslands = numOfIslands + 1;
  }

  return numOfIslands;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslandsWithoutGraph = function(grid) {
  const numOfRows = grid.length;

  if (grid.length === 0) {
    return 0;
  }

  const numOfColumns = grid[0].length;

  let numOfIslands = 0;
  function sink(grid, r, c) {
    const isIndexInvalid =
      r < 0 || r >= numOfRows || c < 0 || c >= numOfColumns;

    if (isIndexInvalid || !isLand(grid, r, c)) {
      return;
    }

    grid[r][c] = "0";
    sink(grid, r - 1, c);
    sink(grid, r + 1, c);
    sink(grid, r, c - 1);
    sink(grid, r, c + 1);
  }

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      if (isLand(grid, row, column)) {
        sink(grid, row, column);
        numOfIslands = numOfIslands + 1;
      }
    }
  }

  return numOfIslands;
};

const numIslands = numIslandsWithoutGraph;
