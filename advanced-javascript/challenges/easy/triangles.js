/*
Problem:
input: a triangle
output: the type of triangle it is (see rules)
rules:
equilateral: all sides are the same length
isosceles: two sides are the same length
scalene: all sides are different length
each side must me greater than 0
the length of the two shortest sides must be greater than or equal to the largest side


Examples: SEE triangle.test.js


Data Structures:
triangle class
  constructor catches invalid triangles by throwing an error
  kind methid determines what kind of triangle it is
    isEquilateral
    isIsosceles
    isScalene
    

Algorithm:
  constructor:
    takes three parameters, three sides
    assign parameters to variables

    check if input is a valid triangle
      if this is false: (if all three sides are greater than 0 (every method)  AND
      the two shortest sides are equal to or greater than the longest side)
        throw error

  kind:


  isEquilateral
    if all sides are equal, return true

  isIsosceles
    sort input array, if the first two are equal return true
    

  isScalene
    not needed - else this is true

*/
class Triangle {
  constructor(...sides) {
    this.sides = sides;

    if (this.isInvalid()) {
      throw new Error('Invalid Triangle');
    }
  }

  kind() {
    if (this._isEquilateral()) {
      return 'equilateral';
    } else if (this._isIsosceles()) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  _isEquilateral() {
    return this.sides.every(side => side === this.sides[0]);
  }

  _isIsosceles() {
    return this.sides[1] === this.sides[2];
  }

  isInvalid() {
    this.sides.sort((a, b) => a - b);
    let validCheck = this.sides[0] + this.sides[1];
    return validCheck <= this.sides[2] || this.sides.some(side => side === 0);
  }
}

module.exports = Triangle;