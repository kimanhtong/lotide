const findKey = function (obj , callback) {
  for (let key in obj) {
    let subobj = obj[key];
    if (callback(subobj)) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
