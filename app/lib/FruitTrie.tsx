class Node {
    children:StringChildren = {};
    isTerminal = false;
}
    
interface StringChildren {
    [index: string]: Node;
}

export class Trie {
    root = new Node();
    insertRecursive(word: string, node: Node) {
        if (word.length === 0) {
            node.isTerminal = true;
            return
            }
            let letter = word[0]
            let nextNode;
            if (!node.children[letter]) {
                nextNode = new Node()
                node.children[letter] = nextNode
                } else {
                    nextNode = node.children[letter]
                    }
        if (nextNode != null) {
            this.insertRecursive(word.slice(1), nextNode)
        }
    }

    searchRecursive(word: string, node: Node): Boolean | undefined {
        if (word.length === 0) {
            if (node.isTerminal) return true
            return false
        }
        let letter = word[0]
        if (letter in node.children) {
            return this.searchRecursive(word.slice(1), node.children[letter])
        } else {
            return false
        }
    }

    wordsWithPrefix(prefix: string, node: Node):Array<string> {
        if (prefix.length === 0) {
            let allWords = []
            if (node.isTerminal) allWords.push('')
            for (let letter in node.children) {
                let child = node.children[letter]
                let suffs = this.wordsWithPrefix('', child)
                let words = suffs.map(suf => letter + suf)
                allWords.push(...words)
            }
            return allWords
        } else {
            let letter = prefix[0];
            if (node.children[letter] !== undefined) {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), node.children[letter])
                return suffixes.map(suf => letter + suf);
            } else {
                return []
            }
        }
    }
}