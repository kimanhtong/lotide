const eqArrays = require (`./eqArrays`);
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (eqArrays(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

module.exports = assertArraysEqual;
