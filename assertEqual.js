const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tests:
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('same string!', 'same string!');
assertEqual(2345, 23450);
