const eqArrays = function(a, b) {
  console.log('first param:', a, 'second param', b)
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

const middle = (array) => {
  
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor((array.length / 2) - 1)], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};
assertArrayEquals(middle([1])) // => []
assertArrayEquals(middle([1, 2])) // => []
assertArrayEquals(middle([1, 2, 3])) // => [2]
assertArrayEquals(middle([1, 2, 3, 4, 5])) // => [3]
assertArrayEquals(middle([1, 2, 3, 4])) // => [2, 3]
assertArrayEquals(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]