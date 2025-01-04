/* const fibonacci = function (fib) {
  fib = Number(fib);

  let fib1 = 1;
  let fib2 = 1;
  let sum;

  if (fib < 0) {
    return "OOPS";
  } else if (fib === 0) {
    return 0;
  } else if (fib === 1) {
    return 1;
  } else if (fib === 2) {
    return 1;
  } else {
    for (let i = 3; i <= fib; i++) {
      sum = fib1 + fib2;
      fib1 = fib2;
      fib2 = sum;
    }
    return fib2;
  }
}; */

const fibonacci = (fib) => {
  fib = Number(fib);

  if (fib < 0) return "OOPS";
  if (fib === 0) return 0;
  if (fib === 1 || fib === 2) return 1;

  let [fib1, fib2] = [1, 1];

  for (let i = 3; i <= fib; i++) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
