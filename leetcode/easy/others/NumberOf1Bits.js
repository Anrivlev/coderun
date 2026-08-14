/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let weight = 0;
  for (let i = 0; i < 32; i++) {
    const oneBit = (n & (2 ** i)) === 0 ? 0 : 1;
    weight += oneBit;
  }
  return weight;
};

console.log(hammingWeight(2147483645));
