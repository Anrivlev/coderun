/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;
  if (p === q) return p;
  const parents = new Map();
  parents.set(root, null);
  const stack = [root];
  let isPFound = false;
  let isQFound = false;
  while (stack.length > 0 && !(isPFound && isQFound)) {
    const node = stack.pop();
    if (node.left) {
      parents.set(node.left, node);
      if (node.left === p) isPFound = true;
      if (node.left === q) isQFound = true;
      stack.push(node.left);
    }
    if (node.right) {
      parents.set(node.right, node);
      if (node.right === p) isPFound = true;
      if (node.right === q) isQFound = true;
      stack.push(node.right);
    }
  }
  let fromP = p;
  let fromQ = q;
  const visited = new Set();
  while (fromP) {
    visited.add(fromP);
    fromP = parents.get(fromP);
  }
  while (fromQ) {
    if (visited.has(fromQ)) return fromQ;
    fromQ = parents.get(fromQ);
  }
  return root;
};

const root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};
const p = root.left;
const q = root.left.right.right;

console.log(lowestCommonAncestor(root, p, q));
