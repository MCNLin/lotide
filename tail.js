/*function to be able to see a series of success/failure message printed to console,
to let us know if function are behaving as expected */
const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;


