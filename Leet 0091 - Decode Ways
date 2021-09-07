/*
 * Memoization
 */
function numDecodings(s: string, memo={}): number {
    if (s in memo) return memo[s];
    if (s[0] === '0') return 0;
    if (s.length <= 1) return 1;
    
    const s1 = s.slice(1);
    let s2 = s.slice(2);    
    
    if (parseInt(s.slice(0,2)) > 26) {
        s2 = '0';
    }

    memo[s] = numDecodings(s1, memo) + numDecodings(s2, memo);
    return memo[s];
};

/* 
 * Time & Space Complexities
 */
// m = total length of string s
// n = number of options per step { 1, 2 } = 2

// Brute:
// Time: O(n^m) = O(2^m)
// Space: O(m)

// Memoized
// Time: O(n*m) = O(2m) = O(m)
// Space: O(m)
