webpackHotUpdate("main",{

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createBoardCells, makeAllUnlockedCellsClickable, createBag, createPlayerCells, drawTilesFromBag, checkIfTilesLeftInBag, findNeighbors, makeNeighborsClickable, makeNeighborsUnclickable, lockTilesWithLetter, executePoints, makeLockedNeighborsUnclickable, makeRoundCellsNeighborsUnclickable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBoardCells\", function() { return createBoardCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeAllUnlockedCellsClickable\", function() { return makeAllUnlockedCellsClickable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBag\", function() { return createBag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlayerCells\", function() { return createPlayerCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTilesFromBag\", function() { return drawTilesFromBag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfTilesLeftInBag\", function() { return checkIfTilesLeftInBag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findNeighbors\", function() { return findNeighbors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNeighborsClickable\", function() { return makeNeighborsClickable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNeighborsUnclickable\", function() { return makeNeighborsUnclickable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lockTilesWithLetter\", function() { return lockTilesWithLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"executePoints\", function() { return executePoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeLockedNeighborsUnclickable\", function() { return makeLockedNeighborsUnclickable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeRoundCellsNeighborsUnclickable\", function() { return makeRoundCellsNeighborsUnclickable; });\nvar makeAlfa = function makeAlfa() {\n  return [{\n    letter: \"A\",\n    amount: 9,\n    points: 1\n  }, {\n    letter: \"B\",\n    amount: 2,\n    points: 3\n  }, {\n    letter: \"C\",\n    amount: 2,\n    points: 3\n  }, {\n    letter: \"D\",\n    amount: 4,\n    points: 4\n  }, {\n    letter: \"E\",\n    amount: 1,\n    points: 1\n  }, {\n    letter: \"F\",\n    amount: 2,\n    points: 4\n  }, {\n    letter: \"G\",\n    amount: 3,\n    points: 2\n  }, {\n    letter: \"H\",\n    amount: 2,\n    points: 4\n  }, {\n    letter: \"I\",\n    amount: 9,\n    points: 1\n  }, {\n    letter: \"J\",\n    amount: 1,\n    points: 8\n  }, {\n    letter: \"K\",\n    amount: 1,\n    points: 5\n  }, {\n    letter: \"L\",\n    amount: 4,\n    points: 1\n  }, {\n    letter: \"M\",\n    amount: 2,\n    points: 3\n  }, {\n    letter: \"N\",\n    amount: 6,\n    points: 1\n  }, {\n    letter: \"O\",\n    amount: 8,\n    points: 1\n  }, {\n    letter: \"P\",\n    amount: 2,\n    points: 3\n  }, {\n    letter: \"Q\",\n    amount: 1,\n    points: 10\n  }, {\n    letter: \"R\",\n    amount: 6,\n    points: 1\n  }, {\n    letter: \"S\",\n    amount: 4,\n    points: 1\n  }, {\n    letter: \"T\",\n    amount: 6,\n    points: 1\n  }, {\n    letter: \"U\",\n    amount: 4,\n    points: 1\n  }, {\n    letter: \"V\",\n    amount: 2,\n    points: 4\n  }, {\n    letter: \"W\",\n    amount: 2,\n    points: 4\n  }, {\n    letter: \"X\",\n    amount: 1,\n    points: 8\n  }, {\n    letter: \"Y\",\n    amount: 2,\n    points: 4\n  }, {\n    letter: \"Z\",\n    amount: 1,\n    points: 10\n  }];\n}; // let alfaTest = [\n//   { letter: \"A\", amount: 5, points: 1 },\n//   { letter: \"B\", amount: 1, points: 3 },\n//   { letter: \"C\", amount: 1, points: 3 },\n//   { letter: \"D\", amount: 1, points: 4 },\n//   { letter: \"E\", amount: 1, points: 1 },\n//   { letter: \"F\", amount: 1, points: 4 },\n//   { letter: \"G\", amount: 1, points: 2 },\n//   { letter: \"H\", amount: 1, points: 4 },\n//   { letter: \"I\", amount: 1, points: 1 },\n//   { letter: \"J\", amount: 1, points: 8 },\n//   { letter: \"K\", amount: 1, points: 5 },\n//   { letter: \"L\", amount: 1, points: 1 },\n//   { letter: \"M\", amount: 1, points: 3 },\n//   { letter: \"N\", amount: 1, points: 1 },\n//   { letter: \"O\", amount: 1, points: 1 },\n//   { letter: \"P\", amount: 2, points: 3 },\n//   { letter: \"Q\", amount: 1, points: 10 },\n//   { letter: \"R\", amount: 1, points: 1 },\n//   { letter: \"S\", amount: 1, points: 1 },\n//   { letter: \"T\", amount: 1, points: 1 },\n//   { letter: \"U\", amount: 1, points: 1 },\n//   { letter: \"V\", amount: 1, points: 4 },\n//   { letter: \"W\", amount: 2, points: 4 },\n//   { letter: \"X\", amount: 1, points: 8 },\n//   { letter: \"Y\", amount: 2, points: 4 },\n//   { letter: \"Z\", amount: 1, points: 10 }\n// ];\n\n\nvar twoWord = [16, 28, 32, 42, 48, 56, 64, 70, 112, 154, 160, 168, 176, 182, 192, 196, 208];\nvar threeWord = [0, 7, 14, 105, 119, 210, 217, 224];\nvar twoLetter = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221];\nvar threeLetter = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];\nfunction createBoardCells() {\n  function BoardCell(index) {\n    var clickableTile = null;\n    var firstCell = null;\n    var bonus = false;\n\n    if (twoLetter.find(function (item) {\n      return item === index;\n    })) {\n      bonus = \"twoL\";\n    }\n\n    if (threeLetter.find(function (item) {\n      return item === index;\n    })) {\n      bonus = \"threeL\";\n    }\n\n    if (twoWord.find(function (item) {\n      return item === index;\n    })) {\n      bonus = \"twoW\";\n    }\n\n    if (threeWord.find(function (item) {\n      return item === index;\n    }) || index < 1) {\n      bonus = \"threeW\";\n    }\n\n    if (index === 112) {\n      clickableTile = true;\n      firstCell = true;\n    } else {\n      clickableTile = false;\n      firstCell = false;\n    }\n\n    return {\n      index: index,\n      first: firstCell,\n      clickable: clickableTile,\n      bonus: bonus,\n      tile: null\n    };\n  }\n\n  return Array(225).fill().map(function (_, i) {\n    return new BoardCell(i);\n  });\n}\nvar letterCount = 0;\n\nvar makeRandomTileFromAlfaAndDecreaseItsAmount = function makeRandomTileFromAlfaAndDecreaseItsAmount(alfa) {\n  var tilesInBag = alfa.reduce(function (total, letter) {\n    return total + letter.amount;\n  }, 0);\n  if (tilesInBag === 0) return console.log(\"No tiles left\") || {\n    letter: \"NOPE\"\n  };\n  var letter = alfa[Math.floor(Math.random() * alfa.length)];\n  var result = alfa.find(function (alfa) {\n    return alfa.letter === letter.letter;\n  });\n  result.amount -= 1;\n  alfa = alfa.filter(function (alfa) {\n    return alfa.amount > 0;\n  });\n  letterCount++;\n  return {\n    letter: letter.letter,\n    id: letterCount,\n    points: letter.points\n  };\n};\n\nvar makeAllUnlockedCellsClickable = function makeAllUnlockedCellsClickable(BoardCells) {\n  var unlockedCells = BoardCells.filter(function (cell) {\n    return !cell.locked;\n  }); // console.log(unlockedCells);\n\n  makeNeighborsClickable(unlockedCells);\n};\nfunction createBag() {\n  // console.log(\"in create bag\");\n  var gameAlfa = makeAlfa();\n  var tilesInBag = gameAlfa.reduce(function (total, letter) {\n    return total + letter.amount;\n  }, 0);\n  var bag = [];\n  var i = tilesInBag;\n\n  while (i > 0) {\n    bag.push(makeRandomTileFromAlfaAndDecreaseItsAmount(gameAlfa));\n    i--;\n  } // console.log(\"bag in create bag\", bag);\n\n\n  return bag;\n}\nfunction createPlayerCells(bag) {\n  var tiles = drawTilesFromBag(bag, 7);\n  return Array(7).fill().map(function (_, i) {\n    return {\n      index: i,\n      tile: tiles.pop()\n    };\n  });\n}\nfunction drawTilesFromBag(bag, numberOfTiles) {\n  var tiles = [];\n\n  if (checkIfTilesLeftInBag(bag) === true) {\n    for (var i = 0; i < numberOfTiles; i++) {\n      tiles.push(bag.shift());\n    }\n  }\n\n  return tiles;\n} // const findLockedNeighborsInRound = (lockedNeighbor, velocity, lockedNeighbors) => {\n//   let newBoardCells = [...boardCells];\n//   if (!lockedNeighbors) {\n//     lockedNeighbors = [];\n//   }\n//   let n = newBoardCells.find(cell => lockedNeighbor.index + velocity === cell.index);\n//   if (n.locked) {\n//     lockedNeighbors.push(n);\n//     return findLockedNeighborsInRound(n, velocity, lockedNeighbors);\n//   } else return lockedNeighbors;\n// };\n\nfunction checkIfTilesLeftInBag(bag) {\n  if (bag.length === 0) {\n    return false;\n  } else return true;\n}\nvar findNeighbors = function findNeighbors(tiles, tile) {\n  var relatedTiles = tiles.filter(function (t) {\n    return t.index === tile.index - 1 || t.index === tile.index + 1 || t.index === tile.index + 15 || t.index === tile.index - 15;\n  }); // console.log(relatedTiles);\n\n  return relatedTiles;\n};\nvar makeNeighborsClickable = function makeNeighborsClickable(relatedTiles) {\n  relatedTiles.forEach(function (tile) {\n    tile.clickable = true;\n  });\n  return relatedTiles;\n};\nvar makeNeighborsUnclickable = function makeNeighborsUnclickable(relatedTiles) {\n  return relatedTiles.map(function (cell) {\n    if (!cell.tile) {\n      cell.clickable = false;\n    }\n\n    return cell;\n  });\n};\nvar lockTilesWithLetter = function lockTilesWithLetter(cells) {\n  return cells.map(function (cell) {\n    if (cell.tile) {\n      cell.locked = true; // cell.clickable = false;\n\n      var neighbors = findNeighbors(cells, cell);\n      makeNeighborsClickable(neighbors);\n    }\n\n    return cell;\n  });\n}; // export const getPoints = (cellsWithPoints) => {\n//   // console.log(\"in getPoints\", cellsWithPoints);\n//   let points = 0;\n//   for (let i = 0; i < cellsWithPoints.length; i++) {\n//     let tile = cellsWithPoints[i].tile;\n//     points += tile.points;\n//   }\n//   // let points = countPoints(newActiveCells);\n//   // console.log(\"Current word points\", points);\n//   return points;\n// };\n\nvar executePoints = function executePoints(words) {\n  var points = 0;\n\n  for (var i = 0; i < words.length; i++) {\n    var word = words[i];\n    var doubbleWord = 0;\n    var tripleWord = 0;\n    var wordPoints = 0;\n    word.forEach(function (cell) {\n      if (cell.tile.locked !== true) {\n        console.log(\"CELLL\", cell, cell.tile.letter);\n\n        if (cell.bonus === \"twoL\") {\n          cell.tile.points = cell.tile.points * 2;\n        }\n\n        if (cell.bonus === \"threeL\") {\n          cell.tile.points = cell.tile.points * 3;\n        }\n\n        if (cell.bonus === \"twoW\") {\n          doubbleWord += 1;\n        }\n\n        if (cell.bonus === \"threeW\") {\n          tripleWord += 1;\n        }\n      }\n\n      wordPoints += cell.tile.points;\n    });\n\n    for (var j = 0; j < doubbleWord; j++) {\n      wordPoints = wordPoints * 2;\n    }\n\n    for (var _j = 0; _j < tripleWord; _j++) {\n      wordPoints = wordPoints * 3;\n    }\n\n    points += wordPoints;\n  }\n\n  return points;\n};\nvar makeLockedNeighborsUnclickable = function makeLockedNeighborsUnclickable(newBoardCells) {\n  // let newBoardCells = [...boardCells];\n  //find locked cells\n  var lockedCellsWithTile = newBoardCells.filter(function (cell) {\n    return cell.tile && cell.locked;\n  });\n  var lockedNeighbors = []; //foreach locked cell find neighbor and make them unclickable\n\n  lockedCellsWithTile.forEach(function (cell) {\n    var newNeighbors = findNeighbors(newBoardCells, cell);\n    newNeighbors.forEach(function (neighbor) {\n      return lockedNeighbors.push(neighbor);\n    });\n    makeNeighborsUnclickable(newNeighbors);\n  });\n  return lockedNeighbors;\n};\nvar makeRoundCellsNeighborsUnclickable = function makeRoundCellsNeighborsUnclickable(newBoardCells, roundCells) {\n  var roundNeighbors = [];\n  roundCells.forEach(function (cell) {\n    var neighbors = findNeighbors(newBoardCells, cell);\n    neighbors.forEach(function (neighbor) {\n      roundNeighbors.push(neighbor);\n    });\n  });\n  makeNeighborsUnclickable(roundNeighbors);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

})