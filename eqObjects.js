// const _ = require('./index');
// console.log(_.eqArrays);

const eqObjects = function(obj1, obj2) {
  let lengthTest = Object.keys(obj1).length === Object.keys(obj2).length;
  let keyValueTestArray = [];
  for (let obj1Key in obj1) {
    let value = obj1[obj1Key];
    if (Array.isArray(value)) {
      keyValueTestArray.push(eqArraysLocal(value, obj2[obj1Key]));
    } else {
      obj2[obj1Key] === value ? keyValueTestArray.push(true) : keyValueTestArray.push(false);
    }
  }
  let keyValueTest = !keyValueTestArray.includes(false);
  return lengthTest && keyValueTest;
};

const eqArraysLocal = function(arr1, arr2) {
  const lengthMatch = arr1.length === arr2.length;
  const stringHackMatch = JSON.stringify(arr1) === JSON.stringify(arr2);
  return (lengthMatch && stringHackMatch);
};

module.exports = eqObjects;
