/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let left = 1;
  let right = x;
  while (left < right) {
    const mid = Math.ceil((right + left) / 2);
    const midSquared = mid * mid;
    if (midSquared === x) return mid;
    if (midSquared < x) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(mySqrt(9));
