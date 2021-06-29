const assert = require('chai').assert;
const _ = require('../index.js');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(_.head([5, 6, 7]), 5);
  });
  it("returns \"hello\" for [\"Hello\"]", () => {
    assert.strictEqual(_.head(["Hello"]), "Hello");
  });
  it("returns undefined if given an empty array", () => {
    assert.strictEqual(_.head([]), undefined);
  });
});
