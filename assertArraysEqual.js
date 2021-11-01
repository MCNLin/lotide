const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a ,b) {
  if (eqArrays(a, b) === true) {
    console.log(`🌟️ 🌟️ Assertion Passed 🌟️ 🌟️: ${a} is equal to ${b}`);
  } else {
    console.log(`🚫️ 🚫️ Assertion Failed 🚫️ 🚫️: ${a} is not equal to ${b}`);
  }
};

module.exports = assertArraysEqual;


