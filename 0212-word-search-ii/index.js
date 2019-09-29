// https://leetcode.com/problems/word-search-ii/

const indexMap = "abcdefghijklmnopqrstuvwxyz".split("").reduce(
  (accm, curr, index) => ({
    ...accm,
    [curr]: index
  }),
  {}
);

var Trie = function() {
  this.hasWord = false;
  this.children = new Array(26);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let currentNode = this;

  for (const char of word) {
    const index = indexMap[char];
    if (currentNode.children[index] == null) {
      currentNode.children[index] = new Trie();
    }

    currentNode = currentNode.children[index];
  }

  currentNode.hasWord = true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  if (board.length === 0) {
    return [];
  }

  const trie = new Trie();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    trie.insert(word);
  }

  const up = [-1, 0];
  const down = [1, 0];
  const left = [0, -1];
  const right = [0, 1];
  const directions = [up, down, left, right];

  const result = new Set();
  const numOfRows = board.length;
  const numOfColumns = board[0].length;

  const visitedMap = {};

  function DFS(row, column, parent, prefix) {
    if (row < 0 || numOfRows <= row) {
      return;
    }

    if (column < 0 || numOfColumns <= column) {
      return;
    }

    const visitedMapKey = `${row}_${column}`;
    if (visitedMap[visitedMapKey]) {
      return;
    }

    visitedMap[visitedMapKey] = true;

    const char = board[row][column];
    const charIndex = indexMap[char];

    const node = parent.children[charIndex];
    const currentWord = `${prefix}${char}`;

    if (node == null) {
      visitedMap[visitedMapKey] = false;
      return;
    }

    if (node.hasWord) {
      result.add(currentWord);
    }

    for (const direction of directions) {
      const neighborRow = row + direction[0];
      const neighborColumn = column + direction[1];

      DFS(neighborRow, neighborColumn, node, currentWord);
    }

    visitedMap[visitedMapKey] = false;
  }

  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      DFS(row, column, trie, "");
    }
  }

  return Array.from(result);
};
