const assert = require('chai').assert;
const _ = require ('../index');

describe ("#eqObjects", () => {
  it ("return true for 2 objects with different orders of same items", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(_.eqObjects(ab, ba),true);
  })

  it ("return false for 2 objects with different length", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(_.eqObjects(ab, abc),false);
  })

  it ("return true for 2 same objects having array inside", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(_.eqObjects(cd, dc), true);
  })

  it ("return false for 2 different objects having array inside", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(_.eqObjects(cd, cd2), false);
  })

  it ("return true for 2 same objects with mixed data", () => {
    const ef = { e: { e1: 1, e2: 2 }, f: ["2", 3], 343: 343 };
    const fe = { f: ["2", 3], e: { e1: 1, e2: 2 }, '343': 343 };
    assert.deepEqual(_.eqObjects(ef, fe), true);
  })

  it ("return false for 2 different objects with mixed data", () => {
    const ef = { e: { e1: 1, e2: 2 }, f: ["2", 3], 343: 343 };
    const ef2 = { f: ["2", 3], e: { e1: 1, e2: 2}, 343: '343' };
    assert.deepEqual(_.eqObjects(ef, ef2),false);
  })

  it ("return true for 2 empty objects", () => {
    assert.deepEqual(_.eqObjects({}, {}), true);
  })

  it ("return false for empty object and null object", () => {
    assert.deepEqual(_.eqObjects({}, null), false);
  })

  it ("return false for both as null", () => {
    assert.deepEqual(_.eqObjects(null, null), false);
  })

  it ("return false for both as undefined", () => {
    assert.deepEqual(_.eqObjects(undefined, undefined), false);
  })

})
