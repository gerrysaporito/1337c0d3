/*
 * Hashmap
 */
function isAnagram(s: string, t: string): boolean {
    const dict: { [key: string]: number } = {};
    
    for (let char of s) {
        char in dict ? dict[char] += 1 : dict[char] = 1;
    }
    
    for (let char of t) {
        char in dict ? dict[char] -= 1 : dict[char] = 1;
    }
    
    return Math.max(...Object.values(dict)) === 0;
};

/*
 * Sliding Window
 */
function isAnagram(s: string, t: string): boolean {
    const getStringId = (str: string) => {
        const count = new Array(26).fill(0);
        
        for (const char of str.split('')) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        
        return count.join(',')
    }
    
    const sId = getStringId(s);
    const tId = getStringId(t);
    
    return sId === tId;
};

/* 
 * Time & Space Complexities
 */
// n = length of string

// Brute:
// Time: O(n^2)
// Space: O(n)

// Hashmap
// Time: O(n)
// Space: O(n)

// Sliding Window
// Time: O(n)
// Space: O(n)
