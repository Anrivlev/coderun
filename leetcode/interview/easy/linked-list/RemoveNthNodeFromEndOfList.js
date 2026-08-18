/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const [nthFromEnd, prevNthFromEnd] = getNthFromEndWithPrev(head, n);
  if (nthFromEnd === head) return head.next;

  prevNthFromEnd.next = prevNthFromEnd.next.next;

  return head;
};

function getNthFromEndWithPrev(head, n) {
  let prev = null;
  let nth = head;
  let toEnd = head;
  for (let i = 0; i < n; i++) {
    toEnd = toEnd.next;
  }

  while (toEnd !== null) {
    prev = nth;
    nth = nth.next;
    toEnd = toEnd.next;
  }
  return [nth, prev];
}

function getNthFromEnd(head, n) {
  let nth = head;
  let toEnd = head;
  for (let i = 0; i < n; i++) {
    toEnd = toEnd.next;
  }

  while (toEnd !== null) {
    nth = nth.next;
    toEnd = toEnd.next;
  }
  return nth;
}

const second = {
  val: 2,
  next: null,
};
const head = {
  val: 1,
  next: second,
};

const n = 1;

const newHead = removeNthFromEnd(head, n);
console.log(newHead);
