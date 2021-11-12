/*
Problem:
input: a number into a constructor
output: string output, whther the number is perfect, abundant, or deficient
rules:
perfect: aliquot sum that is equal to the original number
abundant: aliquot sum is greater than the original number
deficient: aliquot sum is less thatn the original number

Examples:


Data Strucutres:


Algorithm:
create class
  create classigy method that accepts a number as an argument
  create total variable
  start iterating upwards toward the input number exclude the number itself
  on each iteration if the number % curremt number equals 0
    add it to a running total

    return the total
*/
class PerfectNumber {
  static classify(num) {
    if (PerfectNumber.getAliquotNumber(num) > num) {
      return 'abundant';
    } else if (PerfectNumber.getAliquotNumber(num) === num) {
      return 'perfect';
    } else {
      return 'deficient';
    }
  }

  static getAliquotNumber(num) {
    if (num < 0) throw new Error();
    let total = 0;

    for (let count = 1; count < num; count += 1) {
      if (num % count === 0) {
        total += count;
      }
    }

    return total;
  }
}

module.exports = PerfectNumber;