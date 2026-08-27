/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Решение с массивом (лучше по скорости, хуже по памяти)
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) return 0;
  const stack = [{ node: root, paths: [] }];
  let pathCount = 0;
  while (stack.length > 0) {
    const { node, paths } = stack.pop();
    const nextPaths = [node.val];
    if (node.val === targetSum) {
      pathCount++;
    }
    paths.forEach((value) => {
      const nextValue = value + node.val;
      nextPaths.push(nextValue);
      if (nextValue === targetSum) {
        pathCount++;
      }
    });
    if (node.left) {
      stack.push({ node: node.left, paths: nextPaths });
    }
    if (node.right) {
      stack.push({ node: node.right, paths: nextPaths });
    }
  }
  return pathCount;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Решение с Map (лучше по памяти, хуже по скорости)
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) return 0;
  const stack = [{ node: root, paths: new Map() }];
  let pathCount = 0;
  while (stack.length > 0) {
    const { node, paths } = stack.pop();

    const nextPaths = new Map();

    for (const [value, count] of paths) {
      const nextValue = value + node.val;
      nextPaths.set(nextValue, count);
      if (nextValue === targetSum) {
        pathCount += count;
      }
    }

    nextPaths.set(node.val, (nextPaths.get(node.val) ?? 0) + 1);
    if (node.val === targetSum) {
      pathCount++;
    }

    if (node.left) {
      stack.push({ node: node.left, paths: nextPaths });
    }
    if (node.right) {
      stack.push({ node: node.right, paths: nextPaths });
    }
  }
  return pathCount;
};

const root = {
  val: 10,
  left: {},
  right: {},
};

console.log(pathSum(root, 8));
