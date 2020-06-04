webpackHotUpdate("main",{

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boardCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardCell */ \"./src/components/boardCell.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _scoreBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scoreBoard */ \"./src/components/scoreBoard.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../round */ \"./src/round.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _style_board_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/board.css */ \"./src/components/style/board.css\");\n/* harmony import */ var _style_board_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_board_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar ShuffleIcon = function ShuffleIcon() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    points: \"0,35 0,25 30,25 30,10 60,30 30,50 30,35 \",\n    transform: \"translate(20, 0)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    points: \"0,35 0,25 30,25 30,10 60,30 30,50 30,35 \",\n    transform: \"rotate(180)translate(-75, -100)\"\n  }));\n};\n\nvar PlayButtonSvg = function PlayButtonSvg() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    points: \"10, 20 110, 60 10, 100 10, 20\",\n    transform: \"scale(0.9)\"\n  }));\n};\n\nvar ExitIcon = function ExitIcon() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"0\",\n    y: \"10\",\n    width: \"15\",\n    height: \"80\",\n    transform: \"rotate(-40)translate(0, 20)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"0\",\n    y: \"10\",\n    width: \"15\",\n    height: \"80\",\n    transform: \"rotate(40)translate(60, -45)\"\n  }));\n};\n\nvar Board = function Board(_ref) {\n  var inputPlayers = _ref.players,\n      onGameOver = _ref.onGameOver;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      boardCells = _useState2[0],\n      setBoardCells = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      playerCells = _useState4[0],\n      setPlayerCells = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      players = _useState6[0],\n      setPlayers = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      activePlayer = _useState8[0],\n      setActivePlayer = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState10 = _slicedToArray(_useState9, 2),\n      activeTile = _useState10[0],\n      setActiveTile = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState12 = _slicedToArray(_useState11, 2),\n      roundCells = _useState12[0],\n      setRoundCells = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      showPlayerTiles = _useState14[0],\n      setShowPlayerTiles = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"show\"),\n      _useState16 = _slicedToArray(_useState15, 2),\n      toggle = _useState16[0],\n      setToggle = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState18 = _slicedToArray(_useState17, 2),\n      executeBtnDisabled = _useState18[0],\n      setExecuteBtnDisabled = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState20 = _slicedToArray(_useState19, 2),\n      shuffleActive = _useState20[0],\n      setShuffleActive = _useState20[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _setup = Object(_game__WEBPACK_IMPORTED_MODULE_4__[\"setup\"])(inputPlayers),\n        boardCells = _setup.boardCells,\n        activePlayer = _setup.activePlayer,\n        players = _setup.players;\n\n    setBoardCells(boardCells);\n    setPlayerCells(activePlayer.playerCells);\n    setActivePlayer(activePlayer);\n    setPlayers(players);\n  }, []);\n\n  var clickOnCell = function clickOnCell(cell) {\n    // console.log(\"cell\", cell);\n    if (cell.locked || cell.clickable === false) {\n      return console.log(\"locked\");\n    }\n\n    Object(_round__WEBPACK_IMPORTED_MODULE_5__[\"cellClick\"])(cell, activeTile, boardCells, playerCells);\n    setActiveTile(null);\n    var newRoundCells = Object(_round__WEBPACK_IMPORTED_MODULE_5__[\"findCellsInRound\"])(boardCells, cell);\n    setRoundCells(newRoundCells);\n    Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"makeAllUnlockedCellsClickable\"])(boardCells);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (roundCells && roundCells.length) {\n      CheckifValidWord();\n    }\n  }, [roundCells]);\n\n  var checkIfFirstRound = function checkIfFirstRound() {\n    var lockedCells = boardCells.find(function (cell) {\n      return cell.locked;\n    });\n    var firstGameCell = boardCells.find(function (cell) {\n      return cell.index === 112;\n    });\n    var firstInRound = roundCells.includes(firstGameCell);\n\n    if (!lockedCells) {\n      if (firstInRound) {\n        setExecuteBtnDisabled(false);\n      } else setExecuteBtnDisabled(true);\n\n      return true;\n    }\n\n    return false;\n  };\n\n  var checkForLockedCell = function checkForLockedCell() {\n    var lockedRoundCells = roundCells.filter(function (cell) {\n      return cell.locked;\n    });\n\n    if (lockedRoundCells && lockedRoundCells.length > 0) {\n      setExecuteBtnDisabled(false);\n    } else setExecuteBtnDisabled(true);\n  };\n\n  var checkIfRoundCellsConnected = function checkIfRoundCellsConnected() {\n    var direction = Object(_round__WEBPACK_IMPORTED_MODULE_5__[\"determineDirection\"])();\n    var mainWord = Object(_round__WEBPACK_IMPORTED_MODULE_5__[\"makeMainWord\"])(roundCells, direction);\n    var notMainWord = roundCells.filter(function (cell) {\n      return !mainWord.includes(cell);\n    });\n    var sortedMainWord = mainWord.sort(function (a, b) {\n      return a.index - b.index;\n    });\n\n    for (var i = 0; i < sortedMainWord.length; i++) {\n      if (direction === \"horizontal\" || \"no\") {}\n\n      if (direction === \"vertical\" || \"no\") {}\n    }\n  };\n\n  var CheckifValidWord = function CheckifValidWord(clickedCell) {\n    if (shuffleActive) {\n      console.log(\"playercells\", playerCells);\n      setExecuteBtnDisabled(false);\n    } else {\n      var firstRound = checkIfFirstRound();\n\n      if (firstRound === false) {\n        checkForLockedCell();\n      }\n    } // checkIfRoundCellsConnected();\n    // let direction = determineDirection();\n    // let mainWord = makeMainWord(roundCells, direction);\n    // let cellInLine = [];\n    // console.log(roundCells);\n    // let lockedRoundCells = roundCells.filter((cell) => cell.locked);\n    // let firstGameCell = boardCells.find((cell) => cell.index === 112);\n    // let firstInRound = roundCells.includes(firstGameCell);\n    // let noLockedcellsInRound = lockedRoundCells.length < 1;\n    // if (noLockedcellsInRound) {\n    //   if (firstInRound === false) {\n    //     return setExecuteBtnDisabled(true);\n    //   }\n    // }\n    // // console.log(\"mainword incheckvalid\", mainWord);\n    // if (direction === \"no\") {\n    //   cellInLine = mainWord.sort((a, b) => a.index - b.index);\n    // } else {\n    //   for (let i = 0; i < mainWord.length; i++) {\n    //     let cell = mainWord[i];\n    //     let lastCell = mainWord[mainWord.length - 1];\n    //     let velocity = 0;\n    //     // console.log(\"first in rouuund\", firstInRound);\n    //     // if(roundCells.includes(firstGameCell) ||)\n    //     if (direction === \"horizontal\") {\n    //       velocity = 1;\n    //     }\n    //     if (direction === \"vertical\") {\n    //       velocity = 15;\n    //     }\n    //     let nextCell = mainWord[i + 1];\n    //     if (nextCell && cell.index + velocity === nextCell.index) {\n    //       cellInLine.push(cell);\n    //     }\n    //     if (cell === lastCell) {\n    //       cellInLine.push(cell);\n    //     }\n    //   }\n    // }\n    // console.log(\"same length\", cellInLine.length === mainWord.length);\n    // const sameLength = cellInLine.length === mainWord.length;\n    // setExecuteBtnDisabled(sameLength);\n    // console.log(\"cellinline\", cellInLine.length, cellInLine);\n    // console.log(\"mainword\", mainWord.length, mainWord);\n    // if (cellInLine.length === mainWord.length) {\n    //   setExecuteBtnDisabled(false);\n    // } else {\n    //   setExecuteBtnDisabled(true);\n    // }\n\n  };\n\n  var changeShuffleTilesActive = function changeShuffleTilesActive() {\n    if (shuffleActive === true) {\n      setShuffleActive(false);\n    } else {\n      setShuffleActive(true);\n    }\n  };\n\n  var toggleTileShuffleSelected = function toggleTileShuffleSelected(tile) {\n    tile.shuffleSelected = !tile.shuffleSelected;\n    setPlayerCells(_toConsumableArray(playerCells));\n  };\n\n  var playerCellClick = function playerCellClick(_ref2) {\n    var tile = _ref2.tile;\n\n    if (!tile) {\n      return console.log(\"empty player cell\");\n    }\n\n    if (shuffleActive) {\n      toggleTileShuffleSelected(tile);\n      return;\n    }\n\n    if (tile) {\n      setActiveTile(tile);\n    }\n  };\n\n  var executeClick = function executeClick() {\n    if (shuffleActive) {\n      shuffle();\n    }\n\n    if (executeBtnDisabled === true || !shuffleActive && roundCells.length === 0) {\n      return console.log(\"not valid word\");\n    }\n\n    if (!shuffleActive) {\n      var newBoardCells = Object(_game__WEBPACK_IMPORTED_MODULE_4__[\"execute\"])(roundCells, onGameOver);\n\n      if (!newBoardCells) {\n        return console.log(\"bad Word\");\n      }\n\n      setBoardCells(newBoardCells);\n    }\n\n    switchPlayer();\n  };\n\n  var switchPlayer = function switchPlayer() {\n    var _setup2 = Object(_game__WEBPACK_IMPORTED_MODULE_4__[\"setup\"])(),\n        activePlayer = _setup2.activePlayer;\n\n    setPlayerCells(activePlayer.playerCells);\n    setActivePlayer(activePlayer);\n    setToggle(\"Show\");\n    setShowPlayerTiles(false);\n    setShuffleActive(false);\n    setRoundCells([]);\n    setExecuteBtnDisabled(false);\n  };\n\n  var shuffle = function shuffle() {\n    var activeCells = roundCells.filter(function (cell) {\n      return !cell.locked;\n    });\n\n    if (activeCells.length > 0) {\n      return console.log(\"Cant shuffle with tiles on board\");\n    }\n\n    Object(_game__WEBPACK_IMPORTED_MODULE_4__[\"shuffleTiles\"])(playerCells);\n  };\n\n  var toggleLetters = function toggleLetters() {\n    if (showPlayerTiles) {\n      setShowPlayerTiles(false);\n      setToggle(\"Show\");\n    } else {\n      setShowPlayerTiles(true);\n      setToggle(\"Hide\");\n    }\n  };\n\n  var exitGame = function exitGame() {\n    var result = confirm(\"Are you sure that you want to end this game\");\n    console.log(result);\n\n    if (result == true) {\n      var sortedPlayers = players.sort(function (a, b) {\n        return b.points - a.points;\n      });\n      onGameOver(sortedPlayers);\n    } else return;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"board\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stuffLeftOfCell\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scoreBoard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    players: players\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cells\"\n  }, boardCells.map(function (cell) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boardCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      cell: cell,\n      key: cell.index,\n      onClick: function onClick() {\n        return clickOnCell(cell);\n      }\n    }, cell.tile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tile\",\n      style: {\n        backgroundColor: cell.tile.color\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tileLetter\"\n    }, cell.tile.letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tilePoints\"\n    }, cell.tile.points)));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"bottom\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"shuffleBtn\",\n    shufflebtnSelect: shuffleActive,\n    svg: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShuffleIcon, null),\n    miniButton: true,\n    onClick: changeShuffleTilesActive\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playerCells\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"toggleBtn\",\n    onClick: function onClick() {\n      return toggleLetters();\n    }\n  }, toggle), playerCells.map(function (playerCell) {\n    var _classNames;\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"playerCell\" // className={classNames(\"playerCell\", { active: isPlayerCellActive(playerCell) })}\n      ,\n      key: playerCell.index,\n      onClick: function onClick() {\n        return playerCellClick(playerCell);\n      }\n    }, playerCell.tile && showPlayerTiles && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(\"tile\", (_classNames = {}, _defineProperty(_classNames, \"shuffleSelected\", shuffleActive === true && playerCell.tile.shuffleSelected === true), _defineProperty(_classNames, \"activeTile\", activeTile && playerCell.tile === activeTile), _classNames))\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"playerTileLetter\"\n    }, playerCell.tile.letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tilePoints\"\n    }, playerCell.tile.points)));\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    svg: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayButtonSvg, null),\n    disabled: executeBtnDisabled,\n    miniButton: true,\n    onClick: function onClick() {\n      return executeClick();\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stuffRightOfCell\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button\",\n    svg: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExitIcon, null),\n    miniButton: true,\n    onClick: function onClick() {\n      return exitGame();\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/components/board.js?");

/***/ })

})