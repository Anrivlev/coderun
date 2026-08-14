/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  const nInt = Math.floor(n);
  if (nInt !== n) return false;
  if (nInt === 1) return true;
  return isPowerOfThree(n / 3);
};

// чит-решение из интернета.
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  const nInt = Math.floor(n);
  if (nInt !== n) return false;
  return 3**19 % n == 0;
};

console.log(isPowerOfThree(18));
