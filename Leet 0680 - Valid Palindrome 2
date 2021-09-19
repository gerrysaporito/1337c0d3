/*
 * Sliding Window
 */
function validPalindrome(s: string): boolean {
    const isPalindrome = (s: string): boolean => {
        for (let i = 0; i < Math.round(s.length/2); ++i) {
            if (s[i] !== s[s.length-1-i]) return false;
        }

        return true;
    }
    
    let left = 0;
    let right = s.length-1;
    
    while (left < right) {
        const leftChar = s[left];
        const rightChar = s[right];

        if (leftChar !== rightChar) {
            const skipLeft = s.slice(left+1, right+1);
            const skipRight = s.slice(left, right);
            const leftPalindrome = isPalindrome(skipLeft);
            const rightPalindrome = isPalindrome(skipRight);
            
            return leftPalindrome || rightPalindrome;
        }
        
        right--;
        left++;
    }
    
    return true;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Sliding Window
// Time: O(n)
// Space: O(1)
