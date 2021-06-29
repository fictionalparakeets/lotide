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

module.exports = middle;
