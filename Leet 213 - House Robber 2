/* 
 * Tabulation
 */
function rob(nums: number[]): number {
    const rob1Sol = (nums: number[]): number => {
        let table = Array(nums.length + 1).fill(0);

        for (let i = 0; i < nums.length; ++i) {
            table[i+1] = nums[i];
        }

        for (let i = 0; i < table.length; ++i) {
            if (i + 2 < table.length) {
                table[i+2] = Math.max(table[i] + table[i+2], table[i+1]);
            }
        }

        return Math.max(...table);
    }
    
    if (nums.length === 1) return nums[0];
    
    const revNums = nums.map((n, i) => nums[nums.length - 1 - i]);
    const rob1 = rob1Sol(nums.slice(0, nums.length-1));
    const rob2 = rob1Sol(revNums.slice(0, revNums.length-1));

    return Math.max(rob1, rob2);
};

/* 
 * Time & Space Complexities
 */
// n = length of nums

// Tabulation
// Time: O(n)
// Space: O(n)
