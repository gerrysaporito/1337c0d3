/*
 * Sliding Window
 */
function longestPalindrome(s: string): string {
    
    const checkPalindrome = (s: string, res: string, left: number, right: number) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const sub = s.slice(left, right + 1);
            res = sub.length > res.length ? sub : res;
            left--;
            right++;
        }
        
        return res;
    }
    
    let res = `${s[0]}`;
    
    for (let i = 0; i < s.length; ++i) {
        // Check Odd
        let left = i;
        let right = i;        
        res = checkPalindrome(s, res, left, right);

        // Check Even
        left = i;
        right = i+1;
        res = checkPalindrome(s, res, left, right);
    }
    
    return res;
}

/* 
 * Time & Space Complexities
 */
// n = length of string

// Brute:
// Time: O(n^3)
// Space: O(1)

// Sliding Window
// Time: O(n^2)
// Space: O(n)
