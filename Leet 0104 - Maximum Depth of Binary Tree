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
 * Iterative - Breadth First Search
 */
function maxDepth(root: TreeNode | null): number {
    const queue = [root];
    const depths = [1];
    
    let depth = 0;
    
    while (queue.length) {
        const node = queue.shift();
        const currentDepth = depths.shift();
        
        if (node) {
            depth = Math.max(depth, currentDepth);
            
            queue.push(node.left);
            depths.push(currentDepth + 1);
            queue.push(node.right);
            depths.push(currentDepth + 1);
        }
    }
    
    return depth;
};

/*
 * Iterative - Depth First Search
 */
function maxDepth(root: TreeNode | null): number {
    const stack = [root];
    const depths = [1];
    
    let depth = 0;
    
    while (stack.length) {
        const node = stack.pop();
        const currentDepth = depths.pop();
        
        if (node) {
            depth = Math.max(depth, currentDepth);
            stack.push(node.left);
            depths.push(currentDepth + 1)
            stack.push(node.right);   
            depths.push(currentDepth + 1);
        }
    }
    
    return depth;
};

/*
 * Recursion
 */
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
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
