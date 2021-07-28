const assertEqual = function(actual, expected) {
  let act = actual;
  let exp = expected;
  if (typeof actual === "string") {
    act = `"${actual}"`;
  }
  if (typeof expected === "string") {
    exp = `"${expected}"`;
  }
  let emojip = String.fromCodePoint(0x1F49A);//http://unicode.org/emoji/charts/full-emoji-list.html#1f600
  let emojif = String.fromCodePoint(0x1F975);
  let pass1 = `${emojip}${emojip}Assertion Passed: ${act} === ${exp}`;
  let fail1 = `${emojif}${emojif}${emojif}Assertion Failed: ${act} !== ${exp}`;
  if (act === exp) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

const findKeyByValue = function(obj, val) {
  for (let ob in obj) {
    if (obj[ob] === val) {
      return ob;
    }
  }
  return undefined;
};

//Test the solution
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);