/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];

  const sortedStrs = strs.map((str) => [str, strToSortedStr(str)]);
  sortedStrs.sort((a, b) => a[1].localeCompare(b[1]));

  const result = [[sortedStrs[0][0]]];

  let prevSorted = sortedStrs[0][1];
  for (let i = 1; i < sortedStrs.length; i++) {
    const sortedStr = sortedStrs[i];
    if (prevSorted === sortedStr[1]) result.at(-1).push(sortedStr[0]);
    else {
      result.push([sortedStr[0]]);
      prevSorted = sortedStr[1];
    }
  }

  return result;
};

function strToSortedStr(str) {
  return str.split("").sort().join("");
}

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs = ["a"];
const groupedStrs = groupAnagrams(strs);
console.log(groupedStrs);
