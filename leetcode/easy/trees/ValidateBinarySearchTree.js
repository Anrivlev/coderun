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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const queue = [{ node: root, min: -Infinity, max: Infinity }];
  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];

    const left = current.node.left;
    if (left !== null) {
      const min = current.min;
      const max = current.node.val;
      if (left.val <= min || left.val >= max) {
        return false;
      }
      queue.push({ node: left, min, max });
    }

    const right = current.node.right;
    if (right !== null) {
      const min = current.node.val;
      const max = current.max;
      if (right.val <= min || right.val >= max) {
        return false;
      }
      queue.push({ node: right, min, max });
    }
  }
  return true;
};
