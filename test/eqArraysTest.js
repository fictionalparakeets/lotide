const _ = require('../index.js');
const assert = require('chai').assert;

// Tests:
// _.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// _.assertEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// _.assertEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// _.assertEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS


describe("#eqArrays", () => {
  it(`returns true when given two identical arrays`, () => {
    assert.equal(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`returns true when given two identical arrays including strings`, () => {
    assert.equal(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it(`returns false when given two arrays of numbers, but some items are strings`, () => {
    assert.equal(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
