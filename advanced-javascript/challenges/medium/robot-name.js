/*
Problem:
create a robot class that can manage robots
create a method that gets the robots name. This name is randomly generated 
when it is first created.
Robot class keeps track of all the current names
reste method that changes the name removes the old name from the tracker
array

Examples:
SEE TEST CODE

Data Structures:
robot class takes no arguments:
  name method
  reset method

name class with no arguments
  keeps track of all names
  newName Method
  random char generator methods?


Algorithm:
  construcotr method:
    sets name property to Name.newName()
  name method:
    returns the value of this.name
  reset method:
    reassigns name property to a newName()

Name class:
  static Name method:
    return the random char method twice and the chars three times, save as
    a variable
    if the name is contained in the tracker array already, create a newname
    push the name into the static tracker property
    return the name

  random Chars
    declare alphabet string
      get random number betweeen 0 and 25
      get the random letter
      return the letter

  fullname method
    puts together and returns the name


  Random Numbers
    generate one number between 0 and 9
    creturn the number


*/
// Math.seedrandom = require('seedrandom');

class Robot {
  constructor() {
    this.robotName = Name.newName();
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = Name.newName();
  }
}

class Name {
  static NAMES = [];

  static newName() {
    let newName = this.getNewName();
    while (this.NAMES.includes(newName)) {
      newName = this.getNewName();
    }

    this.NAMES.push(newName);
    return newName;
  }

  static getNewName() {
    return this.getRandomChar() + this.getRandomChar() + 
           this.getRandomNum() + this.getRandomNum() +
           this.getRandomNum();
  }

  static getRandomChar() {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indx = Math.floor(Math.random() * 25);
    return ALPHABET.charAt(indx);
  }

  static getRandomNum() {
    return String(Math.floor(Math.random() * 10));
  }
}

module.exports = Robot;