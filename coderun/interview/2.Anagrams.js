const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAnagramStrings(a, b) {
  if (a.length !== b.length) return false;

  const letters = new Map();

  Array.from(a).forEach((char) => {
    const currentCount = letters.get(char) ?? 0;
    letters.set(char, currentCount + 1);
  });

  Array.from(b).forEach((char) => {
    const currentCount = letters.get(char) ?? 0;
    letters.set(char, currentCount - 1);
  });

  return Array.from(letters.values()).every((value) => value === 0);
}

async function main() {
  const lines = [];
  for await (const line of rl) {
    lines.push(line);
    if (lines.length === 2) rl.close();
  }
  const str1 = lines[0];
  const str2 = lines[1];

  const isAnagram = isAnagramStrings(str1, str2);
  console.log(isAnagram ? 1 : 0);
}

main();
