// FUNCTION IMPLEMENTATION
const without = function(arr1, arr2) {
  let arr3 = [];
  if (arr1.length > 0) {
    for (let i = 0; i < arr1.length; i++){
      if (arr2.indexOf(arr1[i]) === -1){
        arr3.push(arr1[i]);
      }
    }
  }
  return arr3;
};
module.exports = without;
