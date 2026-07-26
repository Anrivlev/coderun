const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mode = "n";
let n;
let cityCoordinates = [];
let k;
let cityFrom;
let cityTo;

function calculateMinimumRoadCountFromTo() {
    const queue = [];

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
      cityCoordinates.push(coordinate);
      if (cityCoordinates.length === n) mode = "k";
      break;
    }
    case "k": {
      k = Number(input);
      mode = "citiesFromAndTo";
      break;
    }
    case "citiesFromAndTo": {
      [cityFrom, cityTo] = input.split(" ").map((char) => Number(char));
      rl.close();

      break;
    }
  }
});
