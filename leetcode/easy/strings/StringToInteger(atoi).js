/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let index = 0;
  let resultingString = ``;

  // skip zeroes // trim?
  while (index < s.length) {
    const char = s.charAt(index);
    if (char !== ` `) break;
    index++;
  }

  // determine sign
  // Можно оставить флаг isNegative
  const sign = s.charAt(index);
  if (sign === `+`) {
    index++;
  } else if (sign === `-`) {
    resultingString += `-`;
    index++;
  }

  const numbers = [];

  while (index < s.length) {
    const char = s.charAt(index);
    if (!/^[0-9]+$/.test(char)) break;

    numbers.push(char);
    index++;
  }

  if (numbers.length === 0) return 0;

  // Можно заменить на цикл со сложением.
  const resultingNumber = Number.parseInt(resultingString + numbers.join(""));
  if (resultingNumber < -(2 ** 31)) return -(2 ** 31);
  if (resultingNumber > 2 ** 31 - 1) return 2 ** 31 - 1;
  return resultingNumber;
};

const string = `    -52`;
console.log(myAtoi(string));
