/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// var deleteNode = function (node) {
//   let current = node;
//   while (current !== null) {
//     current.val = current.next.val;
//     if (current.next.next === null) current.next = null;
//     current = current.next;
//   }
// };

var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
}