/*
prob
in: string
out: same string but uppcase and lowercase characters are swapped

exampl


algorithm
split the string into char array
 iterate throigh the array
 check if it's upp case or lower case
 depening on what it is swap the case

join the array 
return the new string


*/
function swapCase(str) {
  return str.split('')
    .map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase())
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"