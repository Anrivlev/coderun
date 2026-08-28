/**
 * Решение работает, потому что в графе нет циклов. С циклами было бы намного сложнее. Интересно, есть ли такая задача.
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let reorderCount = 0;

  const adjacencies = Array.from({ length: n }, () => new Map());

  for (const [i, j] of connections) {
    adjacencies[i].set(j, 1);
    adjacencies[j].set(i, -1);
  }

  const visited = new Array(n).fill(false);
  visited[0] = true;

  const stack = [0];
  while (stack.length > 0) {
    const city = stack.pop();
    const neighbours = adjacencies[city];
    for (const [i, direction] of neighbours) {
      if (visited[i]) continue;
      visited[i] = true;
      stack.push(i);
      if (direction === 1) reorderCount++;
    }
  }

  return reorderCount;
};
