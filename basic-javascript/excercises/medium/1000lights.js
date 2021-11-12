/*
Problem:
input: count/numbers of switches - number
output: an array of lights that are on after count passes
Rules: 
three kinds of passes
1. on the first pass, all lights are turned on
2. all of the even switches are toggled
3. all of the swithes that are multiples of 3 are toggled
steps 2 and three are repeated until the count is met

Examples:
SEE CODE

Data Structures:
input: number
output: array
pushing mechanism
iteartion mechanism to iterate count number of times
conditionals for which pass it is, for which switch it is.
even switches equal the odd indexes 
multple of 3 swithces = index % 3 === 0

Algorithm:
start main iteration that will loop input number of times and increment by 1 each time
create empty switches array

if the iteration is equal to 1. then create an array with a length of the input number (include 0)
   start a loop that starts at 1 and ends at count
   on each iteration push 'true' to the swithes array

if the iteration is an even number toggle all of the switches with an odd index
    loop through the switches array for as long as its length.
    if the index is odd toggle the switch
      Toggle the switch:
        input: switches array, and index as number
        output: mutated switches array. The boolean at index is reversed to it's opposite
        if array[index] is true
          change array[index] to false
        else if array[index] is false 
          change array[index to true]
    if it's not odd do nothing
  
if the iteration is odd toggle all the switches whose index is a multilpe of three
  loop through the swithes array as long as its length
  if the index is a multiple of three toggle
  if it's not do nothing
  


*/


function lightsOn(switches) {
  let switchesArray = [];
  
  function toggle(index) {
    if (switchesArray[index] === true) {
      switchesArray[index] = false;
    } else if (switchesArray[index] === false) {
      switchesArray[index] = true;
    }
  }
  
  for (let pass = 1; pass <= switches; pass += 1) {
    if (pass === 1) {
      for (let indx = 0; indx < switches; indx += 1) {
        switchesArray.push(true);
      }
      continue;
    }
    for (let indx = 0; indx < switchesArray.length; indx += 1) {
      if ((indx + 1) % pass === 0) {
        toggle(indx);
      }
    }
  }
  
  let onLights = [];
  switchesArray.forEach((light, indx) => {
    if (light) {
      onLights.push(indx + 1);
    }
  })
  
  return onLights;
}

//console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]