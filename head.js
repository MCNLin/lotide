const assertEqual = require('./assertEqual');
//create a head function which returns the 1st item in the array
const head = function(array){
  return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


  
