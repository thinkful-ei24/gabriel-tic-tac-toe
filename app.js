const state = {
  turn: 'x',
  gameOver: false,
  // grid: [['', '', ''], ['', '', ''], ['', '', '']]
  grid: {
    row1: ['', '', ''],
    row2: ['', '', ''],
    row3: ['', '', '']
  }
};

// State modification functions
function changeTurn() {
  // switch state.turn in here
  if (state.turn === 'x') {
    state.turn = 'o';
  } else {
    state.turn = 'x';
  }
}

function setGameOverStatus(bool) {
  // set game over in here
  state.gameOver = bool;
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

function updateBoard(cell) {
  // cell.html(state.turn);
  // changeTurn();
}

// Event Listeners
// Delegated cell listener
$('.board').on('click', '.cell', function(event) {
  updateBoard($(this).children());
});

// On ready
function onReady() {
  initialBoardRender();
}

$(onReady);
