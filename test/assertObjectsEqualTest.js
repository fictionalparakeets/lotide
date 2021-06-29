const expect = require('chai').expect;
const _ = require('../index.js');

// Tests:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// _.assertObjectsEqual(ab, ba); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// _.assertObjectsEqual(cd, dc); // => true


describe("#assertObjectsEqual", () => {
  it('returns true for two identical objects entered', () => {
    expect(_.assertObjectsEqual(ab, ba)).to.equal(true);
  });
  it('should be a boolean', () => {
    expect(_.assertObjectsEqual(ab, ba)).to.be.a('boolean');
  });
  it('should return true for two non identical but same objects', () => {
    expect(_.assertObjectsEqual(cd, dc)).to.equal(true);
  })



});


