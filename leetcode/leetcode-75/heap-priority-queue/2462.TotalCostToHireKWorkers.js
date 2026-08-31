import { MinPriorityQueue } from "datastructures-js";

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  const leftHeap = new MinPriorityQueue();
  const rightHeap = new MinPriorityQueue();

  let leftIndex = candidates;
  for (let i = 0; i < candidates; i++) {
    leftHeap.enqueue(costs[i]);
  }

  let rightIndex = costs.length - 1;
  for (
    rightIndex;
    rightIndex >= Math.max(leftIndex, costs.length - candidates);
    rightIndex--
  ) {
    rightHeap.enqueue(costs[rightIndex]);
  }

  let total = 0;

  for (let i = 0; i < k; i++) {
    // console.log(leftHeap.toArray(), rightHeap.toArray());
    const left = leftHeap.front();
    const right = rightHeap.front();
    if (left === null && right === null) break;
    if (left !== null && left <= (right ?? Infinity)) {
      total += left;
      leftHeap.dequeue();
      if (leftIndex <= rightIndex) leftHeap.enqueue(costs[leftIndex++]);
    } else {
      total += right;
      rightHeap.dequeue();
      if (leftIndex <= rightIndex) rightHeap.enqueue(costs[rightIndex--]);
    }
  }

  return total;
};

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4));
console.log(totalCost([1, 2, 4, 1], 3, 3));
console.log(
  totalCost(
    [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58],
    11,
    2,
  ),
);
console.log(
  totalCost(
    [
      50, 80, 34, 9, 86, 20, 67, 94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85,
      20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58,
    ],
    7,
    12,
  ),
);
console.log(
  totalCost(
    [17,12,10,2,7,2,11,20,8],
    3,
    4,
  ),
);
console.log(
  totalCost(
    [4866,4857,4378,4876,3594,4874,4717,4680,4813,4938,4156,4724],
    9,
    2,
  ),
);