/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = [];

  const wordTokens = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      wordTokens.push(s[i]);
      continue;
    }
    if (wordTokens.length > 0) {
      words.push(wordTokens.join(""));
      wordTokens.splice(0);
    }
  }
  if (wordTokens.length > 0) words.push(wordTokens.join(""));

  return words.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
