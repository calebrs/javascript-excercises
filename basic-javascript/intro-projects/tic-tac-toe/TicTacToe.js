let readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7]             // diagnals
];
const CENTER_SQUARE = 5;

function prompt(string) {
  console.log(`=> ${string}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');

}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a sqaure (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry. that's not a valid choice.");

  }

  board[square] = HUMAN_MARKER;
}

function computerSquareSelect(board, marker) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = defensiveMove(line, board, marker);
    if (square) break;
  }

  return square;
}

function computerChoosesSquare(board) {
  let square;

  square = computerSquareSelect(board, COMPUTER_MARKER);

  if (!square) {
    square = computerSquareSelect(board, HUMAN_MARKER);
  }

  if (!square) {
    if (board[CENTER_SQUARE] === INITIAL_MARKER) {
      square = CENTER_SQUARE;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function defensiveMove(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === ' ');
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if
    (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(array, divider = ', ', statement = 'or') {
  switch (array.length) {
    case 1:
      return array;
    case 2:
      return `${array[0]} ${statement} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(divider)}${divider}${statement} ${array[array.length - 1]}`;
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'human') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'computer') {
    currentPlayer = 'human';
  } else {
    currentPlayer = 'computer';
  }
  return currentPlayer;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let currentPlayer = 'human';

  prompt('Welcome to Tic-Tac-Toe!');

  while (true) {

    prompt('Who goes first the computer or human? (c/h)');
    let firstPlay = readline.question();
    if (firstPlay === 'c') {
      currentPlayer = 'computer';
    } else {
      currentPlayer = 'human';
    }

    let board = initializeBoard();
    displayBoard(board);

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      if (detectWinner(board) === 'Player') playerScore += 1;
      if (detectWinner(board) === 'Computer') computerScore += 1;
    } else {
      prompt("It's a tie!");
    }

    prompt(`Player Score: ${playerScore}`);
    prompt(`Computer Score: ${computerScore}`);

    if (playerScore === GAMES_TO_WIN || computerScore === GAMES_TO_WIN) {
      prompt(`${detectWinner(board)} won the overall match!`);
      break;
    }

    prompt(`Continue Match? (y/n)`);
    let continueMatch = readline.question();
    while (continueMatch !== 'n' && continueMatch !== 'y') {
      prompt('please enter "y" or "n".');
      continueMatch = readline.question().toLowerCase();
    }
    if (continueMatch !== 'y') break;
  }

  prompt('Play again (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;

}

console.log('Thanks for playing tic-tac-toe!');