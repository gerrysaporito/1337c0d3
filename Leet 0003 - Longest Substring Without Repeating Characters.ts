/*
 * Sliding Window
 */
function lengthOfLongestSubstring(s: string): number {
    let max = '';
    let i = 0;
    let j = 0;
    
    while (j < s.length) {
        let substr = s.slice(i, j+1).split('');
        let substrSet = new Set(substr);
        
        if (substr.length === substrSet.size) {
            if (max.length < substr.length) max = substr.join('');
        } else {
            while (substr.length !== substrSet.size) {
                substr = s.slice(++i, j+1).split('');
                substrSet = new Set(substr);
            }        
        }

        j++;
    }
    
    return max.length;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Brute:
// Time: O(n^2)
// Space: O(1)

// Sliding Window
// Time: O(n)
// Space: O(n) // Could be O(1) if max is a number instead of a string
