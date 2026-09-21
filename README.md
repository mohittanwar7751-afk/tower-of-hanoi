# 🗼 Tower of Hanoi

A modern, interactive **Tower of Hanoi puzzle game** built using HTML, CSS, and JavaScript.

The game allows players to solve the classic Tower of Hanoi puzzle with **3 to 10 disks**, while tracking moves, time, and personal best scores.

---

## 🎮 Features

* 🎯 Supports **3 to 10 disks**
* ▶️ Start a new game
* 🔄 Reset the current game
* ⏱️ Real-time game timer
* 🔢 Automatic minimum-move calculation
* 🏆 Best score tracking using browser `localStorage`
* ↩️ Undo the previous move
* 🎨 Different colors for each disk
* 🚫 Prevents illegal moves
* 🎉 Congratulations screen after completing the puzzle
* 🔁 Play Again option
* 📱 Responsive design for smaller screens
* 🌙 Modern dark-themed user interface

---

## 🧩 How the Game Works

The objective is to move all disks from **Tower 1** to **Tower 3**.

There are three basic rules:

1. Only one disk can be moved at a time.
2. Only the top disk of a tower can be moved.
3. A larger disk cannot be placed on top of a smaller disk.

---

## 🔢 Minimum Moves

The minimum number of moves required to solve the Tower of Hanoi is calculated using:

```text
2ⁿ - 1
```

where **n** is the number of disks.

Examples:

| Disks | Minimum Moves |
| ----: | ------------: |
|     3 |             7 |
|     4 |            15 |
|     5 |            31 |
|     6 |            63 |
|     7 |           127 |
|     8 |           255 |
|     9 |           511 |
|    10 |          1023 |

---

## 🛠️ Technologies Used

* **HTML5** — Website structure
* **CSS3** — Styling, responsive design, animations and UI
* **JavaScript** — Game logic, timer, moves, undo system and score tracking
* **LocalStorage** — Saving best scores in the browser

---

## 📂 Project Structure

```text
Tower-of-Hanoi/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the game interface, including:

* Game settings
* Disk selection
* Game information
* Towers
* Winning screen
* Rules

### `style.css`

Contains:

* Dark theme
* Responsive layout
* Tower and disk styling
* Buttons
* Winning popup
* Animations
* Mobile styling

### `script.js`

Contains the main game functionality:

* Tower initialization
* Disk movement
* Move validation
* Move counter
* Timer
* Best score
* Undo system
* Win detection
* Play Again functionality

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd Tower-of-Hanoi
```

### 3. Run the project

You can simply open:

```text
index.html
```

in a web browser.

You can also use **VS Code Live Server** for development.

---

## 🎯 How to Play

1. Select the number of disks.
2. Click **Start Game**.
3. Click the tower containing the disk you want to move.
4. Click the destination tower.
5. Continue until all disks reach Tower 3.
6. Try to complete the puzzle using the minimum number of moves.
7. Your best score is automatically saved in the browser.

---

## 🏆 Best Score

The game stores the best score separately for each disk count.

For example:

```text
3 Disks → Best Score
4 Disks → Best Score
5 Disks → Best Score
```

The scores are stored using browser `localStorage`.

---

## ↩️ Undo

The **Undo Move** button reverses the most recent valid move.

This allows the player to recover from a mistake without restarting the entire game.

---

## 🎉 Winning Screen

After successfully moving all disks to Tower 3, the game displays a congratulations screen showing:

* Number of disks
* Number of moves
* Completion time
* Minimum required moves
* Best-score status

The player can then select **Play Again** to start another game.

---

## 📱 Responsive Design

The interface is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile devices

The tower layout and controls adjust automatically for smaller screens.

---

## 🔮 Future Improvements

Possible future improvements include:

* 🔊 Sound effects
* 🎵 Background music
* 🤖 Automatic solving mode
* 💡 Hint system
* 📊 Advanced statistics
* 🥇 Leaderboard
* 🌐 Online multiplayer
* 🎨 Multiple themes

---

## 👨‍💻 Author

**Mohit Tanwar**

Tower of Hanoi — Interactive Web Game

---

## 📄 License

This project was created for educational and learning purposes.
