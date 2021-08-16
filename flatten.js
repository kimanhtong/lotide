const flatten = function(arr1) {
  if (!Array.isArray(arr1)) {
    return [];
  }
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++){
    if (!Array.isArray(arr1[i])) {
      arr2.push(arr1[i]);
    } else {
      if (arr1[i].length > 0) {
        for (let j = 0; j < arr1[i].length; j++) {
          arr2.push(arr1[i][j]);
        }
      }
    }
  }
  return arr2;
};

module.exports = flatten;
