let readline = require("readline-sync");
let shuffle = require("shuffle-array");

function Card(suit, rank, value) {
  this.suit = suit;
  this.rank = rank;
  this.value = value;
}

Card.SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
Card.RANKS = ['Ace', '2', '3', '4', '5', '6', '7', '8',
  '9', '10', 'Jack', 'King', 'Queen'];
Card.VALUES = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function Deck() {
  this.cards = [];
  Card.SUITS.forEach(suit => {
    Card.RANKS.forEach((rank, indx) => {
      this.cards.push(new Card(suit, rank, Card.VALUES[indx]));
    });
  });

  shuffle(this.cards);
}

Deck.prototype.deal = function(player) {
  player.hand.push(this.cards.pop());
};

function Participant() {
  this.hand = [];
}

Participant.prototype.isBusted = function() {
  return this.score() > TwentyOneGame.TARGET_SCORE;
};

Participant.prototype.score = function() {
  let valuesArray = this.hand.map(card => card.value);
  let score = valuesArray.reduce((total, val) => total + val, 0);

  valuesArray.filter(val => val === 11).forEach(_ => {
    if (score > TwentyOneGame.TARGET_SCORE) score -= 10;
  });

  return score;
};

function Player() {
  Participant.call(this);
  this.money = 5;
}

Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

function Dealer() {
  Participant.call(this);
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

function TwentyOneGame() {
  this.deck = new Deck();
  this.player = new Player();
  this.dealer = new Dealer();
}

TwentyOneGame.TARGET_SCORE = 21;
TwentyOneGame.TWO_CARDS = 2;
TwentyOneGame.DEALER_STAYS_SCORE = 17;

TwentyOneGame.prototype.start = function() {
  while (true) {
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    if (this.playAgain()) {
      console.clear();
      this.resetGame();
    } else {
      break;
    }
  }

  this.displayGoodbyeMessage();
};

TwentyOneGame.prototype.resetGame = function() {
  this.deck = new Deck();
  this.player.hand = [];
  this.dealer.hand = [];
};

TwentyOneGame.prototype.dealCards = function() {
  for (let count = 1; count <= TwentyOneGame.TWO_CARDS; count += 1) {
    this.deck.deal(this.player);
    this.deck.deal(this.dealer);
  }
};

TwentyOneGame.prototype.showCards = function(isDealerTurn) {
  console.clear();
  if (this.isStartOfGame()) {
    this.displayWelcomeMessage();
  }
  this.showPlayerCards();
  this.showDealerCards(isDealerTurn);
};

TwentyOneGame.prototype.showPlayerCards = function() {
  let playerHand = this.player.hand.map(card => `${card.rank} of ${card.suit}`);
  console.log('Your hand: ' + this.joinAnd(playerHand));
  console.log(`Your Score: ${this.player.score()}`);
  if (this.player.isBusted()) {
    console.log('You busted!');
  }
};

TwentyOneGame.prototype.showDealerCards = function(isDealerTurn = false) {
  let dealerHand = this.dealer.hand.map((card, indx) => {
    if (indx === 0 && isDealerTurn === false) {
      return 'Unknown Card';
    } else {
      return `${card.rank} of ${card.suit}`;
    }
  });

  console.log("Dealer's hand: " + this.joinAnd(dealerHand));
};

TwentyOneGame.prototype.displayMoney = function() {
  console.log(`You have ${this.player.money} dollars.` );
};

TwentyOneGame.prototype.joinAnd = function(arr, div = ', ', stmnt = 'and') {
  switch (arr.length) {
    case 1:
      return arr;
    case 2:
      return `${arr[0]} ${stmnt} ${arr[1]}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(div)}${div}${stmnt} ${arr[arr.length - 1]}`;
  }
};

TwentyOneGame.prototype.playerTurn = function() {
  while (!this.player.isBusted()) {
    console.log('Hit or stay? (h/s): ');
    let answer = readline.question().toLowerCase();
    if (answer === 'h') {
      this.deck.deal(this.player);
      this.showCards();
    } else if (answer === 's') {
      break;
    } else {
      console.log('Invalid Input');
    }
  }
};

TwentyOneGame.prototype.dealerTurn = function() {
  if (!this.player.isBusted()) {
    while (true) {
      if (this.dealer.score() < TwentyOneGame.DEALER_STAYS_SCORE) {
        this.deck.deal(this.dealer);
        this.showCards(true);
      } else {
        this.showCards(true);
        break;
      }

      if (this.dealer.isBusted()) {
        console.log('Dealer busts!');
        break;
      }
    }
  } else {
    this.showCards(true);
  }
};

TwentyOneGame.prototype.displayWelcomeMessage = function() {
  console.log('Welcome to Twenty One!');
};

TwentyOneGame.prototype.displayGoodbyeMessage = function() {
  console.log('Thanks for playing Twenty One!');
};

TwentyOneGame.prototype.displayResult = function() {
  let playerScore = this.player.score();
  let dealerScore = this.dealer.score();
  console.log(`Your Score: ${playerScore}`);
  console.log(`Dealer Score: ${dealerScore}`);

  if (this.dealerWins()) {
    console.log('Dealer wins!');
    this.player.money -= 1;
  } else if (playerScore === dealerScore) {
    console.log(`It's a tie!`);
  } else {
    console.log('You win!');
    this.player.money += 1;
  }
};

TwentyOneGame.prototype.dealerWins = function() {
  return this.player.isBusted() ||
        (!this.dealer.isBusted() && this.dealer.score() > this.player.score());
};

TwentyOneGame.prototype.isRichOrPoor = function() {
  return this.player.money === 10 || this.player.money === 0;
};

TwentyOneGame.prototype.isStartOfGame = function() {
  return this.player.hand.length === TwentyOneGame.TWO_CARDS &&
         this.dealer.hand.length === TwentyOneGame.TWO_CARDS;
};

TwentyOneGame.prototype.playAgain = function() {
  let choice;
  this.displayMoney();

  while (true) {
    console.log("Pay 1 dollar to play again? (y/n): ");
    choice = readline.question().toLowerCase();
    if (choice === 'y' || choice === 'n') break;
    console.log('Invalid Input.');
  }

  return choice === 'y';
};

let game = new TwentyOneGame();
game.start();