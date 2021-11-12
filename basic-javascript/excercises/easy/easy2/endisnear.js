/*
Problem:
input: string of words
output: the last word in the string
rules
wrods are sequence of non blank charactrers
always will have at elast one word

Examples: SEE CODE


Data Structures: strings, array to grab last word


Algorithm:
split the string into an array save to variable
return the second to last element in the array


*/
function penultimate(string) {
  return string.split(' ').slice(-2)[0];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true