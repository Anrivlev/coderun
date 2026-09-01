/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const table = Array.from({ length: text1.length }, () =>
    new Array(text2.length).fill(0),
  );

  for (let i = 0; i < text1.length; i++) {
    table[i][0] = Math.max(
      table[i - 1]?.[0] ?? 0,
      text1[i] === text2[0] ? 1 : 0,
    );
  }
  for (let j = 0; j < text2.length; j++) {
    table[0][j] = Math.max(table[0][j - 1] ?? 0, text1[0] === text2[j] ? 1 : 0);
  }
  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
    }
  }
  //   console.log(table);
//   for (const row of table) {
//     console.log(row.join(" "));
//   }
  return table.at(-1).at(-1);
};

console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv"));
console.log(longestCommonSubsequence("bsbi", "kbk"));
console.log(
  longestCommonSubsequence(
    "bmvcnwrmxcfcxabkxcvgbozmpspsbenazglyxkpibgzq",
    "bmpmlstotylonkvmhqjyxmnqzctonqtobahcrcbibgzgx",
  ),
);
