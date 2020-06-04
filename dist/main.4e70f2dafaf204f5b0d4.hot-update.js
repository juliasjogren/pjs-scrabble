webpackHotUpdate("main",{

/***/ "./src/components/gamePreparation.js":
/*!*******************************************!*\
  !*** ./src/components/gamePreparation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _style_gamePreparation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/gamePreparation.css */ \"./src/components/style/gamePreparation.css\");\n/* harmony import */ var _style_gamePreparation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_gamePreparation_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n // import { ExitIcon, PlayButtonSvg, AddButtonSvg } from \"../svgs\";\n\n\n\nvar GamePreparation = function GamePreparation(_ref) {\n  var onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    id: 1,\n    name: \"teal\"\n  }, {\n    id: 2,\n    name: \"purple\"\n  }, {\n    id: 3,\n    name: \"darkred\"\n  }, {\n    id: 4,\n    name: \"Crimson\"\n  }, {\n    id: 5,\n    name: \"yellow\"\n  }, {\n    id: 6,\n    name: \"limegreen\"\n  }]),\n      _useState2 = _slicedToArray(_useState, 2),\n      colors = _useState2[0],\n      setColors = _useState2[1];\n\n  var setColor = function setColor() {\n    var avalibleColors = colors.filter(function (color) {\n      return !color.picked;\n    });\n    return avalibleColors[0];\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(setColor()),\n      _useState4 = _slicedToArray(_useState3, 2),\n      selectedColor = _useState4[0],\n      setSelectedColor = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      players = _useState6[0],\n      setPlayers = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"Player \" + (players.length + 1)),\n      _useState8 = _slicedToArray(_useState7, 2),\n      playerName = _useState8[0],\n      setPlayerName = _useState8[1];\n\n  var playerNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var PlayButtonSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    points: \"0, 10 110, 50 0, 90 0, 10\"\n  }));\n  var ExitIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"0\",\n    y: \"10\",\n    width: \"15\",\n    height: \"80\",\n    transform: \"rotate(-40)translate(0, 20)\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"0\",\n    y: \"10\",\n    width: \"15\",\n    height: \"80\",\n    transform: \"rotate(40)translate(60, -45)\"\n  }));\n  var AddButtonSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"svg\",\n    viewBox: \"0 0 100 100\",\n    width: \"100%\",\n    height: \"100%\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"37\",\n    y: \"10\",\n    width: \"25\",\n    height: \"80\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"10\",\n    y: \"40\",\n    width: \"80\",\n    height: \"25\"\n  }));\n\n  var colorClick = function colorClick(color) {\n    if (color.picked) {\n      return;\n    }\n\n    if (selectedColor && selectedColor.selected === true) {\n      selectedColor.selected = false;\n    }\n\n    setColors(colors);\n    setSelectedColor(color);\n  };\n\n  var removePlayer = function removePlayer(player) {\n    var newColors = _toConsumableArray(colors);\n\n    var c = player.color;\n\n    var newPlayers = _toConsumableArray(players);\n\n    for (var i = 0; i < newPlayers.length; i++) {\n      if (newPlayers[i].id === player.id) {\n        newPlayers.splice(i, 1);\n      }\n    }\n\n    setPlayers(_toConsumableArray(newPlayers));\n    newColors.map(function (color) {\n      if (c === color.name) {\n        color.picked = false;\n      }\n    });\n    setColors(newColors);\n    setPlayerName(\"Player \" + (players.length + 1));\n    playerNameRef.current.focus();\n  };\n\n  var addPlayer = function addPlayer() {\n    var newColors = _toConsumableArray(colors);\n\n    var playerColor = selectedColor;\n\n    if (!playerColor) {\n      return console.log(\"no color picked\");\n    }\n\n    if (playerColor && playerColor.picked) {\n      return console.log(\"color allready picked\");\n    }\n\n    if (!/\\S/.test(playerName)) {\n      return console.log(\"Not valid name\");\n    }\n\n    var id = players.length + 1;\n    setPlayers([].concat(_toConsumableArray(players), [{\n      id: id,\n      name: playerName,\n      color: playerColor.name,\n      playerCells: [],\n      points: 0\n    }]));\n    var col = newColors.find(function (color) {\n      return color === selectedColor;\n    });\n    col.picked = true;\n    setColors(newColors);\n    setSelectedColor(setColor());\n    setPlayerName(\"Player \" + (players.length + 2));\n    playerNameRef.current.focus();\n  };\n\n  var startGame = function startGame() {\n    onClose(players);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gamePreparation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playerPreparation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playerNameInput\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    ref: playerNameRef,\n    className: \"textInput\",\n    value: playerName,\n    onChange: function onChange(e) {\n      return setPlayerName(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"colorSelect\", {\n      nonSelected: !selectedColor && selectedColor === null\n    })\n  }, colors.map(function (color) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: color.id,\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(color.name, {\n        color: color && color !== null,\n        selected: selectedColor && color === selectedColor,\n        picked: color.picked && color.picked === true\n      }),\n      onClick: function onClick() {\n        return colorClick(color);\n      }\n    }, \" \");\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AddPlayerBtn\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Add player\",\n    addButton: true,\n    svg: AddButtonSvg,\n    onClick: function onClick() {\n      return addPlayer();\n    }\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"players\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playerTitle\"\n  }, \"players:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playerList\"\n  }, players.map(function (player) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: player.id,\n      className: \"player\",\n      style: {\n        backgroundColor: player.color\n      }\n    }, player.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: \"button\",\n      svg: ExitIcon,\n      realTinyButton: true,\n      onClick: function onClick() {\n        return removePlayer(player);\n      }\n    }));\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"startBtn\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Start game\",\n    startButton: true,\n    svg: PlayButtonSvg,\n    onClick: startGame\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GamePreparation);\n\n//# sourceURL=webpack:///./src/components/gamePreparation.js?");

/***/ })

})