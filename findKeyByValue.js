const findKeyByValue = function(obj, val) {
  for (let ob in obj) {
    if (obj[ob] === val) {
      return ob;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
