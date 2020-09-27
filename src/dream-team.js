const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (members instanceof Array) ? (members.map(el => (typeof(el) === "string") ? el.trim().substring(1, 0).toUpperCase():'').sort().join('')) : false;
};