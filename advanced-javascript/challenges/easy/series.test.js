let Series = require('./series.js');

describe("Series", () => {
  test("test simple slices of one", () => {
    let series = new Series('01234');
    expect(series.slices(1)).toEqual([[0], [1], [2], [3], [4]]);
  });

  test("test simple slices of one again", () => {
    let series = new Series('92834');
    expect(series.slices(1)).toEqual([[9], [2], [8], [3], [4]]);
  });

  test("test simple slices of two", () => {
    let series = new Series('01234');
    expect(series.slices(2)).toEqual([[0, 1], [1, 2], [2, 3], [3, 4]]);
  });

  test("test other slices of two", () => {
    let series = new Series('98273463');
    let expected = [[9, 8], [8, 2], [2, 7], [7, 3], [3, 4], [4, 6], [6, 3]];
    expect(series.slices(2)).toEqual(expected);
  });

  test("test simple slices of two again", () => {
    let series = new Series('37103');
    expect(series.slices(2)).toEqual([[3, 7], [7, 1], [1, 0], [0, 3]]);
  });

  test("test simple slices of three", () => {
    let series = new Series('01234');
    expect(series.slices(3)).toEqual([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
  });

  test("test simple slices of three again", () => {
    let series = new Series('31001');
    expect(series.slices(3)).toEqual([[3, 1, 0], [1, 0, 0], [0, 0, 1]]);
  });

  test("test other slices of three", () => {
    let series = new Series('982347');
    let expected = [[9, 8, 2], [8, 2, 3], [2, 3, 4], [3, 4, 7]];
    expect(series.slices(3)).toEqual(expected);
  });

  test("test simple slices of four", () => {
    let series = new Series('01234');
    expect(series.slices(4)).toEqual([[0, 1, 2, 3], [1, 2, 3, 4]]);
  });

  test("test simple slices of four again", () => {
    let series = new Series('91274');
    expect(series.slices(4)).toEqual([[9, 1, 2, 7], [1, 2, 7, 4]]);
  });

  test("test simple slices of five", () => {
    let series = new Series('01234');
    expect(series.slices(5)).toEqual([[0, 1, 2, 3, 4]]);
  });

  test("test simple slices of five again", () => {
    let series = new Series('81228');
    expect(series.slices(5)).toEqual([[8, 1, 2, 2, 8]]);
  });

  test("test simple slice that blows up", () => {
    let series = new Series('01234');
    expect(() => { series.slices(6) }).toThrow();
  });

  test("test more complicated slice that blows up", () => {
    let sliceString = '01032987583';
    let series = new Series(sliceString);
    expect(() => { series.slices(sliceString.length+1) }).toThrow();
  });
});