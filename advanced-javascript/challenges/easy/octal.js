class Octal {
  constructor(num) {
    this.octalNum = Number(num) ? num : 0;
    
  }

  toDecimal() {
    let total = 0;
    let iteration = 0;

    for (let indx = this.octalNum.length - 1; indx >= 0; indx -= 1) {
      let currentDigit = Number(this.octalNum[indx]);

      if ([8, 9].includes(currentDigit)) return 0;
      
      let toAdd = (8 ** iteration) * currentDigit;
      
      total += toAdd;
      iteration += 1;
    }

    return total;
  }
}

module.exports = Octal;