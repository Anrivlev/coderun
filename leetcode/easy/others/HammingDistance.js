/**
 * Мое решение
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let distance = 0;
  for (let i = 0; i < 32; i++) {
    const isEqual = (x & (2 ** i)) === (y & (2 ** i));
    distance += isEqual ? 0 : 1;
  }
  return distance;
};

/**
 * Решение намного более оптимальное
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y;

  let distance = 0;
  while (xor > 0) {
    xor = xor & (xor - 1);
    distance++;
  }

  return distance;
};

console.log(hammingDistance(1, 4));
