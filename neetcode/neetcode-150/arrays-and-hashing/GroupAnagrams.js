class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const anagrams = new Map();
    for (const str of strs) {
      const hash = str.split("").sort().join("");
      let strArray = anagrams.get(hash);
      if (!strArray) {
        strArray = [];
        anagrams.set(hash, strArray);
      }
      strArray.push(str);
    }
    return Array.from(anagrams.values());
  }
}
