/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length <= 1) return 0;
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i < j) {
    const area = getArea(height, i, j);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[i] < height[j]) i++;
    else j--;
  }
  return maxArea;
};

function getArea(height, i, j) {
  return Math.abs(i - j) * Math.min(height[i], height[j]);
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
