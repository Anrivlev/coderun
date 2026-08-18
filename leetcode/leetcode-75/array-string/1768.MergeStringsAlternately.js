/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const minLength = Math.min(word1.length, word2.length);
    const tokens = [];
    for (let i = 0; i < minLength; i++) {
        tokens.push(word1[i], word2[i]);
    }
    const longerWord = minLength === word1.length ? word2 : word1;

    for(let i = minLength; i < longerWord.length; i++) {
        tokens.push(longerWord[i]);
    }

    return tokens.join('');
};