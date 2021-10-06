/*
 * Backtracking
 */
function letterCombinations(digits: string): string[] {
    const res = [];
    const digitsToChar = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
    }
    
    const backtrack = (currStr: string = '', i: number = 0) => {
        if (currStr.length === digits.length && currStr !== '') {
            res.push(currStr);
            return;
        }

        for (const char of digitsToChar[digits[i]]) {
            backtrack(currStr+char, i+1);
        }
    }
    
    if (digits.length === 0) return res;
    backtrack();
    return res;
};

/* 
 * Time & Space Complexities
 */
// n = length of digits

// Backtracking:
// Time: O(n4^n)
// Space: O(n)

