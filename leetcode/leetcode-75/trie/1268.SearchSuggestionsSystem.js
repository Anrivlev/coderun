const ALPHABET = "qwertyuiopasdfghjklzxcvbnm".split("").sort().reverse().join("");

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const root = { word: "", isWord: false, children: {} };

  function insert(word) {
    let currentNode = root;
    for (const char of word) {
      let nextNode = currentNode.children[char];
      if (!nextNode) {
        nextNode = {
          word: currentNode.word + char,
          isWord: false,
          children: {},
        };
        currentNode.children[char] = nextNode;
      }
      currentNode = nextNode;
    }
    currentNode.isWord = true;
  }

  for (const product of products) {
    insert(product);
  }

  function getClosestChildren(node, count) {
    if (!node) return [];
    const answer = [];
    const stack = [node];
    while (stack.length > 0 && answer.length < count) {
      const current = stack.pop();
      if (current.isWord) answer.push(current.word);
      for (const char of ALPHABET) {
        if (current.children[char]) stack.push(current.children[char]);
      }
    }
    return answer;
  }

  const answer = [];
  let current = root;
  for (const char of searchWord) {
    const next = current?.children[char];
    answer.push(getClosestChildren(next, 3));
    current = next;
  }
  return answer;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
