const _ = require('../index.js');
const assert = require('chai').assert;

// Tests:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// _.assertEqual(_.eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// _.assertEqual(_.eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

describe("#eqObjectsTest", () => {
  it(`returns true when two same objects are passed in`, () => {
    assert.equal(_.eqObjects(ab, ab), true);
  });
  it(`returns true when two of the same objects, but one's keys and values are reversed`, () => {
    assert.equal(_.eqObjects(ab, ba), true);
  });
  it(`returns false when two objects containing different value types are passed in`, () => {
    assert.equal(_.eqObjects(cd, cd2), false);
  });
});



