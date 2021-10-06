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
 * Depth First Search
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    
    const left = root.left;
    const right = root.right;
    
    root.left = right;
    root.right = left;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

/*
 * Time & Space Complexities
 */
// n = max depth of tree

// Depth First Search
// Time: 0(2^n)
// Space: 0(n)
