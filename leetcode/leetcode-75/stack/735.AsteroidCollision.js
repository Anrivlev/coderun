/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const result = [];
  for (const asteroid of asteroids) {
    if (result.length === 0) {
      result.push(asteroid);
      continue;
    }
    const absAsteroid = Math.abs(asteroid);
    const signAsteroid = Math.sign(asteroid);
    let prev = result.pop();
    let absPrev = Math.abs(prev);
    let signPrev = Math.sign(prev);

    // этот while можно заменить на i-- и ифы, будет красивее.
    while (
      prev !== undefined &&
      signPrev === 1 &&
      signAsteroid === -1 &&
      absPrev < absAsteroid
    ) {
      prev = result.pop();
      if (prev === undefined) break;
      absPrev = Math.abs(prev);
      signPrev = Math.sign(prev);
    }

    if (prev === undefined) result.push(asteroid);
    else if (
      signPrev === signAsteroid ||
      (signPrev === -1 && signAsteroid === 1)
    )
      result.push(prev, asteroid);
    else if (absPrev > absAsteroid) result.push(prev);
  }
  return result;
};
