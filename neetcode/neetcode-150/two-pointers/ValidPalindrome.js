class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      console.log(left, right);
      if (!/[A-Za-z0-9]/.test(s[left])) left++;
      else if (!/[A-Za-z0-9]/.test(s[right])) right--;
      else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      else {
        left++;
        right--;
      }
    }
    return true;
  }
}

console.log(new Solution().isPalindrome("tab a cat"));
