const assert = require('chai').assert;
const _ = require (`../index`);

describe ("#tail", function () {
  it ("should return array words except the first one", function () {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(_.tail(arr), ["Lighthouse", "Labs"]);
  });

  it ("should return array with length less than the original by 1", function () {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    assert.lengthOf(_.tail(arr), 2);
  });

  it ("should return empty if array only has 1 number", function () {
    const arr = [3];
    assert.deepEqual(_.tail(arr), []);
  });

  it ("should return an empty array for an empty array", function () {
    const arr = [];
    assert.deepEqual(_.tail(arr), []);
  });

  it ("should return an array of numbers excep the first number", function () {
    const arr = [3, 7, 3, 8, 9, 12, 34, 45, 45435345, 89789678678];
    assert.deepEqual(_.tail(arr), [7, 3, 8, 9, 12, 34, 45, 45435345, 89789678678]);
  })

  it ("should return an empty array for undefined", function () {
    assert.deepEqual(_.tail(undefined), []);
  })

  it ("should return empty if array only has 1 word", function () {
    const arr = ['found'];
    assert.deepEqual(_.tail(arr), []);
  })

});