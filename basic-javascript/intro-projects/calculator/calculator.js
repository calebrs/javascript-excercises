// Ask the user for the first number
//Aske the user for the second number
// ask the user for an operation to perform
//perform the operation on the two numbers
// print the result to the terminal

const messagesJSON = require("./calculator_messages.json");

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) { //returns true if value is not a number. Also checks to see if the input is ''
  return number.trimStart === '' || Number.isNaN(Number(number));
}



let continueProgram = true;

prompt('Welcome to Calculator!');

while(continueProgram) {

  prompt("What's the first number?");
  let number1 = Number(readline.question());

  while (invalidNumber(number1)) {
    prompt(messagesJSON.message);
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = Number(readline.question());

  while (invalidNumber(number2)) {
    prompt(messagesJSON.message);
    number1 = readline.question();
  }

  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3)Multiply 4) Divide");
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt("Must choose 1, 2, 3, or 4");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }

  console.log(`The result is: ${output}`);
  
  prompt("Would you like to do another calculation? (y/n)");
  let choice = readline.question();
  if (choice[0].toLowerCase() === 'n')  break;
}

//console.log(`${number1} ${number2}`);