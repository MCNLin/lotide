
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  
  const results = [];
  for (let item of array) { //looping through array
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};
const assertArrayEquals = function(a ,b) {
  if (eqArrays(a, b) === true) {
    console.log(`🌟️ 🌟️ Assertion Passed 🌟️ 🌟️: ${a} is equal to ${b}`);
  } else {
    console.log(`🚫️ 🚫️ Assertion Failed 🚫️ 🚫️: ${a} is not equal to ${b}`);
  }
};
const results1 = map(words, word => word[0]);
console.log(results1);

assertArrayEquals(map( words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEquals(map([2, 4, 6], num => num - 1), [2, 4, 5]);

module.exports = map;
