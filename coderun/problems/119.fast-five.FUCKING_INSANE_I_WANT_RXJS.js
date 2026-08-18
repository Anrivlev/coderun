module.exports = function winners(wait, pushResult, STREET_RACERS, N) {
  const waitPromisified = waitPromisifier(wait);

  const finished = [];

  const promises = STREET_RACERS.map((racer) => waitPromisified(racer, 1));
};

async function waitRepeatIfConnectionLost(waitPromisified) {
  return (streetRacer, checkpoint) => {
    return new Promise((resolve, reject) => {
      let result = undefined;
      do {
        result = waitPromisified(streetRacer, checkpoint);
      } while (result === "connection lost");
      resolve(result);
    });
  };
}

function waitPromisifier(wait) {
  return (streetRacer, checkpoint) => {
    return new Promise((resolve, reject) => {
      const callback = (output) => {
        resolve(output);
      };
      wait(streetRacer, checkpoint, callback);
    });
  };
}

function waitMock(streetRacer, checkpoint, callback) {}

function pushResultMock(winners) {
  console.log(winners);
}

const wait = waitMock;
const pushResult = pushResultMock;
const STREET_RACERS = ["Brian", "Mia", "Han", "Gisele", "Dominic"];
const N = 10;
winners(wait, pushResult, STREET_RACERS, N);
