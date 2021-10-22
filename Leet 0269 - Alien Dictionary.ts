/*
 * Topological Sort
 */ 
function alienOrder(words: string[]): string {
    const generateAdjList = (words: string[]): { [key: string]: string[] } => {
        const adjList = {};
        for (const word of words) {
            for (const char of word)
                if (!(char in adjList)) adjList[char] = new Set<string>();
        }

        for (let i = 1; i < words.length; ++i) {
            const [first, second] = [words[i-1], words[i]];
            const minLength = Math.min(first.length, second.length);
            const secondWordShort = first.length > second.length;
            const samePrefix = first.slice(0, minLength) === second.slice(0, minLength);
            if (secondWordShort && samePrefix) return {};
            for (let j = 0; j < minLength; ++j) {
                if (first[j] !== second[j]) {
                    adjList[first[j]].add(second[j]);
                    break;
                }
            }
        }
        return adjList;
    };
    const isAcyclic = (letter: string) => {
        if (visited.has(letter)) return true;
        if (cycle.has(letter)) return false;
        cycle.add(letter);
        for (const req of adjList[letter]) {
            if (!isAcyclic(req)) return false
        }
        cycle.delete(letter);
        visited.add(letter);
        res.push(letter);
        return true;
    }
    
    const [visited, cycle] = [new Set(), new Set()];
    const res = [];
    const adjList = generateAdjList(words);
    if (Object.keys(adjList).length === 0) return '';
    for (const letter in adjList){
        if (!isAcyclic(letter)) return '';
    }
    return res.reverse().join('');
};

/* 
 * Time & Space Complexities
 */
// n = number of words
// r = number of letters

// Topological Sort:
// Time: O(n+r)
// Space: O(n)
