const options = require("./options.js");
const questions = require("./questions.js");

options.rl;

console.log(
  `User Choice: ${options.userWeapon}, Type of User value: ${typeof options.userWeapon}`,
);
console.log(
  `Comp Choice: ${options.compWeapon}, Type of Comp value: ${typeof options.compWeapon}`,
);

questions.welcome;

// options.gameLogic;
