const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject, inputValue) {
  let firstKey;
  for (let objectEntry in inputObject) {
    let show = inputObject[objectEntry];
    if (show === inputValue) {
      firstKey = objectEntry;
      break;
    }
  }
  return firstKey;
};

// Tests:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
