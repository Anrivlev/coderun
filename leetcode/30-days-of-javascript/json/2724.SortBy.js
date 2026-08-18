/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr
    .map((a) => [a, fn(a)])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0]);
};

// Хз какое лучше.
