/*
Problem:
input: A String 
output: True or false if properly balanced
There is a pair for each ) and (

Examples: see code


Data Structures:
strings as input
iteration mechanism
conditional to checxk for parentheses
parantheses counter for left and right
if right side is ever greater than left then return false 

Algorithm:
declare left count
declare right count
start iterating through the string. On each iteration:
  if it's a ( add to counter
  if it's a ) add to counter
  if ) is ever greater than ( return false
  
  return ( === )



*/
function isBalanced(string) {
  let leftCount = 0;
  let rightCount = 0;

  for (let indx = 0; indx < string.length; indx += 1) {
    if (string[indx] === '('){
      leftCount += 1;
    } else if (string[indx] === ')') {
      rightCount += 1;
    } else if (rightCount > leftCount) {
      return false;
    }
  }

  return leftCount === rightCount;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);