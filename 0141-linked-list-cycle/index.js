// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// NOTE: The description is nonsense. (2019-09-09)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let curr = head;

  if (curr == null) {
    return false;
  }

  while (curr.next != null) {
    if (curr.hasSeen !== undefined) {
      return true;
    }

    curr.hasSeen = true;
    curr = curr.next;
  }

  return false;
};
