function isInBounds(i, j, N, M) {
  return i >= 0 && i < N && j >= 0 && j < M;
}

function isCenter(i, j, N, M) {
  return i !== 0 && i !== N - 1 && j !== 0 && j !== M - 1;
}

function exploreStructure(i, j, map, visited) {
  const N = map.length;
  const M = map[0].length;

  let isCeil = false;
  let isFloor = false;

  const queue = [[i, j]];
  let head = 0;
  while (head < queue.length) {
    const [currI, currJ] = queue[head];
    head++;

    if (visited[currI][currJ]) continue;
    visited[currI][currJ] = true;

    if (map[currI][currJ] === 0) continue;

    if (currI === 0) isCeil = true;
    if (currI === N - 1) isFloor = true;

    const neighbours = [
      [currI - 1, currJ],
      [currI, currJ - 1],
      [currI + 1, currJ],
      [currI, currJ + 1],
    ].filter((node) => isInBounds(node[0], node[1], N, M));

    queue.push(...neighbours);
  }

  if (isCeil && isFloor) return "both";
  if (isCeil) return "ceil";
  if (isFloor) return "floor";
  return "none";
}

function scan(map) {
  const answer = { ceil: 0, floor: 0, both: 0 };
  const N = map.length;
  if (N === 0) return answer;
  const M = map[0].length;
  if (M === 0) return answer;

  const visited = new Array(N).fill(null).map(() => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // Можно пропустить центр вроде
      if (isCenter(i, j, N, M)) continue;

      if (visited[i][j]) continue;
      if (map[i][j] === 0) {
        visited[i][j] = true;
        continue;
      }

      const structureType = exploreStructure(i, j, map, visited);
      if (structureType !== "none");
      answer[structureType] += 1;
    }
  }

  return answer;
}

module.exports = { scan };

// Ниже тестирую код
const maps = [
  [
    [1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
  ],
  [
    [1, 0, 1],
    [0, 1, 0],
  ],
  [],
];
const map = maps[4];

console.log(scan(map));
