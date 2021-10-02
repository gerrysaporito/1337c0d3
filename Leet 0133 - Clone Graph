/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

/*
 * Recursion
 */
function cloneGraph(node: Node | null): Node | null {
    const ref = {};
    
    const clone = (node: Node | null): Node | null => {
        if (!node) return null;
        if (node.val in ref) return ref[node.val];
        
        const copy = new Node(node.val);
        ref[node.val] = copy;
        
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(clone(neighbor));
        }
        
        return copy;
    }
    
    return clone(node);
};

/* 
 * Time & Space Complexities
 */
// n = number of nodes

// Recursion:
// Time: O(n)
// Space: O(n)
