/* global state */

/***** Render functions *****/
const Render = (function() {
  // Function for initializing the board on page load
  function initialBoardRender() {
    // Board grid HTML to insert
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
    // Insert into board
    $('.board').html(boardHTML);
  }

  // Function for rendering the updated grid based on the state
  function renderUpdatedGrid() {
    // Class for winning
    const winClass = 'win';
    // Array of jQuery objects of all cells on board
    const arrOfCells = $('.cell');

    // Loop through each cell and update their classes
    arrOfCells.each(function(index) {
      // If state contains a win pattern we will add the win class to each of the cells
      if (state.winPattern.includes(index)) {
        $(this).addClass(winClass);
      }
      // Update the cell with the strings from the state grid
      if (state.grid[index] !== '') {
        $(this)
          .children()
          .html(state.grid[index]);
      } else {
        $(this)
          .children()
          .html('&nbsp;');
      }
    });
  }

  return { renderUpdatedGrid, initialBoardRender };
})();
