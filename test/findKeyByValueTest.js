const _ = require('../index.js');
const expect = require('chai').expect;
const assert = require('chai').assert;

// Tests:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// _.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// _.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe("#findKeyByValue", () => {
  it(`returns 'drama' when given (bestTVShowsByGenre, "The Wire")`, () => {
    assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
