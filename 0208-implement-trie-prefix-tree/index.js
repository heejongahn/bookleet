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
  this.children = Array.from({ length: 26 });
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  if (word.length === 0) {
    this.hasWord = true;
    return;
  }

  const [first, rest] = [word[0], word.slice(1)];
  const firstIndex = indexMap[first];

  if (this.children[firstIndex] == null) {
    this.children[firstIndex] = new Trie();
  }

  this.children[firstIndex].insert(rest);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  if (word.length === 0) {
    return this.hasWord;
  }

  const [first, rest] = [word[0], word.slice(1)];
  const firstIndex = indexMap[first];

  const child = this.children[firstIndex];

  if (child == null) {
    return false;
  }

  return child.search(rest);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if (prefix.length === 0) {
    return true;
  }

  const [first, rest] = [prefix[0], prefix.slice(1)];
  const firstIndex = indexMap[first];

  const child = this.children[firstIndex];

  if (child == null) {
    return false;
  }

  return child.startsWith(rest);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
