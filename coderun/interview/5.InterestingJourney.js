const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mode = "n";
let n;
let places = [];
let k;
let from;
let to;

function calculateMinimumRoadCountFromTo(n, places, k, from, to) {
  if (from === to) return 0;
  const queue = [from];
  let head = 0;

  const distances = Array(n).fill(-1);
  distances[from] = 0;

  while (head < queue.length) {
    const currentCity = queue[head];
    head += 1;
    for (let i = 0; i < n; i += 1) {
      if (
        distances[i] === -1 &&
        distance(places[currentCity], places[i]) <= k
      ) {
        distances[i] = distances[currentCity] + 1;
        queue.push(i);
      }
    }
  }

  return distances[to];
}

function distance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

rl.on("line", (input) => {
  switch (mode) {
    case "n": {
      n = Number(input);
      mode = "cityCoordinates";
      break;
    }
    case "cityCoordinates": {
      const coordinate = input.split(" ").map((char) => Number(char));
      places.push(coordinate);
      if (places.length === n) mode = "k";
      break;
    }
    case "k": {
      k = Number(input);
      mode = "citiesFromAndTo";
      break;
    }
    case "citiesFromAndTo": {
      [from, to] = input.split(" ").map((char) => Number(char) - 1);
      rl.close();
      const cityCount = calculateMinimumRoadCountFromTo(n, places, k, from, to);
      console.log(cityCount);
      break;
    }
  }
});
