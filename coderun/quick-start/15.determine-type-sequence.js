const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];
rl.on("line", (input) => {
  const numberInput = Number(input);
  if (numberInput === -2e9) rl.close();
  else numbers.push(numberInput);
});

rl.on("close", () => {
  const mode = getMode(numbers);
  console.log(mode);
});

function getMode(numbers) {
  let mode = "UNKNOWN";
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i] - numbers[i - 1];
    switch (mode) {
      case "UNKNOWN": {
        if (diff > 0) mode = "ASCENDING";
        else if (diff < 0) mode = "DESCENDING";
        else mode = "CONSTANT";
        break;
      }
      case "WEAKLY ASCENDING":
      case "ASCENDING": {
        if (diff < 0) return "RANDOM";
        else if (diff === 0) mode = "WEAKLY ASCENDING";
        break;
      }
      case "WEAKLY DESCENDING":
      case "DESCENDING": {
        if (diff > 0) return "RANDOM";
        else if (diff === 0) mode = "WEAKLY DESCENDING";
        break;
      }
      case "CONSTANT": {
        if (diff > 0) mode = "WEAKLY ASCENDING";
        else if (diff < 0) mode = "WEAKLY DESCENDING";
        break;
      }
    }
  }
  if (mode === "UNKNOWN") return "CONSTANT";
  return mode;
}
