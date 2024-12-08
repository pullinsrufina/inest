class CursorManager {
  constructor() {
    this._globalCursor = false; // Initial state
  }

  setGlobalCursor(value) {
    this._globalCursor = !!value;
  }

  getGlobalCursor() {
    return this._globalCursor;
  }
}

const cursorManager = new CursorManager();

cursorManager.setGlobalCursor("some value");
console.log(cursorManager.getGlobalCursor()); // true

cursorManager.setGlobalCursor(0);
console.log(cursorManager.getGlobalCursor()); // false

cursorManager.setGlobalCursor(null);
console.log(cursorManager.getGlobalCursor()); // false

cursorManager.setGlobalCursor(true);
console.log(cursorManager.getGlobalCursor()); // true
