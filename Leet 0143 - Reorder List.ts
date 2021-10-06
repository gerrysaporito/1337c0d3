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
 * Reverse List, Slow-Fast Pointers, Insert Inbetween
 */
function reorderList(head: ListNode | null): void {
    const findMid = (head: ListNode): ListNode => {
        let slow = head;
        let fast = head;
        
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    }
    const reverseList = (head: ListNode): ListNode => {
        let prev: ListNode | null = null;
        let track = head;

        while (head) {
            const temp = head.next;
            head.next = prev;
            prev = head;
            track = head;
            head = temp;
        }
        
        return track;
    }
    const insertNode = (curr: ListNode, addition: ListNode) => {
        const currNext = curr.next || null; // Node or Null
        const additionNext = addition.next;
        curr.next = addition;
        curr.next.next = currNext;
        curr = curr.next.next;
        
        return [curr, additionNext];
    }
    
    const mid = findMid(head);
    let tail = reverseList(mid.next);
    mid.next = null;

    let curr = head;
    while(curr && tail) {
        const [newCurr, newTail] = insertNode(curr, tail);
        curr = newCurr;
        tail = newTail;
    }
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in list

// Reverse List, Slow-Fast Pointers, Insert Inbetween:
// Time: O(n)
// Space: O(1)
