const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏆🏆🏆 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let countTally = {};
  for (let objectEntry in itemsToCount) {
    console.log("objectEntry: ", objectEntry);
    if (allItems.includes(objectEntry)) {
      countTally[objectEntry] = null;
      allItems.forEach(name => {
        if (name === objectEntry) {
        countTally[objectEntry] += 1
        }  
      });
    }
  }
  return countTally; 
}

const printObject = function(objectInput) {
  let message = '';
  for (let entry in objectInput) {
    let key = entry;
    let value = objectInput[entry].toString();
    message += `Key: ${key}, Value: ${value}\n`;
  }
  return message;
}


// Tests: 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(printObject(result1));

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
