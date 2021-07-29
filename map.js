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
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const word1 = ["ground", "control", "to", "major", "tom"];
const result1 = map(word1, word => word[0]);
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);

const word2= ["2dfasf", "3dfdsf", "5dfsdf", "0dsfsdor", "9sdfsdf"];
const result2 = map(word2, word => word[0]);
assertArraysEqual(result2, ["2", "3", "5", "0", "9"]);

const word3= [" dfasf", ";dfdsf", ":dfsdf", "_dsfsdor", "^sdfsdf"];
const result3 = map(word3, word => word[0]);
assertArraysEqual(result3, [" ", ";", ":", "_", "^"]);