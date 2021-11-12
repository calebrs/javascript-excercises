let rlSync = require("readline-sync");




let userAge = Number(rlSync.question("What is your age?\n"));
console.log(`You are ${userAge}.`);

for (let index = 10; index <= 40; index += 10) {
  console.log(`In ${index} years, you will be ${userAge + index}.`)
}


//console.log(`In ten years, you will be ${userAge + 10}.`);
//console.log(`In twenty years, you will be ${userAge + 20}.`);
//console.log(`In thirty years, you will be ${userAge + 30}.`);
//console.log(`In fourty years, you will be ${userAge + 40}.`);