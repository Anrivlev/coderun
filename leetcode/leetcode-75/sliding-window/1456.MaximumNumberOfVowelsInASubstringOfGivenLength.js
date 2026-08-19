/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let currentCount = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) currentCount++;
  }
  let maxCount = currentCount;
  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) currentCount++;
    if (isVowel(s[i - k])) currentCount--;

    if (currentCount > maxCount) maxCount = currentCount;
  }
  return maxCount;
};

// Может быть Set быстрее
const VOWELS = ["a", "e", "i", "o", "u"];
function isVowel(char) {
  return VOWELS.includes(char);
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
