/*
 * Stack
 */
function isValid(s: string): boolean {
    const stack = [];
    const open = new Set(['(', '[', '{']);
    const close = {
        ')': '(', 
        ']': '[', 
        '}': '{',
    }
        
    for (const char of s) {
        if (open.has(char)) {
            stack.push(char);
        }
        if (char in close) {
            const val = stack.pop();
            if (val !== close[char]) return false;
        }
    }
    
    return stack.length === 0;
};

/* 
 * Time & Space Complexities
 */
// n = length of strs

// Brute:
// Time: O(n*n)
// Space: O(1)

// Stack
// Time: O(n)
// Space: O(n)
