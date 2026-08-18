/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (size === 0 || arr.length === 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) result.push([]);
    result.at(-1).push(arr[i]);
  }
  return result;
};

// Лучше бы решение было со слайсами, но и так пойдет.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (size === 0 || arr.length === 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
