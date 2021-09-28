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
 * Iteration
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let curr = root;
    
    while (curr) {
        if (p.val > curr.val && q.val > curr.val) curr = curr.right;
        if (p.val < curr.val && q.val < curr.val) curr = curr.left;
        else return curr;
    }
};

/*
 * Recursion
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    return root;
};

/*
 * Time & Space Complexities
 */
// n = max depth of tree

// Iteration
// Time: 0(logn)
// Space: 0(1)

// Recursion
// Time: 0(logn)
// Space: 0(1)
