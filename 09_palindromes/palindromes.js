const palindromes = (test) =>
  test
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("") === test.toLowerCase().replace(/[^a-z0-9]/g, "");

// Do not edit below this line
module.exports = palindromes;
