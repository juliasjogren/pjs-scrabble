webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/style/board.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/style/board.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".board {\\r\\n  height: 92%;\\r\\n  display: grid;\\r\\n  grid-template-columns: 20% auto 20%;\\r\\n  grid-template-rows: auto auto;\\r\\n  grid-column-gap: 3vh;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  grid-row-gap: 3vh;\\r\\n}\\r\\n\\r\\n.cells {\\r\\n  grid-column: 2;\\r\\n  grid-row: 1;\\r\\n  height: 100%;\\r\\n  display: grid;\\r\\n  border: 2px solid rgba(0, 0, 0, 0.7);\\r\\n  grid-template-columns: repeat(15, 5vmin);\\r\\n  grid-template-rows: repeat(15, 5vmin);\\r\\n  width: fit-content;\\r\\n  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.7));\\r\\n  /* transform: \\r\\n    rotate3d(1, 0, 0, 25deg)\\r\\n    rotate3d(0, 1, 0, 5deg)\\r\\n    rotate3d(0, 0, 1, -3deg); */\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  border: 1px solid black;\\r\\n  background-color: wheat;\\r\\n  user-select: none;\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 3vmin;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  transition: background-color 0.3s;\\r\\n}\\r\\n.cell.first {\\r\\n  font-weight: bold;\\r\\n  background-color: rgb(255, 123, 0);\\r\\n}\\r\\n.cell.clickable:not(.locked):hover {\\r\\n  background-color: limegreen;\\r\\n}\\r\\n.cell.locked {\\r\\n  filter: opacity(70%);\\r\\n  position: relative;\\r\\n  background-color: wheat;\\r\\n}\\r\\n.cell.locked .tile::after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  z-index: 1;\\r\\n  /* border: 1px solid black; */\\r\\n}\\r\\n\\r\\n.threeW {\\r\\n  background-color: rgb(64, 155, 22);\\r\\n  font-size: x-large;\\r\\n}\\r\\n.twoW {\\r\\n  background-color: rgb(230, 114, 19);\\r\\n  font-size: x-large;\\r\\n}\\r\\n.twoL {\\r\\n  background-color: rgb(226, 198, 35);\\r\\n  font-size: x-large;\\r\\n}\\r\\n.threeL {\\r\\n  background-color: rgb(231, 61, 61);\\r\\n  font-size: x-large;\\r\\n}\\r\\n\\r\\n.bottom {\\r\\n  grid-row: 2;\\r\\n  grid-column: 2;\\r\\n  width: 75vmin;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.playerCells {\\r\\n  background: #282c34;\\r\\n  border: 2px solid rgba(0, 0, 0, 0.7);\\r\\n  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.7));\\r\\n  width: 70%;\\r\\n  grid-column: 2;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(8, 5.5vmin);\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  grid-column-gap: 0.5vh;\\r\\n}\\r\\n\\r\\n.toggleBtn {\\r\\n  background: grey;\\r\\n  border: 2px solid rgba(0, 0, 0, 0.849);\\r\\n  display: flex;\\r\\n  cursor: pointer;\\r\\n  padding: 1px;\\r\\n  font-size: 13px;\\r\\n  font-weight: bold;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 5vmin;\\r\\n}\\r\\n\\r\\n.toggleBtn:hover {\\r\\n  color: lime;\\r\\n}\\r\\n\\r\\n.playerCell {\\r\\n  background: #282c34;\\r\\n  border: 2px solid rgba(0, 0, 0, 0.7);\\r\\n  display: flex;\\r\\n  cursor: pointer;\\r\\n  padding: 1px;\\r\\n  justify-content: center;\\r\\n  font-weight: bold;\\r\\n  font-size: 3vmin;\\r\\n  align-items: center;\\r\\n  height: 5vmin;\\r\\n}\\r\\n.playerCell.active,\\r\\n.playerCell:hover {\\r\\n  background-color: limegreen;\\r\\n}\\r\\n.playerTileLetter {\\r\\n  font-size: 25px;\\r\\n  align-self: flex-start;\\r\\n  padding: 2px;\\r\\n}\\r\\n\\r\\n.tile {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  background-color: grey;\\r\\n  /* border: 3px solid rgba(73, 72, 72, 0.849); */\\r\\n}\\r\\n\\r\\n.activeTile {\\r\\n  background-color: green;\\r\\n}\\r\\n\\r\\n.tileLetter {\\r\\n  font-size: 30px;\\r\\n  align-self: flex-start;\\r\\n  padding: 2px;\\r\\n}\\r\\n\\r\\n.tilePoints {\\r\\n  font-size: 16px;\\r\\n  align-self: flex-end;\\r\\n  padding-right: 3px;\\r\\n}\\r\\n\\r\\n.stuffLeftOfCell {\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  flex-direction: column;\\r\\n  grid-column: 1;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.stuffRightOfCell {\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  grid-column: 3;\\r\\n}\\r\\n\\r\\n.activePlayer {\\r\\n  grid-column: 1;\\r\\n  grid-row: 2;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.activeTiles {\\r\\n  font-size: 30px;\\r\\n  color: white;\\r\\n  align-self: center;\\r\\n  grid-column: 1 / span 2;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.shuffleSelected {\\r\\n  background-color: greenyellow;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/style/board.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

})