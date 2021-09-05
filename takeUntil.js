const takeUntil = function(array, callback) {
  let i = 0;
  let arr = [];
  while (!callback(array[i]) && i < array.length) {
    arr.push(array[i]);
    i ++;
  }
  return arr;
}
module.exports = takeUntil;
