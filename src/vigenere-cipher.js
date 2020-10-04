const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(dir = true) {
    this.dir = dir;
  }

  encrypt(str, key) {
    return this.crypt(str, key);
  }

  decrypt(str, key) {
    return this.crypt(str, key, 'decrypt');
  }

  crypt(str, key, mode){
    if (!str && !key) throw Error()
    str = str.toUpperCase();
    key = key.toUpperCase();
    let arrRes = [];
    for (let i = 0, j = 0; i < str.length; i++) {
      if(str[i].match(/[A-Z]/)){
        if(mode == 'decrypt') {
          arrRes.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
        } else {
          arrRes.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
        }
          j++
        } else {
          arrRes.push(str[i])
        } 
      }
    return  this.dir ? arrRes.join('') : arrRes.reverse().join('')
  }
}
module.exports = VigenereCipheringMachine;
