// FUNCTION IMPLEMENTATION
const assertEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (act === exp) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

// TEST CODE

assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(7, "7");
assertEqual("Javascript", "Javascript");