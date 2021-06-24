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

const eqObjects = function(obj1, obj2) {
  let lengthTest = Object.keys(obj1).length === Object.keys(obj2).length;
  let keyValueTestArray = [];
  for (let obj1Key in obj1) {
    let value = obj1[obj1Key];
    if (Array.isArray(value)) {
      keyValueTestArray.push(eqArrays(value, obj2[obj1Key]));
    } else {
      obj2[obj1Key] === value ? keyValueTestArray.push(true) : keyValueTestArray.push(false);
    }
  }
  let keyValueTest = !keyValueTestArray.includes(false);
  return lengthTest && keyValueTest;
};

// Tests:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
