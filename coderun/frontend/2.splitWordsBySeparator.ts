/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words: string[], separator: string) => {
    return words.flatMap(word => word.split(separator)).filter(word => word !== '');
};

const testWords = ["one.two.three","four.five","six"];
const testSeparator = ".";

const splitTestWords = splitWordsBySeparator(testWords, testSeparator);

console.log(splitTestWords);