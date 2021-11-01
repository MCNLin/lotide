const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2);// return true
assertEqual(result[0],'Lighthouse');//return true
assertEqual(result[1],'Labs');  //return true

console.log(tail([1]));
console.log(tail([]));
