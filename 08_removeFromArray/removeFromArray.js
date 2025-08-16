const removeFromArray = function (inputArray, ...toRemove) {
  return inputArray.filter((elem) => !toRemove.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;