const _ = require ('../index');

let result1 = _.countLetters("LIGHTHOUSElab");
console.log("\n #countLetters: count each letter (case-sensitive) in the word LIGHTHOUSElab");
_.assertEqual(result1["L"], 1);
_.assertEqual(result1["I"], 1);
_.assertEqual(result1["G"], 1);
_.assertEqual(result1["H"], 2);
_.assertEqual(result1["T"], 1);
_.assertEqual(result1["O"], 1);
_.assertEqual(result1["U"], 1);
_.assertEqual(result1["S"], 1);
_.assertEqual(result1["E"], 1);
_.assertEqual(result1["l"], 1);
_.assertEqual(result1["a"], 1);
_.assertEqual(result1["b"], 1);