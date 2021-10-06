/*
 * Sliding Window
 */
function countSubstrings(s: string): number {
    const countPalindrome = (str: string, left: number, right: number) => {
        let count = 0;
        
        while(left >= 0 && right < str.length && str[left] === str[right]) {
            count++
            left--;
            right++;
        };
        
        return count;
    }
    
    let count = 0;
    
    for (let i = 0; i < s.length; ++i) {
        let left = i;
        let right = i;
        count += countPalindrome(s, left, right);
        
        left = i;
        right = i+1;
        count += countPalindrome(s, left, right);
    }
    
    return count;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Brute:
// Time: O(n^3)
// Space: O(1)

// Sliding Window
// Time: O(n^2)
// Space: O(1)
