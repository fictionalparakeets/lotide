const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  let letterObject = {};
  for (let letter of inputString) {
    if (letterObject[letter]) {
      letterObject[letter] += 1;
    } else {
      letterObject[letter] = 1;
    }
  }
  return printObject(letterObject);
};

const printObject = function(objectInput) {
  let message = '';
  for (let entry in objectInput) {
    let key = entry;
    let value = objectInput[entry].toString();
    message += `Key: ${key}, Value: ${value}\n`;
  }
  return message;
};

// Tests:
console.log(countLetters("Lighthouse Labs"));
