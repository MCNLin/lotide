const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return "🛑️ 🛑️ Assertion failed 🛑️ 🛑️ : " + actual + ' !== ' + expected;
  } else {
    return "✅️ ✅️Assertion passed ✅️ ✅️ : " + actual + ' === ' + expected;
  }

};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));