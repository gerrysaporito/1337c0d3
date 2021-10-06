/*
 * Two Pointer 
 */
function isPalindrome(s: string): boolean {
    const isValidChar = (char: string, starting: string, ending: string) => {
        return char.charCodeAt(0) >= starting.charCodeAt(0) && char.charCodeAt(0) <= ending.charCodeAt(0);
    }
    
    s = s
            .split('')
            .filter(char => isValidChar(char, 'A', 'Z') || isValidChar(char, 'a', 'z') || isValidChar(char, '0', '9'))
            .map(char => char.toLowerCase())
            .join('');
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== s[s.length-1-i]) return false;
    }
    
    return true;
};

/* 
 * Time & Space Complexities
 */
// n = length of strs
// m = length of longest string in strs

// Brute:
// Time: O(n^2)
// Space: O(1)

// Two Pointer
// Time: O(n)
// Space: O(1)
