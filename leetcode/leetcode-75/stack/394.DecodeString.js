/**
 * Это решение работает только тогда, когда нет вложенных скобок [].
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const tokens = [];
  let i = 0;
  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    const kAsNumber = Number.parseInt(k, 10);
    if (Number.isNaN(kAsNumber)) {
      tokens.push(k);
      continue;
    }
    const nextI = s.indexOf("]", i);
    const encodedString = s.slice(i + 2, nextI);
    for (let j = 0; j < kAsNumber; j++) {
      tokens.push(encodedString);
    }
    i = nextI;
  }

  return tokens.join("");
};

/**
 * Нужно рекурсивно получать следующую строчку
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const { tokens, index } = decode(s, 0);
  return tokens.join("");
};

function decode(s, i) {
  const tokens = [];
  for (; i < s.length; i++) {
    const k = s[i];
    let kAsNumber = Number.parseInt(k, 10);
    if (!Number.isNaN(kAsNumber)) {
      let w = i + 1;
      let wAsNumber = Number.parseInt(s[w], 10);
      while (!Number.isNaN(wAsNumber)) {
        kAsNumber *= 10;
        kAsNumber += wAsNumber;
        w++;
        wAsNumber = Number.parseInt(s[w], 10);
      }
      const decoded = decode(s, w);
      for (let j = 0; j < kAsNumber; j++) {
        tokens.push(...decoded.tokens);
      }
      i = decoded.index;
    } else if (k === "[") {
    } else if (k === "]") {
      return { tokens, index: i };
    } else {
      tokens.push(k);
    }
  }

  return { tokens, index: i };
}

console.log(decodeString("3[a2[c]]"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("100[leetcode]"));
