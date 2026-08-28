/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const adjacencies = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    const aMap = adjacencies.get(a) ?? new Map();
    if (!adjacencies.has(a)) adjacencies.set(a, aMap);

    aMap.set(b, value);

    const bMap = adjacencies.get(b) ?? new Map();
    if (!adjacencies.has(b)) adjacencies.set(b, bMap);

    bMap.set(a, 1 / value);
  }

  function getResult(a, b) {
    if (a === b && adjacencies.has(a)) return 1;
    const stack = [{ key: a, result: 1 }];
    const visited = new Set([a]);
    while (stack.length > 0) {
      const current = stack.pop();
      const neighbours = adjacencies.get(current.key);
      if (!neighbours) return -1;
      for (const [neighbour, value] of neighbours) {
        if (visited.has(neighbour)) continue;
        if (neighbour === b) {
          return current.result * value;
        }
        visited.add(neighbour);
        stack.push({ key: neighbour, result: current.result * value });
      }
    }
    return -1;
  }

  return queries.map(([a, b]) => getResult(a, b));
};

const equations = [
    ["a", "b"],
    ["b", "c"],
  ],
  values = [2.0, 3.0],
  queries = [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
  ];

console.log(calcEquation(equations, values, queries));
