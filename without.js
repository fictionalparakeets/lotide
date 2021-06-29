const without = function(actual, expected) {
  let arrayWithout = [];
  for (let item of actual) {
    if (!expected.includes(item)) {
      arrayWithout.push(item);
    }
  }
  return arrayWithout;
}

module.exports = without;
