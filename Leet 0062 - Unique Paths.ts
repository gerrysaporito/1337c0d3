// /*
//  * Memoization
//  */
function uniquePaths(m: number, n: number, memo={}): number {
    const key = `${m},${n}`;
    if(key in memo) return memo[key]
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    
    memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
    
    return memo[key]
};

/*
 * Tabulation
 */
function uniquePaths(m: number, n: number): number {
    let table = Array(m+1)
        .fill(true)
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
        
    for (let i = 1; i < table.length; ++i) {
        for (let j = 1; j < table[i].length; ++j) {
            table[i][j] += table[i-1][j];
            table[i][j] += table[i][j-1];
        }
    }
        
    return table[m][n]
};

/* 
 * Time & Space Complexities
 */
// m = number of rows
// n = number of columns

// Brute:
// Time: O(2^(n*m))
// Space: O(m+n)

// Memoization
// Time: O(2*m*n) = O(m*n)
// Space: O(m+n)

// Tabulation
// Time: O(m*n)
// Space: O(m*n)
