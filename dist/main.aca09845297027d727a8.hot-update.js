webpackHotUpdate("main",{

/***/ "./src/components/startWindow.js":
/*!***************************************!*\
  !*** ./src/components/startWindow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _style_startWindow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/startWindow.css */ \"./src/components/style/startWindow.css\");\n/* harmony import */ var _style_startWindow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_startWindow_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gamePreparation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamePreparation */ \"./src/components/gamePreparation.js\");\n/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svgs */ \"./src/svgs.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // import classNames from \"classnames\";\n\n\n\n\n\nvar StartWindow = function StartWindow(_ref) {\n  var onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showGamePreparation = _useState2[0],\n      setShowGamePreparation = _useState2[1];\n\n  var ChooseSvg = function ChooseSvg() {\n    if (!showGamePreparation) {\n      return _svgs__WEBPACK_IMPORTED_MODULE_4__[\"Play\"];\n    } else return _svgs__WEBPACK_IMPORTED_MODULE_4__[\"GoBack\"];\n  };\n\n  var toggleGamePreparation = function toggleGamePreparation() {\n    if (showGamePreparation === true) {\n      setShowGamePreparation(false);\n    } else {\n      setShowGamePreparation(true);\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"startWindow\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"startMenu\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    svg: ChooseSvg(),\n    onClick: function onClick() {\n      return toggleGamePreparation();\n    }\n  })), showGamePreparation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gamePreparation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClose: onClose\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartWindow);\n\n//# sourceURL=webpack:///./src/components/startWindow.js?");

/***/ })

})