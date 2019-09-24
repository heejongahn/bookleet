// https://leetcode.com/problems/course-schedule-ii/

const Color = {
  black: "BLACK",
  grey: "GREY",
  white: "WHITE"
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const edges = Array.from({ length: numCourses }).map(_ => []);
  const colors = Array.from({ length: numCourses }).map(_ => Color.white);

  let result = [];

  for (const prerequisite of prerequisites) {
    edges[prerequisite[0]].push(prerequisite[1]);
  }

  function DFS(vertice) {
    if (colors[vertice] === Color.black) {
      return true;
    }

    if (colors[vertice] === Color.grey) {
      return false;
    }

    colors[vertice] = Color.grey;

    for (const neighbor of edges[vertice]) {
      if (!DFS(neighbor)) {
        return false;
      }
    }

    colors[vertice] = Color.black;
    result.push(vertice);
    return true;
  }

  for (let vertice = 0; vertice < numCourses; vertice++) {
    if (!DFS(vertice)) {
      return [];
    }
  }

  return result;
};
