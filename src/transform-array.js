const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr || !Array.isArray(arr)) throw Error("Error!");

  const newArr = [];

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--double-next":
        newArr.push(arr[i + 1]);
        break;
      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") {
          newArr.pop();
        }
        break;
      case "--double-prev":
        if (arr[i - 2] !== "--discard-next") {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr.filter((el) => el !== undefined);
};
