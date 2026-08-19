/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const gcdLength = gcd(str1.length, str2.length);
  return str1.slice(0, gcdLength);
};

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

console.log(gcdOfStrings('ABAABA', 'ABA'));