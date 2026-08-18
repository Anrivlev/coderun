/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
export const addTwoPromises = async function (
  promise1: Promise<number>,
  promise2: Promise<number>,
) {
  let sum = 0;
  try {
   sum += await promise1;
  } catch (rejectValue) {
    if (typeof rejectValue === 'number')
    sum += rejectValue;
  }
  
   try {
   sum += await promise2;
  } catch (rejectValue) {
    if (typeof rejectValue === 'number')
    sum += rejectValue;
  }

  return sum;
};

console.log(await addTwoPromises(Promise.resolve(2), Promise.reject(3)));
