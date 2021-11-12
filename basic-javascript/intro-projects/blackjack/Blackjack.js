let readline = require("readline-sync");

const NUMBER_OF_CARDS_IN_A_SUIT = 13;
const FULL_DECK_SIZE = 52;
const NUMBER_OF_CARDS_FIRST_DEALT = 2;
const HIT_ONCE = 1;
const GAME_VALUE = 21;

function initializeDeck() {
  let deck = [];

  for (let index = 1; index <= NUMBER_OF_CARDS_IN_A_SUIT; index += 1) {

    let card = index;

    if (card === 1) {
      card = 'Ace';
    } else if (card === 11) {
      card = 'Jack';
    } else if (card === 12) {
      card = 'Queen';
    } else if (card === 13) {
      card = 'King';
    }

    deck.push([String(card), 'Hearts']);
    deck.push([String(card), 'Diamonds']);
    deck.push([String(card), 'Spades']);
    deck.push([String(card), 'Clubs']);
  }

  return deck;
}

function prompt(statement) {
  console.log(`=> ${statement}`);
}

function shuffleDeck(deck) {
  for (let index = FULL_DECK_SIZE - 1; index > 0; index -= 1) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
}

function hit(hand, deck, times) {

  let newCard = deck.pop();

  prompt('Hit!');

  for (let index = 0; index < times; index += 1) {
    hand.push(newCard);
  }
}

function displayHands(playerHand, dealerHand) {

  let displayDealerCards = dealerHand.map(elem => `${elem[0]} of ${elem[1]}`);
  displayDealerCards[0] = '???';
  prompt(`Dealer has: ${joinOr(displayDealerCards)}`);

  let displayPlayerCards = playerHand.map(elem => `${elem[0]} of ${elem[1]}`);
  prompt(`You have: ${joinOr(displayPlayerCards)}`);
  prompt(`Your hand total is: ${scoreHand(playerHand)}`);
}

function joinOr(array, divider = ', ', statement = 'and') {
  switch (array.length) {
    case 1:
      return array;
    case 2:
      return `${array[0]} ${statement} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(divider)}${divider}${statement} ${array[array.length - 1]}`;
  }
}

function scoreHand(hand) {
  let handAsArray = hand.map(elem => elem[0]);

  let cardsArrayValues = handAsArray.map(card => {
    if (card === 'Queen' || card === 'King' || card === 'Jack') {
      return 10;
    } else if (card === 'Ace') {
      return 11;
    } else {
      return Number(card);
    }
  });

  let total = cardsArrayValues.reduce((accum, val) => accum + val);

  cardsArrayValues.filter(val => val === 11).forEach(_ => {
    if (total > 21) total -= 10;
  });

  return total;
}

function compareAndGetWinner(playerScore, dealerScore) {
  console.log(`Player has ${playerScore} and the dealer has ${dealerScore}`);
  if (playerScore > dealerScore) {
    console.log('You Win!');
  } else if (playerScore < dealerScore) {
    console.log('Dealer Wins!');
  } else {
    console.log("It's a tie!");
  }
}

function playerTurn(playerHand, deck, dealerHand) {
  while (true) {

    if (scoreHand(playerHand) > GAME_VALUE) {
      prompt('You bust!');
      return null;
    }

    prompt('hit or stay? (h/s)');
    let answer = readline.question().toLowerCase();
    while (answer !== 'h' && answer !== 's') {
      prompt('please enter "h" or "s".');
      answer = readline.question();
    }

    if (answer === 's') {
      return scoreHand(playerHand);
    } else if (answer === 'h') {
      hit(playerHand, deck, HIT_ONCE);
    }

    displayHands(playerHand, dealerHand);
  }
}

function dealerTurn(dealerHand, deck) {
  prompt('Dealer\'s turn:');

  while (true) {
    let currentDealerScore = scoreHand(dealerHand);

    if (currentDealerScore > GAME_VALUE) {
      prompt('Dealer busts!');
      return null;
    } else if (currentDealerScore >= 17) {
      return currentDealerScore;
    } else {
      hit(dealerHand, deck, HIT_ONCE);
    }
  }
}

function playAgain() {
  prompt('Play again (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer === 'y';
}

while (true) {
  console.clear();

  prompt('Welcome to Blackjack!');

  let deck = initializeDeck();
  shuffleDeck(deck);

  let playerHand = [];
  let dealerHand = [];

  hit(playerHand, deck, NUMBER_OF_CARDS_FIRST_DEALT);
  hit(dealerHand, deck, NUMBER_OF_CARDS_FIRST_DEALT);
  displayHands(playerHand, dealerHand);

  let playerScore = playerTurn(playerHand, deck, dealerHand); //player goes

  if (playerScore === null) { //check to see if player busted
    console.log('Dealer wins!');
  } else {
    let dealerScore = dealerTurn(dealerHand, deck, playerHand); //dealer goes
    if (dealerScore === null) { //check if dealer busted
      console.log('Player Wins!');
    } else {
      compareAndGetWinner(playerScore, dealerScore); //declare winner
    }
  }

  if (!playAgain()) break;

}