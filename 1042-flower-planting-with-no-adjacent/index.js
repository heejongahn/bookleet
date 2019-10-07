// https://leetcode.com/problems/flower-planting-with-no-adjacent/

function getColor(colors, neighbors) {
  const candidates = [1, 2, 3, 4];

  for (const neighbor of neighbors) {
    const neighborColor = colors[neighbor];
    if (neighborColor !== 0) {
      candidates[neighborColor - 1] = null;
    }
  }

  return candidates.find(c => c != null);
}

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
  const neighbors = Array(N);
  for (let i = 0; i < N; i++) {
    neighbors[i] = [];
  }

  const colors = Array(N).fill(0);

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const x = path[0];
    const y = path[1];

    neighbors[x - 1].push(y - 1);
    neighbors[y - 1].push(x - 1);
  }

  for (let vertice = 0; vertice < N; vertice++) {
    colors[vertice] = getColor(colors, neighbors[vertice]);
  }

  return colors;
};
