const eqArrays = function (arr1, arr2) {
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
const assertArraysEqual = function (arractual, arrexpected) {
  const act = [].concat(arractual);
  const exp = [].concat(arrexpected);
  const emojip = String.fromCodePoint(0x1F49A);// http://unicode.org/emoji/charts/full-emoji-list.html#1f600
  const emojif = String.fromCodePoint(0x1F975);
  const pass1 = `${emojip}${emojip}Assertion Passed: ${act} === ${exp}`;
  const fail1 = `${emojif}${emojif}${emojif}Assertion Failed: ${act} !== ${exp}`;
  if (eqArrays(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
const middle = function (arr) {
  const arr1 = [];
  const l = arr.length;
  if (l > 2) {
    if (l % 2 === 0) {
      arr1.push(arr[l / 2 - 1]);
      arr1.push(arr[l / 2]);
    } else {
      arr1.push(arr[(l - 1) / 2]);
    }
  };
  return arr1;
};

// Test the function middle.js
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
