webpackHotUpdate("main",{

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: setup, checkIfTilesLeftInBag, shuffleTiles, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfTilesLeftInBag\", function() { return checkIfTilesLeftInBag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffleTiles\", function() { return shuffleTiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"execute\", function() { return execute; });\n/* harmony import */ var _components_gamePreparation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gamePreparation */ \"./src/components/gamePreparation.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round */ \"./src/round.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _components_gameOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gameOver */ \"./src/components/gameOver.js\");\n/* harmony import */ var _dictionary_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dictionary.json */ \"./src/dictionary.json\");\nvar _dictionary_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dictionary.json */ \"./src/dictionary.json\", 1);\n// import React from \"react\";\n// import StartWindow from \"./components/startWindow\";'\n\n\n\n\n\nvar boardCells = [];\nvar bag = [];\nvar players = [];\nvar activePlayer = null;\n\nfunction gamifyPlayers(inputPlayers) {\n  for (var i = 0; i < inputPlayers.length; i++) {\n    inputPlayers[i].id = i + 1;\n  }\n\n  activePlayer = inputPlayers[0];\n  return inputPlayers.map(function (player) {\n    player.playerCells = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"createPlayerCells\"])(bag);\n    player.playerCells.forEach(function (cell) {\n      cell.tile.color = player.color;\n    });\n    return player;\n  });\n}\n\nvar setup = function setup(inputPlayers) {\n  var game = {};\n\n  if (boardCells.length === 0) {\n    boardCells = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"createBoardCells\"])();\n  }\n\n  bag = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"createBag\"])();\n  game.boardCells = boardCells;\n  game.bag = bag;\n\n  if (inputPlayers) {\n    players = inputPlayers;\n    game.players = gamifyPlayers(inputPlayers);\n  }\n\n  game.activePlayer = activePlayer;\n  return game;\n};\nfunction checkIfTilesLeftInBag(bag) {\n  if (bag.length === 0) {\n    return false;\n  } else return true;\n}\n\nvar lockWord = function lockWord() {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"lockTilesWithLetter\"])(boardCells);\n};\n\nvar drawTiles = function drawTiles() {\n  if (bag.length === 0) return;\n  var numberOfCellsWithoutTiles = activePlayer.playerCells.filter(function (cell) {\n    return !cell.tile;\n  }).length;\n  if (numberOfCellsWithoutTiles === 0) return;\n  var newTiles = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"drawTilesFromBag\"])(bag, numberOfCellsWithoutTiles);\n  newTiles.forEach(function (tile) {\n    return tile.color = activePlayer.color;\n  });\n  activePlayer.playerCells = activePlayer.playerCells.map(function (cell) {\n    if (!cell.tile) {\n      cell.tile = newTiles.pop();\n    }\n\n    return cell;\n  });\n};\n\nvar changeActivePlayer = function changeActivePlayer() {\n  if (activePlayer.id === players.length) {\n    activePlayer = players[0];\n    activePlayer.active = true;\n  } else {\n    activePlayer = players.find(function (player) {\n      return player.id === activePlayer.id + 1;\n    });\n    activePlayer.active = true;\n  }\n};\n\nvar findNeighborsInWord = function findNeighborsInWord(notMainWord, cellToCheck, velocity, neighbors) {\n  if (!neighbors) {\n    neighbors = [];\n  }\n\n  var n = notMainWord.find(function (cell) {\n    return cellToCheck.index + velocity === cell.index;\n  });\n\n  if (n && n.tile) {\n    neighbors.push(n);\n    return findNeighborsInWord(notMainWord, n, velocity, neighbors);\n  } else return neighbors;\n};\n\nvar findAllWords = function findAllWords(roundCells, direction) {\n  var words = [];\n  var mainWord = Object(_round__WEBPACK_IMPORTED_MODULE_1__[\"makeMainWord\"])(roundCells, direction);\n\n  if (mainWord.length > 1) {\n    words.push(mainWord);\n  }\n\n  var notMainWord = roundCells.filter(function (cell) {\n    return !mainWord.includes(cell);\n  });\n  var activeRoundCells = roundCells.filter(function (cell) {\n    return !cell.locked;\n  });\n  activeRoundCells.forEach(function (cell) {\n    if (direction === \"vertical\" || direction === \"no\") {\n      var leftNeighbors = findNeighborsInWord(notMainWord, cell, -1);\n      var rightNeighbors = findNeighborsInWord(notMainWord, cell, +1);\n\n      if (leftNeighbors.length > 0 || rightNeighbors.length > 0) {\n        var word = [];\n        leftNeighbors.forEach(function (l) {\n          return word.push(l);\n        });\n        rightNeighbors.forEach(function (r) {\n          return word.push(r);\n        });\n        word.push(cell);\n        words.push(word);\n      }\n    }\n\n    if (direction === \"horizontal\" || direction === \"no\") {\n      var upNeighbors = findNeighborsInWord(notMainWord, cell, -15);\n      var downNeighbors = findNeighborsInWord(notMainWord, cell, +15);\n\n      if (upNeighbors.length > 0 || downNeighbors.length > 0) {\n        var _word = [];\n        upNeighbors.forEach(function (u) {\n          return _word.push(u);\n        });\n        downNeighbors.forEach(function (d) {\n          return _word.push(d);\n        });\n\n        _word.push(cell);\n\n        words.push(_word);\n      }\n    }\n  });\n  return words;\n};\n\nvar findWordsInRoundCells = function findWordsInRoundCells(roundCells) {\n  var direction = Object(_round__WEBPACK_IMPORTED_MODULE_1__[\"determineDirection\"])();\n  var sortedRoundCells = roundCells.sort(function (a, b) {\n    return a.id - b.id;\n  });\n  var words = findAllWords(sortedRoundCells, direction);\n  return words;\n};\n\nvar shuffleTiles = function shuffleTiles(playerCells) {\n  var tilesToChange = playerCells.filter(function (cell) {\n    return cell.tile.shuffleSelected;\n  });\n  tilesToChange.forEach(function (cell) {\n    bag.push(cell.tile);\n    cell.tile = null;\n  });\n  var numOfTiles = tilesToChange.length;\n  var newTiles = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"drawTilesFromBag\"])(bag, numOfTiles);\n  newTiles.forEach(function (tile) {\n    return tile.color = activePlayer.color;\n  });\n  activePlayer.playerCells = activePlayer.playerCells.map(function (cell) {\n    if (!cell.tile) {\n      cell.tile = newTiles.pop();\n    }\n\n    return cell;\n  });\n  activePlayer.active = false;\n  changeActivePlayer();\n  return boardCells;\n};\n\nvar aproveWords = function aproveWords(words) {\n  var num = 0;\n  return words.every(function (word) {\n    num = num + 1;\n    var checkWord = word.sort(function (a, b) {\n      return a.index - b.index;\n    });\n    var stringWord = \"\";\n\n    for (var l = 0; l < word.length; l++) {\n      var letter = checkWord[l].tile.letter;\n      stringWord += letter;\n    }\n\n    console.log(num, stringWord);\n    var findInDic = Boolean(_dictionary_json__WEBPACK_IMPORTED_MODULE_4__[stringWord]);\n    return findInDic;\n  });\n};\n\nfunction execute(roundCells, onGameOver) {\n  var words = findWordsInRoundCells(roundCells);\n  console.log(\"RoundCells\", roundCells);\n  console.log(\"Number of words\", words.length);\n  var wordsApproved = aproveWords(words);\n  var wordPoints = 0;\n\n  if (wordsApproved) {\n    wordPoints = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"executePoints\"])(words);\n    lockWord();\n    drawTiles(); // let wordPoints = executePoints(roundCells);\n\n    activePlayer.points += wordPoints;\n    var noTilesLeft = activePlayer.playerCells.find(function (cell) {\n      return cell.tile;\n    });\n\n    if (!noTilesLeft) {\n      // if (noTilesLeft) {\n      var sortedPlayers = players.sort(function (a, b) {\n        return b.points - a.points;\n      });\n      onGameOver(sortedPlayers);\n    } else {\n      activePlayer.active = false;\n      changeActivePlayer();\n      return boardCells;\n    }\n  } else {\n    return console.log(\"Word not approved\");\n  }\n} // export const ShufflePlayerTiles = () => {\n//   player.playerCells.forEach(cell => bag.push(cell.tile));\n//   player.playerCells.forEach(cell => (cell.tile = null));\n//   drawTiles();\n// };\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ })

})