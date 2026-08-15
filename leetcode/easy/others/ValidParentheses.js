const SYMBOL_PAIRS = {
  ")": "(",
  "}": "{",
  "]": "[",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case "(":
      case "{":
      case "[": {
        stack.push(char);
        break;
      }
      case ")":
      case "}":
      case "]": {
        const prevSymbol = stack.pop();
        if (SYMBOL_PAIRS[char] !== prevSymbol) return false;
        break;
      }
    }
  }
  return stack.length === 0;
};

const testString = "()[]";
console.log(isValid(testString));
