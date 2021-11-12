/*
Problem:
input: two strings
output: concats the short string with the long string then the short string

Examples:
SEE CODE


Data Structures:
strings
concat mechanism
conditional operator

Algorithm:
if strin1 is longer than string 2 then 
  concat string2 + stirng1 + string 2
else
  do it the other way


*/
function shortLongShort(string1, string2) {
  return string1.length > string2.length ? string2.concat(string1, string2) : string1.concat(string2, string1);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"