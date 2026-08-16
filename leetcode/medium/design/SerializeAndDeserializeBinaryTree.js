/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return ``;
  let layer = [root];
  const nodesArray = [];
  while (layer.length > 0) {
    const nextLayer = [];
    let isAnyNotNull = false;

    for (let i = 0; i < layer.length; i++) {
      const node = layer[i];
      nodesArray.push(node?.val ?? null);
      nextLayer.push(node?.left ?? null, node?.right ?? null);
      if ((node?.left ?? null) !== null || (node?.right ?? null) !== null)
        isAnyNotNull = true;
    }

    if (!isAnyNotNull) break;
    isAnyNotNull = false;

    layer = nextLayer;
  }

  return nodesArray.map((num) => (num === null ? "null" : num)).join(" ");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodesArray = data
    .split(" ")
    .filter((val) => val !== "")
    .map((num) => (num === "null" ? null : Number(num)));
  if (nodesArray.length === 0) return null;
  const length = nodesArray.length;
  const depth = Math.floor(Math.log2(length));
  const root = { val: nodesArray[0], left: null, right: null };

  let prevLayer = [root];
  for (let d = 0; d < depth; d++) {
    const nextLayer = [];
    for (let i = 0; i < prevLayer.length; i++) {
      const node = prevLayer[i];
      if (node === null) {
        nextLayer.push(null, null);
        continue;
      }
      const leftVal = nodesArray[2 ** (d + 1) + i * 2 - 1] ?? null;
      const rightVal = nodesArray[2 ** (d + 1) + i * 2] ?? null;
      const left =
        leftVal === null ? null : { val: leftVal, left: null, right: null };
      const right =
        rightVal === null ? null : { val: rightVal, left: null, right: null };
      node.left = left;
      node.right = right;
      nextLayer.push(left, right);
    }
    prevLayer = nextLayer;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 3,
//     left: { val: 4, left: null, right: null },
//     right: { val: 5, left: null, right: null },
//   },
// };

const root = null;

const serialized = serialize(root);
console.log(serialized);
const deserialized = deserialize(serialized);
console.log(deserialized);
