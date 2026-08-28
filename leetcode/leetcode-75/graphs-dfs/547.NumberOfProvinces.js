/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  if (isConnected.length === 0) return 0;
  let provinceCount = 0;
  const visited = new Array(isConnected.length).fill(false);
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i]) continue;
    provinceCount++;
    const stack = [i];
    while (stack.length > 0) {
      const j = stack.pop();
      for (let k = 0; k < isConnected[j].length; k++) {
        if (visited[k] || isConnected[j][k] === 0) continue;
        visited[k] = true;
        stack.push(k);
      }
    }
  }

  return provinceCount;
};
