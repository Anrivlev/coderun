/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  const result = [];
  for (const value of arr) {
    if (Array.isArray(value)) result.push(...flat(value, n - 1));
    else result.push(value);
  }
  return result;
};

console.log(flat([1, 2, 3, 4, [1, 2, 3]], 0));

//

/**
 * Альтернативно можно переписать без рекурсии через стэк
 * Работает быстрее и ест меньше памяти, но не лучшее решение
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const stack = arr.map((value) => ({ value, depth: 0 }));
  const result = [];
  while (stack.length > 0) {
    const { value, depth } = stack.pop();
    if (Array.isArray(value) && depth < n) {
      stack.push(...value.map((val) => ({ value: val, depth: depth + 1 })));
    } else {
      result.push(value);
    }
  }
  return result.reverse();
};

console.log(flat([1, 2, 3, 4, [1, 2, 3]], 1));
