/*
 * Sliding Window
 */
function minWindow(s: string, t: string): string {
    if (t === "") return "";
    
    const tCounter = {};
    const windowCounter = {};
    
    let have = 0;
    let need = new Set(t.split('')).size;

    let result = [-1, -1];
    let resultLength = Infinity;
    let left = 0;
    
    // Populated the counters with relevant characters
    for (let i = 0; i < t.length; ++i) {
        t[i] in tCounter ? tCounter[t[i]] += 1 : tCounter[t[i]] = 1;
        
        if (!(t[i] in windowCounter)) windowCounter[t[i]] = 0;
    }
    
    // Iterate over each character with the faster pointer (dynamic pointer)
    for (let right = 0; right < s.length; ++right) {
        const rightVal = s[right];

        // Check if the current value is valid
        if (t.includes(rightVal)) {
            windowCounter[rightVal] += 1

            // Check to see if we validated our condition for current character
            if (windowCounter[rightVal] === tCounter[rightVal]) have += 1;
            
            // Try to shorten the window by moving the lagging pointer (base)
            while (have === need) {
                const leftVal = s[left];
                
                // Check current substring against result
                if (right-left+1 < resultLength) {
                    resultLength = right-left+1;
                    result = [left, right];
                }
                
                // Decrement the counter for the current valid character and check if condition is met
                if (t.includes(leftVal)) {
                    windowCounter[leftVal] -= 1
                    
                    if (windowCounter[leftVal] < tCounter[leftVal]) have -= 1;
                };
                
                left++;
            }
        }
    }

    return s.slice(result[0], result[1] + 1);
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
