const _= require ('./index');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed (Array): ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed (Array): ${act} !== ${exp}`;
  let result = _.eqArrays(act, exp);
  if (result) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

module.exports = assertArraysEqual;
