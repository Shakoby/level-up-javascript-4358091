// Write your code here
let usr = Symbol('usrSym');
let pss = Symbol('pssSym');

class user {
  constructor(userName, password, age) {
    this[usr] = userName;
    this[pss] = password;
    this.age = age;
  }

  getUserName() {
    return this[usr];
  }

  getPassword() {
    return this[pss];
  }
}

const myNew = new user('Hakob', 2122, 21);
// console.log(myNew[userName]);
console.log(myNew.age);
console.log(myNew.getUserName());
