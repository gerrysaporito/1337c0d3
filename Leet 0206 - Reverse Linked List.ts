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

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    while (head !== null) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    
    return prev
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes

// Brute:
// Time: O(n)
// Space: O(1)
