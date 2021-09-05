/* 
 * Memoization
 */
function climbStairs(n: number, memo={}): number {
    if (n in memo) return memo[n];
    if (n < 0) return 0;
    if (n === 0) return 1;
    
    memo[n] = climbStairs(n-2, memo) + climbStairs(n-1, memo);
    return memo[n]
};

/* 
 * Tabulation
 */
function climbStairs(n: number): number {
    let table = Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 1;
    let steps = [1,2];

    for (let i = 0; i < table.length; ++i) {
        for (let j = 0; j <= steps.length; ++j) {
            const stepSize = steps[j];
            if(i+stepSize < table.length) {
                table[i + stepSize] += table[i];
            }
        }
    }

    return table[n];
};

/* 
 * Time & Space Complexities
 */
// m = total number of steps in a worst case scenario
// n = 2 = number of options per step { 1, 2 } 

// Brute:
// Time: O(n^m) = O(2^m)
// Space: O(m)

// Memoized
// Time: O(n*m) = O(2m) = O(m)
// Space: O(m)

// Tabulation
// Time: O(n*m) = O(2m) = O(m)
// Space: O(m)
