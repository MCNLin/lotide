
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

const eqObjects = function(object1, object2) {
  const check1 = Object.keys(object1);//{ a: '1', b: '2' } 
  const check2 = Object.keys(object2);//{ b: '2', a: '1' }
  if (check1.length !== check2.length) {
    return false;
  }
  for (const key of check1) {
    const check1Value = object1[key];
    const check2Value = object2[key];
    if (Array.isArray(check1Value) || Array.isArray(check2Value)) {
      if (!eqArrays(check1Value, check2Value)) {
        return false;
      }
    } else if (check1Value !== check2Value) {
      return false;
    }
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect; 
  const result = eqObjects(a, b);
  
  if (!result) {
    console.log(`🚫️ 🚫️ Assertion Failed 🚫️ 🚫️: ${inspect(a)} !== ${inspect(b)}`);
  } else {
    console.log(`🌟️ 🌟️ Assertion Passed 🌟️ 🌟️: ${inspect(a)} === ${inspect(b)}`);
  }  
};
//Test code:

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false
assertObjectsEqual(cd, dc); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //false
module.exports = assertObjectsEqual;