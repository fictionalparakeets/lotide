const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  const lengthMatch = arr1.length === arr2.length;
  const stringHackMatch = JSON.stringify(arr1) === JSON.stringify(arr2);
  return (lengthMatch && stringHackMatch);
};

const without = function(actual, expected) {
  let arrayWithout = [];
  for (let item of actual) {
    if (!expected.includes(item)) {
      arrayWithout.push(item);
    }
  }
  return arrayWithout;
}

// Tests:
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
