window._jr = {};
_jr.lock = false;     // lock for maintaining one state of game manager
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  console.log("game create called from application.js")
  if (_jr.game) {
    console.log("game already present");
  } else {
    if (!_jr.lock) {
      _jr.lock = true;
      _jr.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
      _jr.lock = false;
      console.log("game create complete from application.js");
    }
  }
});
