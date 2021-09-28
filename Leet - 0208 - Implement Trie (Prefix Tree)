class TrieNode<T> {
    terminal: boolean;
    children: {};
    
    constructor () {
        this.terminal = false;
        this.children = {};
    }
}

class Trie<T> {
    private root: TrieNode<T>;

    constructor() {
        this.root = new TrieNode<T>();
    }

    insert(word: string): void {
        let curr = this.root;
        
        for (const char of word) {
            if (!(char in curr.children)) curr.children[char] = new TrieNode<string>();
            curr = curr.children[char];
        }
        curr.terminal = true;
    }

    search(word: string): boolean {
        let curr = this.root;
        
        for (const char of word) {
            if (!(char in curr.children)) return false;
            curr = curr.children[char];
        }
        
        return curr.terminal;
    }

    startsWith(prefix: string): boolean {
        let curr = this.root;
        
        for (const char of prefix) {
            if (!(char in curr.children)) return false;
            curr = curr.children[char];
        }
        
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
