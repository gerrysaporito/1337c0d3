/* 
 * Memoization
 */
function coinChange(coins: number[], amount: number, memo = {}): number {
    if (amount in memo) return memo[amount]
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    
    let min = -1;
    
    for (let coin of coins) {
        const count = coinChange(coins, amount - coin, memo);

        if (count !== -1) {
            if (min === -1 || count < min) {
                  min = count;
            }
        }
    }
    
    memo[amount] = min === -1 ? -1 : min + 1;
    return memo[amount]
};

/* 
 * Tabulation
 */
function coinChange(coins: number[], amount: number): number {
    // Create table and populate base cases
    let table = Array(amount + 1).fill(-1);
    table[0] = 0;
    
    // Iterate through each index of the table
    for (let i = 0; i < table.length; ++i) {
        // Iterate through each coin for the index
        for (let coin of coins) {
            // Check if future index exists in table && the current value a valid 
            if (i + coin < table.length && table[i] !== -1) {
                // Check if index is blank
                if (table[i + coin] === -1) {
                    table[i + coin] = table[i] + 1;
                } else {
                    // Check if future min is less than current min
                    if (table[i + coin] > table[i] + 1) {
                        table[i + coin] = table[i] + 1;
                    }
                }
            }
        }
    }
    
    return table[amount]
};

/* 
 * Time & Space Complexities
 */
// m = total number of steps in a worst case scenario (1 coin * m steps)
// n = number of options for coins

// Brute:
// Time: O(n*n^m)
// Space: O(m)

// Memoized
// Time: O(n*m) 
// Space: O(m)

// Tabulation
// Time: O(n*m)
// Space: O(m)
