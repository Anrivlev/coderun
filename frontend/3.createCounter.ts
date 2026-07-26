/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 *
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
type CounterType = {
  initValue: number;
  currentCount: number;
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

//  Мое рещение мне больше понравилось
// export function createCounter(init: number): CounterType {
//   return {
//     initValue: init,
//     currentCount: init,
//     increment: function (): number {
//       this.currentCount += 1;
//       return this.currentCount;
//     },
//     decrement: function (): number {
//       this.currentCount -= 1;
//       return this.currentCount;
//     },
//     reset: function (): number {
//       this.currentCount = this.initValue;
//       return this.currentCount;
//     },
//   };
// }

export function createCounter(init: number) {
  let count = init;
  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    reset: function () {
      count = init;
      return count;
    },
  };
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.reset());
console.log(counter.reset());
console.log(counter.decrement());
