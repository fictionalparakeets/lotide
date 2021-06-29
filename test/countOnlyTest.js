const _ = require('../index.js');
const expect = require('chai').expect;

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

const testObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

// const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// _.assertEqual(result1["Jason"], 1);
// _.assertEqual(result1["Karima"], undefined);
// _.assertEqual(result1["Fang"], 2);
// _.assertEqual(result1["Agouhanna"], undefined);

/*
const printObject = function(objectInput) {
  let message = '';
  for (let entry in objectInput) {
    let key = entry;
    let value = objectInput[entry].toString();
    message += `Key: ${key}, Value: ${value}\n`;
  }
  return message;
};

console.log(printObject(result1));
*/


describe("#countOnlyTest", () => {
  it(`returns an object when run on the premade object`, () => {
    expect(_.countOnly(firstNames, testObject)).to.be.a('object');
  });
});

