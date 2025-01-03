/* eslint-disable no-undef */
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((initial, current) => initial + current, 0);

const multiply = (arr) => arr.reduce((initial, current) => initial * current, 1);

const power = (base, exponent) => base ** exponent;

const factorial = (f) => {
  if (f < 0) throw new Error("Factorial is not defined for negative numbers."); // created error for negative numbers
  let result = 1;
  for (let i = 2; i <= f; i++) {
    //used i = 2  to avoid multiplying by 1 on the first iteration, which is redundant.
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
