"use strict";
/*
Problem:
input: month, year, weekday, schedule
output: the day month and year of the 'schedule', 'weekday', of the given month, in the given year


Examples: SEE TEST



Data Structures:
class: Meetup
  method constructor, take two arguments
  method day 
  method to String


  month, year, weekday name, schedule
  for first, second, third, fourth, fifth, and last days
    get all dates of the weekdays with the given name in the given month and year
    grab the date from the array

Algorithm:
  create static day of week array
  create static 'schedule' array

  declare new Mettup class
    declare new constructro Method that takes two arguments: month year in the form of numbers
    set this.month and this.year properties
  
  declare new day method that takes two arguments, day of week and schedule
    convert the inputs to lowercase
    get all weekdays save to a variable
    create switch statement:
      first: return first element in array
      second: ''
      third: ''
      fourth: ''
      fifth: ''
      last: get last element in array
      teenth: call get teenth method with array as argument

  getDaysInMonth:
    create a new date that starts on the first day of the given month and year
    create days array
    loop until the month changes
      on each iteration push the current day into the result array
      use the setdate method to change the date to the next day
    return the array with all the days

  geAllWeekdaysDay with two arguments, the weekday and the schedule
    create result array
    set the get days in month variable to the return of the method

    iterate through the days of the month array
      using get date, if the weekdays match push to result array
    return weekdays array

    getTenth:
      dclare teens array
      iterate through the input array
        on each, get the date
        if the date is in the teens array return that date

*/
class Meetup {
  static DAYS = ['sunday', 'monday', 'tuesday', 'wednesday',
                 'thursday', 'friday', 'saturday'];

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(weekday, schedule) {
    let day = weekday.toLowerCase();
    let timeOfMonth = schedule.toLowerCase();
    let weekdays = this._getAllMatchingDays(day);

    switch (timeOfMonth) {
      case 'first': return weekdays[0];
      case 'second': return weekdays[1];
      case 'third': return weekdays[2];
      case 'fourth': return weekdays[3];
      case 'fifth': return weekdays[4] || null;
      case 'last': return weekdays[weekdays.length - 1];
      case 'teenth': return this._getTeenth(weekdays) || null;
    }
  }

  _getAllMatchingDays(weekday) {
    let currentDay = new Date(this.year, this.month, 1);
    let weekdayNumber = Meetup.DAYS.indexOf(weekday);
    let allDays = [];

    while(currentDay.getMonth() === this.month) {
      if (currentDay.getDay() === weekdayNumber) {
        allDays.push(new Date(currentDay));
      }
      
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return allDays;
  }

  _getTeenth(days) {
    let TEENS = [13, 14, 15, 16, 17, 18, 19];
    return days.filter(day => TEENS.includes(day.getDate()))[0];
  }
}

module.exports = Meetup;