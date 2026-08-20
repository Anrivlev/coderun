// Решение более эффективное по скорости.
var RecentCounter = function () {
  this.requests = [];
  this.head = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  const minT = t - 3000;
  while (this.requests[this.head] < minT && this.head < this.requests.length) {
    this.head++;
  }
  return this.requests.length - this.head;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// Решение более эффективное по памяти.
// var RecentCounter = function () {
//   this.requests = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function (t) {
//   this.requests.push(t);
//   const minT = t - 3000;
//   while (this.requests.length > 0 && this.requests[0] < minT) {
//     this.requests.shift();
//   }
//   return this.requests.length;
// };
