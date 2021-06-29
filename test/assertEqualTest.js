const expect = require('chai').expect;
const _ = require('../index.js');

// Tests:
// assertEqual('Lighthouse Labs', 'Bootcamp'); // SHOULD FAIL
// assertEqual(2345, 23450); // SHOULD FAIL
// _.assertEqual(1, 1); // SHOULD PASS
// _.assertEqual('same string!', 'same string!'); // SHOULD PASS

describe("#assertEqual", () => {
  it("returns true for 1, 1 & 1, 1", () => {
    expect(_.assertEqual(1, 1)).to.equal(true);
  });
  it("returns false for 'same string!' compared to one without an exclamation mark", () => {
    expect(_.assertEqual('same string!', 'same string')).to.equal(false);
  });
  it("returns true for 'same string!' entered twice", () => {
    expect(_.assertEqual('same string!', 'same string!')).to.equal(true);
  });
});
