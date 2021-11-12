let DNA = require('./dna.js');

describe("DNA", () => {
  test("no difference between empty strands", () => {
    let dna = new DNA('');
    expect(dna.hammingDistance('')).toBe(0);
  });

  test("no difference between identical strands", () => {
    let dna = new DNA('GGACTGA');
    expect(dna.hammingDistance('GGACTGA')).toBe(0);
  });

  test("complete hamming distance in small strand", () => {
    let dna = new DNA('ACT');
    expect(dna.hammingDistance('GGA')).toBe(3);
  });

  test("hamming distance in off by one strand", () => {
    let strand = 'GGACGGATTCTGACCTGGACTAATTTTGGGG'
    let distance = 'AGGACGGATTCTGACCTGGACTAATTTTGGGG'
    let dna = new DNA(strand);
    expect(dna.hammingDistance(distance)).toBe(19);
  });

  test("small hamming distance in middle somewhere", () => {
    let dna = new DNA('GGACG');
    expect(dna.hammingDistance('GGTCG')).toBe(1);
  });

  test("larger distance", () => {
    let dna = new DNA('ACCAGGG');
    expect(dna.hammingDistance('ACTATGG')).toBe(2);
  });

  test("ignores extra length on other strand when longer", () => {
    let dna = new DNA('AAACTAGGGG');
    expect(dna.hammingDistance('AGGCTAGCGGTAGGAC')).toBe(3);
  });

  test("ignores extra length on original strand when longer", () => {
    let dna = new DNA('GACTACGGACAGGGTAGGGAAT');
    let distance = 'GACATCGCACACC';
    expect(dna.hammingDistance(distance)).toBe(5);
  });

  test("does not actually shorten original strand", () => {
    let dna = new DNA('AGACAACAGCCAGCCGCCGGATT');
    expect(dna.hammingDistance('AGGCAA')).toBe(1);
    expect(dna.hammingDistance('AGACATCTTTCAGCCGCCGGATTAGGCAA')).toBe(4);
    expect(dna.hammingDistance('AGG')).toBe(1);
  });
});