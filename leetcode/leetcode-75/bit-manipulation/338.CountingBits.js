/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const answer = new Array(n + 1).fill(0);
  for (let i = 1; i < answer.length; i++) {
    let number = i;
    let count = 0;
    while (number > 0) {
      count += number % 2;
      number = Math.floor(number / 2);
    }
    answer[i] = count;
  }
  return answer;
};
