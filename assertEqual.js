/*function to be able to see a series of success/failure message printed to console,
to let us know if function are behaving as expected */
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`ðï¸ ðï¸ Assertion failed ðï¸ ðï¸: ${actual} !== ${expected}`);
  } else {
    console.log(`âï¸ âï¸Assertion passed âï¸ âï¸ : ${actual} === ${expected}`);
  }

}; 


module.exports = assertEqual;