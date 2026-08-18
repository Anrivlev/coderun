/**
 * Необходимо написать функцию, возвращающую максимальное числовое значение
 * для строк из массива `strs`.
 * При этом, числовое значение для строки определяется следующим образом:
 * - Если строка состоит только из цифр, то числовое значение — это
 *   результат преобразования строки в число
 * - В ином случае числовое значение — это длина строки
 */

const isNumber = (word) => /^\d+$/.test(word);

function wordToNumberValue(word) {
  if (isNumber(word)) return Number(word);
  return word.length;
}

export const maximumValue = (words) => {
  const uniqueWords = new Set(words);
  return Array.from(uniqueWords).reduce((prevNumber, next) => {
    const nextNumber = wordToNumberValue(next);

    return Math.max(prevNumber, nextNumber);
  }, -Infinity);
};

console.log(maximumValue(["a", "bb", "ccc", "1e5"]));
