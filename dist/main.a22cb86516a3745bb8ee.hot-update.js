webpackHotUpdate("main",{

/***/ "./src/round.js":
/*!**********************!*\
  !*** ./src/round.js ***!
  \**********************/
/*! exports provided: checkIfCellIsClickable, findCellsInRound, determineDirection, makeMainWord, moveTileToPlayerCells, cellClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfCellIsClickable\", function() { return checkIfCellIsClickable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findCellsInRound\", function() { return findCellsInRound; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"determineDirection\", function() { return determineDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeMainWord\", function() { return makeMainWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveTileToPlayerCells\", function() { return moveTileToPlayerCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellClick\", function() { return cellClick; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar boardCells = [];\nvar playerCells = [];\nvar roundCells = [];\nvar latestClickedCell = null;\n\nvar findLockedNeighborsInRound = function findLockedNeighborsInRound(lockedNeighbor, velocity, lockedNeighbors) {\n  if (!lockedNeighbors) {\n    lockedNeighbors = [];\n  }\n\n  var n = boardCells.find(function (cell) {\n    return lockedNeighbor.index + velocity === cell.index;\n  });\n\n  if (n.locked) {\n    lockedNeighbors.push(n);\n    return findLockedNeighborsInRound(n, velocity, lockedNeighbors);\n  } else return lockedNeighbors;\n};\n\nfunction checkIfCellIsClickable(clickedCell) {\n  if (clickedCell.locked || clickedCell.clickable === false) {\n    return \"no\";\n  }\n}\n\nvar findNeighborsDirection = function findNeighborsDirection(list) {\n  var lockedNeighbors = [];\n  list.forEach(function (cell) {\n    var l = findLockedNeighborsInRound(cell, -1);\n    l.forEach(function (cell) {\n      return lockedNeighbors.push(cell);\n    });\n    var r = findLockedNeighborsInRound(cell, +1);\n    r.forEach(function (cell) {\n      return lockedNeighbors.push(cell);\n    });\n    var u = findLockedNeighborsInRound(cell, -15);\n    u.forEach(function (cell) {\n      return lockedNeighbors.push(cell);\n    });\n    var d = findLockedNeighborsInRound(cell, +15);\n    d.forEach(function (cell) {\n      return lockedNeighbors.push(cell);\n    });\n  });\n  return lockedNeighbors;\n};\n\nvar findCellsInRound = function findCellsInRound(newBoardCells, clickedCell) {\n  var newActiveCells = boardCells.filter(function (cell) {\n    return !!cell.tile && !cell.locked;\n  });\n  var direction = determineDirection();\n  var moreLockedNeighbors = findNeighborsDirection(newActiveCells, direction);\n  var cellsInRound = [].concat(_toConsumableArray(newActiveCells), _toConsumableArray(moreLockedNeighbors), [clickedCell]);\n  roundCells = _toConsumableArray(new Set(cellsInRound));\n  var newRoundCells = roundCells.filter(function (cell) {\n    return cell.tile;\n  }); // console.log(\"roundCells in round\", newRoundCells);\n  // newRoundCells.forEach(cell => console.log(cell.tile.letter));\n\n  return newRoundCells;\n};\n\nvar findUnlockedNeighborsInRound = function findUnlockedNeighborsInRound(cellToCheck, velocity, neighbors) {\n  if (!neighbors) {\n    neighbors = [];\n  }\n\n  var n = boardCells.find(function (cell) {\n    return cellToCheck.index + velocity === cell.index;\n  });\n\n  if (n.tile) {\n    if (n.locked) {\n      neighbors.push(n);\n    }\n\n    return findUnlockedNeighborsInRound(n, velocity, neighbors);\n  } else return neighbors;\n};\n\nvar findLesserNeighborsInRound = function findLesserNeighborsInRound(cellToCheck, velocity, neighbors) {\n  if (!neighbors) {\n    neighbors = [];\n  }\n\n  var n = boardCells.find(function (cell) {\n    return cellToCheck.index - velocity === cell.index;\n  });\n\n  if (n.tile) {\n    if (n.locked) {\n      neighbors.push(n);\n    }\n\n    return findUnlockedNeighborsInRound(n, velocity, neighbors);\n  } else return neighbors;\n};\n\nvar determineDirection = function determineDirection() {\n  var activeCells = boardCells.filter(function (cell) {\n    return !!cell.tile && !cell.locked;\n  }).sort(function (a, b) {\n    return a.index - b.index;\n  });\n  if (activeCells.length < 2) return \"no\";\n  var first = activeCells.shift();\n  var last = activeCells.pop();\n  var distance = Math.abs(first.index - last.index);\n  if (distance < 15) return \"horizontal\";else return \"vertical\";\n};\nvar makeMainWord = function makeMainWord(roundCells, direction) {\n  console.log(\"roundcell\", roundCells);\n  var unlockedRoundCells = roundCells.filter(function (cell) {\n    return !cell.locked;\n  });\n  var cellToCheck = unlockedRoundCells[0];\n  var mainWord = []; // console.log(\"cell to check\", cellToCheck);\n\n  mainWord.push(cellToCheck);\n  var velocity = 0;\n\n  if (direction === \"horizontal\") {\n    velocity = 1;\n  }\n\n  if (direction === \"vertical\") {\n    velocity = 15;\n  }\n\n  if (direction === \"no\") {\n    return mainWord;\n  } // console.log(\"celocity\", velocity);\n\n\n  if (velocity !== 0) {\n    var lesserRoundCells = findLesserNeighborsInRound(cellToCheck, velocity);\n    var higherRoundCells = findUnlockedNeighborsInRound(cellToCheck, velocity);\n    mainWord = lesserRoundCells.concat(higherRoundCells, unlockedRoundCells);\n  }\n\n  console.log(\"mainWord in make mainword\", mainWord);\n  mainWord.forEach(function (cell) {\n    return console.log(cell.tile.letter);\n  });\n  var sortedMainWord = mainWord.sort(function (a, b) {\n    return a.index - b.index;\n  });\n  return sortedMainWord;\n};\nvar moveTileToPlayerCells = function moveTileToPlayerCells(tile, newBoardCells, newPlayerCells) {\n  playerCells = newPlayerCells;\n  boardCells = newBoardCells;\n  var found = false; // console.log(\"newplayer cells\", newPlayerCells);\n  // console.log(\"playercells\", playerCells);\n\n  playerCells = playerCells.map(function (playerCell) {\n    if (!found && !playerCell.tile) {\n      playerCell.tile = tile;\n      found = true;\n    }\n\n    return playerCell;\n  });\n};\nfunction cellClick(clickedCell, activeTile, newBoardCells, newPlayerCells) {\n  playerCells = newPlayerCells;\n  boardCells = newBoardCells;\n  latestClickedCell = clickedCell; // starting point\n\n  if (clickedCell.tile) {\n    // console.log(\"cell has tile\");\n    moveTileToPlayerCells(clickedCell.tile, boardCells, playerCells);\n    var newRoundCells = findCellsInRound(boardCells, clickedCell);\n    roundCells = newRoundCells.filter(function (cell) {\n      return cell.tile;\n    });\n    clickedCell.tile = null; // console.log(\"roundcells in cell has tile\");\n    // roundCells.forEach(cell => console.log(cell, cell.tile));\n  } // console.log(\"clicked cell\", clickedCell);\n\n\n  if (activeTile && !clickedCell.tile) {\n    clickedCell.tile = activeTile;\n    var newActiveCells = boardCells.filter(function (cell) {\n      return !!cell.tile && !cell.locked;\n    });\n    var clickedCellNeighbors = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"findNeighbors\"])(boardCells, clickedCell);\n    var lockedNeighbors = clickedCellNeighbors.filter(function (cell) {\n      return cell.locked;\n    });\n\n    var _roundCells = findCellsInRound(boardCells, clickedCell);\n\n    var direction = determineDirection(); // let mainWord = makeMainWord(roundCells, direction);\n\n    playerCells = playerCells.map(function (cell) {\n      if (cell.tile && cell.tile.id === activeTile.id) cell.tile = null;\n      return cell;\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/round.js?");

/***/ })

})