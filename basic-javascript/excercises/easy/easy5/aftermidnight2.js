/*
Problem:
input: a string formatted like: hour:minute
output: the minutes before midnight, the minutes after midnight

Example


Algorithm:
get the minutes by slicing the last two digits off of the string convert to number times by 60
get the hour by slicing the first two digits convert to number

add the two together
return the answer

subtract the above functions return value from 1440 for the second funtion
*/
function afterMidnight(time) {
  let hoursToMinutes = Number(time.slice(0, 2)) * 60;
  let minutes = Number(time.slice(3));

  return hoursToMinutes + minutes === 1440 ? 0 : hoursToMinutes + minutes;
}

function beforeMidnight(time) {
   return 1440 - afterMidnight(time) === 1440 ? 0 : 1440 - afterMidnight(time);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);