/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    const isBadVersionCache = new Map(); // или Array

    function getFromCache(index) {
      const cached = isBadVersionCache.get(index);
      if (cached !== undefined) return cached;
      const newValue = isBadVersion(index);
      isBadVersionCache.set(index, newValue);
      return newValue;
    }

    let left = 1;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const isMidBad = getFromCache(mid);
      if (!isMidBad) {
        left = mid + 1;
        continue;
      }
      if (mid === 0) return mid;
      const isPrevMidBad = getFromCache(mid - 1);
      if (!isPrevMidBad && isMidBad) return mid;

      right = mid;
    }
    return left;
  };
};

const isBadVersionMock = (i) => i > 0;
const n = 1;

const solver = solution(isBadVersionMock);
console.log(solver(n));
