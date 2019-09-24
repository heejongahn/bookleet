// https://leetcode.com/problems/implement-trie-prefix-tree/

const indexMap = "abcdefghijklmnopqrstuvwxyz".split("").reduce(
  (accm, curr, index) => ({
    ...accm,
    [curr]: index
  }),
  {}
);

/**
 * Initialize your data structure here.
 */
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
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let currentNode = this;

  for (const char of word) {
    const index = indexMap[char];
    if (currentNode.children[index] == null) {
      return false;
    }

    currentNode = currentNode.children[index];
  }

  return currentNode.hasWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let currentNode = this;

  for (const char of prefix) {
    const index = indexMap[char];
    if (currentNode.children[index] == null) {
      return false;
    }

    currentNode = currentNode.children[index];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
