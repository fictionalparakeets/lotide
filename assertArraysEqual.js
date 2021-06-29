// const _ = require('./index');
// console.log(_.eqArrays([1], [1]));

const assertArraysEqual = function(actual, expected) {
  if (eqArraysLocal(actual, expected)) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArraysLocal = function(arr1, arr2) {
  const lengthMatch = arr1.length === arr2.length;
  const stringHackMatch = JSON.stringify(arr1) === JSON.stringify(arr2);
  return (lengthMatch && stringHackMatch);
};

module.exports = assertArraysEqual;
