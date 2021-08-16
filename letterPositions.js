// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i =0 ; i < sentence.length; i++) {
    if (Object.keys(results).indexOf(sentence[i]) === -1) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};
module.exports = letterPositions
