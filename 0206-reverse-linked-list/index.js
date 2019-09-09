// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList_iterative = function(head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    curr.prev = prev;
    prev = curr;
    curr = curr.next;
  }

  const newHead = prev;
  curr = newHead;

  while (curr != null) {
    curr.next = curr.prev;
    curr = curr.prev;
  }

  return newHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList_recursive = function(head) {
  // Base case
  if (head == null || head.next == null) {
    return head;
  }

  const rest = head.next;

  // Reverse the sub-list by recursion.
  const reversed = reverseList_recursive(rest);

  // As `rest === head.next`, which is originally the head of the sub-list,
  // `rest` becomes the tail of the sub-list after reversing (`reversed`).
  // `rest.next = head` effectively "concats" `head` to the tail of the sublist.
  rest.next = head;

  // Head should be the tail for the sub-list created on current step.
  head.next = null;

  return reversed;
};

const reverseList = reverseList_recursive;
