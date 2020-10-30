const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = { turns: "", seconds: "" };
  let minTurns = 2 ** disksNumber - 1;
  let minSeconds = Math.floor(minTurns / (turnsSpeed / 3600));
  result.turns = minTurns;
  result.seconds = minSeconds;
  return result;
};
