// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (object1 === null || object1 === undefined || object2 === null || object2 === undefined) {
    return false;
  }
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) return false;
    let j = arr2.indexOf(arr1[i]);
    let var1 = object1[arr1[i]];
    let var2 = object2[arr2[j]];
    if (typeof(var1) !== typeof (var2)) return false;
    if (Array.isArray(var1) !== Array.isArray(var2)) return false;
    if (Array.isArray(var1) === Array.isArray(var2)) {
      if (typeof(var1) !== "object") {
        if (var1 !== var2) return false;
      } else {
        if (Array.isArray(var1)) {
          if (var1.length !== var2.length) return false;
          for (let k = 0; k < var1.length; k++) {
            if (var2.indexOf(var1[k]) < 0) return false;
          }
        } else {
          if (!eqObjects(var1, var2))return false;
        }
      }
    }
  }
  return true;
};
module.exports = eqObjects;
