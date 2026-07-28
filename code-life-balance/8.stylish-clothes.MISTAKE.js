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
  let bIndex = 0;
  let aBestIndex = 0;
  let bBestIndex = 0;
  let bestColorDifference = Infinity;

  for (let aIndex = 0; aIndex < aList.length; aIndex++) {
    const aColor = aList[aIndex];

    let bColor = bList[bIndex];
    let colorDifference = Math.abs(aColor - bColor);
    if (colorDifference < bestColorDifference) {
      aBestIndex = aIndex;
      bBestIndex = bIndex;
      bestColorDifference = colorDifference;
    }

    for (let i = bIndex; i < bList.length; i++) {
      bColor = bList[i];
      const nextColorDifference = Math.abs(aColor - bColor);
      if (nextColorDifference > colorDifference) {
        break;
      }
      if (nextColorDifference < bestColorDifference) {
        bIndex = i;
        bBestIndex = bIndex;
        bestColorDifference = colorDifference;
        colorDifference = nextColorDifference;
      }
    }
  }

  console.log(aList[aBestIndex], bList[bBestIndex]);
}
