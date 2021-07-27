// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(arractual, arrexpected) {
  let act = [].concat(arractual);
  let exp = [].concat(arrexpected);
  let emojip = String.fromCodePoint(0x1F49A);//http://unicode.org/emoji/charts/full-emoji-list.html#1f600
  let emojif = String.fromCodePoint(0x1F975);
  let pass1 = `${emojip}${emojip}Assertion Passed: ${act} === ${exp}`;
  let fail1 = `${emojif}${emojif}${emojif}Assertion Failed: ${act} !== ${exp}`;
  if (eqArrays(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
const flatten = function(arr1) {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++){
    if (!Array.isArray(arr1[i])) {
      arr2.push(arr1[i]);
    } else {
      if (arr1[i].length > 0) {
        for (let j = 0; j < arr1[i].length; j++) {
          arr2.push(arr1[i][j]);
        }
      }
    }
  }
  console.log(arr2);
  return arr2;
};

// Test the solution
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], []]), [1, 2, 3, 4, 5, 6]);