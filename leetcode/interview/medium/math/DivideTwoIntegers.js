/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let quotient = 0;

    while (dividend > 0) {
        let divisorMultiplied = divisor;
        let count = 1;
        while (divisorMultiplied < dividend) {
            divisorMultiplied += divisorMultiplied;
            count += count;
        }
        // идея да, но нужно аккуратно довести до конца.
    }

    return quotient;
};