const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(arractual, arrexpected) {
  let act = [].concat(arractual);
  let exp = [].concat(arrexpected);
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (eqArrays(act, exp)) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};

const takeUntil = function(array, callback) {
  let i = 0;
  let arr = [];
  while (!callback(array[i]) && i < array.length) {
    arr.push(array[i]);
    i ++;
  }
  return arr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
assertArraysEqual(takeUntil(data3, x => x < 0),[1, 2, 5, 7, 2, 1, 2, 4, 5]);

console.log('---');