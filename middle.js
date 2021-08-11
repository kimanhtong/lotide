// FUNCTION IMPLEMENTATION
const middle = function (arr) {
  const arr1 = [];
  if (arr !== undefined) { 
    const l = arr.length;
    if (l > 2) {
      if (l % 2 === 0) {
        arr1.push(arr[l / 2 - 1]);
        arr1.push(arr[l / 2]);
      } else {
        arr1.push(arr[(l - 1) / 2]);
      }
    };
  };
  return arr1;
};

module.exports = middle;