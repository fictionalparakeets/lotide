const _ = require('../index.js');
const expect = require('chai').expect;

// Tests:
// console.log(_.countLetters("Lighthouse Labs"));

describe("#countLetters", () => {
  it("should return an object", () => {
    expect(_.countLetters("Lighthouse Labs")).to.be.a('object');
  });
});



