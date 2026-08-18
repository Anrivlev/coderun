/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let finishedCount = 0;
    const promises = functions.map((func, index) =>
      func().then(
        (value) => {
          results[index] = value;
          finishedCount++;
          if (finishedCount === functions.length) resolve(results);
        },
        (reason) => reject(reason),
      ),
    );
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
