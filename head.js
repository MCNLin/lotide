/*function to be able to see a series of success/failure message printed to console,
to let us know if function are behaving as expected */
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑️ 🛑️ Assertion failed 🛑️ 🛑️: ${actual} !== ${expected}`);
  } else {
    console.log(`✅️ ✅️Assertion passed ✅️ ✅️ : ${actual} === ${expected}`);
  }

};

//assertEqual("Lighthouse Labs", "Bootcamp");//return failed
//assertEqual(1, 1); //return pass

//create a head function which returns the 1st item in the array
const head = function(array){
  return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


  
