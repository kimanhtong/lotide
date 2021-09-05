const assert = require('chai').assert;
const _ = require ('../index');

describe ("#eqArrays", () => {
  it ("return false for 2 arrays with different orders of same items", () => {
    const ab = ["1", "2"];
    const ba = ["2", '1'];
    assert.deepEqual(_.eqArrays(ab, ba), false);
  })

  it ("return true for 2 arrays with the same orders of the same numbers", () => {
    const ab = [343, 5, 6, 7, 7];
    const ba = [343, 5, 6, 7, 7];
    assert.deepEqual(_.eqArrays(ab, ba),true);
  })

  it ("return false for 2 arrays with different length", () => {
    const ab = ["1", "2"];
    const abc = ["1", "2", "3" ];
    assert.deepEqual(_.eqArrays(ab, abc),false);
  })

  it ("return true for 2 empty arrays", () => {
    assert.deepEqual(_.eqArrays([], []), true);
  })

  it ("return false for empty array and null", () => {
    assert.deepEqual(_.eqArrays([], null), false);
  })

  it ("return false for both as null", () => {
    assert.deepEqual(_.eqArrays(null, null), false);
  })

  it ("return false for both as undefined", () => {
    assert.deepEqual(_.eqArrays(undefined, undefined), false);
  })

})