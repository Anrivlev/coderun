class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const frequencies = new Map();
    for (const char of s) {
      const count = frequencies.get(char) ?? 0;
      frequencies.set(char, count + 1);
    }
    for (const char of t) {
      const count = frequencies.get(char);
      if (count === undefined) return false;
      if (count === 1) frequencies.delete(char);
      else frequencies.set(char, count - 1);
    }

    return frequencies.size === 0;
  }
}
