/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj === null) return null;

  if (Array.isArray(obj)) {
    return obj
      .filter((value) => !!value)
      .map((value) => {
        if (typeof value === "object") return compactObject(value);
        else return value;
      });
  }

  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!value) return;
    if (typeof value === "object") result[key] = compactObject(value);
    else result[key] = value;
  });
  return result;
};

const obj = [null, 0, false, 1];
console.log(compactObject(obj));

const obj2 = { a: null, b: [false, 1] };
console.log(compactObject(obj2));
