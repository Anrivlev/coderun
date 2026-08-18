/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const sArray = s.split('');
    let i = 0;
    let j = sArray.length - 1;
    while (i < j) {
        const charI = sArray[i];
        if (!isVowel(charI)) {
            i++;
            continue;
        }
        let charJ = sArray[j];
        if (!isVowel(charJ)) {
            j--;
            continue;
        }
        sArray[j] = charI;
        sArray[i] = charJ;
        i++;
        j--;
    }

    return sArray.join('');
};

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
function isVowel(char) {
    return VOWELS.has(char.toLowerCase());
}


console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));