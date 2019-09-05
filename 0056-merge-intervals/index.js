/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(rawIntervals) {
  const intervals = [...rawIntervals].sort((a, b) => a[0] - b[0]);
  const results = [];

  if (intervals.length <= 1) {
    return intervals;
  }

  let [currStart, currEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];

    if (currEnd < currInterval[0]) {
      results.push([currStart, currEnd]);
      [currStart, currEnd] = currInterval;
    } else {
      currEnd = Math.max(currEnd, currInterval[1]);
    }
  }

  results.push([currStart, currEnd]);

  return results;
};
