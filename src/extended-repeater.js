const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const arr = [];
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  const newSeparator = separator ? separator : "+";
  const amountRepeat = repeatTimes ? repeatTimes : 1;
  const countRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;
  const newAdditionSeparator = additionSeparator ? additionSeparator : "|";

  for (let i = 0; i < amountRepeat; i++) {
    let add = "";
    let item = [];

    if (addition || addition === false || addition === null) {
      let customAddition;
      if (addition === null) {
        customAddition = "null";
      } else {
        customAddition = addition;
      }
      for (let j = 0; j < countRepeatTimes; j++) {
        item.push(customAddition);
      }
      add += item.join(newAdditionSeparator);
    }
    arr.push(str + add);
  }

  return arr.join(newSeparator);
};
