// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require(`./flatten`);
const countOnly = require(`./countOnly`);
const letterPositions = require(`./letterPositions`);
const findKeyByValue = require(`./findKeyByValue`);
const eqObjects = require('./eqObjects');
const eqArrays = require(`./eqArrays`);
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require(`./assertEqual`);
const assertObjectsEqual = require(`./assertObjectsEqual`);
const countLetters = require(`./countLetters`);
const findKey = require(`./findKey`);
const map = require(`./map`);
const takeUntil = require(`./takeUntil`);
const without = require(`./without`);

module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  findKey,
  map,
  takeUntil,
  without
};