// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let act = actual;
  let exp = expected;
  if (typeof actual === "string") {
    act = `"` + actual + `"`;
  }
  if (typeof expected === "string") {
    exp = `"` + expected + `"`;
  }
  let emojip = String.fromCodePoint(0x1F49A);
  let emojif = String.fromCodePoint(0x1F975);
  let pass1 = `${emojip}${emojip}Assertion Passed: ${act} === ${exp}`;
  let fail1 = `${emojif}${emojif}${emojif}Assertion Failed: ${act} !== ${exp}`;
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