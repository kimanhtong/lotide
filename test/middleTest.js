//const assertArraysEqual = require (`../assertArrayEqual`);
const assert = require ('chai').assert;
const middle = require (`../middle`);

// Test the function middle.js
/*assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);*/

// Test with mocha and chai
describe ('#middle', function () {
  it ('should return an empty array for undefined', function () {
    assert.deepEqual(middle(undefined), []);
  });

  it ('should return an empty array for an empty array', function () {
    assert.deepEqual(middle([]), []);
  });

  it ('should return an empty array for a 1-element array', function () {
    const arr = [1];
    assert.deepEqual(middle(arr), []);
  });

  it ('should return an empty array for a 2-element array', function () {
    const arr = ['a', 'c'];
    assert.deepEqual(middle(arr), []);
  });

  it ('should return an array with the middle element for a 3-element array', function () {
    const arr = ['I', 'don\'t', 'know'];
    assert.deepEqual(middle(arr), ['don\'t']);
  });

  it ('should return an array with 2 middle elements for a 4-element array', function () {
    const arr = [[2, 3, 4], [5, 6, 7], [8, 9, 7, 10], [5, 900, 1000, 'ab']];
    assert.deepEqual(middle(arr), [[5, 6, 7], [8, 9, 7, 10]]);
  });

  it ('should return an array with 2 middle elements for an 8-element array', function () {
    const arr = [[2, 3, 4], [5, 6, 7], ["This is a string"], [5, 900, 1000, 'ab'], ['I', 'don\'t', 'know'], ['a', 'c'], [], [1] ];
    assert.deepEqual(middle(arr), [[5, 900, 1000, 'ab'], ['I', 'don\'t', 'know']]);
  });

})

