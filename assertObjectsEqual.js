const eqObjects = require ('./eqObjects');
const assertObjectsEqual = function (act, exp) {
  const inspect = require('util').inspect; // <= add this line
  let pass1 = `💚💚💚 Assertion Passed: ${inspect(act)} === ${inspect(exp)}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${inspect(act)} !== ${inspect(exp)}`;
  if (eqObjects(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
module.exports = assertObjectsEqual;
