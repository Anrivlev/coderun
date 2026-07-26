export function memoize(fn) {
  const cache = new Map();
  const memoizedFn = (...args) => {
    const hash = JSON.stringify(args);
    if (cache.has(hash)) return cache.get(hash);

    const result = fn(...args);

    cache.set(hash, result);

    return result;
  };

  return memoizedFn;
}

export function fn(a, b) {
  return a + b;
}

export const callingArguments = [
  [1, 2],
  [1, 2],
];

const memoizedFn = memoize(fn);
console.log(memoizedFn(...callingArguments[0]));
