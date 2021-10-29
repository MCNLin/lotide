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
const takeUntil = function(array, callback) {
  let results = [];
  for(let val of array) { //loop over array
    if (callback(val)) {//data1 callback val = x < 0 
      return results; // if no, return number
    } else {
      results.push(val) //if is, stop and push previous values into array
    }
  }
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEquals(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArrayEquals(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to']);


