/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/*
 * Two Pointer
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    
    
    for (let i = 0; i < n; ++i) if (right) right = right.next;
    
    while (right) {
        right = right.next;
        left = left.next;
    }
    
    left.next = left.next.next;
    
    return dummy.next;
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes

// Two Pointer:
// Time: O(n)
// Space: O(1)
