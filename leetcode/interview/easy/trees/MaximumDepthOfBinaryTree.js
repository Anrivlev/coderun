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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  const depths = new Map();
  let maxDepthCalced = 1;
  depths.set(root, 1);

  const queue = [root];
  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];
    const currentDepth = depths.get(current);
    const nextDepth = currentDepth + 1;

    const children = [];
    if (current.left !== null) children.push(current.left);
    if (current.right !== null) children.push(current.right);

    for (const child of children) {
      queue.push(child);
      depths.set(child, nextDepth);
      if (nextDepth > maxDepthCalced) maxDepthCalced = nextDepth;
    }
  }

  return maxDepthCalced;
};

const node = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 4,
    left: null,
    right: {
      val: 5,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
};

console.log(maxDepth(node));
