const state = {
  turn: 'x',
  gameOver: false,
  grid: ['', '', '', '', '', '', '', '', ''],
  updateGrid: function(cellIndex) {
    this.grid[cellIndex] = this.turn;
    const winPattern = checkForWinner();
    if (winPattern) this.gameOver = true;
  },
  changeTurn: function() {
    if (this.turn === 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }
};

// State modification functions
function setGameOverStatus(bool) {
  // set game over in here
  state.gameOver = bool;
}

function checkForWinner() {
  console.log('checking for winner');
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

  for (let i = 0; i < winPatterns.length; i++) {
    const winPattern = winPatterns[i];

    // Prevent win with three nulls by checking first cell isn't null
    if (!state.grid[winPattern[0]]) continue;

    if (
      state.grid[winPattern[0]] === state.grid[winPattern[1]] &&
      state.grid[winPattern[1]] === state.grid[winPattern[2]]
    ) {
      console.log('winner');
      return winPattern;
    }
  }

  return null;
}

// Render functions
function initialBoardRender() {
  const boardHTML = `
  <div class="row">
  <div class="cell" id="0">
    <p>&nbsp;</p>
  </div>
  <div class="cell" id="1">
    <p>&nbsp;</p>
  </div>
  <div class="cell" id="2">
    <p>&nbsp;</p>
  </div>
  </div>
  <div class="row">
    <div class="cell" id="3">
      <p>&nbsp;</p>
    </div>
    <div class="cell" id="4">
      <p>&nbsp;</p>
    </div>
    <div class="cell" id="5">
      <p>&nbsp;</p>
    </div>
  </div>
  <div class="row">
    <div class="cell" id="6">
      <p>&nbsp;</p>
    </div>
    <div class="cell" id="7">
      <p>&nbsp;</p>
    </div>
    <div class="cell" id="8">
      <p>&nbsp;</p>
    </div>
  </div>
  `;
  $('.board').html(boardHTML);
}

function renderUpdatedGrid() {
  const arrOfCells = $('.cell');
  arrOfCells.each(function(index) {
    const gridIndex = index;
    $(this)
      .children()
      .html(state.grid[gridIndex]);
  });
}

function updateStoreGrid(cell) {
  // get cell id
  const cellID = cell.attr('id');
  const cellIndex = cellID;
  console.log(`cell index: ${cellIndex}`);
  state.updateGrid(cellIndex);
  state.changeTurn();
}

// Event Listeners
// Delegated cell listener
$('.board').on('click', '.cell', function(event) {
  updateStoreGrid($(this));
  renderUpdatedGrid();
});

// On ready
function onReady() {
  initialBoardRender();
}

$(onReady);
