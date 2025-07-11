const convertToCelsius = function(degree) {
  degree = Math.round(((degree - 32) * 5 / 9) * 10) / 10;
  return degree;
};

Math.round()

const convertToFahrenheit = function(degree) {
  degree = Math.round((degree * 9 / 5 + 32) * 10) / 10;
  return degree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
