/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null) return head;
  if (head.next === null) return head;
  const headOdd = head;
  const headEven = head.next;

  let tailOdd = headOdd;
  let tailEven = headEven;

  let node = headEven.next;
  while (node !== null) {
    tailOdd.next = node;
    tailOdd = node;

    node = node.next;

    if (node === null) break;

    tailEven.next = node;
    tailEven = node;

    node = node.next;
  }

  tailOdd.next = headEven;
  tailEven.next = null;

  return headOdd;
};

const node5 = {
  val: 5,
  next: null,
};
const node4 = {
  val: 4,
  next: node5,
};
const node3 = {
  val: 3,
  next: node4,
};
const node2 = {
  val: 2,
  next: node3,
};
const head = {
  val: 1,
  next: node2,
};

const oddEvenListHead = oddEvenList(head);
console.log(oddEvenListHead.val);
console.log(oddEvenListHead.next.val);
console.log(oddEvenListHead.next.next.val);
console.log(oddEvenListHead.next.next.next.val);
console.log(oddEvenListHead.next.next.next.next.val);
console.log(oddEvenListHead.next.next.next.next);
