const { factorial } = require('./factorial.js');

try {
  console.log(factorial(0));
  console.log(factorial(1));
  console.log(factorial(10));
  console.log(factorial(-10));
} catch (err) {}
