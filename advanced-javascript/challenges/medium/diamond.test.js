const Diamond = require('./diamond.js');

describe("Diamond", () => {
  test("letter a", () => {
    let answer = Diamond.makeDiamond('A');
    expect(answer).toBe("A\n");
  });

  test("letter b", () => {
    let answer = Diamond.makeDiamond('B');
    expect(answer).toBe(" A \nB B\n A \n");
  });

  test("letter c", () => {
    let answer = Diamond.makeDiamond('C');
    let expected = "  A  \n" +
                   " B B \n" +
                   "C   C\n" +
                   " B B \n" +
                   "  A  \n";
    expect(answer).toBe(expected);
  });

  test("letter e", () => {
    let answer = Diamond.makeDiamond('E');
    let expected = "    A    \n" +
                   "   B B   \n" +
                   "  C   C  \n" +
                   " D     D \n" +
                   "E       E\n" +
                   " D     D \n" +
                   "  C   C  \n" +
                   "   B B   \n" +
                   "    A    \n";
    expect(answer).toBe(expected);
  });
});