/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const letterCount = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const charCount = letterCount.get(char) ?? 0;
    letterCount.set(char, charCount + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    const charCount = letterCount.get(char) ?? 0;
    if (charCount === 0) return false;
    letterCount.set(char, charCount - 1);
  }

  return true;
};
