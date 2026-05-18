const options = require("./options.js");
const ui = require("./ui.js");

console.clear();
console.log(ui.sysBanner());
console.log(ui.bootSyc);

setTimeout(() => {
  console.clear();
  console.log(ui.sysBanner());
  options.rl.question(ui.mainMenuInit, (choice) => {
    options.startExitLogic(choice, gamePlay);
  });
}, 1000);

function gamePlay() {
  console.clear();
  console.log(ui.sysBanner());

  options.rl.question(ui.gameOptions, (choice) => {
    if (choice === "0") {
      options.rl.close();
    } else {
      options.userWeapon = Number(options.choiceMap[choice].value);
      options.gameLogic();
      console.clear();
      console.log(ui.sysBanner());
      console.log(ui.results());
      options.rl.question(ui.playAgain, (choice) => {
        options.startExitLogic(choice, gamePlay);
      });
    }
  });
}
