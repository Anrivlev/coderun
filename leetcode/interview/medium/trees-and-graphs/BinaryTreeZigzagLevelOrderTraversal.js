/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  const result = [];
  let queue = [root];
  let head = 0;
  let direction = "forward";
  while (queue.length > 0) {
    const row = [];
    const nextRowQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      row.push(node.val);
      if (node.left !== null) nextRowQueue.push(node.left);
      if (node.right !== null) nextRowQueue.push(node.right);
    }
    queue = nextRowQueue;
    if (direction === "backward") row.reverse();
    result.push(row);
    direction = direction === "forward" ? "backward" : "forward";
  }
  return result;
};
