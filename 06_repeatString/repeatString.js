const repeatString = function (inputString, times) {
  if (times < 0) {
    return "ERROR";
  }
  let concatString = "";
  for (let i = 0; i < times; i++) {
    concatString = concatString.concat(inputString);
  }
  return concatString;
};

// Do not edit below this line
module.exports = repeatString;
