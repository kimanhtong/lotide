const countLetters = function(str1) {
  let obj = {};
  if (str1.length > 0) {
    for (let i = 0; i < str1.length; i++) {
      if (Object.keys(obj).indexOf(str1[i]) === -1) {
        obj[str1[i]] = 1;
      } else {
        obj[str1[i]] ++;
      }
    }
  }
  return obj;
};
module.exports = countLetters;
