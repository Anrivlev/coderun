/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i < n + 1; i++) {
    let elem = ``;
    if (i % 3 === 0) {
      elem += "Fizz";
    }
    if (i % 5 === 0) {
      elem += "Buzz";
    }
    if (elem === ``) {
      elem = `${i}`;
    }
    answer.push(elem);
  }
  return answer;
};

console.log(fizzBuzz(15));
