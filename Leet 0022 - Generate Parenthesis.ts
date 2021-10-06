/*
 * Backtracking
 */
function generateParenthesis(n: number): string[] {
    const res = [];
    const stack = [];
    
    const backtrack = (open: number = 0, close: number = 0) => {
        if (open === n && close === n) res.push(stack.join(''));
        
        if (open < n) {
            stack.push('(');
            backtrack(open+1, close);
            stack.pop();
        }
        
        if (close < open) {
            stack.push(')');
            backtrack(open, close+1);
            stack.pop();
        }
    }
    
    backtrack();
    
    return res;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Backtracking:
// Time: O((4^n)/sqrt(n))
// Space: O(((4^n)/sqrt(n))
