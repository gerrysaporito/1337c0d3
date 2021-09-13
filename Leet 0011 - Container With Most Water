/*
 * Two Pointers
 */
function maxArea(heights: number[]): number {
    let left = 0;
    let right = heights.length-1;
    let max = 0;
    
    while (left < right) {
        const area = Math.min(heights[left], heights[right]) * (right-left);
        
        max = Math.max(max, area);
        
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};

/* 
 * Time & Space Complexities
 */
// n = length of heights

// Brute:
// Time: O(n^2)
// Space: O(1)

// Two Pointers
// Time: O(n)
// Space: O(1)
