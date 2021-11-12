/*
Problem:
input: time in minutes. negative is before midnight, positive is after
output: the time in 00:00 format.
do not use the date class method

Examples:

data:
number in
string out
starting time = 0
minutes in hour = 60
minutes in day - 1440



positive numbers in the range 0 - 1440
  the hour equals num / 60 rounded down
  minute euqals hour - (num / 60) * 60

negative numbers in range -1440 - 0
  the hour equals num / 60 rounded up * -1
  minute euqals hour - (num / 60) * 60

Algorithm:
if input is negative starting time is 1440, if it's positive 0

if the input number is not within 0 - 1440
  add 1440 if negative
  subtract 1440 if positve

time of day in minutes = input + start point

convert to to string
  the hour equals num / 60 rounded to nearest int
  minute euqals hour - (num / 60) * 60 to nearest int

if the hour or minute is only one digit, concat a 0 onto the fron of it.


*/
function timeOfDay(minutes) {
  const MINUTES_IN_DAY = 1440;
  let startingMinute = minutes < 0 ? 1440 : 0;

  while (outOfRange(minutes)) {
    if (minutes < 0) {
      minutes += MINUTES_IN_DAY;
    } else {
      minutes -= MINUTES_IN_DAY;
    }
  }

  let timeOfDay = minutes + startingMinute;
  return convertMinutesToHours(timeOfDay);
}

function convertMinutesToHours(minutes) {
  let hour = Math.floor(minutes / 60);
  let minutesConverted = Math.round(((minutes / 60) - hour) * 60);
  if (minutes < 60) {
    hour = 0;
    minutesConverted = minutes;
  }
  return `${concatZero(hour)}:${concatZero(minutesConverted)}`;
}

function outOfRange(number) {
  return number > 1440 || number < -1440;
}

function concatZero(number) {
  if (String(number).length === 1) {
    return '0' + String(number);
  }
  return String(number);
}



console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
