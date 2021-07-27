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
const countLetters = function(str1) {
  let obj = {};
  if (str1.length > 0) {
    for (let i = 0; i < str1.length; i++) {
      if (Object.keys(obj).indexOf(str1[i]) === -1) {
        obj[str1[i]] = 1;
      } else {
        obj[str1[i]] ++;
      }
    }
  }
  console.log(obj);
  return obj;
};

// TEST THE FUNCTIONS
//assertEqual(countLetters("LIGHTHOUSElab"), {L:1, I: 1, G: 1, H: 2, T: 1, O: 1, U: 1, S: 1, E: 1, l: 1, a: 1, b: 1});
//assertEqual({L:1, I: 1, G: 1, H: 2, T: 1, O: 1, U: 1, S: 1, E: 1, l: 1, a: 1, b: 1}, {L:1, I: 1, G: 1, H: 2, T: 1, O: 1, U: 1, S: 1, E: 1, l: 1, a: 1, b: 1});
let result1 = countLetters("LIGHTHOUSElab");
assertEqual(result1["L"], 1);
assertEqual(result1["I"], 1);
assertEqual(result1["G"], 1);
assertEqual(result1["H"], 2);
assertEqual(result1["T"], 1);
assertEqual(result1["O"], 1);
assertEqual(result1["U"], 1);
assertEqual(result1["S"], 1);
assertEqual(result1["E"], 1);
assertEqual(result1["l"], 1);
assertEqual(result1["a"], 1);
assertEqual(result1["b"], 1);