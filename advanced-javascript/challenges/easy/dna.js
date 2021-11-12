/*
Problem:
calculate hamming distance. The difference between two input DNA strands
inputs: two strings that represent DNA

Examples: SEE TEST CODE


Data Structures:
DNA class

constructor that takes one argument 

hammingDistance MEthod takes one string argument


Algorithm:
constructor:
  assign this.DNA to the input DNA strand

hammingDistance method:
  declare result variable
  define shorterDNA by sorting the two strands by length an taking the first one
  define loneDNA by taking the longer one
  begin iterating through the shorter DNA
    on each iteration compare the current char to the current char in the longer strand
    if the chars are different, add one to the result

  return the result


*/
class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(inStrand) {
    let result = 0;
    let strands = [inStrand, this.strand]
                  .sort((a, b) => a.length - b.length);
    let longerStrand = strands[1];
    let shorterStrand = strands[0];
    
    for (let indx = 0; indx < shorterStrand.length; indx += 1) {
      let currentChar = shorterStrand[indx];
      let compareChar = longerStrand[indx];
      if (currentChar !== compareChar) {
        result += 1;
      }
    }
    
    return result;
  }
}
// let test = new DNA('GGACTGA');
// console.log(test.hammingDistance('GGACTGA'));
module.exports = DNA;