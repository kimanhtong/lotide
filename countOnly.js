// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const obj = {};
  if (itemsToCount === null || itemsToCount === undefined || allItems === null || allItems === undefined){
    return obj;
  }
  for (let prop in itemsToCount) {
    if (itemsToCount[prop]) {
      let count = 0;
      for (let item of allItems) {
        if (item === prop) {
          count ++;
        }
      }
      if (count > 0) {
        obj[prop] = count;
      }
      else {
        obj[prop] = undefined;
      }
    }
    else {
      obj[prop] = undefined;
    }
  }
  return obj;
};

module.exports = countOnly;