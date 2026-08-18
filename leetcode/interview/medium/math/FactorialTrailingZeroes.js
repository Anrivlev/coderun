/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let fiveCount = getDivisorCount(n, 5);
  //   let twoCount = getDivisorCount(n, 2);
  //   let tensCount = getDivisorCount(n, 10);
  //   return Math.min(fiveCount, twoCount);
  return fiveCount;
};

function getDivisorCount(n, divisor) {
  let total = 0;
  let current = divisor;
  while (current <= n) {
    total += Math.floor(n / current);
    current *= divisor;
  }
  return total;
}

console.log(trailingZeroes(15));
