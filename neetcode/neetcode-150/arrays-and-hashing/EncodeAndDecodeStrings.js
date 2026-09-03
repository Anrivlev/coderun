class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (strs.length === 0) return ``;
    const lengths = strs.map((str) => str.length);
    return strs.length + "#" + lengths.join("#") + "#" + strs.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (!str) return [];
    const strCount = Number.parseInt(str, 10);
    const lengths = [];
    let startIndex = 0;
    for (let i = 0; i < strCount; i++) {
      startIndex = str.indexOf("#", startIndex) + 1;
      lengths.push(Number.parseInt(str.slice(startIndex), 10));
    }
    const strs = [];
    startIndex = str.indexOf("#", startIndex) + 1;
    for (let i = 0; i < strCount; i++) {
      strs.push(str.slice(startIndex, startIndex + lengths[i]));
      startIndex += lengths[i];
    }
    return strs;
  }
}
