class CharNode {
    terminal: boolean;
    children: { [key: string]: CharNode }

    constructor () {
        this.terminal = false;
        this.children = {};
    }
}

class WordDictionary {
    private root: CharNode;
    
    constructor() {
        this.root = new CharNode();
    }

    addWord(word: string): void {
        let curr = this.root;
        
        for (const char of word) {
            if (!(char in curr.children)) curr.children[char] = new CharNode();
            curr = curr.children[char];
        }

        curr.terminal = true;
    }

    search(word: string): boolean {
        const dfs = (root: CharNode, index: number = 0) => {
            let curr = root;
            
            for (let i = index; i < word.length; ++i) {
                const char = word[i];
                
                if (char === '.') {
                    for (const child of Object.values(curr.children)) {
                        const validSubChildren = dfs(child, i + 1);
                        if (validSubChildren) return true;
                    }
                    
                    return false;
                } else {
                    if (!(char in curr.children)) return false;
                    curr = curr.children[char];
                }
            }
            
            return curr.terminal;
        }
        
        return dfs(this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
