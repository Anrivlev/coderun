/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) return obj.length === 0;
  return Object.keys(obj).length === 0;
};

// Правильное решение
var isEmpty = function (obj) {
  for (const key in obj) return false;
  return true;
};
