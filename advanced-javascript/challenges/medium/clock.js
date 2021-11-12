/*
Problem:
create a clock that is independant of the date
be able to add minutes and subtract minutes form the time represented by a given clock object.
Do not use built-in date funcctionality

Examples: SEE TESTS


Data Structures:
Clock Class
  static 'at' method that returns a clock object
  toString method
  add method
  subtract method
  isEqual method that tests if two clocks have the same time


Algorithm:
create Clock class
  constructor: 
    sets hours and minutes variables
  at method:
    takes number input and optional minutes input
    calls the constructor returns the new object

  toString method:
    convert this.hours to a string
      if it's length is 1 add a 0 to the front of it
    convert this.minutes to s stirng
      ''
    return the two strings joined with a ':'

  add method


  subtract method





export clock class
*/
class Clock {
  static MINUTES_IN_DAY = 1440;

  constructor(hours, minutes) {
    this.minutes = (hours * 60) + minutes;
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    let startTime = this.minutes < 0 ? 1440 : 0;
    let time = this.minutes;

    while (this.outOfRange(time)) {
      if (time < 0) {
        time += Clock.MINUTES_IN_DAY;
      } else {
        time -= Clock.MINUTES_IN_DAY;
      }
    }

    time += startTime;
    return this.convertMinutesToTime(time);
  }

  convertMinutesToTime(time) {
    let minutes = time;
    let hour = Math.floor(minutes / 60);
    let minutesConverted = Math.round(((minutes / 60) - hour) * 60);
    if (minutes < 60) {
      hour = 0;
      minutesConverted = minutes;
    }
    return `${this.concatZero(hour)}:${this.concatZero(minutesConverted)}`;
  }
  
  add(add) {
    this.minutes += add;
    return this;
  }

  subtract(subtract) {
    this.minutes -= subtract;
    return this;
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }

  outOfRange(num) {
    return num > Clock.MINUTES_IN_DAY || num < -Clock.MINUTES_IN_DAY;
  }

  concatZero(num) {
    if (String(num).length === 1) {
      return '0' + String(num);
    }
    return String(num);
  }
}

module.exports = Clock;