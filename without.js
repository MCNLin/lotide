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

const without = function(Array, Array2) {
  let result = [];
    for (let i = 0; i < Array.length; i = i + 1) {
      if (!Array2.includes(Array[i])) {
        result.push(Array[i]);
      }
      }
    return result;
    }
  
  console.log(without([1, 2, 3], [1])) 
  console.log(without(["1", "2", "3"], [1, 2, "3"])) 
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArrayEquals(words, ["hello", "world", "lighthouse"]);  

  module.exports = without;