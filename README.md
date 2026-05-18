# AlgoLearn JS Module 3 Assignment

A small Node.js project that completes the Module 3 requirements with two separate exercises:

1. A utility library with exported helper functions.
2. A terminal Rock Paper Scissors game with score tracking.

## Project Structure

- `utils.js` - utility functions exported with `module.exports`
- `test.js` - runs each utility function and prints the output
- `rps.js` - entry point for the Rock Paper Scissors game
- `options.js` - shared game state, logic, and readline setup
- `ui.js` - terminal banners, menus, and result screens
- `questions.js` - imported by the game entry point
- `package.json` - project metadata and dependencies

## Requirements Covered

This project was built to match the assignment requirements in `requrirments.md`:

- Uses CommonJS modules with `require` and `module.exports`
- Includes at least five utility functions in `utils.js`
- Includes a separate `test.js` file that imports and calls each utility function
- Implements a Rock Paper Scissors game in the terminal
- Uses `readline` for player input
- Tracks wins, losses, and ties
- Keeps the logic within the scope of Module 3 concepts

## Utility Library

Run the utility demo with:

```bash
node test.js
```

The utility module currently includes:

- `capitalize(str)`
- `reverse(str)`
- `randomNum()`
- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

## Rock Paper Scissors Game

Run the game with:

```bash
node rps.js
```

How it works:

1. The game shows a boot screen and main menu.
2. Choose to start the game or exit.
3. Pick rock, paper, or scissors.
4. The computer picks a random move.
5. The game determines the winner and updates the score.
6. After each round, you can play again or quit.

### Rules

- Rock beats scissors
- Scissors beats paper
- Paper beats rock
- Matching choices result in a tie

## Dependencies

The game uses [`chalk`](https://www.npmjs.com/package/chalk) for colored terminal output.

Install dependencies with:

```bash
npm install
```

## Notes

- This project uses CommonJS throughout for compatibility with the assignment scope.
- The terminal UI is intentionally styled to make the game feel more polished while still staying within simple Node.js concepts.
- If you want to extend the project, a good next step would be adding input validation or supporting multiple matches in a row without returning to the main menu.
