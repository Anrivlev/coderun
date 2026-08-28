/**
 * Решение с Set
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const stack = [rooms[0]];
  visited.add(0);
  while (stack.length > 0) {
    const current = stack.pop();
    for (const i of current) {
      if (visited.has(i)) continue;
      visited.add(i);
      stack.push(rooms[i]);
    }
  }
  return visited.size === rooms.length;
};


/**
 * Решение с Array
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(false);
  const stack = [0];
  visited[0] = true;
  while (stack.length > 0) {
    const current = stack.pop();
    for (const i of rooms[current]) {
      if (visited[i]) continue;
      visited[i] = true;
      stack.push(i);
    }
  }
  return visited.every(value => value);
};