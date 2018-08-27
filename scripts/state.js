/* global initialBoardRender */
const state = {
  turn: 'x',
  gameOver: false,
  winPattern: [],
  grid: ['', '', '', '', '', '', '', '', ''],
  /***** State modification functions *****/
  // Function for updating the array grid
  updateGrid: function(cellIndex) {
    // Assigns the current player's turn's letter to the grid
    this.grid[cellIndex] = this.turn;
    // Run checkForWinner and capture any winning combinations
    const winPattern = this.checkForWinner();
    // If we've got a winner set gameOver to true and assign winPattern to the win pattern
    if (winPattern) {
      this.gameOver = true;
      this.winPattern = winPattern;
    }
  },
  // Function for changing whose turn it is
  changeTurn: function() {
    this.turn === 'x' ? (this.turn = 'o') : (this.turn = 'x');
  },
  // Function for starting a new game
  startNewGame: function() {
    // Reset grid, gameOver, and winPattern variables
    this.grid = ['', '', '', '', '', '', '', '', ''];
    this.gameOver = false;
    this.winPattern = [];
    // Initialize the board again
    initialBoardRender();
  },
  // Function for checking if there is a winner
  checkForWinner: function() {
    // Array holding all winning patterns
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];
    // Loop through all the potential win patterns
    for (let i = 0; i < winPatterns.length; i++) {
      // Assign winPattern to current winPattern
      const winPattern = winPatterns[i];

      // Prevent win with three nulls by checking first cell isn't null
      if (!this.grid[winPattern[0]]) continue;

      // Check the grid against the win pattern and return if all 3 match
      if (
        this.grid[winPattern[0]] === this.grid[winPattern[1]] &&
        this.grid[winPattern[1]] === this.grid[winPattern[2]]
      ) {
        return winPattern;
      }
    }
    // Otherwise we return null
    return null;
  },
  // Function for updating state's grid
  updateStoreGrid: function(cell) {
    // If the game is over prevent further grid updates
    if (!this.gameOver) {
      // Capture cell ID in a variable
      const cellID = cell.attr('id');
      // Only allow empty grids to be updated
      if (this.grid[cellID] === '') {
        this.updateGrid(cellID);
        this.changeTurn();
      }
    }
  }
};
