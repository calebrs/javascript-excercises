let Scrabble = require('./scrabble.js');

describe("Scrabble", () => {
  test("empty word scores zero", () => {
    expect(new Scrabble('').score()).toBe(0);
  });

  test("whitespace scores zero", () => {
    expect(new Scrabble(" \t\n").score()).toBe(0);
  });

  test("nil scores zero", () => {
    expect(new Scrabble(null).score()).toBe(0);
  });

  test("scores very short word", () => {
    expect(new Scrabble('a').score()).toBe(1);
  });

  test("scores other very short word", () => {
    expect(new Scrabble('f').score()).toBe(4);
  });

  test("simple word scores the number of letters", () => {
    expect(new Scrabble('street').score()).toBe(6);
  });

  test("complicated words score more", () => {
    expect(new Scrabble('quirky').score()).toBe(22);
  });

  test("scores are case-insensitive", () => {
    expect(new Scrabble('OXYPHENBUTAZONE').score()).toBe(41);
  });

  test("convenient scoring", () => {
    expect(Scrabble.score('alacrity')).toBe(13);
  });
});