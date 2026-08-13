/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const minStrLength = Math.min(...strs.map((str) => str.length));

  let prefixIndex = -1;
  for (let i = 0; i < minStrLength; i++) {
    if (!isEveryCharAtEqual(strs, i)) break;
    else prefixIndex = i;
  }
  if (prefixIndex === -1) return "";
  return strs[0].slice(0, prefixIndex + 1);
};

function isEveryCharAtEqual(strs, i) {
  for (const str of strs) {
    if (str.charAt(i) !== strs[0].charAt(i)) return false;
  }
  return true;
}

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
