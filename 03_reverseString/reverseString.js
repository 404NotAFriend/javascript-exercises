//Attributed string name to function
const reverseString = function (string) {
  //Created variable to split the text in separate letters
  let stringSplit = string.split("");
  //Created variable to call for the reverse on the separate letters
  let reverseArray = stringSplit.reverse();
  //Created variable to join the separate letters back together after being already reversed
  let joinArray = reverseArray.join("");
  // asked for the full word already reversed
  return joinArray;
};

// Resolution after searching google and reading and learning at:
//https://www.naukri.com/code360/library/how-to-reverse-a-string-in-javascript

// Do not edit below this line
module.exports = reverseString;
