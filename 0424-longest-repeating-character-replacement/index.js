// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s, k) {
  const length = s.length;

  if (length === 0) {
    return 0;
  }

  const charCodeOfA = "A".charCodeAt(0);
  const charCodeOfZ = "Z".charCodeAt(0);

  const count = Array.from({ length: charCodeOfZ - charCodeOfA + 1 }).map(
    _ => 0
  );

  let [start, maxSameCharacterOccurences, maxLength] = [0, 0, 0];

  // We'll start from [0, 0] window.
  for (let end = 0; end < length; end++) {
    const [startCharIndex, endCharIndex] = [start, end].map(
      index => s.charCodeAt(index) - charCodeOfA
    );

    // Increase the count of the last element
    count[endCharIndex] = count[endCharIndex] + 1;

    // Set `maxSameCharacterOccurences` to be the historically maximum count
    // for the most freqeunt character within the window.
    //
    // Note that this value doesn't have to be the count for the current window,
    // because we're looking for the maximum valid length of the window only.

    maxSameCharacterOccurences = Math.max(
      maxSameCharacterOccurences,
      count[endCharIndex]
    );

    // For this window to be valid,
    // at least `requiredChangesWithinWindow` times of change is required.
    const requiredChangesWithinWindow =
      end - start + 1 - maxSameCharacterOccurences;

    // If we need more than `k` changes,
    if (requiredChangesWithinWindow > k) {
      // Shrink the window
      count[startCharIndex] = count[startCharIndex] - 1;
      start = start + 1;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
