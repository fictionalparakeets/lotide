const assert = require('chai').assert;
const _ = require('../index.js');

// Tests:
_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // SHOULD PASS
_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // SHOULD PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // SHOULD FAIL
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // SHOULD FAIL

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(_.assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it(`returns true for ["1", "2", "3"], ["1", "2", "3"]`, () => {
    assert.deepEqual(_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });
});
