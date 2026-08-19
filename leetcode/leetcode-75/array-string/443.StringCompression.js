/**
 * Лучше было бы с while и вложенным циклом для подсчета повторений
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let prevChar = chars[0];
  let finalLength = 0;
  let repeatedCharCount = 1;
  for (let i = 1; i < chars.length; i++) {
    const char = chars[i];
    if (char !== prevChar) {
      chars[finalLength] = prevChar;
      finalLength++;
      if (repeatedCharCount > 1) {
        repeatedCharCount
          .toString(10)
          .split("")
          .forEach((value) => {
            chars[finalLength] = value;
            finalLength++;
          });
      }
      prevChar = char;
      repeatedCharCount = 1;
    } else repeatedCharCount += 1;
  }
  chars[finalLength] = prevChar;
  finalLength++;
  if (repeatedCharCount > 1) {
    repeatedCharCount
      .toString(10)
      .split("")
      .forEach((value) => {
        chars[finalLength] = value;
        finalLength++;
      });
  }
  return finalLength;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
);
