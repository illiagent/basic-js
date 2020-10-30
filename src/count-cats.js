const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      matrix[i][k] === "^^" ? (cats += 1) : cats;
    }
  }
  return cats;
};
