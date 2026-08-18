/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     const currentChars = new Set();
//     let currentLength = 0;
//     for (let j = i; j < s.length; j++) {
//       if (currentChars.has(s[j])) break;
//       currentChars.add(s[j]);
//       currentLength += 1;

//       if (j === s.length - 1) return Math.max(currentLength, maxLength);
//     }
//     if (currentLength > maxLength) maxLength = currentLength;
//     currentLength = 0;
//   }

//   return maxLength;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  const charMap = new Map();

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    const currentCharPrevIndex = charMap.get(currentChar);
    if (currentCharPrevIndex !== undefined && currentCharPrevIndex >= left) {
      left = currentCharPrevIndex + 1;
    }

    charMap.set(currentChar, right);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
