/*
 * Hashmap
 */
function groupAnagrams(strs: string[]): string[][] {
    const res = {};
    
    for (const str of strs) {
        let alphabet = Array(26).fill(0);
        
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabet[index] += 1;
        }
        
        const index = alphabet.map(n => n.toString()).join(',');
        if (!(index in res)) {
            res[index] = [];
        }
        res[index].push(str);
    }
    
    return Object.values(res)
};

/* 
 * Time & Space Complexities
 */
// n = length of strs
// m = length of longest string in strs

// Brute:
// Time: O(m*n^2)
// Space: O(n*m)

// Hashmap
// Time: O(n*m*26) = O(n*m)
// Space: O(n*m)
