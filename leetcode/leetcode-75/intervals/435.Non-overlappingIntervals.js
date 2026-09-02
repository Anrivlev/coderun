/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]); // ASC by start

  let erasedCount = 0;

  let rightEnd = -Infinity;
  for (const interval of intervals) {
    if (interval[0] < rightEnd) {
      rightEnd = Math.min(rightEnd, interval[1]);
      erasedCount++;
    } else {
      rightEnd = interval[1];
    }
  }

  return erasedCount;
};

function isIntersected(a, b) {
  return a[0] <= b[1] && a[1] >= b[0];
}
