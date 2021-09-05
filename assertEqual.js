// FUNCTION IMPLEMENTATION
const assertEqual = function (act, exp) {
  const pass1 = `💚💚💚 Assertion Passed (Primitive Data): ${act} === ${exp}`;
  const fail1 = `🥵🥵🥵 Assertion Failed (Primitive Data): ${act} !== ${exp}`;
  if (act === exp) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
// Export the function
module.exports = assertEqual;
