const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value === "" ? (value = "(  )") : (value = `( ${value} )`);
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain = this.chain.filter((el) => el !== this.chain[position - 1]);
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map((el) => `${el}`).join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
