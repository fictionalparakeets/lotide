const letterPositions = function(inputString) {
  let letterObject = {};
  let indexCount = 0;
  for (let letter of inputString) {
    if (letterObject[letter]) {
      letterObject[letter].push(inputString.indexOf(letter, indexCount));
    } else {
      letterObject[letter] = [inputString.indexOf(letter)];
    }
    indexCount += 1;
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

module.exports = letterPositions;
