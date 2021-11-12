/*
Problem:
input: a number, a set of numbers
output: sum of the multiples of all the numbers

Examples:
SEE TEST CODE

Data Structures:
a class
  constructor
    array for multiples which are numbers

  static to method
  to method

Algorithm:
  to method - takes two arguments: num. default this.set
  declare total variable
  declare set variable
  start iterating up from 1
  on each iteration
    if the current number is a multiple of one of the numbers in the set (use some method)
      add the number to the running total
  return the total
*/
class SumOfMultiples {
  static set = [3, 5];

  constructor(...set) {
    this.set = set;
  }

  static getTotal(toNumber, set) {
    let total = 0;

    for (let count = 1; count < toNumber; count += 1) {
      if (set.some(num => (count % num === 0))) {
        total += count;
      }
    }

    return total;
  }

  static to(toNumber) {
    return SumOfMultiples.getTotal(toNumber, SumOfMultiples.set);
  }

  to(toNumber) {
    return SumOfMultiples.getTotal(toNumber, this.set);
  }
}

module.exports = SumOfMultiples;