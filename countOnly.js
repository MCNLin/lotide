const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑️ 🛑️ Assertion failed 🛑️ 🛑️: ${actual} !== ${expected}`);
  } else {
    console.log(`✅️ ✅️Assertion passed ✅️ ✅️ : ${actual} === ${expected}`);
  }

};
//assertEqual("Lighthouse Labs", "Bootcamp");//return failed
//assertEqual(1, 1); //return pass

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count

//this function should report back how many instances
//of each string were found in the allItems array of strings

//Our function countOnly needs to return a proper report on all
//the strings found in the input array, and their respective counts.
//Therefore it will need to return an object that can represent
//the stats.

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
assertEqual(result1["Jason"],1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);