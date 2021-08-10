// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let arr1 = [].concat(arr);
  arr1.shift();
  return arr1;
};

module.exports = tail;