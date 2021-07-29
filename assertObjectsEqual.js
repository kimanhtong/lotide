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
const assertObjectsEqual = function (act, exp) {
  const inspect = require('util').inspect; // <= add this line
  let emojip = String.fromCodePoint(0x1F49A);//http://unicode.org/emoji/charts/full-emoji-list.html#1f600
  let emojif = String.fromCodePoint(0x1F975);
  let pass1 = `${emojip}${emojip}Assertion Passed: ${inspect(act)} === ${inspect(exp)}`;
  let fail1 = `${emojif}${emojif}${emojif}Assertion Failed: ${inspect(act)} !== ${inspect(exp)}`;
  if (eqObjects(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

// TEST THE SOLUTION
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

const ef = { e: { e1: 1, e2: 2 }, f: ["2", 3] };
const fe = { f: ["2", 3], e: { e1: 1, e2: 2 } };
assertObjectsEqual(ef, fe);
const ef2 = { f: ["2", 3], e: { e1: 1, e2: 2, e3: 3 } };
assertObjectsEqual(ef, ef2);

const gh = {};
const hg = {};
assertObjectsEqual(gh, hg);
