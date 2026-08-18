var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existingValue = this.cache.get(key);
  const isValueExisted = existingValue !== undefined;
  if (isValueExisted) {
    clearTimeout(existingValue.id);
  }
  const id = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, {
    value,
    id,
    duration,
  });
  return isValueExisted;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const value = this.cache.get(key);
  if (value === undefined) return -1;
  return value.value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
