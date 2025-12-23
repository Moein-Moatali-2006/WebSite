# Tic Tac Toe (JavaScript)

## [Try online](https://moein-moatali-2006.github.io/TicTacToe.io)
A simple **Tic Tac Toe** game built with **HTML, CSS, and Vanilla JavaScript**.

This project supports two game modes:
- **Friend** (two-player local game)
- **Computer** (play against a random-move AI)

The main goal of this project is learning **DOM manipulation**, **event-driven programming**, and basic **game logic** in JavaScript.

---

## Features

- Classic 3x3 Tic Tac Toe board
- Two game modes:
  - Friend vs Friend
  - Player vs Computer (random moves)
- Scoreboard:
  - X wins
  - O wins
  - Draws
- Reset game button
- Clean separation of logic and UI

---

## Project Structure

```
.
├── index.html      # Game UI structure
├── style.css       # Styling
├── script.js       # Game logic (JavaScript)
└── README.md       # Project documentation
```

---

## How to Run

1. Clone or download the project
2. Open `index.html` in your browser
3. Choose a game mode (Friend or Computer)
4. Start playing

No server or dependencies required.

---

## Game Logic Overview

- The game board is represented by a 2D array
- Each click updates:
  - The board state
  - The UI
  - The current player
- After every move:
  - Win conditions are checked
  - Draw state is detected
- In **Computer mode**, the computer:
  - Finds all empty cells
  - Picks one randomly

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Author

**Moein Moatali**

---

## License

This project is open-source and free to use for learning purposes.
