const options = require("./options.js");
const chalk = require("chalk");
const border = chalk.cyan;
const logo = chalk.bold.red;
const header = chalk.bold.cyanBright;
const success = chalk.green;
const menuNum = chalk.bold.yellow;
const exit = chalk.bold.red;
const status = chalk.bold.greenBright;
const muted = chalk.italic.gray;

const stripAnsi = (text) => String(text).replace(/\u001b\[[0-9;]*m/g, "");

function visibleWidth(text) {
  return stripAnsi(text).length;
}

function padRight(text, width) {
  const visible = visibleWidth(text);
  return `${text}${" ".repeat(Math.max(0, width - visible))}`;
}

function centerText(text, width) {
  const visible = visibleWidth(text);
  const totalPadding = Math.max(0, width - visible);
  const leftPadding = Math.floor(totalPadding / 2);
  const rightPadding = totalPadding - leftPadding;
  return `${" ".repeat(leftPadding)}${text}${" ".repeat(rightPadding)}`;
}

function boxedLines(lines, width) {
  // Shared frame builder keeps every screen aligned the same way.
  const innerWidth = width - 4;
  return [
    `${border("┏")}${"━".repeat(width - 2)}${border("┓")}`,
    ...lines.map(
      (line) => `${border("┃")} ${padRight(line, innerWidth)} ${border("┃")}`,
    ),
    `${border("┗")}${"━".repeat(width - 2)}${border("┛")}`,
  ].join("\n");
}

const sysBanner = () => `
${boxedLines(
  [
    "",
    `   ${logo("██████╗ ██████╗ ███████╗")}     ${status(`Your Wins: ${success(options.userWin)}`)}`,
    `   ${logo("██╔══██╗██╔══██╗██╔════╝")}`,
    `   ${logo("██████╔╝██████╔╝███████╗")}     ${status(`Computer Wins: ${success(options.compWin)}`)}`,
    `   ${logo("██╔══██╗██╔═══╝ ╚════██║")}`,
    `   ${logo("██║  ██║██║     ███████║")}     ${status(`Ties: ${success(options.ties)}`)}`,
    `   ${logo("╚═╝  ╚═╝╚═╝     ╚══════╝")}`,
    "",
    centerText(header("ROCK • PAPER • SCISSORS PROTOCOL")),
    centerText(chalk.gray("Terminal Edition v1.0")),
    "",
  ],
  54,
)}
`;

const bootSyc = `
${boxedLines(
  [
    header("SYSTEM BOOT SEQUENCE"),
    chalk.gray("──────────────────────────────────────────────────"),
    success("[✓] Core engine loaded"),
    success("[✓] Input controls mapped"),
    success("[✓] Opponent AI initialized"),
    success("[✓] Combat rules verified"),
    success("[✓] Session ready"),
    "",
  ],
  54,
)}
`;

const mainMenuInit = `
${boxedLines(
  [
    centerText(header("MAIN MENU")),
    `${menuNum("[1]")} ${success("START GAME")}`,
    `${exit("[0]")} ${exit("EXIT")}`,
    "",
  ],
  54,
)}
`;

const gameOptions = `
${boxedLines(
  [
    header("SELECT YOUR ACTION"),
    "",
    `${menuNum("[1]")} ✊  ${chalk.white("ROCK")}`,
    `${menuNum("[2]")} 📄  ${chalk.white("PAPER")}`,
    `${menuNum("[3]")} ✂️  ${chalk.white("SCISSORS")}`,
    "",
    `${exit("[0]")} ⏻  ${exit("TERMINATE SESSION")}`,
    "",
    status("STATUS: Awaiting player input..."),
  ],
  54,
)}
`;

const results = () => `
${(() => {
  // Pull the latest game state at render time so the score is always current.
  return boxedLines(
    [
      centerText(header("Results"), 46),
      status(
        `Computer chose ${options.choiceMap[options.compWeapon + 1].name}`,
      ),
      status(`You chose ${options.choiceMap[options.userWeapon + 1].name}`),
      chalk.gray("──────────────────────────────────────────────────"),
      centerText(logo(options.results), 46),
    ],
    54,
  );
})()}
`;

const playAgain = `
${boxedLines(
  [
    centerText(header("Play again?"), 46),
    `${menuNum("[1]")} ${success("START GAME")}`,
    `${exit("[0]")} ${exit("EXIT")}`,
    "",
  ],
  54,
)}
`;

const exitScreen = `
${boxedLines(
  [
    exit("TERMINATING SESSION..."),
    "",
    muted("Saving combat records..."),
    muted("Disconnecting opponent AI..."),
    success("Session closed successfully."),
    "",
    chalk.cyan("Thanks for playing, Commander."),
  ],
  54,
)}
`;

module.exports = {
  chalk,
  border,
  logo,
  header,
  success,
  menuNum,
  exit,
  status,
  muted,
  sysBanner,
  bootSyc,
  mainMenuInit,
  gameOptions,
  results,
  playAgain,
  exitScreen,
};
