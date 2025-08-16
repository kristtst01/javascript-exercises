const reverseString = function (inputString) {
  // Find the length of the string
  let length = inputString.length;
  //Split the string and place into array
  let splitString = inputString.split("")
  // Reverse array
  splitString.reverse();
  // Concatenate with join?
  let reversedString = splitString.join("");
  // Return reverse string
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
