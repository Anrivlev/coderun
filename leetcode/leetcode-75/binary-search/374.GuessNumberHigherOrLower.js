/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // console.log(mid);
    const guessed = guess(mid);
    if (guessed === 0) return mid;
    if (guessed > 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

var guess = function (num) {
  const SECRET = 6;
  if (num > SECRET) return -1;
  if (num < SECRET) return 1;
  return 0;
};

console.log(guessNumber(10));
