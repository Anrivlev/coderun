/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const merged = nums1.map((num1, index) => [num1, nums2[index]]);
  merged.sort((a, b) => b[1] - a[1]);

  const heap = new MinPriorityQueue();
  let max = 0;
  let sum = 0;

  for (const [num1, num2] of merged) {
    sum+= num1;
    heap.enqueue(num1);

    if (heap.size() === k) {
        max = Math.max(max, sum * num2);
        sum -= heap.dequeue();
    }
  }

  return max;
};
