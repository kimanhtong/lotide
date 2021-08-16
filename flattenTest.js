const assert = require('chai').assert;
const _ = require ('../index');

describe ("#flatten", () => {
  it ("return a flat array for a 1-level-nested array", () => {
    const ab = [1, 2, [3, 4], 5, [6]];
    const ba = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(_.flatten(ab), ba);
  })

  it ("return a flat array w/o the empty array for a 1-level-nested array containing an empty array", () => {
    const ab = [1, 2, [3, 4], 5, [6], []];
    const abc = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(_.flatten(ab), abc);
  })

  it ("return an empty array if input is an empty array", () => {
    const ab = [];
    assert.deepEqual(_.flatten(ab), []);
  })

  it ("return an empty array if input is a Number", () => {
    const ab = 1;
    assert.deepEqual(_.flatten(ab), []);
  })

  it ("return an empty array if input is an Object", () => {
    const ab = {a: "test"};
    assert.deepEqual(_.flatten(ab), []);
  })

  it ("return an empty array if input is a string", () => {
    const ab = "test";
    assert.deepEqual(_.flatten(ab), []);
  })


})  