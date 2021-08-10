const assertEqual = require (`../assertEqual`);
const tail = require (`../tail`);
//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(JSON.stringify(tail([3])), JSON.stringify([]));
assertEqual(JSON.stringify(tail([])), JSON.stringify([]));
assertEqual(JSON.stringify(tail([3, 4, 5])), JSON.stringify([4, 5]));
assertEqual(JSON.stringify(tail(undefined)), '[]');
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(JSON.stringify(result1), JSON.stringify(["Lighthouse", "Labs"]));
// Test Case 1: Check the returned array elements
const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"
// Test Case 2: Check the returned array if the initial array has 1 element only
//const result