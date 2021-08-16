const assert = require('chai').assert;
const _ = require ('../index');

describe ("#letterPositions", () => {
  it ("return positions of characters", () => {
    const str = "hello";
    const obj = {"h": [0], "e": [1], "l": [2, 3], "o": [4]};
    assert.deepEqual(_.letterPositions(str), obj);
  })

  it ("return positions of mixed characters", () => {
    const str = "hello ~!@#$%^&*()_+`1-={[|\\;':\",./<>?";
    const obj = {"h": [0], "e": [1], "l": [2, 3], "o": [4], " ": [5],"~": [6], "!": [7], "@": [8], "#": [9], "$": [10], "%": [11], "^": [12], "&": [13], "*": [14], "(": [15], ")": [16], "_": [17], "+": [18], "`": [19], "1": [20], "-": [21], "=": [22], "{": [23], "[": [24], "|": [25], "\\": [26], ";": [27], "'": [28], ":": [29], "\"": [30], ",": [31], ".": [32], "/": [33], "<": [34], ">": [35], "?": [36]};
    assert.deepEqual(_.letterPositions(str), obj);
  })

  it ("return empty object for empty string", () => {
    const str = "";
    const obj = {};
    assert.deepEqual(_.letterPositions(str), obj);
  })
})
