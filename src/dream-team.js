const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || !Array.isArray(members)) {
    return false;
  } else {
    return members
      .filter((el) => typeof el === "string")
      .map((el) => el.replace(/ +/g, " ").trim().toUpperCase()[0])
      .sort()
      .join("");
  }
};
