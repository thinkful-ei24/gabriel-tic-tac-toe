/* global state, Render */

/*
  Modules:
  /app.js - event listeners and on ready function
  /scripts/Render.js - functions for updating renders on page
  /scripts/state.js - datastore and functions for updating state
*/

/***** Event Listeners *****/
// Function for initializing all event listeners
function initializeEventListeners() {
  // Delegated listener for cell clicks
  $('.board').on('click', '.cell', function() {
    state.updateStoreGrid($(this));
    Render.renderUpdatedGrid();
  });
  // Listener for new game button
  $('#new-game').on('click', function() {
    state.startNewGame();
  });
}

// Function for when DOM is ready
function onReady() {
  // Initialize the board and event listeners
  Render.initialBoardRender();
  initializeEventListeners();
}
// On ready
$(onReady);
