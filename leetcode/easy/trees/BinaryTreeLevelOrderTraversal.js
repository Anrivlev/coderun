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
var levelOrder = function (root) {
  if (root === null) return [];
  const levelOrder = [];
  const stack = [{ node: root, level: 0 }];
  while (stack.length > 0) {
    const current = stack.pop();
    const level = current.level;
    if (levelOrder.length === level) levelOrder.push([]);
    levelOrder[level].push(current.node.val);

    const right = current.node.right;
    if (right !== null)
      stack.push({
        node: right,
        level: level + 1,
      });

    const left = current.node.left;
    if (left !== null)
      stack.push({
        node: left,
        level: level + 1,
      });
  }

  return levelOrder;
};
