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

// ---------------------------------------------------------------------

const takeUntil = function(array, callbackFunction) {
  let newArray = [];
  for (let item of array) {
    if (callbackFunction(item)) {
      break;
    }
    newArray.push(item);
  }
  return newArray;
}

// Input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* Expected Output:
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

// Tests:
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
