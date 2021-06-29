const _ = require('../index.js');

// Tests:
const words = ["ground", "control", "to", "major", "tom"];

const results1 = _.map(words, word => word[0]);
const results2 = _.map(words, word => word.toUpperCase());
const results3 = _.map(words, word => word += 'X');

// Tests:
_.assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
_.assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
_.assertArraysEqual(results3, ["groundX", "controlX", "toX", "majorX", "tomX"]);
