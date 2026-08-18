const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let tShirts = null;
let M = null;
let shorts = null;

rl.on("line", (input) => {
  if (N === null) {
    N = Number.parseInt(input);
    return;
  }
  if (tShirts === null) {
    tShirts = input.split(" ").map((char) => Number.parseInt(char));
    return;
  }
  if (M === null) {
    M = Number.parseInt(input);
    return;
  }
  if (shorts === null) {
    shorts = input.split(" ").map((char) => Number.parseInt(char));
    rl.close();
  }
});

rl.on("close", () => {
  solve(tShirts, shorts);
});

function solve(aList, bList) {
  let aIndex = 0;
  let bIndex = 0;
  let aBestIndex = 0;
  let bBestIndex = 0;
  let bestColorDifference = Infinity;

  while (aIndex < aList.length && bIndex < bList.length) {
    const aColor = aList[aIndex];
    const bColor = bList[bIndex];

    const colorDifference = Math.abs(aColor - bColor);
    if (colorDifference < bestColorDifference) {
      aBestIndex = aIndex;
      bBestIndex = bIndex;
      bestColorDifference = colorDifference;
    }

    if (aColor < bColor && aIndex < aList.length) {
      aIndex++;
    } else {
      bIndex++;
    }
  }

  console.log(aList[aBestIndex], bList[bBestIndex]);
}
