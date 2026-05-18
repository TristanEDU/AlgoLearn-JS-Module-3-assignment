const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chalk = require("chalk");
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const choiceMap = {
  1: { name: ROCK, value: 0 },
  2: { name: PAPER, value: 1 },
  3: { name: SCISSORS, value: 2 },
};
const border = chalk.cyan;
const logo = chalk.bold.red;
const header = chalk.bold.cyanBright;
const success = chalk.green;
const menuNum = chalk.bold.yellow;
const exit = chalk.bold.red;
const status = chalk.bold.greenBright;
const muted = chalk.italic.gray;

const greeting = `
${border("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${border("┃")}                                                      ${border("┃")}
${border("┃")}   ${logo("██████╗ ██████╗ ███████╗")}                           ${border("┃")}
${border("┃")}   ${logo("██╔══██╗██╔══██╗██╔════╝")}                           ${border("┃")}
${border("┃")}   ${logo("██████╔╝██████╔╝███████╗")}                           ${border("┃")}
${border("┃")}   ${logo("██╔══██╗██╔═══╝ ╚════██║")}                           ${border("┃")}
${border("┃")}   ${logo("██║  ██║██║     ███████║")}                           ${border("┃")}
${border("┃")}   ${logo("╚═╝  ╚═╝╚═╝     ╚══════╝")}                           ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┃")}         ${header("ROCK • PAPER • SCISSORS PROTOCOL")}             ${border("┃")}
${border("┃")}                 ${chalk.gray("Terminal Edition v1.0")}                ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫")}
${border("┃")} ${header("SYSTEM BOOT SEQUENCE")}                                 ${border("┃")}
${border("┃")} ${chalk.gray("────────────────────────────────────────────────────")} ${border("┃")}
${border("┃")} ${success("[✓] Core engine loaded")}                               ${border("┃")}
${border("┃")} ${success("[✓] Input controls mapped")}                            ${border("┃")}
${border("┃")} ${success("[✓] Opponent AI initialized")}                          ${border("┃")}
${border("┃")} ${success("[✓] Combat rules verified")}                            ${border("┃")}
${border("┃")} ${success("[✓] Session ready")}                                    ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫")}
${border("┃")} ${header("SELECT YOUR ACTION")}                                   ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┃")}   ${menuNum("[1]")} ✊  ${chalk.white("ROCK")}                                       ${border("┃")}
${border("┃")}   ${menuNum("[2]")} 📄  ${chalk.white("PAPER")}                                      ${border("┃")}
${border("┃")}   ${menuNum("[3]")} ✂️  ${chalk.white("SCISSORS")}                                   ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┃")}   ${exit("[0]")} ⏻  ${exit("TERMINATE SESSION")}                           ${border("┃")}
${border("┃")}                                                      ${border("┃")}
${border("┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫")}
${border("┃")} ${status("STATUS: Awaiting player input...")}                     ${border("┃")}
${border("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}
`;

const mainMenu = function () {
  console.log(`
    ============================
    |      MAIN NAVIGATION     |
    |--------------------------|
    |  1. Start Game           |
    |  0. Exit Program         |
    ============================    
        `);
};

const gameOptions = function () {
  console.log(
    `
    ============================
    |          Options         |
    |--------------------------|
    |  1. Rock                 |
    |  2. Paper                | 
    |  3. Scissors             |
    |  0. Exit Program         |
    ============================ 
        `,
  );
};

let userWeapon = null;

const randomNum = Math.floor(Math.random() * 3);

let compWeapon = randomNum;

const welcome = rl.question(greeting, (choice) => {
  userWeapon = Number(choiceMap[choice].value);
  console.log(`You picked ${choiceMap[choice].name}`);
  console.log(
    `User Choice: ${userWeapon}, Type of User value: ${typeof userWeapon}`,
  );
  gameLogic();
});

const gameLogic = () => {
  console.log(`User weapon: ${userWeapon}, Comp Weapon: ${compWeapon}`);
  if (userWeapon === compWeapon) {
    console.log(`Tie try again`);
    rl.close();
  } else if ((userWeapon - compWeapon + 3) % 3 === 1) {
    console.log(`user wins!`);
    rl.close();
  } else {
    console.log(`comp wins`);
    rl.close();
  }
};

rl.on("close", () => {
  console.log(`
${border("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${border("┃")} ${exit("TERMINATING SESSION...")}                       ${border("┃")}
${border("┃")}                                              ${border("┃")}
${border("┃")} ${muted("Saving combat records...")}                     ${border("┃")}
${border("┃")} ${muted("Disconnecting opponent AI...")}                 ${border("┃")}
${border("┃")} ${success("Session closed successfully.")}                 ${border("┃")}
${border("┃")}                                              ${border("┃")}
${border("┃")} ${chalk.cyan("Thanks for playing, Commander.")}               ${border("┃")}
${border("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}
`);
  process.exit(0);
});

module.exports = {
  rl,
  chalk,
  ROCK,
  PAPER,
  SCISSORS,
  choiceMap,
  border,
  logo,
  header,
  success,
  menuNum,
  exit,
  status,
  muted,
  greeting,
  mainMenu,
  gameOptions,
  userWeapon,
  randomNum,
  compWeapon,
  gameLogic,
  // goodby,
};
