// https://leetcode.com/problems/add-and-search-word-data-structure-design/

const indexMap = "abcdefghijklmnopqrstuvwxyz".split("").reduce(
  (accm, curr, index) => ({
    ...accm,
    [curr]: index
  }),
  { ".": -1 }
);

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.children = Array.from({ length: 26 }).map(_ => null);
  this.hasWord = false;
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (word.length === 0) {
    this.hasWord = true;
    return;
  }

  const first = word[0];
  const firstIndex = indexMap[first];

  const rest = word.slice(1);

  if (this.children[firstIndex] == null) {
    const dict = new WordDictionary();
    dict.value = first;
    this.children[firstIndex] = dict;
  }

  this.children[firstIndex].addWord(rest);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if (word.length === 0) {
    return this.hasWord;
  }

  const first = word[0];
  const firstIndex = indexMap[first];
  const isWildCard = firstIndex < 0;
  const rest = word.slice(1);

  const candidates = isWildCard ? this.children : [this.children[firstIndex]];

  for (const candidate of candidates) {
    if (candidate == null) {
      continue;
    }

    if (candidate.search(rest)) {
      return true;
    }
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
