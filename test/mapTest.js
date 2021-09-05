const map = require ('../map');
const assertArraysEqual = require ('../assertArraysEqual');

console.log ('\n #map')

const word1 = ["ground", "control", "to", "major", "tom"];
const result1 = map(word1, word => word[0]);
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]);

const word2= ["2dfasf", "3dfdsf", "5dfsdf", "0dsfsdor", "9sdfsdf"];
const result2 = map(word2, word => word[0]);
assertArraysEqual(result2, ["2", "3", "5", "0", "9"]);

const word3= [" dfasf", ";dfdsf", ":dfsdf", "_dsfsdor", "^sdfsdf"];
const result3 = map(word3, word => word[0]);
assertArraysEqual(result3, [" ", ";", ":", "_", "^"]);