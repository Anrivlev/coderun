var Trie = function () {
  // Изначально написал через Map, через Object быстрее.
  this.root = { key: null, isWord: false, children: {} };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentNode = this.root;
  for (const token of word) {
    let nextNode = currentNode.children[token];
    if (!nextNode) {
      nextNode = { key: token, isWord: false, children: {} };
      currentNode.children[token] = nextNode;
    }
    currentNode = nextNode;
  }
  currentNode.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentNode = this.root;
  for (const token of word) {
    const nextNode = currentNode.children[token];
    if (!nextNode) return false;
    currentNode = nextNode;
  }
  return currentNode.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.root;
  for (const token of prefix) {
    const nextNode = currentNode.children[token];
    if (!nextNode) return false;
    currentNode = nextNode;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
