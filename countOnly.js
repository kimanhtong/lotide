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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const obj = {};
  for (let prop in itemsToCount) {
    if (itemsToCount[prop]) {
      let count = 0;
      for (let item of allItems) {
        if (item === prop) {
          count ++;
        }
      }
      if (count > 0) {
        obj[prop] = count;
      }
    }
  }
  return obj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);