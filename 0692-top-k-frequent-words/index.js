// https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
  const countMap = {};
  const set = new Set();

  for (const word of words) {
    countMap[word] = (countMap[word] || 0) + 1;
    set.add(word);
  }

  const uniqueWords = Array.from(set);

  const frequencyBasedArray = Array.from({ length: words.length });

  for (const word of uniqueWords) {
    const wordFrequency = (countMap[word] || 0) - 1;
    if (wordFrequency < 0) {
      continue;
    }

    if (frequencyBasedArray[wordFrequency] == null) {
      frequencyBasedArray[wordFrequency] = [];
    }

    frequencyBasedArray[wordFrequency].push(word);
  }

  let result = [];

  for (let i = frequencyBasedArray.length - 1; i >= 0; i--) {
    const wordsWithFrequencyI = frequencyBasedArray[i];
    if (wordsWithFrequencyI == null) {
      continue;
    }

    const currentResultLength = result.length;
    const remaining = k - currentResultLength;
    if (currentResultLength >= k) {
      break;
    }

    const sorted = wordsWithFrequencyI.sort();
    for (let i = 0; i < remaining && i < sorted.length; i++) {
      result.push(sorted[i]);
    }
  }

  return result;
};
