/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return `1`;
    const prev = countAndSay(n - 1);
    let next = ``;
    let prevChar = undefined;
    for (const char of prev) {
        if (prevChar === undefined) {
            
        }
    }
    return next;
};