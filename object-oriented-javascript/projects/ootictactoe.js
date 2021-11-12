// TIC Tac Toe with classes
let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.firstPlayer = this.human;
  }

  play() {
    this.displayWelcomeMessage();
    
    while (true) {
      this.board.display();
      this.playOnce();
      
      if (this.human.score === 3 || this.computer.score === 3) break;
      this.board = new Board();
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
    }
    this.displayWinner();
    this.displayGoodbyeMessage();
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  playOnce() {
    let currentPlayer = this.firstPlayer;

    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      console.clear();
      this.board.display();
      currentPlayer = this.togglePlayer(currentPlayer);
    }
    console.clear();
    this.board.display();
    this.displayResults();
  }

  playerMoves(currentPlayer) {
    if (currentPlayer instanceof Human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  } 
  

  playAgain() {
    let choice;

    while (true) {
      choice = readline.question("Play again? (y/n): ").toLowerCase();
      if (choice === 'y' || choice === 'n') break;
      console.log('Invalid Input.');
    }
    return choice === 'y';
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayWinner() {
    if (this.human.score === 3) {
      console.log('Human won the match!');
    } else {
      console.log('Computer won the match!');
    }
  }
  
  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You won the round! Congratulations!');
      this.human.score += 1;
    } else if (this.isWinner(this.computer)) {
      console.log('I won the round! Take that, human!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie game. How boring.");
    }
    console.log(`Human: ${this.human.score} Computer: ${this.computer.score}`)
  }

  joinOr(arr) {
    if (arr.length > 1) {
      arr.splice(arr.length - 1, 0, 'or');
    }
    return arr.join(', ');
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a sqare (${this.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  defensiveComputerMove() {
    return this.findCriticalSquare(this.human);
  }

  offensiveComputerMove() {
    return this.findCriticalSquare(this.computer);
  }

  findCriticalSquare(player) {
    for (let indx = 0; indx < TTTGame.POSSIBLE_WINNING_ROWS.length; ++indx) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[indx];
      let key = this.winningSquare(row, player);
      if (key) return key;
    }

    return null;
  }

  winningSquare(row, player) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let indx = row.findIndex(key => this.board.isUnusedSquare(key));
      if (indx >= 0) return row[indx];
    }

    return null;
  }

  pickCenterSquare() {
    return this.board.isUnusedSquare("5") ? "5" : null;
  }

  computerMoves() {
    let choice = this.offensiveComputerMove();
    if (!choice) {
      choice = this.pickCenterSquare();
    }

    if (!choice) {
      choice = this.defensiveComputerMove();
    }
    if (!choice) {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();