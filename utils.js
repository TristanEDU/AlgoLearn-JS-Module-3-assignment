const capitalize = function (str) {
  // Keep the implementation simple and explicit for Module 3 requirements.
  return str
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
};

const reverse = function (str) {
  return str.split("").reverse("").join("");
};

// Returns a new random number each time the function is called.
const randomNum = function () {
  return Math.random();
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = {
  capitalize,
  reverse,
  randomNum,
  add,
  subtract,
  multiply,
  divide,
};
