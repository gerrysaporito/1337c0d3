/*
 * Sliding Window
 */
function characterReplacement(s: string, k: number): number {
    const dict: {[key: string]: number} = {};
    let max = 0;
    let left = 0;
    let right = 0;
        
    for(let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        if (rightChar in dict) {
            dict[rightChar] += 1
        } else {
            dict[rightChar] = 1;
        }
        
        while ((right-left+1) - Math.max(...Object.values(dict)) > k) {
            const leftChar = s[left];
            dict[leftChar] -= 1;
            left++;
        }
                  
        max = Math.max(max, right-left+1);
    }
    
    return max
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Brute:
// Time: O(n^2)
// Space: O(n)

// Sliding Window
// Time: O(n)
// Space: O(n)
