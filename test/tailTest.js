// const assertArraysEqual = require("../assertArraysEqual");
// const tail = require("../tail");

// // Tests:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

const assert = require('chai').assert;
// const tail = require('../tail');
const _ = require('../index.js');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
