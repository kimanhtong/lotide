// FUNCTION IMPLEMENTATION
const assertArraysEqual = require ('./assertArraysEqual');
const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !(Array.isArray(arr2))){
    return false;
  }
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
