const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(line) {
    this.line = line;
  }

  encrypt(m, k) {
    if (!m || !k) throw "Error";

    let arr = m.toUpperCase().split("");

    k = k.toUpperCase();
    let count = 0;
    let resultArr = arr.map((char, i) => {
      // if not ascii
      if (!((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
        return char;
      }

      let keyIndex = count >= k.length ? count % k.length : count;
      let newChar = ((char.charCodeAt() + k[keyIndex].charCodeAt()) % 26) + 65;
      count++;
      return String.fromCharCode(newChar);
    });

    if (this.line === false) resultArr.reverse();
    return resultArr.join("");
  }
  decrypt(m, k) {
    if (!m || !k) throw "Error";

    let arr = m.toUpperCase().split("");
    k = k.toUpperCase();
    let count = 0;
    let resultArr = arr.map((char, i) => {
      // if not ascii
      if (!((char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
        return char;
      }

      let keyIndex = count >= k.length ? count % k.length : count;
      let newChar = ((char.charCodeAt() + 26 - k[keyIndex].charCodeAt()) % 26) + 65;
      count++;
      return String.fromCharCode(newChar);
    });
    if (this.line === false) resultArr.reverse();

    return resultArr.join("");
  }
}

module.exports = VigenereCipheringMachine;
