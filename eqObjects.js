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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){ 
    if (arr2.indexOf(arr1[i]) < 0) {
      return false;
    }
    let j = arr2.indexOf(arr1[i]);
    let var1 = object1[arr1[i]];
    let var2 = object2[arr2[j]];
    if (typeof(var1) !== typeof (var2)) {
      return false;
    }
    if (Array.isArray(var1) !== Array.isArray(var2)) {
      return false;
    }
    if (Array.isArray(var1) === Array.isArray(var2)) {
      if (typeof(var1) !== "object") {
        if (var1 !== var2) {
          return false;
        }
      } else {
        if (Array.isArray(var1)) {
          if (var1.length !== var2.length) {
            return false;
          }
          for (let k = 0; k < var1.length; k++) {
            if (var2.indexOf(var1[k]) < 0) {
              return false;
            } 
          }
        } else {
            if (!eqObjects(var1, var2)){
              return false;
            };
          }
        }
      }
    }
  return true;
};

// Test the solution
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const ef = { e: { e1: 1, e2: 2 }, f: ["2", 3] };
const fe = { f: ["2", 3], e: { e1: 1, e2: 2 } };
assertEqual(eqObjects(ef, fe), true);
const ef2 = { f: ["2", 3], e: { e1: 1, e2: 2, e3: 3 } };
assertEqual(eqObjects(ef, ef2), false);

const gh = {};
const hg = {};
assertEqual(eqObjects(gh, hg), true);
