const assert = require ('chai').assert;
const _ = require (`../index`);

describe("#countOnly", function () {

  it ("return undefined count if counting is against nothing", () => {
    const firstNames = [];
    const itemscounted = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {"Jason": undefined, "Karima": undefined, "Fang": undefined, "Agouhanna": undefined});
  });

  it ("return empty object if nothing is counted", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemscounted = {};
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {});
  });

  it ("return empty object if nothing is counted against nothing", () => {
    const firstNames = [];
    const itemscounted = {};
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {});
  });

  it ("return correct number if all names listed are counted", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemscounted = {"Karl": true, "Salima": true, "Agouhanna": true, "Fang": true, "Kavith": true, "Jason": true, "Joe": true};
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {"Karl": 1, "Salima": 2, "Agouhanna": 1, "Fang": 2, "Kavith": 1, "Jason": 1, "Joe": 1});
  })

  it ("return undefined for all names if they all are not counted", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemscounted = {"Karl": false, "Salima": false, "Agouhanna": false, "Fang": false, "Kavith": false, "Jason": false, "Joe": false};
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {"Karl": undefined, "Salima": undefined, "Agouhanna": undefined, "Fang": undefined, "Kavith": undefined, "Jason": undefined, "Joe": undefined});
  })

  it ("return correct number if names listed are counted or not counted", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemscounted = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {"Jason": 1, "Karima": undefined, "Fang": 2, "Agouhanna": undefined });
  })

  it ("return empty object if counting undefined against null", () => {
    const firstNames = undefined;
    const itemscounted = null;
    assert.deepEqual(_.countOnly(firstNames, itemscounted), {});
  });

});