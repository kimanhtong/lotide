const assertEqual = function(act, exp) {
  let pass1 = `💚💚💚 Assertion Passed: ${act} === ${exp}`;
  let fail1 = `🥵🥵🥵 Assertion Failed: ${act} !== ${exp}`;
  if (act === exp) {
    console.log(pass1);
  } else {
    console.log(fail1);
  }
};
const head = function(arr) {
  return arr[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
assertEqual(head([undefined,3, 5]),undefined);
