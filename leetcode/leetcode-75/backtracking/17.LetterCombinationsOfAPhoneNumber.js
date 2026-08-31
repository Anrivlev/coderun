/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  return getEndings(digits);
};

function getEndings(digits) {
  if (digits.length === 1) return digitToLetters[digits[0]];
  const endings = getEndings(digits.slice(1));
  return digitToLetters[digits[0]].flatMap((letter) =>
    endings.map((ending) => letter + ending),
  );
}

const digitToLetters = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

console.log(letterCombinations("23"));
