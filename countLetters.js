const countLetters = function(inputString) {
  let letterObject = {};
  for (let letter of inputString) {
    if (letterObject[letter]) {
      letterObject[letter] += 1;
    } else {
      letterObject[letter] = 1;
    }
  }
  return letterObject;
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

module.exports = countLetters;
