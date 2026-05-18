const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const choiceMap = {
  1: { name: ROCK, value: 0 },
  2: { name: PAPER, value: 1 },
  3: { name: SCISSORS, value: 2 },
};

const state = {
  // Game state is stored in one object so the menu/UI modules can share it.
  userWeapon: null,
  compWeapon: 0,
  results: "",
  userWin: 0,
  compWin: 0,
  ties: 0,
};

const randomNum = () => {
  state.compWeapon = Math.floor(Math.random() * 3);
};

const gameLogic = () => {
  if (state.userWeapon === state.compWeapon) {
    state.results = `It's a Tie!`;
    state.ties = state.ties + 1;
  } else if ((state.userWeapon - state.compWeapon + 3) % 3 === 1) {
    state.results = `You Won!`;
    state.userWin = state.userWin + 1;
  } else {
    state.results = `Loser, The computer beat you...`;
    state.compWin = state.compWin + 1;
  }
};

const startExitLogic = (choice, func) => {
  if (choice === "1") {
    randomNum();
    func();
  } else {
    rl.close();
  }
};

rl.on("close", () => {
  const { exitScreen } = require("./ui.js");
  console.clear();
  console.log(exitScreen);
  process.exit(0);
});

module.exports = {
  rl,
  ROCK,
  PAPER,
  SCISSORS,
  choiceMap,
  randomNum,
  get userWeapon() {
    return state.userWeapon;
  },
  set userWeapon(value) {
    state.userWeapon = value;
  },
  get compWeapon() {
    return state.compWeapon;
  },
  set compWeapon(value) {
    state.compWeapon = value;
  },
  get results() {
    return state.results;
  },
  get userWin() {
    return state.userWin;
  },
  set userWin(value) {
    state.userWin = value;
  },
  get compWin() {
    return state.compWin;
  },
  set compWin(value) {
    state.compWin = value;
  },
  get ties() {
    return state.ties;
  },
  set ties(value) {
    state.ties = value;
  },

  gameLogic,
  startExitLogic,
};
