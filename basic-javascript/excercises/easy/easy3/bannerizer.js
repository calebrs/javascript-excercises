/*
Problem:
input: short line of text
output: the text within a text box

Examples:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Data Structures:
strings
loops

Algorithm:
get the box length by the string length + 2
  log to the console five times
  1. + '-' length times +
  2. | space length times |
  3. | space string space |
  4, same as 3. 
  5. same as 1

*/
function logInBox(string) {
  let boxLength = string.length + 2;
  
  console.log('+' + '-'.repeat(boxLength) + '+');
  console.log('|' + ' '.repeat(boxLength) + '|');
  console.log('|' + ' ' + string + ' ' + '|');
  console.log('|' + ' '.repeat(boxLength) + '|');
  console.log('+' + '-'.repeat(boxLength) + '+');
}

logInBox('');