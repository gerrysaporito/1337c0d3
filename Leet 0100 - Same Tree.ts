/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Iteration - Breadth First Search
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const pStack = [p];
    const qStack = [q];
    
    while (pStack.length && qStack.length) {
        const pNode = pStack.shift();
        const qNode = qStack.shift();
        
        if (pNode?.val !== qNode?.val) return false;
            
        if (pNode && qNode) {            
            pStack.push(pNode.left);
            qStack.push(qNode.left);
            pStack.push(pNode.right);
            qStack.push(qNode.right);
        }
    }
        
    return true;
};

/*
 * Iteration - Depth First Search
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const pStack = [p];
    const qStack = [q];
    
    while (pStack.length && qStack.length) {
        const pNode = pStack.pop();
        const qNode = qStack.pop();
        
        if (pNode?.val !== qNode?.val) return false;
        
        if (pNode && qNode) {
            pStack.push(pNode.left);
            qStack.push(qNode.left);
            pStack.push(pNode.right);
            qStack.push(qNode.right);
        }
    }
    
    return true
};

/* 
 * Recursion
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
 * Time & Space Complexities
 */
// n = max depth of tree

// Iteration - Breadth First Search
// Time: 0(n)
// Space: 0(n)

// Iteration - Depth First Search
// Time: 0(n)
// Space: 0(n)

// Recursion
// Time: 0(n)
// Space: 0(n)
