const assertEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (act === exp) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

const findKey = function (obj , callback) {
  for (let key in obj) {
    let subobj = obj[key];
    if (callback(subobj)) {
      return key;
    }
  }
  return undefined;
};


// TEST THE SOLUTION 
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars >= 2 && x.stars <= 4), "Akaleri");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars >= 5), undefined);
