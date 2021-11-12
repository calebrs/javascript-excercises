/*
Problem:
input: floating point number: an angle
output: returns a string representing the angle in DMS

Examples: SEE CODE


Data Structures:
Degrees = the input number rounded down
minutes = the input number minus the degrees times by sixty rounded down
seconds = (the input number minus the degrees times by sixty) minus the minutes times by 60



Algorithm:
get the degrees minutes and seconds

if minutes or seconds has alength of one, concat a 0 to the fronto of that string

return the strin of DMS

*/
function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * 60);
  let seconds = Math.floor((((angle - degrees) * 60) - minutes) * 60);

  return `${degrees}˚${concatZero(minutes)}'${concatZero(seconds)}"`;
}

function concatZero(number) {
  if (String(number).length === 1) {
    return '0' + String(number);
  }
  return String(number);
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"