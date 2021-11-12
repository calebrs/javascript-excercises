class Scrabble {
  constructor(word) {
    this.word = word || '';
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  static scoreChar(char) {
    switch (true) {
      case !!char.match(/[aeioulnrst]/):
        return 1;
      case !!char.match(/[dg]/):
        return 2;
      case !!char.match(/[bcmp]/):
        return 3;
      case !!char.match(/[fhvwy]/):
        return 4;
      case !!char.match(/[k]/):
        return 5;
      case !!char.match(/[jx]/):
        return 8;
      case !!char.match(/[qz]/):
        return 10;
      default:
        return 0;
    } 
  }

  score() {
    let total = 0;

    for (let indx = 0; indx < this.word.length; indx += 1) {
      let char = this.word[indx].toLowerCase();
      total += Scrabble.scoreChar(char);
    }

    return total;
  }
}

module.exports = Scrabble;