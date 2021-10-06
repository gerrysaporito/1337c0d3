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
function levelOrder(root: TreeNode | null): number[][] {
    const queue = [root];
    const res = [];
    
    while (queue.length) {
        const levelSize = queue.length;
        const levelVals = [];
        
        for (let i = 0; i < levelSize; ++i) {
            const node = queue.shift();
            
            if (node) {
                levelVals.push(node.val);
                queue.push(node.left, node.right);
            } 
        }
        
        if (levelVals.length > 0) res.push(levelVals);
    }
    
    return res;
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes in tree

// Iteration - Breadth First Search:
// Time: O(n)
// Space: O(n)
