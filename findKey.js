// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`ðï¸ ðï¸ Assertion failed ðï¸ ðï¸: ${actual} !== ${expected}`);
//   } else {
//     console.log(`âï¸ âï¸Assertion passed âï¸ âï¸ : ${actual} === ${expected}`);
//   }
// }
const assertEqual = require('./assertEqual');
const findKey = (object, callback) =>{
  let array1 = Object.keys(object);
  for (const element of array1) {
    if (callback(object[element])) {
      return element;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
module.exports = findKey;

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined);