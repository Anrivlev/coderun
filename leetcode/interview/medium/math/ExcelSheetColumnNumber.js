/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let total = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const token = columnTitle.charCodeAt(i);
    total += (token - 64) * 26 ** (columnTitle.length - i - 1);
  }
  return total;
};

console.log(titleToNumber("ZY"));
