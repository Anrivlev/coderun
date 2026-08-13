/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const filteredS = s
    .split("")
    .filter((char) => /^[a-zA-Z0-9]+$/.test(char))
    .map((char) => char.toLowerCase());
  for (let i = 0; i < filteredS.length; i++) {
    if (filteredS[i] !== filteredS.at(-1 - i)) return false;
  }

  return true;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
