/* 
 * Memoization
 */
function wordBreak(s: string, wordDict: string[], memo={}): boolean {
    if (s in memo) return memo[s];
    if (s === '') return true;
    
    let segmentable = false;
    
    for (const word of wordDict) {
        if (s.indexOf(word) === 0) {
            const newS = s.slice(word.length);
            const newWordBreak = wordBreak(newS, wordDict, memo);
            segmentable = newWordBreak || segmentable;
        }
    }
    
    memo[s] = segmentable;
    return memo[s];
};

/* 
 * Tabulation
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    let table = new Array(s.length + 1).fill(false);
    table[0] = true;
    
    for (let i = 0; i < table.length; ++i) {
        for (let word of wordDict) {
            if (i + word.length < table.length) {
                if (table[i] === true && s.slice(i).indexOf(word) === 0) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    
    return table[s.length]
};

/* 
 * Time & Space Complexities
 */
// m = length of string
// n = length of wordDict

// Brute:
// Time: O(m*n^2)
// Space: O(m)

// Memoization
// Time: O(m*n)
// Space: O(m)

// Tabulation
// Time: O(m*n)
// Space: O(m)
