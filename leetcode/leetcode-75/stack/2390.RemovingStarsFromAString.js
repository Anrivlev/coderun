/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const charStack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "*") charStack.pop();
    else charStack.push(char);
  }
  return charStack.join("");
};
