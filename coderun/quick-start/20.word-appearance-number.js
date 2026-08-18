const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const words = new Map();
const answerTokens = [];

rl.on("line", (input) => {
  const inputWords = input
    .trim()
    .split(/\s+/)
    .filter((word) => !!word);

  inputWords.forEach((word) => {
    const currentCount = words.get(word) ?? 0;
    answerTokens.push(currentCount);
    words.set(word, currentCount + 1);
  });
});

rl.on("close", () => {
  const answer = answerTokens.join(" ");
  console.log(answer);
});
