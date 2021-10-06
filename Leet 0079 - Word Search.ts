/*
 * Backtracking
 */
function exist(board: string[][], word: string): boolean {
    const backtrack = (row: number = 0, col: number = 0, suffix: string = word) => {
        if (suffix.length === 0) return true;
        
        const rowBounded = row >= 0 && row < board.length;
        const colBounded = col >= 0 && col < board[0].length;
        if (!rowBounded || !colBounded || suffix[0] !== board[row][col]) return false;
        
        board[row][col] = '#';
        
        const offsets = [[1,0], [-1,0], [0,1], [0,-1]];
        for (let offset of offsets) {
            const seen = backtrack(row+offset[0], col+offset[1], suffix.slice(1));
            if (seen) return true;
        }
        
        board[row][col] = suffix[0];
        return false;
    }
    
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            if (backtrack(i, j, word)) return true
        }
    }
    
    return false;
};

/* 
 * Time & Space Complexities
 */
// n = number of rows
// m = number of columns
// l = length of word

// Backtracking:
// Time: O(n*m*3^l)
// Space: O(l)
