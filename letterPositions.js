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
const assertArraysEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (eqArrays(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i =0 ; i < sentence.length; i++) {
    if (Object.keys(results).indexOf(sentence[i]) === -1) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// TEST THE SOLUTION
const obj1 = letterPositions("hello")
assertArraysEqual(obj1["h"], [0]);
assertArraysEqual(obj1["e"], [1]);
assertArraysEqual(obj1["l"], [2, 3]);
assertArraysEqual(obj1["o"], [4]);