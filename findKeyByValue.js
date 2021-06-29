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

module.exports = findKeyByValue;
