/*
 * Sliding Window
 */
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    
    let buyIndex = 0;
    let sellIndex = 1;
    
    while (sellIndex < prices.length) {
        const buy = prices[buyIndex];
        const sell = prices[sellIndex]
        const profit = sell - buy;
        
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    
        if (buy > sell) {
            buyIndex = sellIndex;
        }
        
        sellIndex++; 
    }
    
    return maxProfit
};

/* 
 * Time & Space Complexities
 */
// n = length of prices

// Brute:
// Time: O(n^2)
// Space: O(1)

// Sliding Window
// Time: O(n)
// Space: O(1)
