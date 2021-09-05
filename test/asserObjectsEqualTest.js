const assertObjectsEqual = require ('../assertObjectsEqual');
// TEST THE SOLUTION
console.log("\n #assertObjectsEqual");
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
