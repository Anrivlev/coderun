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
var isSymmetric = function (root) {
  if (root === null) return true;
  const stack = [{ left: root.left, right: root.right }];
  while (stack.length > 0) {
    const { left, right } = stack.pop();

    if (left === null && right === null) {
      continue;
    }

    if (left === null || right === null) {
      return false;
    }

    if (left.val !== right.val) return false;

    stack.push({
      left: left.left,
      right: right.right,
    });

    stack.push({
      left: left.right,
      right: right.left,
    });
  }
  return true;
};
