// create base function and declared 2 variables

const sumAll = function (first, last) {
  // Create a check to see if values are positive and integers
  // Used typeof to check for numbers and value  < 0 for positive

  if (
    typeof first !== "number" ||
    typeof last !== "number" ||
    first < 0 ||
    last < 0
  ) {
    return "ERROR";
  }

  //Created variable for sum of all valors

  let sum = 0;

  //Create a loop that goes throught the Minimum value given to first or last
  // USed Math.min and max to order the values from lower to upper
  // Created a line to sum all the values between first and last , including first and last
  for (let i = Math.min(first, last); i <= Math.max(first, last); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
