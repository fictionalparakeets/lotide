const takeUntil = function(array, callbackFunction) {
  for (const index in array) {
    if (callbackFunction(array[index])) {
      return array.slice(0, index);
    }
  }
};

module.exports = takeUntil;
