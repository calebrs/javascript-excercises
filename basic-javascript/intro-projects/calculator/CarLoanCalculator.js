const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

function isInvalidNumber(value) {
  return value === '' ||
         Number.isNaN(Number(value)) ||
         value < 0;
}

function printErrorMessage() {
  console.log("ERROR: Input invalid");
}

let keepRunning = true;
let loanAmount;
let downPayment;
let annualPercentageRate;
let loanDuration;

prompt("Welcome to Car Loan / Mortgage Calculator!");

while (keepRunning) {

  do {
    prompt('Enter the downpayment amount: ');
    downPayment = readline.question();
    if (isInvalidNumber(downPayment)) printErrorMessage();
  } while (isInvalidNumber(downPayment));

  do {
    prompt('Enter the dollar amount of the loan: ');
    loanAmount = readline.question();
    if (isInvalidNumber(loanAmount)) printErrorMessage();
  } while (isInvalidNumber(loanAmount));

  do {
    prompt('Enter the annual percentage rate (APR) of the loan: ');
    annualPercentageRate = readline.question();
    if (isInvalidNumber(annualPercentageRate)) printErrorMessage();
  } while (isInvalidNumber(annualPercentageRate));
  let monthlyInterestRate = (annualPercentageRate / 12) / 100;

  do {
    prompt('Enter the duration of the the loan (in years): ');
    loanDuration = readline.question();
    if (isInvalidNumber(annualPercentageRate)) printErrorMessage();
  } while (isInvalidNumber(loanDuration));
  let loanDurationMonths = loanDuration * 12;

  let monthlyPayment = (loanAmount - downPayment) *
                       (monthlyInterestRate /
                       (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  prompt(`You'll have a monthly payment of $${monthlyPayment.toFixed(2)} over ${loanDuration} years.`);

  prompt("Do you want to run another calculation? (y/n)");
  let keepGoing = readline.question();
  if (keepGoing.toLowerCase() === 'n') keepRunning = false;

}