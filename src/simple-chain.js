const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${(value)} )`);
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let acc = this.arr.join('~~');
    this.arr = [];
    return acc;
  },
};

module.exports = chainMaker;
