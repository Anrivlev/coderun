/**
 * Для тестирования можно пользоваться моком функции fetchFlights
 *
 * ```
 * const FLIGHTS = {
 *  A: ['B', 'D'],
 *  B: ['C', 'N', 'Z'],
 *  D: ['E', 'F'],
 *  F: ['S']
 * };
 *
 * const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);
 * ```
 */

const FLIGHTS = {
  A: ["B", "D"],
  B: ["C", "N", "Z"],
  D: ["E", "F"],
  F: ["S"],
};
const fetchFlights = (from) => Promise.resolve(FLIGHTS[from]);

export async function findPath(from, to, fetchFlights) {
  if (from === to) return [from];

  const pathStartsToCheck = [from];

  const parents = new Map();
  parents.set(from, null);

  let headIndex = 0;

  while (pathStartsToCheck.length !== headIndex) {
    const pathStart = pathStartsToCheck[headIndex];
    headIndex++;

    const nexts = await fetchFlights(pathStart);
    if (!nexts) continue;
    for (let i = 0; i < nexts.length; i++) {
      const next = nexts[i];
      parents.set(next, pathStart);
      if (next === to) {
        const path = [];
        let parent = next;
        while (parent !== null) {
          path.push(parent);
          parent = parents.get(parent);
        }
        return path.toReversed();
      }
      pathStartsToCheck.push(next);
    }
  }

  return [];
}

console.log(await findPath("A", "N", fetchFlights));
