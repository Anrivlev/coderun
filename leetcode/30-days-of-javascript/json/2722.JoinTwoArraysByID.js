/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const sortById = (a, b) => a.id - b.id;
  const sortedArr1 = arr1.toSorted(sortById);
  const sortedArr2 = arr2.toSorted(sortById);
  let i = 0;
  let j = 0;
  const joinedArray = [];
  while (i < sortedArr1.length && j < sortedArr2.length) {
    const elem1 = sortedArr1[i];
    const elem2 = sortedArr2[j];

    const obj = {};
    if (elem1.id <= elem2.id) {
      Object.assign(obj, elem1);
      i++;
    }
    if (elem1.id >= elem2.id) {
      Object.assign(obj, elem2);
      j++;
    }
    joinedArray.push(obj);
  }

  while (i < sortedArr1.length) {
    const obj = {};
    Object.assign(obj, sortedArr1[i]);
    joinedArray.push(obj);
    i++;
  }

  while (j < sortedArr2.length) {
    const obj = {};
    Object.assign(obj, sortedArr2[j]);
    joinedArray.push(obj);
    j++;
  }

  return joinedArray;
};

/**
 * Improved version
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  for (let i = 0; i < arr1.length; i++) {
    const obj = {};
    Object.assign(obj, arr1[i]);
    result[arr1[i].id] = obj;
  }

  for (let i = 0; i < arr2.length; i++) {
    const obj = result[arr2[i].id] ?? {};
    Object.assign(obj, arr2[i]);
    result[arr2[i].id] = obj;
  }

  return Object.values(result);
};

/**
 * Editing objects version
 * Я не люблю эту версию, оптому что в проде за такое убьют.
 * Если конечно изменяемость значений - не заранее поставленная цель
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].id in result) {
      Object.assign(result[arr2[i].id], arr2[i]);
    } else result[arr2[i].id] = arr2[i];
  }

  return Object.values(result);
};
