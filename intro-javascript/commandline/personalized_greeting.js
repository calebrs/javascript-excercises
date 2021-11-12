function getName(prompt){
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}


let firstName = getName("What's your first name?\n");
let lastName = getName("What's your last name?\n");
console.log(`Good Morning, ${firstName + " " + lastName}!`);