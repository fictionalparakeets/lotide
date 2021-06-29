const countOnly = function(allItems, itemsToCount) {
  let countTally = {};
  for (let objectEntry in itemsToCount) {
    console.log("objectEntry: ", objectEntry);
    if (allItems.includes(objectEntry)) {
      countTally[objectEntry] = null;
      allItems.forEach(name => {
        if (name === objectEntry) {
          countTally[objectEntry] += 1;
        }
      });
    }
  }
  return countTally;
};

module.exports = countOnly;
