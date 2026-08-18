const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberList;

rl.on("line", (input) => {
  numberList = input.split(" ").map((char) => Number(char));

  rl.close();
});

rl.on("close", () => {
  numberList.sort((a, b) => a - b);
  const maxPositiveProduct =
    numberList.at(-1) * numberList.at(-2) * numberList.at(-3);
  const maxNegativeProduct = numberList[0] * numberList[1] * numberList.at(-1);
  if (maxPositiveProduct > maxNegativeProduct) {
    console.log(numberList.at(-1), numberList.at(-2), numberList.at(-3));
  } else {
    console.log(numberList[0], numberList[1], numberList.at(-1));
  }
});
