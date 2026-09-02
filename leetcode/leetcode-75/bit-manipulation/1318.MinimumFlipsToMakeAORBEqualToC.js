/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let flipCount = 0;
  while (a > 0 || b > 0 || c > 0) {
    const aRemainder = a & 1;
    const bRemainder = b & 1;
    const cRemainder = c & 1;
    if (cRemainder === 1 && aRemainder !== 1 && bRemainder !== 1) {
      flipCount++;
    } else if (cRemainder === 0) {
      if (aRemainder !== cRemainder) flipCount++;
      if (bRemainder !== cRemainder) flipCount++;
    }
    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return flipCount;
};
