/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      const haystackChar = haystack.charAt(i + j);
      const needleChar = needle.charAt(j);
      if (haystackChar !== needleChar) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
};

const haystack = "a",
  needle = "a";

console.log(strStr(haystack, needle));
