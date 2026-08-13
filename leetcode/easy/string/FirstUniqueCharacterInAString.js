/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const nonUniqChars = new Set();
  const uniqueChars = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (nonUniqChars.has(char)) continue;
    if (uniqueChars.has(char)) {
      uniqueChars.delete(char);
      nonUniqChars.add(char);
      continue;
    }
    uniqueChars.set(char, i);
  }
  return Array.from(uniqueChars.values())[0] ?? -1;
};

const s = "aabb";
console.log(firstUniqChar(s));
