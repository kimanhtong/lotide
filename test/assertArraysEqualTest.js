const _ = require(`../index`);

console.log("\n #assertArraysEqual");
_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [3, 2, 1]);
_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
_.assertArraysEqual([], [2]);