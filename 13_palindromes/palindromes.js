const palindromes = function (string) {
  const punctRemoved = remove(string).toLowerCase();
  const reversed = Array.from(punctRemoved).reverse().join("").toLowerCase();
  return reversed === punctRemoved;
};

function remove(str) {
  return str.replace(/[!\s"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
}

// Do not edit below this line
module.exports = palindromes;
