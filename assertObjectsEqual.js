const _ = require (`./index`);

const assertObjectsEqual = function (act, exp) {
  const inspect = require('util').inspect;
  let pass1 = `💚💚💚 Assertion Passed: ${inspect(act)} === ${inspect(exp)}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${inspect(act)} !== ${inspect(exp)}`;
  if (_.eqObjects(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
module.exports = assertObjectsEqual;
