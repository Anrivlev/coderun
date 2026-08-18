/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = new Set();
  visited.add(n);
  let current = n;
  while (current !== 1) {
    const digits = current.toString(10).split("");
    current = digits.reduce((prev, next) => prev + next * next, 0);
    if (visited.has(current)) return false;
    visited.add(current);
  }
  return true;
};

console.log(isHappy(19));
