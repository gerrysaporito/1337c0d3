class TrieNode<T> {
  private terminal: boolean;
  private children: { [key: string]: T };
  
  constructor () {
    this.terminal = false;
    this.children = {};
  }
  
  get terminal() {
    return this.terminal;
  }
  
  get children() {
    return this.children;
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

  search(word: string, skip: string): boolean {
    const dfs = (root: CharNode, index: number = 0) => {
      let curr = root;

      for (let i = index; i < word.length; ++i) {
        const char = word[i];

        if (char === skip) {
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
