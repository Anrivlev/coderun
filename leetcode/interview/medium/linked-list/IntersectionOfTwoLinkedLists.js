/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const lengthA = getListLength(headA);
  const lengthB = getListLength(headB);

  [long, short, longLength, shortLength] =
    lengthA > lengthB ? [headA, headB, lengthA, lengthB] : [headB, headA, lengthB, lengthA];

  const lengthDifference = longLength - shortLength;

  let nodeLong = long;
  let nodeShort = short;

  for (let i = 0; i < lengthDifference; i++) {
    nodeLong = nodeLong.next;
  }

  while (nodeLong !== nodeShort) {
    nodeLong = nodeLong.next;
    nodeShort = nodeShort.next;
  }

  return nodeLong;
};

function getListLength(head) {
  if (head === null) return 0;

  let node = head;
  let length = 0;
  while (node !== null) {
    node = node.next;
    length += 1;
  }

  return length;
}
