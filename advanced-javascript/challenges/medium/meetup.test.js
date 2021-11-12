"use strict";

let Meetup = require('./meetup.js');

function dateAsString(year, month, day) {
  let date = new Date(year, month - 1, day);
  return date.toString();
}

// Define a class Meetup with a constructor taking a month and a year
// and a method day(weekday, schedule).
// where weekday is one of: monday, tuesday, wednesday, etc.
// and schedule is: first, second, third, fourth, fifth, last, or teenth.

/* eslint-disable-next-line max-lines-per-function, max-statements */
describe("meetup()", () => {
  test("test first Monday of March 2013", () => {
    let meetup = new Meetup(2013, 3);
    let expected = dateAsString(2013, 3, 4);
    expect(meetup.day('Monday', 'first').toString()).toBe(expected);
  });

  test("test first Monday of april 2013", () => {
    let meetup = new Meetup(2013, 4);
    let expected = dateAsString(2013, 4, 1);
    expect(meetup.day('monday', 'FIRST').toString()).toBe(expected);
  });

  test("test first Tuesday of may 2013", () => {
    let meetup = new Meetup(2013, 5);
    let expected = dateAsString(2013, 5, 7);
    expect(meetup.day('Tuesday', 'first').toString()).toBe(expected);
  });

  test("test first Wednesday of june 2013", () => {
    let meetup = new Meetup(2013, 6);
    let expected = dateAsString(2013, 6, 5);
    expect(meetup.day('wednesday', 'first').toString()).toBe(expected);
  });

  test("test first Thursday of july 2013", () => {
    let meetup = new Meetup(2013, 7);
    let expected = dateAsString(2013, 7, 4);
    expect(meetup.day('Thursday', 'first').toString()).toBe(expected);
  });

  test("test first Friday of august 2013", () => {
    let meetup = new Meetup(2013, 8);
    let expected = dateAsString(2013, 8, 2);
    expect(meetup.day('Friday', 'first').toString()).toBe(expected);
  });

  test("test first Saturday of september 2013", () => {
    let meetup = new Meetup(2013, 9);
    let expected = dateAsString(2013, 9, 7);
    expect(meetup.day('Saturday', 'first').toString()).toBe(expected);
  });

  test("test first Sunday of october 2013", () => {
    let meetup = new Meetup(2013, 10);
    let expected = dateAsString(2013, 10, 6);
    expect(meetup.day('Sunday', 'first').toString()).toBe(expected);
  });

  test("test second Monday of november 2013", () => {
    let meetup = new Meetup(2013, 11);
    let expected = dateAsString(2013, 11, 11);
    expect(meetup.day('Monday', 'second').toString()).toBe(expected);
  });

  test("test second Tuesday of december 2013", () => {
    let meetup = new Meetup(2013, 12);
    let expected = dateAsString(2013, 12, 10);
    expect(meetup.day('Tuesday', 'second').toString()).toBe(expected);
  });

  test("test second Wednesday of january 2014", () => {
    let meetup = new Meetup(2014, 1);
    let expected = dateAsString(2014, 1, 8);
    expect(meetup.day('Wednesday', 'second').toString()).toBe(expected);
  });

  test("test second Thursday of february 2014", () => {
    let meetup = new Meetup(2014, 2);
    let expected = dateAsString(2014, 2, 13);
    expect(meetup.day('Thursday', 'second').toString()).toBe(expected);
  });

  test("test second Friday of march 2014", () => {
    let meetup = new Meetup(2014, 3);
    let expected = dateAsString(2014, 3, 14);
    expect(meetup.day('Friday', 'second').toString()).toBe(expected);
  });

  test("test second Saturday of april 2014", () => {
    let meetup = new Meetup(2014, 4);
    let expected = dateAsString(2014, 4, 12);
    expect(meetup.day('Saturday', 'second').toString()).toBe(expected);
  });

  test("test second Sunday of may 2014", () => {
    let meetup = new Meetup(2014, 5);
    let expected = dateAsString(2014, 5, 11);
    expect(meetup.day('Sunday', 'second').toString()).toBe(expected);
  });

  test("test third Monday of june 2014", () => {
    let meetup = new Meetup(2014, 6);
    let expected = dateAsString(2014, 6, 16);
    expect(meetup.day('Monday', 'third').toString()).toBe(expected);
  });

  test("test third Tuesday of july 2014", () => {
    let meetup = new Meetup(2014, 7);
    let expected = dateAsString(2014, 7, 15);
    expect(meetup.day('Tuesday', 'third').toString()).toBe(expected);
  });

  test("test third Wednesday of august 2014", () => {
    let meetup = new Meetup(2014, 8);
    let expected = dateAsString(2014, 8, 20);
    expect(meetup.day('Wednesday', 'third').toString()).toBe(expected);
  });

  test("test third Thursday of september 2014", () => {
    let meetup = new Meetup(2014, 9);
    let expected = dateAsString(2014, 9, 18);
    expect(meetup.day('Thursday', 'third').toString()).toBe(expected);
  });

  test("test third Friday of october 2014", () => {
    let meetup = new Meetup(2014, 10);
    let expected = dateAsString(2014, 10, 17);
    expect(meetup.day('Friday', 'third').toString()).toBe(expected);
  });

  test("test third Saturday of november 2014", () => {
    let meetup = new Meetup(2014, 11);
    let expected = dateAsString(2014, 11, 15);
    expect(meetup.day('Saturday', 'third').toString()).toBe(expected);
  });

  test("test third Sunday of december 2014", () => {
    let meetup = new Meetup(2014, 12);
    let expected = dateAsString(2014, 12, 21);
    expect(meetup.day('Sunday', 'third').toString()).toBe(expected);
  });

  test("test fourth Monday of january 2015", () => {
    let meetup = new Meetup(2015, 1);
    let expected = dateAsString(2015, 1, 26);
    expect(meetup.day('Monday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Tuesday of february 2015", () => {
    let meetup = new Meetup(2015, 2);
    let expected = dateAsString(2015, 2, 24);
    expect(meetup.day('Tuesday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Wednesday of march 2015", () => {
    let meetup = new Meetup(2015, 3);
    let expected = dateAsString(2015, 3, 25);
    expect(meetup.day('Wednesday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Thursday of april 2015", () => {
    let meetup = new Meetup(2015, 4);
    let expected = dateAsString(2015, 4, 23);
    expect(meetup.day('Thursday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Friday of may 2015", () => {
    let meetup = new Meetup(2015, 5);
    let expected = dateAsString(2015, 5, 22);
    expect(meetup.day('Friday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Saturday of june 2015", () => {
    let meetup = new Meetup(2015, 6);
    let expected = dateAsString(2015, 6, 27);
    expect(meetup.day('Saturday', 'fourth').toString()).toBe(expected);
  });

  test("test fourth Sunday of july 2015", () => {
    let meetup = new Meetup(2015, 7);
    let expected = dateAsString(2015, 7, 26);
    expect(meetup.day('Sunday', 'fourth').toString()).toBe(expected);
  });

  test("test fifth Monday of august 2015", () => {
    let meetup = new Meetup(2015, 8);
    let expected = dateAsString(2015, 8, 31);
    expect(meetup.day('Monday', 'fifth').toString()).toBe(expected);
  });

  test("test fifth Tuesday of september 2015", () => {
    let meetup = new Meetup(2015, 9);
    let expected = dateAsString(2015, 9, 29);
    expect(meetup.day('Tuesday', 'fifth').toString()).toBe(expected);
  });

  test("test fifth Wednesday of october 2015", () => {
    let meetup = new Meetup(2015, 10);
    expect(meetup.day('Wednesday', 'fifth')).toBeNull();
  });

  test("test fifth Thursday of november 2015", () => {
    let meetup = new Meetup(2015, 11);
    expect(meetup.day('Thursday', 'fifth')).toBeNull();
  });

  test("test fifth Friday of december 2015", () => {
    let meetup = new Meetup(2015, 12);
    expect(meetup.day('Friday', 'fifth')).toBeNull();
  });

  test("test fifth Saturday of january 2016", () => {
    let meetup = new Meetup(2016, 1);
    let expected = dateAsString(2016, 1, 30);
    expect(meetup.day('Saturday', 'fifth').toString()).toBe(expected);
  });

  test("test fifth Sunday of february 2016", () => {
    let meetup = new Meetup(2016, 2);
    expect(meetup.day('Sunday', 'fifth')).toBeNull();
  });

  test("test fifth Monday of february 2016", () => {
    let meetup = new Meetup(2016, 2);
    let expected = dateAsString(2016, 2, 29);
    expect(meetup.day('Monday', 'fifth').toString()).toBe(expected);
  });

  test("test last Monday of march 2016", () => {
    let meetup = new Meetup(2016, 3);
    let expected = dateAsString(2016, 3, 28);
    expect(meetup.day('Monday', 'last').toString()).toBe(expected);
  });

  test("test last Tuesday of april 2016", () => {
    let meetup = new Meetup(2016, 4);
    let expected = dateAsString(2016, 4, 26);
    expect(meetup.day('Tuesday', 'last').toString()).toBe(expected);
  });

  test("test last Wednesday of may 2016", () => {
    let meetup = new Meetup(2016, 5);
    let expected = dateAsString(2016, 5, 25);
    expect(meetup.day('Wednesday', 'last').toString()).toBe(expected);
  });

  test("test last Thursday of june 2016", () => {
    let meetup = new Meetup(2016, 6);
    let expected = dateAsString(2016, 6, 30);
    expect(meetup.day('Thursday', 'last').toString()).toBe(expected);
  });

  test("test last Friday of july 2016", () => {
    let meetup = new Meetup(2016, 7);
    let expected = dateAsString(2016, 7, 29);
    expect(meetup.day('Friday', 'last').toString()).toBe(expected);
  });

  test("test last Saturday of august 2016", () => {
    let meetup = new Meetup(2016, 8);
    let expected = dateAsString(2016, 8, 27);
    expect(meetup.day('Saturday', 'last').toString()).toBe(expected);
  });

  test("test last Sunday of september 2016", () => {
    let meetup = new Meetup(2016, 9);
    let expected = dateAsString(2016, 9, 25);
    expect(meetup.day('Sunday', 'last').toString()).toBe(expected);
  });

  test("test last Sunday of february 2015", () => {
    let meetup = new Meetup(2015, 2);
    let expected = dateAsString(2015, 2, 22);
    expect(meetup.day('Sunday', 'last').toString()).toBe(expected);
  });

  test("test teenth Monday of october 2016", () => {
    let meetup = new Meetup(2016, 10);
    let expected = dateAsString(2016, 10, 17);
    expect(meetup.day('Monday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Tuesday of november 2016", () => {
    let meetup = new Meetup(2016, 11);
    let expected = dateAsString(2016, 11, 15);
    expect(meetup.day('Tuesday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Wednesday of december 2016", () => {
    let meetup = new Meetup(2016, 12);
    let expected = dateAsString(2016, 12, 14);
    expect(meetup.day('Wednesday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Thursday of january 2017", () => {
    let meetup = new Meetup(2017, 1);
    let expected = dateAsString(2017, 1, 19);
    expect(meetup.day('Thursday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Friday of february 2017", () => {
    let meetup = new Meetup(2017, 2);
    let expected = dateAsString(2017, 2, 17);
    expect(meetup.day('Friday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Saturday of march 2017", () => {
    let meetup = new Meetup(2017, 3);
    let expected = dateAsString(2017, 3, 18);
    expect(meetup.day('Saturday', 'teenth').toString()).toBe(expected);
  });

  test("test teenth Sunday of april 2017", () => {
    let meetup = new Meetup(2017, 4);
    let expected = dateAsString(2017, 4, 16);
    expect(meetup.day('Sunday', 'teenth').toString()).toBe(expected);
  });
});