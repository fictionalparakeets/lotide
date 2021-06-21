const assertEqual = function(actual, expected) {
  if (actual.length === expected.length && stringify(actual) === stringify(expected)) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const stringify = function(inputArray) {
  return JSON.stringify(inputArray);
};

const tail = function(array) {
  return array.slice(1);
};

// Tests:
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]);
