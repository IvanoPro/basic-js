const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  arr.length == 0 ? 'Error' : arr;

    let res = arr.slice('');
    for (let i = 0; i < res.length; i++) {
      if (res[i] === '--discard-next') res.splice(i, 2, undefined)
        else if (res[i] === '--discard-prev') i === 0 ? res.splice(i, 1) : res.splice(i - 1, 2, undefined)
        else if (res[i] === '--double-next') res.splice(i, 1, res[i + 1])
        else if (res[i] === '--double-prev') res.splice(i, 1, res[i - 1])
    }
    return res.filter(e => e !== undefined);
};
