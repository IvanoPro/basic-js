const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((acc, cur) => Math.max(this.calculateDepth(cur), acc), 0) : 0;
  }
};