const utils = require("./utils.js");

console.log(
  `this is a test of the capitalize function: ${utils.capitalize("this is a test of the capitalize function:")}`,
);

console.log(
  `this is a test of the reverse function:\n${utils.reverse("this is a test of the reverse function:")}`,
);

console.log(`This is a test of the random number function: ${utils.randomNum}`);

console.log(`This is a test of the add function: ${utils.add(1, 3)}`);

console.log(`This is a test of the subtract function: ${utils.subtract(1, 3)}`);

console.log(`This is a test of the divide function: ${utils.divide(1, 3)}`);

console.log(`This is a test of the multiply function: ${utils.multiply(1, 3)}`);
