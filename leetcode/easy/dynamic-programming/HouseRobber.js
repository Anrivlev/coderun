/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  let bestUpToThis = nums[0];
  let bestWithoutPrev = 0;
  let hasStolenFromPrev = true;
  let maximum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (!hasStolenFromPrev) {
      bestWithoutPrev = bestUpToThis;
      bestUpToThis += nums[i];
      hasStolenFromPrev = true;
    } else {
      const withoutPrev = bestWithoutPrev + nums[i];
      if (withoutPrev > bestUpToThis) {
        bestWithoutPrev = bestUpToThis;
        bestUpToThis = withoutPrev;
        hasStolenFromPrev = true;
      } else {
        hasStolenFromPrev = false;
      }
    }

    maximum = Math.max(maximum, bestUpToThis);
  }

  return maximum;
};

const nums = [1, 2, 3, 1];
console.log(rob(nums));
