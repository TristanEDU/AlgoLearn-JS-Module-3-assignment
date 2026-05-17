const capitalize = function (str) {
  return str
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
};

const reverse = function (str) {
  return str.split("").reverse("").join("");
};

const randomNum = Math.random();

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
