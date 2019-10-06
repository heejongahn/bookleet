// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const length = s.length;

  // canReachBefore[i] = reachability of the position before index i
  // the value is one of three:
  // - null  (.)  : hasn't visited
  // - true  (t)  : visited, confirmed to be reachable
  // - false (f)  : visited, confirmed to be unreachable
  //
  // s                : l e e t c o d e
  // canReachBefore   : . . . . . . . . .
  const canReachBefore = Array(length + 1).fill(null);

  // canReachBefore[0] is always true,
  // because before index zero is where we start
  //
  // s                : l e e t c o d e
  // canReachBefore   : t . . . . . . . .
  canReachBefore[0] = true;

  function helper(index) {
    // Out of bound
    if (index < 0) {
      return false;
    }

    // We already know the answer for the index, use it
    if (canReachBefore[index] != null) {
      return canReachBefore[index];
    }

    let reachable = false;

    for (const word of wordDict) {
      const wordLength = word.length;
      // For given index and word, if
      // 1) `wordLength` long substring which ends at `index - 1` equals to word
      // 2) we can reach the position right before that word (index - wordLength)
      // above two conditions hold, then given index is reachable.
      reachable =
        reachable ||
        (s.substr(index - wordLength, wordLength) === word &&
          helper(index - wordLength));
    }

    canReachBefore[index] = reachable;
    return canReachBefore[index];
  }

  // helper(8) -> calls helper(4)
  // s                : l e e t c o d e
  // canReachBefore   : t . . . . . . . ?

  // helper(4) -> calls helper(0)
  // s                : l e e t c o d e
  // canReachBefore   : t . . . ? . . . ?

  // helper(0) -> true by initial condition.
  // helper(4) pops
  // s                : l e e t c o d e
  // canReachBefore   : t . . . t . . . ?

  // helper(8) pops
  // s                : l e e t c o d e
  // canReachBefore   : t . . . t . . . t
  return helper(length) || false;
};
