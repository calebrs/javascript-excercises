const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const VALID_CHOICES_FIRST_LETTER = ['r', 'p', 's', 'l', 'S'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function getChoiceDisplay(playerChoice) {
  switch (playerChoice[0]) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 's': return 'scissors';
    case 'l': return 'lizard';
    case 'S': return 'Spock';
  }
}

function getWinner(choice, computerChoice) {

  let choiceFirstLetter = choice[0];

  if ((choiceFirstLetter === 'r' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choiceFirstLetter === 'p' && (computerChoice === 'rock' || computerChoice === 'Spock')) ||
      (choiceFirstLetter === 's' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choiceFirstLetter === 'l' && (computerChoice === 'Spock' || computerChoice === 'paper')) ||
      (choiceFirstLetter === 'S' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    return 1;
  } else if (choice === computerChoice) {
    return 0;
  } else {
    return 2;
  }
}

while (true) {

  let playerWins = 0;
  let computerWins = 0;

  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice) && !VALID_CHOICES_FIRST_LETTER.includes(choice)) {
      prompt('Not a valid choice');
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computersChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${getChoiceDisplay(choice)}, computer chose ${computersChoice}`);

    let whoWon = getWinner(choice, computersChoice);

    if (whoWon === 1) {
      prompt('You win!');
      playerWins += 1;
    } else if (whoWon === 2) {
      prompt('Computer wins!');
      computerWins += 1;
    } else {
      prompt("It's a tie!");
    }
    prompt(`You have ${playerWins} wins, and the computer has ${computerWins} wins.`);

    if (playerWins === 5) {
      prompt("You're the grand winner!");
      break;
    } else if (computerWins === 5) {
      prompt("The computer is the grand winner!");
      break;
    }
  }
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}