const assert = require('chai').assert;
const _ = require ('../index');

describe ("#findKeyByValue", () => {
  it ("return the correct key for a valid value", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");
  })

  it ("return undefined for an inexistent value", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })

  it ("return undefined for empty object", () => {
    assert.deepEqual(_.findKeyByValue({}, "That '70s Show"), undefined);
  })

  it ("return undefined for empty value", () => {
    assert.deepEqual(_.findKeyByValue({}, ""), undefined);
  })

})
