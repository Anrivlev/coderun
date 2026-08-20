/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const word1CharCounts = new Map();
  const word2CharCounts = new Map();
  for (let i = 0; i < word1.length; i++) {
    const char = word1[i];
    const charCount = word1CharCounts.get(char) ?? 0;
    word1CharCounts.set(char, charCount + 1);
  }
  for (let i = 0; i < word2.length; i++) {
    const char = word2[i];
    const charCount = word2CharCounts.get(char) ?? 0;
    word2CharCounts.set(char, charCount + 1);
  }

  // Я честно не понял, откуда берется это условие.
  for (const [key, value] of word1CharCounts.entries()) {
    if ((word2CharCounts.get(key) ?? 0) === 0) return false;
  }

  const word1Occurencies = new Map();
  word1CharCounts.forEach((value, key) => {
    const count = word1Occurencies.get(value) ?? 0;
    word1Occurencies.set(value, count + 1);
  });
  const word2Occurencies = new Map();
  word2CharCounts.forEach((value, key) => {
    const count = word2Occurencies.get(value) ?? 0;
    word2Occurencies.set(value, count + 1);
  });

  if (word1Occurencies.size !== word2Occurencies.size) return false;

  for (const [key, value] of word1Occurencies.entries()) {
    if (word2Occurencies.get(key) !== value) return false;
  }

  return true;
};

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("abbzzca", "babzzcz"));
console.log(closeStrings("uau", "ssx"));
