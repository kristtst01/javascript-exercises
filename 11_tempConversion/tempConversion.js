const convertToCelsius = function (fahrenheit) {
  const converted = (fahrenheit - 32) * (5 / 9);
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (celsius) {
  const converted = celsius * (9 / 5) + 32;
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
