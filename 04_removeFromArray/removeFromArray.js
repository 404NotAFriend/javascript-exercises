const removeFromArray = function (array2, ...args) {
  const newArray = [];
  array2.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
1;
