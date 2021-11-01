/*function to be able to see a series of success/failure message printed to console,
to let us know if function are behaving as expected */
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑️ 🛑️ Assertion failed 🛑️ 🛑️: ${actual} !== ${expected}`);
  } else {
    console.log(`✅️ ✅️Assertion passed ✅️ ✅️ : ${actual} === ${expected}`);
  }

};


module.exports = assertEqual;