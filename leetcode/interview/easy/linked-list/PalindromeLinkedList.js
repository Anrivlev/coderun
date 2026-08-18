/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const mid = getMid(head);
  const reversedEnd = reverse(mid);

  let ptr1 = head;
  let ptr2 = reversedEnd;
  while (ptr1 !== mid) {
    if (ptr1.val !== ptr2.val) return false;

    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  reverse(reversedEnd);

  return true;
};

function getMid(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let slowPtr = head;
  let fastPtr = head;
  while (fastPtr !== null) {
    fastPtr = fastPtr.next;
    if (fastPtr === null) break;
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }
  return slowPtr;
}

function reverse(head) {
  if (head === null) return null;
  let prev = null;
  let curr = head;
  let next = head.next;
  while (next !== null) {
    curr.next = prev;

    prev = curr;
    curr = next;
    next = next.next;
  }
  curr.next = prev;
  return curr;
}

const node4 = {
  name: "node4",
  val: 1,
  next: null,
};
const node3 = {
  name: "node3",
  val: 2,
  next: node4,
};
const node2 = {
  name: "node2",
  val: 2,
  next: node3,
};
const node1 = {
  name: "node1",
  val: 1,
  next: node2,
};

console.log(isPalindrome(node1));
console.log(node1.name);
console.log(node1.next.name);
console.log(node1.next.next.name);
console.log(node1.next.next.next.name);
