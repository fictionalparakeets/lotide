const assertEqual = function(actual, expected) {
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
}

assertEqual([1, 2, 3], [1, 2, 3])
assertEqual([1, 2, 3], [3, 2, 1])
assertEqual(["1", "2", "3"], ["1", "2", "3"])
assertEqual(["1", "2", "3"], ["1", "2", 3])
