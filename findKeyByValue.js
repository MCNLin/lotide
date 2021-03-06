const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`ðï¸ ðï¸ Assertion failed ðï¸ ðï¸: ${actual} !== ${expected}`);
  } else {
    console.log(`âï¸ âï¸Assertion passed âï¸ âï¸ : ${actual} === ${expected}`);
  }

};

const findKeyByValue = function(object, value) {
  const genre = Object.keys(object);
  for (let element of genre) {
    if (object[element] === value) {
      return element;
   }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
