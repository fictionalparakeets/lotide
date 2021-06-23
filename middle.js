const eqArrays = function(arr1, arr2) {
  const lengthMatch = arr1.length === arr2.length;
  const stringHackMatch = JSON.stringify(arr1) === JSON.stringify(arr2);
  return (lengthMatch && stringHackMatch);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const oddOrEven = function(number) {
  return number % 2 === 0;
};

const middle = function(inputArray) {
  const arrayLength = inputArray.length;
  const halfArray = Math.floor(arrayLength / 2);
  if (arrayLength <= 2) {
    return [];
  }
  if (oddOrEven(arrayLength)) {
    return inputArray.slice(halfArray - 1, halfArray + 1);
  } else {
    return inputArray[halfArray];
  }
};

// Tests:
console.log(assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"])); // should return ["3", "4"]
console.log(assertArraysEqual(middle(["1", "2"]), [])); // should return [];
console.log(assertArraysEqual(middle(["1"]), [])); // should return [];
console.log(assertArraysEqual(middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11, 12]), [6, 7])); // should return [6, 7]
console.log(assertArraysEqual(middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11, 12]), [7, 8])); // should FAIL!
console.log(assertArraysEqual(middle(["1", "2", "3"]), "2")); // should return "2"
console.log(assertArraysEqual(middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11]), 6)); // should return 6
