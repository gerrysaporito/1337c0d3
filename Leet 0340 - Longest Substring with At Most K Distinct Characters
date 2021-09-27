/*
 * Sliding Window
 */
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    let max = 0;
    let left = 0;
    
    const map = {};
    let currK = 0;
    
    for (let right = 0; right < s.length; ++right) {
        let rChar = s[right];
        if (rChar in map) {
            map[rChar]++;
            if (map[rChar] === 1) currK++;
        } else {
            map[rChar] = 1;
            currK++;
        }
        
        while (currK > k) {
            let lChar = s[left];
            map[lChar]--;
            
            if (map[lChar] === 0) currK--;
            left++;
        }
        
        max = Math.max(max, s.slice(left, right+1).length);
    }
    
    return max;
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
// Space: O(1)
