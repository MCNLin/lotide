const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑️ 🛑️ Assertion failed 🛑️ 🛑️: ${actual} !== ${expected}`);
  } else {
    console.log(`✅️ ✅️Assertion passed ✅️ ✅️ : ${actual} === ${expected}`);
  }

};

const countLetters = function(str){
  const result = {}; //declared an empty object for results to go in
  for (let letter of str){ //sliced string h, a, p , p , y
    if(letter !== " "){ //if letter doesn't = space, true, go to through loop
      if (result[letter]) { 
        result[letter] += 1; //if letter appears again, add 1
      } else {
        result[letter] = 1; //if shows up once it = 1
      }
    }
  }
  return result; //return result { h: 1, a: 1, p: 2, y: 1 }
}
console.log(countLetters("happy"));