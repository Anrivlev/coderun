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
  const positives = [0, 0, 0];
  const negatives = [0, 0];

  //  Это можно написать проще и лаконичнее, но сути не меняет
  // Отдельно рассмотреть случай всех отрицательных чисел
  numberList.forEach((value) => {
    if (value > positives[0]) {
      positives[2] = positives[1];
      positives[1] = positives[0];
      positives[0] = value;
    } else if (value > positives[1]) {
      positives[2] = positives[1];
      positives[1] = value;
    } else if (value > positives[2]) {
      positives[2] = value;
    } else if (value < negatives[0]) {
      negatives[1] = negatives[0];
      negatives[0] = value;
    } else if (value < negatives[1]) {
      negatives[1] = value;
    }
  });
  const maxPositiveProduct = positives[1] * positives[2];
  const maxNegativeProduct = negatives[0] * negatives[1];
  if (maxPositiveProduct > maxNegativeProduct) {
    if (positives[2] !== 0) {
      console.log(positives[0], positives[1], positives[2]);
    } else if (positives[0] !== 0) {
      console.log(negatives[0], negatives[1], positives[0]);
    } else {
      const maxNegatives = [-Infinity, -Infinity, -Infinity];
      numberList.forEach((value) => {
        if (value > maxNegatives[0]) {
          maxNegatives[2] = maxNegatives[1];
          maxNegatives[1] = maxNegatives[0];
          maxNegatives[0] = value;
        } else if (value > maxNegatives[1]) {
          maxNegatives[2] = maxNegatives[1];
          maxNegatives[1] = value;
        } else if (value > maxNegatives[2]) {
          maxNegatives[2] = value;
        }
      });
      console.log(...maxNegatives);
    }
  } else {
    if (positives[0] !== 0) {
      console.log(negatives[0], negatives[1], positives[0]);
    } else {
      const maxNegatives = [-Infinity, -Infinity, -Infinity];
      numberList.forEach((value) => {
        if (value > maxNegatives[0]) {
          maxNegatives[2] = maxNegatives[1];
          maxNegatives[1] = maxNegatives[0];
          maxNegatives[0] = value;
        } else if (value > maxNegatives[1]) {
          maxNegatives[2] = maxNegatives[1];
          maxNegatives[1] = value;
        } else if (value > maxNegatives[2]) {
          maxNegatives[2] = value;
        }
      });
      console.log(...maxNegatives);
    }
  }
});
