/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 1) return x;
  if (n === 0) return 1;
  if (n === -1) return 1 / x;
  const absN = Math.abs(n);
  const degreesOfTwo = [1, x];
  for (let i = 2; i < absN; i *= 2) {
    const prev = degreesOfTwo.at(-1);
    degreesOfTwo.push(prev * prev);
  }
  let xToAbsN = 1;
  let currentDegreeOfTwoIndex = degreesOfTwo.length - 1;
  let currentDegreeOfTwo = 2 ** (currentDegreeOfTwoIndex - 1);
  let remaining = absN;
  while (remaining > 0) {
    remaining -= currentDegreeOfTwo;
    xToAbsN *= degreesOfTwo[currentDegreeOfTwoIndex];
    while (currentDegreeOfTwo > remaining) {
      currentDegreeOfTwoIndex -= 1;
      currentDegreeOfTwo /= 2;
    }
  }

  if (n < 0) return 1 / xToAbsN;
  return xToAbsN;
};

console.log(myPow(2, 10));
