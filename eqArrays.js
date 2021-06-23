const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

// Tests:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
