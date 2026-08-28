/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  if (!maze) return -1;
  const m = maze.length;
  if (m === 0) return -1;
  const n = maze[0].length;
  if (n === 0) return -1;

  const queue = new Map();
  queue.set(0, { row: entrance[0], column: entrance[1], distance: 0 });
  let head = 0;
  let tail = 1;
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  visited[entrance[0]][entrance[1]] = true;
  while (head < tail) {
    const { row, column, distance } = queue.get(head);
    head++;
    const neighbours = getNeighbours(maze, row, column, distance);
    for (const neighbour of neighbours) {
      if (visited[neighbour.row][neighbour.column]) continue;
      if (isBorder(neighbour.row, neighbour.column, maze))
        return neighbour.distance;
      queue.set(tail, neighbour);
      visited[neighbour.row][neighbour.column] = true;
      tail++;
    }
  }
  return -1;
};

function isBorder(row, column, maze) {
  const m = maze.length;
  const n = maze[0].length;
  return row === 0 || row === m - 1 || column === 0 || column === n - 1;
}

function isInRange(i, min, max) {
  return i >= min && i < max;
}

function isRowColumnInMaze(obj, maze) {
  const m = maze.length;
  const n = maze[0].length;
  return (
    isInRange(obj.row, 0, m) &&
    isInRange(obj.column, 0, n) &&
    maze[obj.row][obj.column] === "."
  );
}

function getNeighbours(maze, row, column, distance) {
  const nextDistance = distance + 1;
  return [
    { row: row - 1, column: column, distance: nextDistance },
    { row: row + 1, column: column, distance: nextDistance },
    { row: row, column: column - 1, distance: nextDistance },
    { row: row, column: column + 1, distance: nextDistance },
  ].filter((obj) => isRowColumnInMaze(obj, maze));
}
