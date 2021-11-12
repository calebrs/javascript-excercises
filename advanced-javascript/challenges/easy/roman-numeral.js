/*
Problem:
input: A number
output: the number but represented as a roman numeral
rules: 
I - equals 1. I, II, III, 
V - equals 5. IV, V, VI, VII, VIII, 
X - equals 10. IX, X, XI, XII, XIII. XX = 20, XXX = 30
L - same as V
C - 100
D - 500
M - 1000



Examples: see test code


Data Structures:

class to create he numeral
  constructor that defines the number

  toRoman to convert the number property to a string roman numeral


Algorithm:
  create and get the number of each of these catagories:
  1000s: divide number by 1000 round down
  set number to input % 1000
  500s:  
  100s:
  50s:
  10s:
  5s:
  1s:


*/
class RomanNumeral {
  static ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  static TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  static HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  static THOUSANDS = ['M', 'MM', 'MMM'];

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let numAsString = String(this.number);
    let result = '';
    let iteration = 1

    for (let indx = numAsString.length - 1; indx >= 0; indx -= 1) {
      let currentNum = Number(numAsString[indx]);
      if (currentNum === 0) {
        iteration += 1;
        continue;
      } 

      if (iteration === 1) {
        result = RomanNumeral.ONES[currentNum - 1] + result;
      } else if (iteration === 2) {
        result = RomanNumeral.TENS[currentNum - 1] + result;
      } else if (iteration === 3) {
        result = RomanNumeral.HUNDREDS[currentNum - 1] + result;
      } else {
        result = RomanNumeral.THOUSANDS[currentNum - 1] + result;
      }

      iteration += 1;
    }

    return result;
  }
}

module.exports = RomanNumeral;