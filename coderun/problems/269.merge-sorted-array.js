/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
module.exports = function merge(nums1, n, nums2, m) {
  const numsCombined = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i === n) {
      numsCombined.push(...nums2.slice(j, m));
      j = m;
      continue;
    }
    if (j === m) {
      numsCombined.push(...nums1.slice(i, n));
      i = n;
      continue;
    }
    if (nums1[i] < nums2[j]) {
      numsCombined.push(nums1[i]);
      i++;
    } else {
      numsCombined.push(nums2[j]);
      j++;
    }
  }
  nums1.splice(0, n + m, ...numsCombined);
};

const nums1 = [46, 55, 88, 0, 0, 0, 0];
const n = 3;
const nums2 = [18, 29, 80, 90];
const m = 4;
module.exports(nums1, n, nums2, m);

console.log(nums1);
