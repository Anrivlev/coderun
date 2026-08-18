const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
const students = [];
let index = 0;
let currentM = null;
let languageIndex = 0;

rl.on("line", (input) => {
  if (N === null) {
    N = Number.parseInt(input);
    return;
  }
  if (currentM === null) {
    currentM = Number.parseInt(input);
    languageIndex = 0;
    students.push([]);
    return;
  }

  students.at(-1).push(input);
  languageIndex += 1;

  if (languageIndex === currentM) {
    currentM = null;
    index += 1;
  }
  if (index === N) rl.close();
});

rl.on("close", () => {
  const languageMap = new Map();
  students.forEach((student) =>
    student.forEach((language) => {
      const currentCount = languageMap.get(language) ?? 0;
      languageMap.set(language, currentCount + 1);
    }),
  );

  const languangesKnownToAll = Array.from(languageMap.entries())
    .filter(([language, speakerCount]) => speakerCount === N)
    .map(([language, speakerCount]) => language);
  const languangesKnownToAllCount = languangesKnownToAll.length;

  const languagesKnownToAtLeastSomeone = Array.from(languageMap.keys());
  const languagesKnownToAtLeastSomeoneCount =
    languagesKnownToAtLeastSomeone.length;

  console.log(languangesKnownToAllCount);
  languangesKnownToAll.forEach((language) => console.log(language));

  console.log(languagesKnownToAtLeastSomeoneCount);
  languagesKnownToAtLeastSomeone.forEach((language) => console.log(language));
});
