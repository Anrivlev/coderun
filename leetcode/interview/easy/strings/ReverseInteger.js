/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const xString = x.toFixed(0);
  const xStringArray = Array.from(xString);
  if (x < 0) xStringArray.shift();
  let reversedX = Number(xStringArray.reverse().join(""));
  if (x < 0) reversedX *= -1;
  if (reversedX < -(2 ** 31) || reversedX > 2 ** 31 - 1) return 0;
  return reversedX;
};

const x = -123;
console.log(reverse(x));
