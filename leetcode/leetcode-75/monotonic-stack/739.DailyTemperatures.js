/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = new Array(temperatures.length).fill(0);

  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    while (stack.length > 0) {
      const top = stack.at(-1);
      if (top.temperature >= temperature) break;
      stack.pop();
      answer[top.index] = i - top.index;
    }
    stack.push({ temperature, index: i });
  }

  return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));