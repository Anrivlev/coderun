/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const radiants = [];
  const dires = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") radiants.push(i);
    else dires.push(i);
  }
  let n = senate.length;
  while (radiants.length > 0 && dires.length > 0) {
    const r = radiants.shift();
    const d = dires.shift();
    if (r < d) {
      radiants.push(n++);
    } else {
      dires.push(n++);
    }
  }
  return radiants.length === 0 ? "Dire" : "Radiant";
};

console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("RD"));
